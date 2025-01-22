// Write a JavaScript function that returns the Fibonacci sequence up to a given number of terms.

function fibonacciSequence(n) {
  if (n <= 0) return [];
  if (n === 1) return [0];
  let seq = [0, 1];
  for (let i = 2; i < n; i++) {
    seq.push(seq[i - 1] + seq[i - 2]);
  }

  return seq;
}

console.log(fibonacciSequence(5));
