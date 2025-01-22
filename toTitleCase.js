// Write a JavaScript program to convert a string to title case (capitalize the first letter of each word).

function toTitleCase(str) {
  return str
    .split(" ")
    .map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    })
    .join(" ");
    
// another method
  //   let res = "";
  //   let capt = 1;
  //   for (let i = 0; i < str.length; i++) {
  //     if (capt && str[i] !== "") {
  //       res += str[i].toUpperCase();
  //       capt = 0;
  //     } else if (!capt && str[i] !== "") {
  //       res += str[i].toLowerCase();
  //     } else {
  //       res += str[i];
  //       capt = 1;
  //     }
  //   }
  //   return res;
}
console.log(toTitleCase("software developer"));
