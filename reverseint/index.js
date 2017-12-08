// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

//Math.sign()
function reverseInt(n) {
  var str = n.toString();
  var left = 0;
  var right = str.length -1;
  var array = str.split('');
  var negative = false;
  // console.log(array);
  if(array[0] == '-'){
    array.shift();
    negative = true;
  }
  while(left < right){
    var temp = array[right];
    array[right] = array[left];
    array[left] = temp;
    left++;
    right--;
  }

  var result = parseInt(array.join(''));
  if(negative){
    return -1*result;
  }
  return result;
}

// function reverseInt(n){
//   const reversed = n.toString().spit('').reverse().join('');
//   return Math.sign(n)*parseInt(reversed);
// }

module.exports = reverseInt;
