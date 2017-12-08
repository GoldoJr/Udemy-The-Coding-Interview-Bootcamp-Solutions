// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
  //you need a indicator a string or anything to know whe moved to another level
  //when we find the indicator we moved it to the end
  const queue = [root,'adam'];
  const widths = [0];
  while(queue.length > 1){
    const node = queue.shift();
    if(node === 'adam'){
        widths.push(0);
        queue.push('adam');
    }
    else{
      for (let child of node.children) {
        queue.push(child);
      }
      widths[widths.length-1]++;
    }

  }
  return widths;
}

module.exports = levelWidth;
