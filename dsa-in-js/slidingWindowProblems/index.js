// Return a substring with a longest of unique characters

// max subarray sum will take array and n which will return the sum of n consecutive numbers

//o(N)

function maxSubArraySum(arr, n) {
  if (arr.length === 0) return null;
  let maxSum = 0;
  let tempSum = 0;
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;
  for (let j = num; j < arr.length; j++) {
    tempSum = tempSum - arr[j - num] + arr[j];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}

console.log(maxSubArraySum([1, 2, 5, 2, 8, 1, 5], 2)); //10
