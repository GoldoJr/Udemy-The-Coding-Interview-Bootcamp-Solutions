// --- Directions
// 1) Implement the Node class to create
// a binary search tree.  The constructor
// should initialize values 'data', 'left',
// and 'right'.
// 2) Implement the 'insert' method for the
// Node class.  Insert should accept an argument
// 'data', then create an insert a new node
// at the appropriate location in the tree.
// 3) Implement the 'contains' method for the Node
// class.  Contains should accept a 'data' argument
// and return the Node in the tree with the same value.

class Node {

  constructor(data){
    this.data = data;
    this.left = null;
    this.right = null;
  }
  //we can do this recursive
  insert(data){
    const newNode = new Node(data);
    let currentNode = this;
    while(currentNode.left || currentNode.right)
    {
      if(currentNode.left && data < currentNode.data){
        currentNode = currentNode.left;
      }
      else if(currentNode.right && data > currentNode.data){
        currentNode = currentNode.right;
      }
      else{
        break;
      }
    }
    if( data < currentNode.data){
      currentNode.left = newNode;
    }
    else if( data > currentNode.data){
     currentNode.right = newNode;
    }
  }
  // we can do this recursive
  contains(data){
    let currentNode = this;
    while(currentNode)
    {
      if(currentNode.data == data){
        return currentNode;
      }
      else if(currentNode.left && data < currentNode.data){
        currentNode = currentNode.left;
      }
      else if(currentNode.right && data > currentNode.data){
        currentNode = currentNode.right;
      }
      else{
        break;
      }
    }
    return null;
  }

}

module.exports = Node;
