// --- Directions
// 1) Create a node class.  The constructor
// should accept an argument that gets assigned
// to the data property and initialize an
// empty array for storing children. The node
// class should have methods 'add' and 'remove'.
// 2) Create a tree class. The tree constructor
// should initialize a 'root' property to null.
// 3) Implement 'traverseBF' and 'traverseDF'
// on the tree class.  Each method should accept a
// function that gets called with each element in the tree

class Node {

  constructor(data){
    this.data = data;
    this.children = [];
  }
  add(data){
    const child = new Node(data);
    this.children.push(child);
  }
  remove(data){
    this.children = this.children.filter(  node =>{
      return node.data != data;
    }
    );
  }
}

class Tree {
  constructor(){
    this.root = null;
  }
  traverseBF(fn){
    let queue = [this.root];
    while(queue.length){
      const currentNode = queue.shift();
      for (let child of currentNode.children) {
        queue.push(child);
      }
      fn(currentNode);
    }
    //while there is a element in an array retreive the first and stick the children in the end of array
    //and then call the function fn with parent
    //so in other cases you could used two arrays on to move each parent after adding there children to the original array
  }
  traverseDF(fn){
    const queue = [this.root];
    while(queue.length){
      const currentNode = queue.shift();
      for (let child of currentNode.children) {
        queue.unshift(child);
      }
      fn(currentNode);
    }
    //while there is a element in an array retreive the first and stick the children in the start of the array
    //and then call the function fn with parent
    //so in other cases you could used two arrays on to move each parent after adding there children to the original array

  }

}

module.exports = { Tree, Node };
