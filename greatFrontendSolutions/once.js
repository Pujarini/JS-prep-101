function once(func) {
  let called = false;
  let val;
  return function (...args) {
    if (!called) {
      val = func.apply(this, args);
      called = true;
    }
    return val;
  };
}
let i = 1;
function incrementBy(value) {
  i += value;
  return i;
}

const incrementByOnce = once(incrementBy);
console.log(incrementByOnce(2));
console.log(incrementByOnce(3));
console.log(incrementByOnce(4));
