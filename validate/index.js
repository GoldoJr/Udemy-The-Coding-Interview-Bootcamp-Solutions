// --- Directions
// Given a node, validate the binary search tree,
// ensuring that every node's left hand child is
// less than the parent node's value, and that
// every node's right hand child is greater than
// the parent

//it is recursive
function validate(node, min = null, max = null) {

  if(node.left && node.left.data < node.data){
    return validate(node.left,min,node.data);
  }
  else if(node.right && node.right.data > node.data){
    return validate(node.right,node.data, max);
  }
  else if( node.data > max ||  node.data < min){
    return false;
  }

  return true;
}

module.exports = validate;
