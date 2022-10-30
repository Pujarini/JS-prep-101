// there is a function called same with 2 arrays
// [1,2,3] , [4,1,9]  -- you need to check if the element of arr1 has squared value in arr2 if yes then true else false also the frequency should be same too

//brute force --- O(n2)
// function same(arr1, arr2) {
//   if (arr1.length !== arr2.length) return false;

//   for (let i = 0; i < arr1.length; i++) {
//     const found = arr2.indexOf(arr1[i] * arr1[i]);
//     if (found === -1) {
//       return false;
//     }
//     arr2.splice(found, 1);
//   }
//   return true;
// }

//refactored--- O(N)
function same(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  let freq1 = {};
  let freq2 = {};
  for (let val of arr1) {
    freq1[val] = (freq1[val] || 0) + 1;
  }
  for (let val of arr2) {
    freq2[val] = (freq2[val] || 0) + 1;
  }

  for (let key in freq1) {
    if (!(key * key in freq2)) {
      return false;
    }
    if (freq2[key * key] !== freq1[key]) {
      // checks frequency
      return false;
    }
  }
  return true;
}

console.log(same([1, 2, 2], [4, 4, 1]));
// console.log(same([1, 2, 1], [4, 1, 9])); false
//console.log(same([1, 2], [4, 1, 1]));  since freq not same false
