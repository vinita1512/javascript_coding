// Write a JavaScript program to find the largest element in a nested array.

function findLargestElement(arr) {
  let largest = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      let nestedNum = findLargestElement(arr[i]);
      largest = Math.max(largest, nestedNum);
    } else {
      largest = Math.max(largest, arr[i]);
    }
  }
  return largest;
}
console.log(findLargestElement([1, [2, [3, 4], 5], [6, 7], 8]));
