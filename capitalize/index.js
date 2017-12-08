// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
  //we can splice with " " then go in each element and do word[0].toUpperCase word.slice(1)
  var words = str.split(" ");
  // console.log(words);
  for (var i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase()+words[i].slice(1);
  }
  return words.join(" ");
}

// function capitalize(str) {
//   let result = str[0].toUpperCase();
//
//   for (var i = 0; i < str.length; i++) {
//     if(str[i-1] === ' '){
//       result += str[i].toUpperCase();
//     }
//     else{
//       result += str[i];
//     }
//   }
// }
capitalize('a short sentence');
module.exports = capitalize;
