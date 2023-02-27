Array.prototype.myFilter = function (callbackFn, thisArg) {
  const len = this.length;

  const result = [];
  for (let i = 0; i < len; i++) {
    if (Object.hasOwn(this, i) && callbackFn.call(thisArg, this[i], i, this)) {
      result.push(this[i]);
    }
  }
  return result;
};

console.log([1, 2, 3, 4].myFilter((value) => value > 2));

/*
1. returns array
2. result array is populated with elements which pass the condition
3. check for sparse array [1,2,'',4] empty values shud be ignored
*/
