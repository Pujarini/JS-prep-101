//indexof
//includes
//find
//findIndex

//0(N)
function linearSearch(arr, num) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === num) return i;
  }
  return -1;
}

console.log(linearSearch([6, 8, 87], 8));
// console.log(linearSearch([2, 9, 7, 6], 5));
// linearSearch([2, 9, 7, 6], 5);
