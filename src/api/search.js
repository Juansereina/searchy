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

const lookForMatches = (query, arr) => {
  return arr.filter(item => {
    let isMatch = false;

    for (const [key, value] of Object.entries(item)) {
      if (key === '_id') continue;

      const isString = typeof value === 'string';
      if(isString && value.includes(query)) {
        isMatch = true
      }

      const isArray = Array.isArray(value);
      if(isArray && value.includes(query)) {
        isMatch = true
      }

      const isNumber = typeof value === 'number'
      if (isNumber && value == query) {
        isMatch = true
      }

      const isObject = typeof value === 'object'
      if (isObject) {
        const objectValues = Object.values(value);
        if(objectValues.includes(query)) {
          isMatch = true
        }
      }
    }
    return isMatch;
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
