function sortSelection(nums) {
  for (var i = 0; i < nums.length; i++) {
    var low = i;
    for (var j = i + 1; j < nums.length; j++) {
      if (nums[j] < nums[low]) {
        low = j;
      }
    }
    if (i !== low) {
      var temp = nums[i];
      nums[i] = nums[low];
      nums[low] = temp;
    }
  }
  return nums;
}

console.log(sortSelection([5, 2, 9, 6])); //O(n*n)
