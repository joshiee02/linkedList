const prettyPrint = (node, prefix = "", isLeft = true) => {
  if (node === null) {
    return;
  }
  if (node.rightChild !== null) {
    prettyPrint(node.rightChild, `${prefix}${isLeft ? "│   " : "    "}`, false);
  }
  console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.value}`);
  if (node.leftChild !== null) {
    prettyPrint(node.leftChild, `${prefix}${isLeft ? "    " : "│   "}`, true);
  }
};

class Node {
  constructor(value, leftChild, rightChild) {
    this.value = value === undefined ? null: value;
    this.leftChild = leftChild === undefined ? null: leftChild;
    this.rightChild = rightChild === undefined ? null: rightChild;
  }
}

class Tree {
  constructor(array) {
    const sortedArray = [...new Set(array.sort((a, b) => a- b))];
    this.root = this.buildTree(sortedArray);
  }

  buildTree(sortedArray) {
    if (sortedArray.length === 0) return null;
    console.log(sortedArray); 

    const midNode = Math.floor(sortedArray.length / 2);
    const newNode = new Node(sortedArray[midNode]);
    newNode.leftChild = this.buildTree(sortedArray.slice(0, midNode));
    newNode.rightChild = this.buildTree(sortedArray.slice(midNode + 1));
    return newNode;
  }

  insert(value, node = this.root) {

    if (node === null) {
      return new Node(value);
    } else if (value < node.value) {
      node.leftChild = this.insert(value, node.leftChild);
    } else if (value > node.value) {
      node.rightChild = this.insert(value, node.rightChild);
    }
    return node;
  }

  delete(value, node = this.root) {
    if (!node) return null;

    if (node.value > value) {
      node.leftChild = this.delete(value, node.leftChild);
      return node;
    } else if (node.value < value) {
      node.rightChild = this.delete(value, node.rightChild);
      return node;
    } else {
      if (!node.leftChild) {
        let cache = node.rightChild;
        node = new Node();
        return cache;
      } else if (!node.rightChild) {
        let cache = node.leftChild;
        node = new Node();
        return cache;
      }
    }
  }
}

let test = new Tree([5, 4, 3, 2, 1, 0]);
prettyPrint(test.root);


