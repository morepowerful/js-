import LinkedList from './js-LinkedList.js';

class Node {
    constructor(element) {
        this.element = element;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList extends LinkedList {
    constructor() {
        super();
        this.tail = null;
    }

    append(element) {
        const node = new Node(element);
        const tailElement = this.tail;

        if (this.length == 0) {
            this.head = node;
            this.tail = node;
        } else {
            tailElement.next = node;
            this.tail = node;
            this.tail.prev = tailElement;
        }
        this.length++;
    }

    insert(element, position) {
        const node = new Node(element);
        let current = this.head;
        let preElement = null;
        let index = 0;

        if (!(position >=0 && position < this.length)) {
            return false;
        }

        if (position == 0) {
            node.next = current;
            current.prev = node;
            this.head = node;
            this.length++;
            return true;
        }
       
        while (index++ < position) {
            preElement = current;
            current = current.next;
        }

        this.length++;
        current.prev = node;
        preElement.next = node;
        node.prev = preElement;
        node.next = current;
        return true;
    }

    removeAt(position) {
        let current = this.head;
        let lastElement = this.tail;
        let preElement = null;
        let index = 0;

        if (position == 0) {
            this.head = current.next;
            this.head.prev = null;
        } else {
            if (position == this.length - 1) {
                current = lastElement;
                this.tail = current.prev;
                this.tail.next = null;
            } else {
                while (index++ < position) {
                    preElement = current;
                    current = current.next;
                }

                preElement.next = current.next;
                current.next.prev = preElement;
            }
        }

        this.length--;
        return current;
    }
}

export default DoublyLinkedList;


// const linkedList = new DoublyLinkedList();

// linkedList.append(1)
// linkedList.append({age: 23})
// linkedList.append({sex: '男'})
// linkedList.insert(2,1)
// console.log(linkedList.toString())