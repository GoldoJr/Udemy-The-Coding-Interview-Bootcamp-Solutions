// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
  //i could use a for loop for arrya size
  //then inside a while or for loop for the chunk size
  if(!size){
    return false;
  }
  var result = [];
  for(var i = 0; i<array.length; i=i+size){
    var temp = [];
    var counter = 0;
    while(counter < size && i+counter < array.length ){
      temp.push(array[i+counter]);
      counter++;
    }
    result.push(temp);
  }
  return result;
}

//we can use slice with a moving window start and end indexes
function chunk(array,size){
  const chunked = [];
  let index = 0;

  while (index < array.length) {
    chunked.push(array.slice(index, index+size));
    index += size;
  }
  return chunked;
}
// console.log(chunk([1,2,3,4,5],2));

module.exports = chunk;
