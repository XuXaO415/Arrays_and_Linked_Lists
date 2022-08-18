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
    let newNode = new Node(val); // create new node with value

    if (!this.head) { // if list is empty
      this.head = newNode; // set head to new node
      this.tail = newNode; // set tail to new node
    } else {
      this.tail.next = newNode; // set next node of tail to new node
      this.tail = newNode; // set tail to new node
    }
    // console.log("Pushing node", val); // print message
    this.length++; // increment length
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    if (!this.head) { // if list is empty
      this.push(val); // push value to list
    } else {
      let newNode = new Node(val); // create new node with value
      newNode.next = this.head; // set next node of new node to head
      this.head = newNode; // set head to new node
      this.length++; // increment length
      // console.log(`Unshifting and adding node`, val); // print message
      console.log("Unshifting node", newNode.val); // print message )
    }
  }
  /** pop(): return & remove last item. */
  //remove and return tail value. Throws error if list is empty.

  pop() {
    if (this.length === 0) { // if list is empty
      throw "Error: list is empty"; // throw error
    } else {
      if (this.length === 1) { // if list has one item
        let tailNode = this.head; // save tail node
        this.head = null; // set head to null
        this.tail = null; // set tail to null
        this.length = 0; // set length to 0
        return tailNode.val; // return tail node value
      } else {
        let currentNode = this.head; // start at head
        let previousNode = currentNode; // set previous node to current node
        while (currentNode.next !== null) { // loop through list until we reach end
          previousNode = currentNode; // set previous node to current node
          currentNode = currentNode.next; // set current node to next node
        }
        this.tail = previousNode; // set tail to previous node
        this.tail.next = null; // set next node of tail to null
        this.length--; // decrement length
        console.log("Popping node number", currentNode.val); // print pop message
        return currentNode.val; // return current node value
      }
    }
  }


  /** shift(): return & remove first item. */
  //Remove & return head value. Throws error if list is empty.

  shift() {
    if (this.length === 0) { // if list is empty
      throw "Error: list is empty"; // throw error
    } else if (this.length === 1) { // if list has one item
      let headNode = this.head; // save head node
      this.head = null; // set head to null
      this.tail = null; // set tail to null
      this.length = 0; // set length to 0
      return headNode.val; // return head node value
    }
    let headNode = this.head; // save head node
    let newHead = this.head.next; // set new head to next node
    this.head = newHead; // set head to new head
    this.length--; // decrement length
    return headNode.val; // return head node value
  }

  /** getAt(idx): get val at idx. */
  //Retrieve value at index position idx. Throws error if index is invalid.

  getAt(idx) {
    if (idx < 0 || idx >= this.length) { // if idx is out of bounds
      throw "Error: index is out of bounds"; // throw error
    }
    let counter = 0; // set counter to 0
    let currentNode = this.head; // start at head
    // for (let i = 0; i < idx; i++) { // loop through list until we reach index
    while (counter < idx) { // loop through list until we reach index
      currentNode = currentNode.next; // set current node to next node
      counter++; // increment counter
      // }
      // currentNode = currentNode.next;
    }
    return currentNode.val; // return current node value
  }

  /** setAt(idx, val): set val at idx to val */
  //Set value of node at index position idx to val. Throws error if index is invalid.

  setAt(idx, val) {
    // let currentNode = this.getAt(idx); // get node at index
    // currentNode.val = val; // set node value to val

    // if (!currentNode) { // if node doesn't exist
    //   throw "Error: index is out of bounds"; // throw error
    // } else {
    //   return currentNode.val; // return node value
    // }
    if (idx < this.length && idx >= 0) {
      let currentNode = this.head; // start at head
      let counter = 0; // set counter to 0
      while (counter < idx) { // loop through list until we reach index
        currentNode = currentNode.next; // set current node to next node
        counter++; // increment counter
      }
      console.log("Setting node at index of", idx, "to", val);
      currentNode.val = val; // set current node value to val
      return currentNode.val; // return current node value
    } else {
      throw "Error: index is out of bounds"; // throw error
    }
  }

  /** get node @ index */
  getNode(idx) {
    let currentNode = this.head; // start at head
    let counter = 0; // set counter to 0
    while (counter < idx) { // loop through list until we reach index
      currentNode = currentNode.next; // set current node to next node
      counter++; // increment counter
    }
    console.log(currentNode);
    return currentNode; // return current node
  }


  /** insertAt(idx, val): add node w/val before idx. */
  //Insert a new node at position idx with value val. Throws error if index is invalid. Returns undefined.
  // failed test case of inserting node at adjusting nearby nodes
  // insertAt(idx, val) {
  //   if (idx < 0 || idx > this.length) { // if idx is out of bounds
  //     throw "Error: index is out of bounds"; // throw error
  //   } else if (idx === 0) { // if idx is 0
  //     this.unshift(val); // unshift value to list
  //   } else if (idx === this.length) { // if idx is length
  //     this.push(val); // push value to list
  //   } else {
  //     let currentNode = this.head; // start at head
  //     let counter = 0; // set counter to 0
  //     while (counter < idx) { // loop through list until we reach index
  //       currentNode = currentNode.next; // set current node to next node
  //       counter++; // increment counter
  //     }
  //     let newNode = new Node(val); // create new node with value
  //     console.log("Inserting node at index of", idx, "to", val); // print message
  //     newNode.next = currentNode.next; // set next node of new node to next node of current node
  //     currentNode.next = newNode; // set next node of current node to new node
  //     this.length++; // increment length
  //   }
  // }

  insertAt(idx, val) {
    if (idx < 0 || idx > this.length) { // if idx is out of bounds
      throw "Error: index is out of bounds"; // throw error
    } else if (idx === 0) { // if idx is 0
      this.unshift(val); // unshift value to list
    } else if (idx < this.length) {
      const newNode = new Node(val); // create new node with value
      const previousNode = this.getNode(idx - 1); // get node at index
      const currentNode = previousNode.next; // get next node of previous node
      previousNode.next = newNode; // set next node of previous node to new node
      newNode.next = currentNode; // set next node of new node to next node of current node

      console.log("Inserting node at index of", idx, "to", val);
      this.length++; // increment length
    } else {
      this.push(val); // push value to list
    }
  }


  // insertAt(idx, val) {
  //   if (idx < 0 || idx > this.length) {
  //     throw "Error: index is out of bounds";
  //   }
  //   if (idx === 0) return this.unshift(val);
  //   if (idx === this.length) return this.push(val);

  //   let previousNode = this.getNode(idx - 1);

  //   let newNode = new Node(val);
  //   newNode.next = previousNode.next;
  //   previousNode.next = newNode;
  //   this.length++;
  // }






  /** removeAt(idx): return & remove item at idx, */
  //Remove & return value at position idx. Throws error if index is invalid.

  removeAt(idx) {
    if (idx < 0 || idx >= this.length) { // if idx is out of bounds
      throw "Error: index is out of bounds"; // throw error
    } else if (idx === 0) { // if idx is 0
      return this.shift(); // return and remove head value
    } else if (idx === this.length - 1) { // if idx is length - 1
      return this.pop(); // return and remove tail value
    } else {
      let currentNode = this.head; // start at head
      let counter = 0; // set counter to 0
      while (counter < idx) { // loop through list until we reach index
        currentNode = currentNode.next; // set current node to next node
        counter++; // increment counter
      }
      let removedNode = currentNode.next; // set removed node to next node of current node
      currentNode.next = removedNode.next; // set next node of current node to next node of removed node
      this.length--; // decrement length
      return removedNode.val; // return removed node value
    }

  }

  /** average(): return an average of all values in the list */

  average() {
    if (this.length === 0) { // if list is empty
      return 0; // return 0
    }
    let sum = 0; // set sum to 0
    let currentNode = this.head; // start at head
    while (currentNode) { // loop through list
      sum += currentNode.val; // add current node value to sum
      currentNode = currentNode.next; // set current node to next node
    }
    console.log("Node average:", sum / this.length); // return average
    return sum / this.length; // return sum divided by length
  }
}

module.exports = LinkedList;