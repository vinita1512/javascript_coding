// Write a JavaScript function that takes an array of numbers and
// returns a new array with only the even numbers.

// using filter
function filterEvenNumbers(arrOfNum) {
  return arrOfNum.filter((num) => num % 2 === 0);
}
console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6]));

// using for loop
function filterEvenNum(arrOfNum) {
  let res = [];
  for (let i = 0; i < arrOfNum.length; i++) {
    if (arrOfNum[i] % 2 === 0) {
      res.push(arrOfNum[i]);
    }
  }
  return res;
}
console.log(filterEvenNum([1, 2, 3, 4, 5, 6]));

// using reduce method:
function filterEvenNums(arrOfNum) {
  return arrOfNum.reduce((acc, num) => {
    if (num % 2 === 0) {
      acc.push(num);
    }
    return acc;
  }, []);
}
console.log(filterEvenNums([1, 2, 3, 4, 5, 6]));
