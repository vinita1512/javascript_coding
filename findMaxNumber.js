// Write a JavaScript program to find the maximum number in an array.
  
// using built-in method
function findMaxNumber(arr) {
  if (!Array.isArray(arr) || arr.length === 0) {
    console.log("Input must be non-empty array");
  } else {
    return Math.max(...arr);
  }
}

console.log(findMaxNumber([1, 6, 9, 30]));

// not using built-in method
function findMaximumNumber(arr) {
  if (!Array.isArray(arr) || arr.length === 0) {
    console.log("Input must be non-empty array");
  } else {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > max) {
        max = arr[i];
      }
    }
    return max;
  }
}
console.log(findMaximumNumber([1, 6, 9, 30]));
