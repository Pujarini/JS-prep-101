Array.prototype.myReduce = function (callbackFn, initialValue) {
  let len = this.length;
  let acc = !initialValue ? this[0] : initialValue;
  let startIndex = !initialValue ? 1 : 0;
  for (let i = startIndex; i < len; i++) {
    acc = callbackFn(acc, this[i], i, this);
  }

  return acc;
};
console.log([].myReduce((prev, curr) => prev + curr, 4));
