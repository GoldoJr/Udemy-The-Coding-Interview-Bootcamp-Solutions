// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  //i dont need to do this
  ////i can for(let char of str)
  // and you can do map[char] = map[char] +1 || 1 😱 you can use false!
  var array = str.split('');
  var map = [];
  for(let char of array){
    if(char in map){
      map[char]++;
    }
    else{
      map[char] = 1;
    }
  }
  // console.log(map);
  var max = 0;
  var maxchar = "";
  for(var char in map){
    if(map[char]>max){
      max = map[char];
      maxchar = char;
    }
  }

  return maxchar;


}
 // maxChar("abcccccccd");


module.exports = maxChar;
