function sortInsertion(arr) {
  for (let i = 1; i < arr.length; i++) {
    //unsorted
    var temp = arr[i];
    for (j = i - 1; j >= 0 && arr[j] > temp; j--) {
      //sorted
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = temp;
  }
  return arr;
}

console.log(sortInsertion([9, 4, 5, 6, 1, 2])); // O(n*n)
