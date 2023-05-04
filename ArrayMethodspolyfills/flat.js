const arr1 = [0, 1, 2, [3, 4]];

// console.log(arr1.flat());
// Expected output: Array [0, 1, 2, 3, 4]

const arr2 = [0, 1, 2, [[[3, 4]]]];

// console.log(arr2.flat(2));
// Expected output: Array [0, 1, 2, Array [3, 4]]

Array.prototype.myFlat = function (depth) {
  let output = [];
  for (let i = 0; i < this.length; i++) {
    if (Array.isArray(this[i]) && depth > 0) {
      output.push(...this[i].myFlat(depth - 1));
    } else {
      output.push(this[i]);
    }
  }
  return output;
};

console.log(arr2.myFlat(2));
