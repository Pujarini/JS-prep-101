// find the occurance of a string in a long string

function searchString(str, search) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < search.length; j++) {
      console.log(str[i + j], search[j]);
      if (search[j] !== str[i + j]) {
        console.log("break");
        break;
      }
      if (j === search.length - 1) {
        count++;
      }
    }
  }
  return count;
}

console.log(searchString("hello why", "po"));
// searchString("hello why", "why");
