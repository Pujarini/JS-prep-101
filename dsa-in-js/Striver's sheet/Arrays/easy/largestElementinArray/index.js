function largestNum(nums) {
  if (nums.length === 0) return -1;
  let max = 0;
  for (i = 0; i < nums.length; i++) {
    if (nums[i] > max) {
      max = nums[i];
    }
  }
  return max;
}

console.log(largestNum([8, 10, 5, 7, 9]));
console.log(largestNum([]));
