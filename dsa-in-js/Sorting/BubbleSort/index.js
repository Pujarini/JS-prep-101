function sortBubble(nums) {
  var noSwaps;
  for (let i = nums.length - 1; i >= 0; i--) {
    noSwaps = true;
    for (j = 0; j < i; j++) {
      if (nums[j] > nums[j + 1]) {
        var temp = nums[j];
        nums[j] = nums[j + 1];
        nums[j + 1] = temp;
        noSwaps = false;
      }
      console.log(nums);
    }
    if (noSwaps) break;
  }
  return nums;
}

console.log(sortBubble([8, 7, 6, 5, 4, 20, 12])); //O(n) with no swaps and O(n*n)
