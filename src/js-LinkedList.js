class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  //向链表末端添加元素
  append(element) {
    const node = new Node(element);
    let current;
    if ( this.length === 0) {
      this.head = node;
    } else {
      current = this.head;

      while (current.next !== null) {
        current = current.next;
      }

      current.next = node;
    }
    this.length++;
  }

   //插入元素，成功true，失败false
  insert(element, position) {

    if (!this.head) return false;

    let current = this.head;
    const node = new Node(element);

    if (position >=0 && position < this.length) {
      let preElement = null;
      let index = 0;

      if (position == 0) {
        node.next = current;
        this.head = node;
      } else {
        while (index++ < position) {
          preElement = current;
          current = current.next;
        }

        preElement.next = node;
        node.next = current;
      }
      this.length++;
      return true;
    } else {
      return false;
    }
  }

  //根据位置删除指定元素，成功 返回元素， 失败 返回null
  removeAt(position) {
    if (!this.head) return null;

    if (position >=0 && position < this.length) {
      let current = this.head;
      let preElement = null;
      let index = 0;

      if (position == 0) {
       this.head = current.next;
      } else {
        while (index++ < position) {
          preElement = current;
          current = current.next;
        }

        preElement.next = current.next;
      }
      this.length--;
      return current.element;
    } else {
      return null;
    }
  }

  //删除指定元素，成功 返回元素， 失败 返回null
  removeElement(element) {
    if (!this.head) return null;

    let index = this.indexOf(element);
    return this.removeAt(index);
  }

  //返回给定元素的索引，如果没有则返回-1
  indexOf(element) {
    if (!this.head) return -1;

    let current = this.head;
    let index = 0;

    while (index++ < this.length) {
      if (current.element == element) return index - 1;
      current = current.next;
    }

    return -1;
  }

  isEmpty() {
    return this.length == 0;
  }

  toString() {
    if (!this.head) return '';
    let str = '';
    let current = this.head;
    let index = 0;
    while (index++ < this.length) {
      str += (index - 1) + ':' + current.element + ',';
      current = current.next;
    }
    return '{' + str + '}';
  }

  size() {
    return this.length;
  }

  getHead() {
    return this.head;
  }
}

export default LinkedList;


// const linkedList = new LinkedList();

// linkedList.append(1)
// linkedList.append({age: 23})
// linkedList.append({sex: '男'})
// linkedList.insert(2,1)
// console.log(linkedList.removeElement(1))
