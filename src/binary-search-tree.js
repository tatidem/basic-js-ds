const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class Node {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor() {
    this.rootNode = null;
  }

  root() {
    return this.rootNode;
  }

  add(data) {
    this.rootNode = this._add(this.rootNode, data);
  }

  _add(node, data) {
    if (node === null) {
      return new Node(data);
    }

    if (data < node.data) {
      node.left = this._add(node.left, data);
    } else if (data > node.data) {
      node.right = this._add(node.right, data);
    }

    return node;
  }

  has(data) {
    return this._search(this.rootNode, data) !== null;
  }

  find(data) {
    return this._search(this.rootNode, data);
  }

  _search(node, data) {
    if (node === null || node.data === data) {
      return node;
    }

    if (data < node.data) {
      return this._search(node.left, data);
    } else {
      return this._search(node.right, data);
    }
  }

  remove(data) {
    this.rootNode = this._remove(this.rootNode, data);
  }

  _remove(node, data) {
    if (node === null) {
      return null;
    }
  
    if (data < node.data) {
      node.left = this._remove(node.left, data);
    } else if (data > node.data) {
      node.right = this._remove(node.right, data);
    } else {
      if (node.left === null) {
        return node.right;
      } else if (node.right === null) {
        return node.left;
      } else {
        const minRight = this._findMin(node.right);
        node.data = minRight.data;
        node.right = this._remove(node.right, minRight.data);
      }
    }

    return node;
  }

  min() {
    const minNode = this._findMin(this.rootNode);
    return minNode ? minNode.data : null;
  }

  _findMin(node) {
    if (node === null) {
      return null;
    }
  
    while (node.left !== null) {
      node = node.left;
    }
  
    return node;
  }

  max() {
    const maxNode = this._findMax(this.rootNode);
    return maxNode ? maxNode.data : null;
  }
  _findMax(node) {
    if (node === null) {
      return null;
    }
  
    while (node.right !== null) {
      node = node.right;
    }
  
    return node;
  }
}

module.exports = {
  BinarySearchTree
};