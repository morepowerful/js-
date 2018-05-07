class Stack {
    constructor() {
        this.items = [];
    }

    push(item) {       //进栈
        this.items.push(item);
    }

    pop() {        //出栈
       return this.items.pop()
    }

    peek() {
        return this.items[this.items.length - 1]
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
        console.log(this.items.toString());
        
    }
}

//通过栈实现正整数转化为二进制
function divideBy2(decNumber){
    const stack = new Stack();
    let rem;
    let decString = '';
    while (decNumber > 0) {
        rem = decNumber % 2;
        stack.push(rem);
        decNumber = Math.floor(decNumber / 2);
    }

    while (!stack.isEmpty()) {
        decString += stack.pop().toString();
    }
    return decString;
}
console.log(divideBy2(10));//1010

export default Stack;