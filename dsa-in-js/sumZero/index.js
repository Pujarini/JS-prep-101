// arr should be sorted

// brute force O(N2)
// function sumZero(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] + arr[j] === 0) return [arr[i], arr[j]];
//     }
//   }
// }

// O(N)

function sumZero(arr) {
  let low = 0;
  let high = arr.length - 1;
  while (low < high) {
    let sum = arr[low] + arr[high];
    if (sum === 0) {
      return [arr[low], arr[high]];
    } else if (sum > 0) {
      high--;
    } else {
      low++;
    }
  }
}

console.log(sumZero([-3, -2, -1, 0, 1, 2, 3]));
console.log(sumZero([-4, -2, -1, 0, 2, 3]));
