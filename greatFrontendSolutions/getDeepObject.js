function get(object, path, defaultValue) {
  if (!object) return defaultValue ? defaultValue : "undefined";
  let val = Array.isArray(path) ? path : path.split(".");

  let index = 0;
  let tempObj = object;

  while (tempObj !== null && index < val.length) {
    tempObj = tempObj[String(val[index])];
    index++;
  }
  const value = index && index === val.length ? tempObj : undefined;
  return value !== undefined ? value : defaultValue;
}

var object = { a: [{ b: { c: 3 } }] };
get(object, "a.b.c");

/**
 * Get an object with path
 * 
 * 
 * example : 
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 
get(object, 'a[0].b.c'); //3
get(object, ['a', '0', 'b', 'c']);//3
get(object, 'a.b.c', 'default')//3

some recursion is required
1. check if array else split it 

// Solution not woring for arrray object values
 */
