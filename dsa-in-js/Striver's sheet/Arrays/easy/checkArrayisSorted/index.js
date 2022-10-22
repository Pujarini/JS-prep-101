function checkSorted1(nums) {
  let sorted = true;
  for (let i = 0; i < nums.length; i++) {
    for (j = i + 1; j < nums.length; j++) {
      //       console.log(nums[i], nums[j])
      if (nums[j] < nums[i]) {
        sorted = false;
      }
    }
  }
  return sorted;
}

function checkSorted(nums) {
  let sorted = true;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < nums[i - 1]) sorted = false;
  }
  return sorted;
}

console.log(checkSorted([10, 2, 3, 4, 2]));
console.log(checkSorted1([1, 2, 3, 4, 2]));
