// Write a JavaScript function to check if a given number is prime.

// A prime number is a number greater than 1 that has no positive divisors other than 1 and itself. For example:

// 2, 3, 5, 7, 11, and so on are prime numbers.
// 4, 6, 8, 9, 10 are not prime because they are divisible by numbers other than 1 and themselves.

function isPrime(num) {
  if (num <= 1) {
    return "Number is not prime";
  } else {
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return "Number is not prime";
      }
    }
    return "Number is prime";
  }
}
console.log(isPrime(7));
