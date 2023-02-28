Function.prototype.myBind = function (thisArg, ...boundArgs) {
  let origFn = this;
  return function (...args) {
    return origFn.apply(thisArg, [...boundArgs, ...args]);
  };
};

const john = {
  age: 42,
  getAge: function () {
    return this.age;
  },
};

const unboundGetAge = john.getAge;
console.log(unboundGetAge()); // undefined

const boundGetAge = john.getAge.myBind(john);
console.log(boundGetAge());

/**
 * 1.mybind will return a function call with this
 */
