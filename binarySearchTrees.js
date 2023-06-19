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
    this.value = undefined ? null: value;
    this.leftChild = undefined ? null: leftChild;
    this.rightChild = undefined ? null: rightChild;
  }
}

class Tree {
  constructor(array) {
    const sortedArray = array.sort((a, b) => a - b);
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
}

let test = new Tree([6 ,5, 4, 3, 2, 1, 0]);
prettyPrint(test.root);


