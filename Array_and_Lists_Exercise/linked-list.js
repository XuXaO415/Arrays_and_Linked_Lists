/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    let newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    if (!this.head) {
      this.push(val);
    } else {
      let newNode = new Node(val);
      newNode.next = this.head;
      this.head = newNode;
      this.length++;
      console.log(this.length);
    }
  }
  /** pop(): return & remove last item. */
  //remove and return tail value. Throws error if list is empty.

  pop() {
    if (this.length === 0) {
      throw "Error: list is empty";
    } else {
      if (this.length === 1) {
        let tailNode = this.head;
        this.head = null;
        this.tail = null;
        this.length = 0;
        return tailNode.val;
      } else {
        let currentNode = this.head;
        let tailNode = this.tail;
        let previousNode = currentNode;
        while (currentNode.next !== null) {
          previousNode = currentNode;
          currentNode = currentNode.next;
        }
        this.tail = previousNode;
        this.tail.next = null;
        this.length--;
        return currentNode.val;
      }
    }
  }


  /** shift(): return & remove first item. */

  shift() {

  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {

  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {

  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {

  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {

  }

  /** average(): return an average of all values in the list */

  average() {

  }
}

module.exports = LinkedList;