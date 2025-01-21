// Write a JavaScript program to calculate the factorial of a given number.

function factorial(num) {
  return num === 0 || num === 1 ? 1 : num * factorial(num - 1);
}
console.log(factorial(2));

// using for loop
function fact(num) {
  let res = 1;
  for (let i = 1; i <= num; i++) {
    res *= i;
  }
  return res;
}
console.log(fact(2));
