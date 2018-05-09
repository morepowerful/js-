class Queue {              //队列
    constructor() {
        this.items = [];
    }

    enqueue(item) {       //入列
        this.items.push(item);
    }

    dequeue() {        //出列
       return this.items.shift()
    }

    front() {
        return this.items[0]
    }

    isEmpty() {
        return this.items.length === 0;
    }

    clear() {
        this.items = [];
    }

    size() {
        return this.items.length;
    }

    print() {
        console.log(this.items.reverse().toString());
        
    }
}


class PriorityQueue extends Queue {     //优先队列
    constructor() {
        super();
    }

    enqueue(item, priority) {
        const queueElement = { item, priority };
        const _this = this;
        
        function addPiorityQueue() {
            let isAdd = false;
            for (let i = 0; i < _this.items.length; i++) {
                if (queueElement.priority > _this.items[i].priority) {
                    _this.items.splice(i, 0, queueElement);
                    isAdd = true;
                    break
                }
            }
            
            if (!isAdd) {
                _this.items.push(queueElement);
            }
        }
        this.isEmpty() ? this.items.push(queueElement) : addPiorityQueue();
    }

    print() {
        console.log(JSON.stringify(this.items.reverse()));
    }
}

export { Queue, PriorityQueue }

// const priorityQueue = new PriorityQueue();
// priorityQueue.enqueue('liudong', 3)
// priorityQueue.enqueue('liudong1', 4)
// priorityQueue.enqueue('liudong2', 1)
// // priorityQueue.dequeue()
// priorityQueue.print();