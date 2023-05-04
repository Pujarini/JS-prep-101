const array1 = [1, 30, 39, 29, 10, 13];

console.log(
  array1.every((element) => element < 40),
  "default"
);

Array.prototype.myEvery = function (cb) {
  for (let i = 0; i < this.length; i++) {
    if (!cb.call(undefined, this[i], i, this)) {
      return false;
    }
  }
  return true;
};

console.log(
  array1.myEvery((element) => element < 40),
  "polyfill"
);
