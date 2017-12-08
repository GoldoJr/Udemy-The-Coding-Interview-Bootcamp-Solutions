// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'


//recursion
function pyramid(n, row = 0, stair = ''){
  if(n === row){
    return;
  }
  if(stair.length === (n*2)-1){
    console.log(stair);
    return pyramid(n,row+1);
  }
  const midpoint = Math.floor((2*n-1)/2);
  let add;
  if(midpoint - row <= stair.length && midpoint + row >= stair.length){
    add = '#';
  }
  else{
    add = ' ';
  }
  pyramid(n,row, stair +add);
}
// function pyramid(n) {
//   //we could use floor to know the center
//   //and then we could us row count to now how many left and right spaces must be printed
//   //so if row 0 and piramid 10 then you will print # middle + row and middle - row
//
//   //if counter < or > que floor(middle) - i
//   // let floor = Math.floor(n/2);
//   // console.log(floor);
//   for (var i = 0; i < n; i++) {
//     var counter = 1;
//     var row = '';
//     while(counter < n*2){
//       if(counter < n-i || counter > n+i){
//         row += ' ';
//       }else{
//         row += '#';
//
//       }
//       counter++;
//     }
//     console.log(row);
//   }
//
// }

// pyramid(4);
module.exports = pyramid;
