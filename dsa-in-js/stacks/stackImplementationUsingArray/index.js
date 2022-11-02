class Stack {
  constructor() {
    this.items = [];
  }
  add(element) {
    return this.items.push(element);
  }
  remove() {
    if (this.items.length > 0) {
      return this.items.pop();
    }
  }
  peek() {
    return this.items[this.items.length - 1];
  }
  isEmpty() {
    return this.items.length === 0;
  }
  size() {
    return this.items.length;
  }
  clear() {
    this.items = [];
  }
}
