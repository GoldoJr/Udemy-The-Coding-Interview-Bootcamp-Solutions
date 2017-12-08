// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

//const matches = regex str.match(/[aeiou]/gi)
//if(null) return 0 else return matches.length 
function vowels(str) {
  var counter = 0;
  const checker = ['a','e','i','o','u'];
  for (char of str.toLowerCase()) {
    if(checker.includes(char)){
      counter++;
    }
  }
  return counter;

}

module.exports = vowels;
