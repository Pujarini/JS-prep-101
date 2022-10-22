function secondSmallest(nums){
 let first= Number.MAX_VALUE, second = Number.MAX_VALUE, i;
 if(nums.length < 2) return -1;
   for (i = 0; i < nums.length ; i++)
    {
        if (nums[i] < first)
        {
            second = first;
            first = nums[i];
        }
 
        else if (nums[i] < second && nums[i] != first)
            second = nums[i];
    }
  return second
}
​
console.log(secondSmallest([8,10,5,7,9]));
​
function secondLargest(nums){
  let first = Number.MIN_VALUE, second = Number.MIN_VALUE,i;
   if(nums.length < 2) return -1;
  for (i = 0; i < nums.length ; i++)
    {
        if (nums[i] > first)
        {
            second = first;
            first = nums[i];
        }
 
        else if (nums[i] > second && nums[i] != first)
            second = nums[i];
    }
  return second
}
​
console.log(secondLargest([8,10,5,7,9]));
