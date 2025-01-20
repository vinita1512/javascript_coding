// Write a JavaScript program to reverse a given string.
// not using built in method
function reverseString(str) {
  let reverseStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reverseStr += str[i];
  }
  return reverseStr;
}
console.log(reverseString("vini"));

//built in method

function reverseStr(str) {
  return str.split("").reverse().join("");
}
console.log(reverseStr("vini"));
