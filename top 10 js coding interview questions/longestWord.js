// returns longest word in the sentence

// using for loop
function longWord(str) {
  let newstr = str.split(" ");
  let res = "";
  for (let i = 0; i <= newstr.length - 1; i++) {
    if (newstr[i].length > res.length) {
      res = newstr[i];
    }
  }
  return res;
}

// using foreach loop
// function longWord(str) {
//   let newstr = str.split(" ");
//   let res = "";
//   newstr.forEach((word) => {
//     if (word.length > res.length) {
//       res = word;
//     }
//   });
//   return res;
// }

// using for of loop
// function longWord(str) {
//   let newstr = str.split(" ");
//   let res = "";
//   for (let word of newstr) {
//     if (word.length > res.length) {
//       res = word;
//     }
//   }
//   return res;
// }

// using map
// function longWord(str) {
//     let newstr = str.split(" ");
//     let res=""
//     newstr.map((word) => {
//      if(word.length>res.length) {
//         res= word
//      }
//     })
//     return res

//   }

// using reduce
// function longWord(str) {
//   let newstr = str.split(" ");
//   let res = newstr.reduce((longest, currWord) => {
//     return currWord.length > longest.length ? currWord : longest;
//   },"");

//   return res;
// }

console.log(longWord("hi i am javascript"));
