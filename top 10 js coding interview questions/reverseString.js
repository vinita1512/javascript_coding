// reverseString

// using for loop
// function reverseString(str) {
//   let result = "";
//   for (let i = str.length - 1; i >= 0; i--) {
//     result += str[i];
//   }

//   return result;
// }

// console.log(reverseString("hi"));

// using for loop
// function reverseString(str) {
//   let result = "";
//   for (let i = 0; i <= str.length - 1; i++) {
//     result = str[i] + result;
//   }

//   return result;
// }

// console.log(reverseString("hii"));

// using in built method
function reverseString(str) {
    return str.split("").reverse().join("")
  }

  console.log(reverseString("hii"));
  
