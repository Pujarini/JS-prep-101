//reverse changes the original array

const array1 = ["one", "two", "three"];
console.log("array1:", array1);

const reversed = array1.reverse();
console.log("reversed:", reversed);

console.log("array1:", array1);

Array.prototype.myReverse = function () {
  let left = 0;
  let right = this.length - 1;
  for (let i = 0; i < this.length; i++) {
    while (left < right) {
      let temp = this[left];
      this[left] = this[right];
      this[right] = temp;
      left++;
      right--;
    }
  }
  return this;
};

const arr2 = ["one", "two", "three", "four"];
let arr3 = [1, 2, 3, 4];
console.log(arr2.myReverse());
