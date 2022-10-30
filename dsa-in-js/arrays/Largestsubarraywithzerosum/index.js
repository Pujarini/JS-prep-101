function largestSubArray(nums) {
  let max_len = 0;
  for (let i = 0; i < nums.length; i++) {
    let curr_sum = 0;
    for (let j = i; j < nums.length; j++) {
      curr_sum += nums[j];
      if (curr_sum === 0) {
        max_len = Math.max(max_len, j - i + 1);
      }
    }
  }
  return max_len;
}

console.log(largestSubArray([15, -2, 2, -8, 1, 7, 10, 23]));
