// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]


//we could start create the arrya NxN with 0s?
//then create the four function left to right, up to down, right to left, down to up
function matrix(n) {

  //we could create the matrix with all 0 and then edit them
  var array = [];

  // i did not needed to set values just empty arrays
  for (var i = 0; i < n; i++) {
    array.push([]);
  }
  // array[0][1] = 'adam';
  //do a while were the condition would be top < then bottom and left less than right
  let leftColumn = 0;
  let rightColumn = n-1;
  let topRow = 0;
  let bottomRow = n-1;
  let counter = 1;
  console.log(array);


  while (leftColumn <= rightColumn && topRow <= bottomRow) {

    //left to right
    for (var i = leftColumn; i <= rightColumn; i++) {
      array[topRow][i] = counter;
      counter++;
    }
    topRow++;
    for (var i = topRow; i <= bottomRow; i++) {
      array[i][rightColumn] = counter;
      counter++;
    }
    rightColumn--;
    for (var i = rightColumn; i >= leftColumn; i--) {
      array[bottomRow][i] = counter;
      counter++;
    }
    bottomRow--;
    for (var i = bottomRow; i >= topRow; i--) {
      array[i][leftColumn] = counter;
      counter++;
    }
    leftColumn++;
  }


  return array;

}

matrix(4);

module.exports = matrix;
