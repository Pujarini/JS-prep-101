const array = [1, 2, 3, 4, 5];

console.log(
  array.some((el) => el % 2 == 0),
  "default"
);

Array.prototype.mySome = function (cb) {
  let res = false;
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i])) {
      res = true;
    }
  }
  return res;
};

console.log(
  array.mySome((el) => el % 2 == 0),
  "polyfill"
);
