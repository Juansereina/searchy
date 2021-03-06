/* General utilities */
export const isString = value => typeof value === 'string';
export const isArray = value =>  Array.isArray(value);
export const isNumber = value => typeof value === 'number';
export const isObject = value => value === Object(value);
export const isLast = (arr, index) => arr.length -1 === index;
