// In binary search the array has to be sorted

//Divide and conquer we are search for the mid point and checking if the current point is greater than or less than
function binarySearch(arr, elem) {
  let start = 0;
  let end = arr.length - 1;
  let middle = Math.floor((start + end) / 2);

  while (arr[middle] !== elem && start <= end) {
    if (elem > arr[middle]) {
      start = middle + 1;
    } else {
      end = middle - 1;
    }
    middle = Math.floor((start + end) / 2);
  }
  console.log(start, end, middle);
  if (arr[middle] === elem) {
    return middle;
  }
  return -1;
}

//0(log N)

binarySearch([4, 5, 6, 8, 9, 10], 7);
