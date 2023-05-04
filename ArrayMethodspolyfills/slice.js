const animals = ["ant", "bison", "camel", "duck", "elephant"];

Array.prototype.mySlice = function (start, end) {
  let result = [];
  let len = this.length;
  start = !start ? 0 : start >= 0 ? start : Math.max(start + len, 0);
  end = !end ? len : end >= 0 ? end : end + len;

  for (let i = start; i < end; i++) {
    result[result.length] = this[i];
  }
  return result;
};
console.log(animals.slice(2));
console.log(animals.mySlice(2), "polyfill");

console.log(animals.slice(2, 4));
console.log(animals.mySlice(2, 4), "polyfill");

console.log(animals.slice(-2));
console.log(animals.mySlice(-2), "polyfill");

console.log(animals.slice(2, -1));
console.log(animals.mySlice(2, -1), "polyfill");

console.log(animals.slice());
console.log(animals.mySlice(), "polyfill");
