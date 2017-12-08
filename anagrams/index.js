// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False
// 
// function anagrams(stringA, stringB) {
//   //we definetly need a map, use toLowerCase
//   //and somehow remove special characters
//   //check if both strings are the same size
//   stringA = stringA.replace(/[^\w]/g, '').toLowerCase();
//   stringB = stringB.replace(/[^\w]/g, '').toLowerCase();
//   // console.log(stringA);
//   // console.log(stringB);
//
//   if(stringA.length != stringB.length){
//     return false;
//   }
//   var map = [];
//   for(let char of stringA){
//     if(char in map){
//       map[char]++;
//     }
//     else{
//       map[char] = 1;
//     }
//   }
//   for(let char of stringB){
//     if(char in map){
//       map[char]--;
//     }
//     else{
//       return false;
//     }
//   }
//   for(let char in map){
//     if(map[char] != 0){
//       return false;
//     }
//   }
//   return true;
// }

function anagrams(stringA, stringB) {
  stringA = stringA.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
  stringB = stringB.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
  if(stringA === stringB){
    return true;
  }
  return false;
}
// console.log(anagrams('rail safety', 'fairy tales'));
module.exports = anagrams;
