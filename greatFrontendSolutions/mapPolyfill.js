Array.prototype.myMap = function (callbackFn, thisArg) {
  let len = this.length;
  let result = [];
  for (i = 0; i < len; i++) {
    //sparse array
    if (Object.hasOwn(this, i)) {
      result[i] = callbackFn.call(thisArg, this[i], i, this);
    }
  }
  return result;
};

console.log([1, 2, 3, 4].myMap((i) => i * 2));
