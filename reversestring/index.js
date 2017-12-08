// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'


function reverse(str) {
  let reversed = '';
  for(let character of str){
    reversed = character + reversed;
  }
  return reversed;
}

function reverse(str) {
  var left = 0;
  var right = str.length -1;
  var array = str.split('');
  // console.log(array);
  while(left < right){
    var temp = array[right];
    array[right] = array[left];
    array[left] = temp;
    left++;
    right--;
  }
  return array.join('');

}

// reverse("adam");
module.exports = reverse;
