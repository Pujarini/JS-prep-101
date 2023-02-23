function debounce(func, delay) {
  let timer = null;
  return function (...args) {
    let ctx = this;
    timer = setTimeout(() => {
      timer = null;
      func.apply(ctx, args);
    }, delay);
  };
}

function sum() {
  console.log("i was called");
}

console.log(debounce(sum, 5000));
