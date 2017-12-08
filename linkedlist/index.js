// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {

  constructor(data, next = null){
    this.data = data;
    this.next = next;
  }
}

class LinkedList {

  constructor(){
    this.head = null;
  }
  insertFirst(first){
    this.head = new Node(first, this.head);
  }
  size(){
    let currentNode = this.head;
    let counter = 0;

    while(currentNode){
      counter++;
      currentNode = currentNode.next;
    }
    return counter;
  }
  getFirst(){
    return this.head;
  }
  getLast(){
    let currentNode = this.head;
    if(!currentNode){
      return null;
    }
    while(currentNode.next){
      currentNode = currentNode.next;
    }
    return currentNode;
  }
  clear(){
    this.head = null;
  }
  removeFirst(){
    if(!this.head){
      return;
    }
    this.head = this.head.next;
  }
  removeLast(){
    let currentNode = this.head;
    let previousNode = currentNode;

    if(currentNode == null){
      return;
    }
    if(currentNode.next == null){
      this.clear();
      return;
    }
    while(currentNode.next){
      previousNode = currentNode;
      currentNode = currentNode.next;
    }
    previousNode.next = null;

  }
  insertLast(data){
    const last = new Node(data);
    let currentNode = this.getLast();
    if(currentNode == null){
      this.head = last;
    }
    else{
      currentNode.next = last;
    }
  }
  getAt(index){
    if(index > this.size()){
      return null;
    }
    if(this.size() == 0){
      return null;
    }
    let currentNode = this.head;
    let counter = 0;

    while(currentNode){
      if(index == counter){
        return currentNode;
      }
      counter++;
      currentNode = currentNode.next;
    }

    return null;
  }
  removeAt(index){
    if(index > this.size()){
      return;
    }
    if(this.size() == 0){
      return;
    }
    if(index == 0){
      this.removeFirst();
      return;
    }

    this.getAt(index-1).next = this.getAt(index+1);
    // let currentNode = this.head;
    // let previousNode = currentNode;
    // let counter = 0;
    //
    // while(currentNode){
    //   if(index == counter){
    //     previousNode.next = currentNode.next;
    //     return;
    //   }
    //   counter++;
    //   previousNode = currentNode;
    //   currentNode = currentNode.next;
    // }

  }
  insertAt(data, index){
    const node = new Node(data,this.getAt(index));

    if(index > this.size() ){
      this.insertLast(node.data);
      return;
    }
    if(this.head  == null){
      this.head = node;
      return;
    }
    if(index  == 0){
      this.insertFirst(node.data);
      return;
    }
    this.getAt(index-1).next = node;
  }
  forEach(args){
    for (var i = 0; i < this.size(); i++) {
      args(this.getAt(i));
    }
  }

}

module.exports = { Node, LinkedList };
