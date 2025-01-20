// Write a JavaScript function to check if a given string is a palindrome

// using built in method
function isPalindrome(str) {
  str = str.toLowerCase().replace(/\W/g, "");
  let reversedString = str.split("").reverse().join("");
  if (reversedString === str) {
    return "Given String is Palindrome";
  } else {
    return "Given String is not Palindrome";
  }

  //   return str.split().reverse().join("") === str
  //     ? "Given String is Palindrome"
  //     : "Given String is not Palindrome";
}
console.log(isPalindrome("Did"));

// not using built-in method
function isPalindromeStr(str) {
  str = str.toLowerCase().replace(/\W/g, "");
//   let reverseStr = "";
//   for (let i = str.length - 1; i >= 0; i--) {
//     reverseStr = reverseStr + str[i];
//   }

//   if (reverseStr === str) {
//     return "Given String is Palindrome";
//   } else {
//     return "Given String is not Palindrome";
//   }

    for(let i = 0; i <= Math.floor(str.length/2); i++) {
        if(str[i] !== str[str.length - i - 1]) return false;
    }
    return true;
}
console.log(isPalindromeStr("Did"));
