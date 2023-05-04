const array1 = ["a", "b", "c", "e", "d"];
const array2 = ["d", "e", "f"];
const array4 = ["jena", "jen", "puja"];

const array3 = array1.concat(array2, array4);

// console.log(array3);

//merging two arrays
Array.prototype.myConcat = function (array2) {
  let output = [];
  for (let i = 0; i < this.length; i++) {
    output.push(this[i]);
  }
  for (let i = 0; i < array2.length; i++) {
    output.push(array2[i]);
  }
  return output;
};

const res = array1.concat(array2);
// console.log(res);

//merging N arrays
Array.prototype.myConcat1 = function (...arrays) {
  let result = [];
  let len = result.length;
  for (let i = 0; i < this.length; i++) {
    result[len] = this[i];
    len++;
  }
  for (const arr of arrays) {
    if (Array.isArray(arr)) {
      for (let i = 0; i < arr.length; i++) {
        result[len] = arr[i];
        len++;
      }
    } else {
      result[len] = arr;
      len++;
    }
  }
  return result;
};

const res2 = array1.myConcat1(array2, array4);
console.log(res2, "ans");
