class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.tail = null;
    this.head = null;
    this.length = 0;
  }

  push(val) {
    const temp = new Node(val);
    if (!this.head) {
      this.head = temp;
      this.tail = temp;
    } else {
      this.tail.next = temp;
      this.tail = temp;
    }
    ++this.length;
    return this;
  }
  traverse() {
    var current = this.head;
    if (current) {
      current = current.next;
      console.log(current.val);
    }
  }
  pop() {
    if (!this.head) return;
    var current = this.head;
    var newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }
}

var list = new SinglyLinkedList();
list.push("ok");
list.push("ok1");
list.push("ok2");
list.pop();
// list.traverse();
