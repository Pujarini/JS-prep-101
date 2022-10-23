import { places } from "./data.js";

export const getSuggestions = (keyword) => {
  const result = places.filter(
    (i) => i.substr(0, keyword.length).toLowerCase() === keyword.toLowerCase()
  );
  // console.log(result);
  return new Promise((res) => {
    setTimeout(() => res(result), 1000);
  });
};

export const debounce = (fn, delay = 500) => {
  let dbnc;
  return function (...args) {
    const ctx = this;
    clearTimeout(dbnc);
    dbnc = setTimeout(() => fn.apply(ctx, args), delay);
  };
};
