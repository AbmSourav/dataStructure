class SinglyNode {
    data;
    next;
    constructor(data1){
        this.data = data1;
        this.next = null;
    }
}
class SinglyLinkedList1 {
    head;
    tail;
    size;
    constructor(){
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    prepend(data) {
        if (this.head === null) {
            const newNode = new SinglyNode(data);
            this.head = newNode;
            this.tail = newNode;
            return true;
        }
        const currentNode = this.head;
        this.head = new SinglyNode(data);
        this.head.next = currentNode;
        if (currentNode.next === null) {
            this.tail = currentNode;
        }
        this.size++;
        return true;
    }
    append(data) {
        const newNode = new SinglyNode(data);
        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
            return true;
        }
        this.tail.next = newNode;
        this.tail = newNode;
        this.size++;
        return false;
    }
    add(data, position) {
        if (position === 0) {
            console.error("Use `prepend()` method to insert data at Head.");
            return false;
        } else if (position === this.size) {
            console.error("Use `append()` method to insert data at Tail.");
            return false;
        } else if (position > this.size && position != this.size + 1) {
            console.error(`Out of range. Size of the linkedList is ${this.size}`);
            return false;
        }
        let prevNode = null;
        let currentNode = this.head;
        let count = 0;
        while(currentNode !== null){
            if (count === position) {
                prevNode.next = new SinglyNode(data);
                prevNode.next.next = currentNode;
                this.size++;
            }
            prevNode = currentNode;
            currentNode = currentNode.next;
            count++;
        }
        return true;
    }
    getFromHead() {
        if (this.head === null) {
            return false;
        }
        return this.head.data;
    }
    getFromTail() {
        if (this.tail === null) {
            return false;
        }
        return this.tail.data;
    }
    print() {
        let currentNode = this.head;
        while(currentNode !== null){
            console.log(currentNode.data);
            currentNode = currentNode.next;
        }
    }
    remove(key) {
        if (this.head === null) {
            return false;
        } else if (this.head.next === null) {
            this.tail = null;
        }
        if (this.head.data.key === key) {
            const prevHeadData = this.head.data;
            this.head = this.head.next;
            if (this.head.next === null) this.tail = this.head;
            this.size--;
            if (this.head === null) this.size = 0;
            return prevHeadData;
        }
        let previousNode = null;
        let currentNode = this.head;
        while(currentNode !== null){
            if (key === currentNode.data.key) {
                const temp = currentNode.data;
                previousNode.next = currentNode.next;
                if (currentNode.next === null) this.tail = previousNode;
                this.size--;
                return temp;
            }
            previousNode = currentNode;
            currentNode = currentNode.next;
        }
        return false;
    }
    update(key, newValue) {
        if (this.head === null) {
            return false;
        }
        if (this.head.data.key === key) {
            this.head.data.value = newValue;
            return this.head.data;
        }
        if (this.tail.data.key === key) {
            this.tail.data.value = newValue;
            return this.tail.data;
        }
        let currentNode = this.head.next;
        while(currentNode !== null){
            if (currentNode.data.key === key) {
                currentNode.data.value = newValue;
                return currentNode.data;
            }
            currentNode = currentNode.next;
        }
        return false;
    }
    search(key) {
        if (this.head === null) {
            return null;
        }
        if (this.head.data.key === key) {
            return this.head.data;
        }
        if (this.tail.data.key === key) {
            return this.tail.data;
        }
        let currentNode = this.head.next;
        while(currentNode !== null){
            if (currentNode.data.key === key) {
                return currentNode.data;
            }
            currentNode = currentNode.next;
        }
        return null;
    }
}
class DoublyNode {
    data;
    next;
    prev;
    constructor(data2){
        this.data = data2;
        this.next = null;
        this.prev = null;
    }
}
class DoublyLinkedList1 {
    head;
    tail;
    size;
    constructor(){
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    prepend(data) {
        const newNode = new DoublyNode(data);
        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
            return true;
        }
        const currentNode = this.head;
        this.head = newNode;
        this.head.next = currentNode;
        currentNode.prev = newNode;
        this.size++;
        return true;
    }
    append(data) {
        const newNode = new DoublyNode(data);
        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
            return true;
        }
        const currentNode = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;
        this.tail.prev = currentNode;
        this.size++;
        return false;
    }
    add(data, position) {
        if (position === 0) {
            console.error("Use `prepend()` method to insert data at Head.");
            return false;
        } else if (position === this.size) {
            console.error("Use `append()` method to insert data at Tail.");
            return false;
        } else if (position > this.size && position != this.size + 1) {
            console.error(`Out of range. Size of the linkedList is ${this.size}`);
            return false;
        }
        let prevNode = null;
        let currentNode = this.head;
        let count = 0;
        while(currentNode !== null){
            if (count === position) {
                prevNode.next = new DoublyNode(data);
                prevNode.next.next = currentNode;
                prevNode.next.next.prev = prevNode.next;
                this.size++;
            }
            prevNode = currentNode;
            currentNode = currentNode.next;
            count++;
        }
        return true;
    }
    getFromHead() {
        if (this.head === null) {
            return false;
        }
        return this.head.data;
    }
    getFromTail() {
        if (this.tail === null) {
            return false;
        }
        return this.tail.data;
    }
    print() {
        let currentNode = this.head;
        while(currentNode !== null){
            console.log(currentNode.data);
            currentNode = currentNode.next;
        }
    }
    remove(key) {
        if (this.head === null) {
            return false;
        }
        if (this.head.data.key === key) {
            const prevHeadData = this.head.data;
            this.head = this.head.next;
            if (this.head === null) this.tail = this.head;
            this.size--;
            if (this.head === null) this.size = 0;
            return prevHeadData;
        }
        if (this.tail.data.key === key) {
            const prevTailData = this.tail.data;
            this.tail = this.tail.prev;
            this.tail.next = null;
            return prevTailData;
        }
        let previousNode = null;
        let currentNode = this.head;
        while(currentNode !== null){
            if (key === currentNode.data.key) {
                const temp = currentNode.data;
                previousNode.next = currentNode.next;
                currentNode.next.prev = previousNode;
                if (currentNode.next === null) this.tail = previousNode;
                this.size--;
                return temp;
            }
            previousNode = currentNode;
            currentNode = currentNode.next;
        }
        return false;
    }
    update(key, newValue) {
        if (this.head === null) {
            return false;
        }
        if (this.head.data.key === key) {
            this.head.data.value = newValue;
            return this.head.data;
        }
        if (this.tail.data.key === key) {
            this.tail.data.value = newValue;
            return this.tail.data;
        }
        let currentNode = this.head.next;
        while(currentNode !== null){
            if (currentNode.data.key === key) {
                currentNode.data.value = newValue;
                return currentNode.data;
            }
            currentNode = currentNode.next;
        }
        return false;
    }
    search(key) {
        if (this.head === null) {
            return null;
        }
        if (this.head.data.key === key) {
            return this.head.data;
        }
        if (this.tail.data.key === key) {
            return this.tail.data;
        }
        let currentNode = this.head.next;
        while(currentNode !== null){
            if (currentNode.data.key === key) {
                return currentNode.data;
            }
            currentNode = currentNode.next;
        }
        return null;
    }
}
class StackNode {
    data;
    next = null;
    constructor(data3){
        this.data = data3;
        this.next = null;
    }
}
class Stack1 {
    topNode;
    bottomNode;
    size;
    constructor(){
        this.topNode = null;
        this.bottomNode = null;
        this.size = 0;
    }
    getTop() {
        if (this.topNode === null) return null;
        return this.topNode.data;
    }
    getBottom() {
        if (this.topNode === null) return null;
        return this.bottomNode.data;
    }
    push(data) {
        const newNode = new StackNode(data);
        if (this.topNode === null) {
            this.topNode = newNode;
            this.bottomNode = newNode;
            return true;
        }
        newNode.next = this.topNode;
        if (newNode.next === null) {
            this.bottomNode = newNode.next;
        }
        this.topNode = newNode;
        this.size++;
        return true;
    }
    pop() {
        if (this.topNode === null) {
            return false;
        } else if (this.topNode.next === null) {
            this.bottomNode = null;
        }
        const node = this.topNode;
        this.topNode = node.next;
        this.size--;
        if (this.topNode === null) this.size = 0;
        return node.data;
    }
    search(key) {
        if (this.topNode === null) {
            return null;
        }
        if (key === this.topNode.data.key) {
            return this.topNode.data;
        }
        if (key === this.bottomNode.data.key) {
            return this.bottomNode.data;
        }
        let currentNode = this.topNode.next;
        while(currentNode !== null){
            if (key === currentNode.data.key) {
                return currentNode.data;
            }
            currentNode = currentNode.next;
        }
        return null;
    }
    update(key, newValue) {
        if (this.topNode === null) {
            return false;
        }
        if (key === this.topNode.data.key) {
            this.topNode.data.value = newValue;
            return this.topNode.data;
        }
        if (key === this.bottomNode.data.key) {
            this.bottomNode.data.value = newValue;
            return this.bottomNode.data;
        }
        let currentNode = this.topNode;
        while(currentNode !== null){
            if (key === currentNode.data.key) {
                currentNode.data.value = newValue;
                return currentNode.data;
            }
            currentNode = currentNode.next;
        }
        return false;
    }
}
class QueueNode {
    data;
    next = null;
    constructor(data4){
        this.data = data4;
        this.next = null;
    }
}
class Queue1 {
    frontNode;
    backNode;
    size;
    constructor(){
        this.frontNode = null;
        this.backNode = null;
        this.size = 0;
    }
    getFront() {
        if (this.frontNode === null) return null;
        return this.frontNode.data;
    }
    getBack() {
        if (this.frontNode === null) return null;
        return this.backNode.data;
    }
    enqueue(data) {
        const newNode = new QueueNode(data);
        if (this.frontNode === null) {
            this.frontNode = newNode;
            this.backNode = newNode;
            return true;
        }
        this.backNode.next = newNode;
        this.backNode = newNode;
        this.size++;
        return true;
    }
    dequeue() {
        if (this.frontNode === null) {
            return false;
        } else if (this.frontNode.next === null) {
            this.backNode = null;
        }
        const node = this.frontNode;
        this.frontNode = node.next;
        this.size--;
        if (this.frontNode === null) this.size = 0;
        return node.data;
    }
    search(key) {
        if (this.frontNode === null) {
            return null;
        }
        if (key === this.frontNode.data.key) {
            return this.frontNode.data;
        }
        if (key === this.backNode.data.key) {
            return this.backNode.data;
        }
        let currentNode = this.frontNode.next;
        while(currentNode !== null){
            if (key === currentNode.data.key) {
                return currentNode.data;
            }
            currentNode = currentNode.next;
        }
        return null;
    }
    update(key, newValue) {
        if (this.frontNode === null) {
            return false;
        }
        if (key === this.frontNode.data.key) {
            this.frontNode.data.value = newValue;
            return this.frontNode.data;
        }
        if (key === this.backNode.data.key) {
            this.backNode.data.value = newValue;
            return this.backNode.data;
        }
        let currentNode = this.frontNode.next;
        while(currentNode !== null){
            if (key === currentNode.data.key) {
                currentNode.data.value = newValue;
                return currentNode.data;
            }
            currentNode = currentNode.next;
        }
        return false;
    }
}
export { SinglyLinkedList1 as SinglyLinkedList };
export { DoublyLinkedList1 as DoublyLinkedList };
export { Stack1 as Stack };
export { Queue1 as Queue };
