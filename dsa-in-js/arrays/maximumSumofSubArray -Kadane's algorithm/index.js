function maxSumSubArray(nums) {
  let sum = 0,
    max_sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    max_sum = Math.max(max_sum, sum);
    if (sum < 0) {
      sum = 0;
    }
  }
  return max_sum;
}

console.log(maxSumSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
console.log(maxSumSubArray([1]));

// add all elements
// find max_sum
//check sum < 0 then sum =0
