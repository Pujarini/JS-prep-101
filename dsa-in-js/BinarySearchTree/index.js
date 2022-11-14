class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    var newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return this;
    }
    var current = this.root;
    while (true) {
      if (value === current.value) return undefined;
      if (value < current.value) {
        if (current.left === null) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else if (value > current.value) {
        if (current.right === null) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }
  preOrderTraversal() {
    var data = [];
    function traverse(node) {
      data.push(node.value);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }
    traverse(this.root);
    return data;
  }
  inOrderTraversal() {
    var data = [];
    function traverse(node) {
      if (node.left) traverse(node.left);
      data.push(node.value);
      if (node.right) traverse(node.right);
    }
    traverse(this.root);
    return data;
  }
  postOrderTraversal() {
    var data = [];
    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      data.push(node.value);
    }
    traverse(this.root);
    return data;
  }
  maximumInaTree(root) {
    if (root === null) {
      return Number.MIN_VALUE;
    }
    // console.log(root);
    return Math.max(
      root.data,
      Math.max(maximumInaTree(root.left), maximumInaTree(root.right))
    );
  }
  sizeInaTree(root) {
    if (root === null) {
      return 0;
    }
    return sizeInaTree(root.left) + sizeInaTree(root.right) + 1;
  }
}

var tree = new BinarySearchTree();
tree.insert(15);
tree.insert(10);
tree.insert(5);
tree.insert(18);
tree.insert(2);
tree.insert(17);
tree.insert(20);
