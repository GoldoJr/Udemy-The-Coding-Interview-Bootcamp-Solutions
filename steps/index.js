// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

//recursion
function steps(n, row = 0 , stair = '') {
  if(n === row){
    return;
  }
  if(n === stair.length){
    console.log(stair);
    return steps(n,row+1);
  }
  if( stair.length <= row){
    stair += "#";
  }
  else{
    stair += ' ';
  }
  steps(n,row,stair);
}
// function steps(n, step = 0) {
//   if(n == step){
//     return;
//   }
//   step++
//   let stair = '';
//   for (var i = 0; i < step; i++) {
//     stair += "#"
//   }
//   for (var i = 0; i < n-step; i++) {
//     stair += ' ';
//   }
//   console.log(stair);
//   steps(n,step);
// }

// function steps(n) {
//   //we need a counter for steps printed < n
//   //and also for # printed that would reset for each step
//   var counter = 0;
//   while(counter < n){
//     var steps = 0;
//     var string = '';
//     while(steps < n) {
//       if(steps <= counter){
//         string += '#'
//       }else {
//         string += ' ';
//       }
//       steps++;
//     }
//     counter++;
//     console.log(string);
//   }
//
//
// }

steps(3);

module.exports = steps;
