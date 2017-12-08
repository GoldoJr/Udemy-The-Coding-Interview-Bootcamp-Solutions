// --- Directions
// Create a stack data structure.  The stack
// should be a class with methods 'push', 'pop', and
// 'peek'.  Adding an element to the stack should
// store it until it is removed.
// --- Examples
//   const s = new Stack();
//   s.push(1);
//   s.push(2);
//   s.pop(); // returns 2
//   s.pop(); // returns 1

class Stack {
  constructor() {
    this.data = [];
  }

  push(record) {
    this.data.unshift(record);
    //or push
  }

  pop() {
    return this.data.shift();
    //or pop
  }

  //peek should return null if there is no other element
  peek(){
    if(this.data){
      return this.data[0];
      //when using push and pop use length-1
    }
  }
}

module.exports = Stack;
