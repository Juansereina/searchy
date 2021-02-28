import { isArray, isNumber, isString, isObject } from '../utils';

const files = [
  'usuarios',
  'conciliaciones',
  'fuentes',
  'tableros'
];

export const getAlldata = async () => {
  try {
    const promises = files.map(file =>  fetch(`http://localhost:3000/data/${file}.json`));
    const responses = await Promise.all(promises)

    return Promise.all(responses.map(async response => {
      const [name] = files.filter(file => response.url.includes(file));
      const data = await response.json();

      return {[name]: data};
    }));
  } catch (error) {
    console.error(error);
  }
}

const handleArrayOfString = (arr, query) => {
  return arr.includes(query) || arr.some(item => {
    if (!isArray(item)) {
      const objectValues = Object.values(item);
      return objectValues.includes(query);
    }
    return item.includes(query);
  });
};

const lookForMatches = (query, arr) => {
  return arr.filter(item => {
    return Object.entries(item).some(([key, value]) => {
      if (key === '_id') return false;

      if(isString(value)) {
        return value.includes(query);
      }

      if(isArray(value)) {
        return handleArrayOfString(value, query)
      }

      if (isNumber(value)) {
        // eslint-disable-next-line eqeqeq
        return value == query;
      }

      if (isObject(value)) {
        const objectValues = Object.values(value);
        return handleArrayOfString(objectValues, query);
      }

      return false;
    })
  });
}

export const doSearch = async (query = '') => {
  const data = await getAlldata();

  return data.reduce((obj, _module) => {
    const [key] = Object.keys(_module);
    const arr = _module[key];
    const results = lookForMatches(query, arr);

    return {
      ...obj,
      [key]: results,
    };
  }, {});
}
