const array1 = [5, 12, 8, 130, 44];

const found = array1.find((element) => element > 150);

console.log(found, "default");

Array.prototype.myFind = function (cb) {
  for (let i = 0; i < this.length; i++) {
    if (cb.call(undefined, this[i], i, this)) return this[i];
  }
};

const found1 = array1.find((element) => element > 150);

console.log(found1, "polyfill");
