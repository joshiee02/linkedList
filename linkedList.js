class Node {
  constructor(value, node) {
    this.value = value || null;
    this.nextNode = node || null;
  }
}

class LinkedList {
  constructor() {
    this.root = null;
  }

  prepend(value) {
    let cache;
    if (this.root !== null) cache = this.root;
    this.root = new Node(value);
    this.root.nextNode = cache;
  }

  append(value) {
    if (this.root == null) this.prepend(value);
    else {
      let cache = this.root;
      while (cache.nextNode != null) cache = cache.nextNode;
      cache.nextNode = new Node(value);
    }
  }
  
  size() {
    let num = 0;
    let cache = this.root;
    if (this.root == null) return num;
    num += 1;
    while (cache.nextNode != null) {
      num += 1;
      cache = cache.nextNode;
    }
    return num;
  }

  head() {
    return this.root;
  }

  tail() {
    let cache = this.root;
    while (cache.nextNode != null) cache = cache.nextNode;
    return cache;
  }

  at(index) {
    let cache = this.root;
    let currentIndex = 0;
    if (index > this.size()) return null;
    while (currentIndex != index) {
      cache = cache.nextNode;
      currentIndex += 1;
    }
    return cache;
  }

  pop() {
    let num = this.size() - 2;
    let cache = this.at(num);
    delete cache.nextNode;
    cache.nextNode = null;
  }

  contains(arg) {
    let cache = this.root;
    while (cache.nextNode != null) {
      if (cache.value == arg) return true;
      cache = cache.nextNode;
    }
    return false;
  }

  find(arg) {
    let cache = this.root;
    for (let i = 1;; i++) {
      if (cache.value == arg) {
        return cache;
      } else if (i > this.size() - 1) {
        return null;
      } else cache = this.at(i);
    }
  }

  toString() {
    let cache = this.root;
    let string = `(${cache.value.toString()})`;
    while (cache.nextNode != null) {
      cache = cache.nextNode;
      string += ` -> (${cache.value})`;
    }
    return string;
  }

  insertAt(value, index) {
    let cache = this.at(index);
    let cacheNode = cache.nextNode;
    cache.nextNode = new Node(value, cacheNode);
  }

  removeAt(index) {
    let cache = this.at(index);
    let cacheNode = cache.nextNode;
    cache = this.at(index - 1);
    delete cache.nextNode;
    cache.nextNode = cacheNode;
  }
}
