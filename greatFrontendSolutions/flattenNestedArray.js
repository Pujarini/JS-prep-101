function flatten(value) {
  console.log(value);
  let output = [];
  for (let i = 0; i < value.length; i++) {
    if (Array.isArray(value[i])) {
      output = output.concat(flatten(value[i]));
    } else {
      output.push(value[i]);
    }
  }
  return output;
}

console.log(flatten([1, 2, 3]));
console.log(
  flatten([
    [1, 2],
    [3, 4],
  ])
);

/**
 * 1. check if the value is an array or not
 * 2. if array then concatenate the values of the array using recusrion
 * 3. If not array then push it to the output
 */
