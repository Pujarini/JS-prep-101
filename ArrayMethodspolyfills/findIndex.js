const array1 = [5, 12, 8, 1, 130, 44];

const isLargeNumber = (element) => element > 5;

console.log(array1.findIndex(isLargeNumber));

Array.prototype.myFindIndex = function (cb) {
  for (let i = 0; i < this.length; i++) {
    if (cb.call(undefined, this[i], i, this)) return i;
  }
  return -1;
};

console.log(array1.myFindIndex(isLargeNumber));
