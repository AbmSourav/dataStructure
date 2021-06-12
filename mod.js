function hashFunction(str) {
    let hash = 17;
    for(let i = 0; i < str.length; i++){
        let newStr = str.charCodeAt(i) / 31;
        hash = 13.11 * hash * newStr / str.length;
    }
    return hash;
}
class HashNode {
    data;
    next;
    constructor(data1){
        this.data = data1;
        this.next = null;
    }
}
function* addGenerator(currentNode, newNode) {
    while(currentNode !== null){
        if (currentNode.next === null) {
            currentNode.next = newNode;
            yield true;
        }
        currentNode = currentNode.next;
    }
    return false;
}
function* removeGenerator(key, currentNode) {
    let prevNode = null;
    while(currentNode !== null){
        if (currentNode.data.key === key) {
            prevNode.next = currentNode.next;
            yield true;
        }
        prevNode = currentNode;
        currentNode = currentNode.next;
    }
    return false;
}
function* iteratorGenerator(table) {
    for(let key in table){
        yield table[key];
    }
    return false;
}
function* updateGenerator(key, newValue, currentNode) {
    while(currentNode !== null){
        if (currentNode.data.key === key) {
            currentNode.data.value = newValue;
            yield true;
        }
        currentNode = currentNode.next;
    }
    return false;
}
function* getGenerator(key, currentNode) {
    while(currentNode !== null){
        if (currentNode.data.key === key) {
            yield currentNode.data;
        }
        currentNode = currentNode.next;
    }
    return false;
}
class HashTable1 {
    table;
    length;
    constructor(){
        this.table = new Array();
        this.length = 0;
    }
    add(data) {
        const index = hashFunction(data.key);
        const node = new HashNode(data);
        if (this.table[index] === undefined) {
            this.table[index] = node;
            this.length++;
            return true;
        }
        if (this.table[index].next === null) {
            this.table[index].next = node;
            return true;
        }
        let currentNode = this.table[index].next;
        const iterator = addGenerator(currentNode, node);
        const iteratorNext = iterator.next();
        if (iteratorNext.value) {
            return true;
        }
        return false;
    }
    remove(key) {
        let index = hashFunction(key);
        if (this.table[index] === undefined) return false;
        if (this.table[index].data.key === key) {
            delete this.table[index];
            this.length--;
            return true;
        }
        if (this.table[index].next !== null) {
            let currentNode = this.table[index];
            const iterator = removeGenerator(key, currentNode);
            const iteratorNext = iterator.next();
            if (iteratorNext.value) {
                return true;
            }
        }
        return false;
    }
    update(key, newValue) {
        let index = hashFunction(key);
        if (this.table[index] === undefined) return false;
        if (this.table[index].data.key === key) {
            this.table[index].data.value = newValue;
            return this.table[index].data.value;
        }
        if (this.table[index].next !== null) {
            let currentNode = this.table[index];
            const iterator = updateGenerator(key, newValue, currentNode);
            const iteratorNext = iterator.next();
            if (iteratorNext.value) {
                return true;
            }
        }
        return false;
    }
    get(key) {
        let index = hashFunction(key);
        if (this.table[index] === undefined) return false;
        if (this.table[index].data.key === key) {
            return this.table[index].data;
        }
        if (this.table[index].next !== null) {
            let currentNode = this.table[index];
            const iterator = getGenerator(key, currentNode);
            const iteratorNext = iterator.next();
            if (iteratorNext.value) {
                return iteratorNext.value;
            }
        }
        return false;
    }
    log(column = []) {
        if (column.length > 0) {
            return console.table(this.table, column);
        }
        return console.table(this.table);
    }
    iterator() {
        const iterator = iteratorGenerator(this.table);
        return iterator;
    }
}
class SinglyNode {
    data;
    next;
    constructor(data2){
        this.data = data2;
        this.next = null;
    }
}
function* addGenerator1(currentNode, data3, position) {
    let count = 0;
    let prevNode = null;
    while(currentNode !== null){
        if (count === position) {
            prevNode.next = new SinglyNode(data3);
            prevNode.next.next = currentNode;
            yield true;
        }
        prevNode = currentNode;
        currentNode = currentNode.next;
        count++;
    }
    return false;
}
function* updateGenerator1(key, currentNode, newValue) {
    while(currentNode !== null){
        if (currentNode.data.key === key) {
            currentNode.data.value = newValue;
            yield currentNode.data;
        }
        currentNode = currentNode.next;
    }
    return false;
}
function* searchGenerator(key, currentNode) {
    while(currentNode !== null){
        if (currentNode.data.key === key) {
            yield currentNode.data;
        }
        currentNode = currentNode.next;
    }
    return false;
}
function* iteratorGenerator1(currentNode) {
    while(currentNode !== null){
        yield currentNode.data;
        currentNode = currentNode.next;
    }
    return false;
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
        let currentNode = this.head;
        const iterator = addGenerator1(currentNode, data, position);
        const iteratorNext = iterator.next();
        if (iteratorNext.value) {
            this.size++;
            return true;
        }
        return false;
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
    log() {
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
            return true;
        }
        let previousNode = null;
        let currentNode = this.head;
        while(currentNode !== null){
            if (key === currentNode.data.key) {
                const temp = currentNode.data;
                previousNode.next = currentNode.next;
                if (currentNode.next === null) this.tail = previousNode;
                this.size--;
                return true;
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
        const iterator = updateGenerator1(key, currentNode, newValue);
        const iteratorNext = iterator.next();
        if (iteratorNext.value) {
            return iteratorNext.value;
        }
        return false;
    }
    search(key) {
        if (this.head === null) {
            return false;
        }
        if (this.head.data.key === key) {
            return this.head.data;
        }
        if (this.tail.data.key === key) {
            return this.tail.data;
        }
        let currentNode = this.head.next;
        const iterator = searchGenerator(key, currentNode);
        const iteratorNext = iterator.next();
        if (iteratorNext.value) {
            return iteratorNext.value;
        }
        return false;
    }
    iterator() {
        const currentNode = this.head;
        const iterator = iteratorGenerator1(currentNode);
        return iterator;
    }
}
class DoublyNode {
    data;
    next;
    prev;
    constructor(data3){
        this.data = data3;
        this.next = null;
        this.prev = null;
    }
}
function* addGenerator2(currentNode, data4, position) {
    let count = 0;
    let prevNode = null;
    while(currentNode !== null){
        if (count === position) {
            prevNode.next = new DoublyNode(data4);
            prevNode.next.next = currentNode;
            yield true;
        }
        prevNode = currentNode;
        currentNode = currentNode.next;
        count++;
    }
    return false;
}
function* updateGenerator2(key, currentNode, newValue) {
    while(currentNode !== null){
        if (currentNode.data.key === key) {
            currentNode.data.value = newValue;
            yield currentNode.data;
        }
        currentNode = currentNode.next;
    }
    return false;
}
function* searchGenerator1(key, currentNode) {
    while(currentNode !== null){
        if (currentNode.data.key === key) {
            yield currentNode.data;
        }
        currentNode = currentNode.next;
    }
    return false;
}
function* iteratorGenerator2(currentNode) {
    while(currentNode !== null){
        yield currentNode.data;
        currentNode = currentNode.next;
    }
    return false;
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
        const iterator = addGenerator2(this.head, data, position);
        const iteratorNext = iterator.next();
        if (iteratorNext.value) {
            this.size++;
            return true;
        }
        return false;
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
    log() {
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
        const iterator = updateGenerator2(key, this.head, newValue);
        const iteratorNext = iterator.next();
        if (iteratorNext.value) {
            this.size++;
            return iteratorNext.value;
        }
        return false;
    }
    search(key) {
        if (this.head === null) {
            return false;
        }
        if (this.head.data.key === key) {
            return this.head.data;
        }
        if (this.tail.data.key === key) {
            return this.tail.data;
        }
        const iterator = searchGenerator1(key, this.head);
        const iteratorNext = iterator.next();
        if (iteratorNext.value) {
            this.size++;
            return iteratorNext.value;
        }
        return false;
    }
    iterator() {
        const iterator = iteratorGenerator2(this.head);
        return iterator;
    }
}
class StackNode {
    data;
    next = null;
    constructor(data4){
        this.data = data4;
        this.next = null;
    }
}
function* searchGenerator2(key, currentNode) {
    while(currentNode !== null){
        if (key === currentNode.data.key) {
            return currentNode.data;
        }
        currentNode = currentNode.next;
    }
    return false;
}
function* updateGenerator3(key, currentNode, newValue) {
    while(currentNode !== null){
        if (key === currentNode.data.key) {
            currentNode.data.value = newValue;
            return currentNode.data;
        }
        currentNode = currentNode.next;
    }
    return false;
}
function* iteratorGenerator3(currentNode) {
    while(currentNode !== null){
        yield currentNode.data;
        currentNode = currentNode.next;
    }
    return false;
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
            return false;
        }
        if (key === this.topNode.data.key) {
            return this.topNode.data;
        }
        if (key === this.bottomNode.data.key) {
            return this.bottomNode.data;
        }
        const iterator = searchGenerator2(key, this.topNode);
        const iteratorNext = iterator.next();
        if (iteratorNext.value) {
            return iteratorNext.value;
        }
        return false;
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
        const iterator = updateGenerator3(key, this.topNode, newValue);
        const iteratorNext = iterator.next();
        if (iteratorNext.value) {
            return iteratorNext.value;
        }
        return false;
    }
    log() {
        let currentNode = this.topNode;
        while(currentNode !== null){
            console.log(currentNode.data);
            currentNode = currentNode.next;
        }
    }
    iterator() {
        const iterator = iteratorGenerator3(this.topNode);
        return iterator;
    }
}
class QueueNode {
    data;
    next = null;
    constructor(data5){
        this.data = data5;
        this.next = null;
    }
}
function* searchGenerator3(key, currentNode) {
    while(currentNode !== null){
        if (key === currentNode.data.key) {
            return currentNode.data;
        }
        currentNode = currentNode.next;
    }
    return false;
}
function* updateGenerator4(key, currentNode, newValue) {
    while(currentNode !== null){
        if (key === currentNode.data.key) {
            currentNode.data.value = newValue;
            return currentNode.data;
        }
        currentNode = currentNode.next;
    }
    return false;
}
function* iteratorGenerator4(currentNode) {
    while(currentNode !== null){
        yield currentNode.data;
        currentNode = currentNode.next;
    }
    return false;
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
            return false;
        }
        if (key === this.frontNode.data.key) {
            return this.frontNode.data;
        }
        if (key === this.backNode.data.key) {
            return this.backNode.data;
        }
        const iterator = searchGenerator3(key, this.frontNode);
        const iteratorNext = iterator.next();
        if (iteratorNext.value) {
            return iteratorNext.value;
        }
        return false;
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
        const iterator = updateGenerator4(key, this.frontNode, newValue);
        const iteratorNext = iterator.next();
        if (iteratorNext.value) {
            return iteratorNext.value;
        }
        return false;
    }
    log() {
        const iterator = this.iterator();
        let iteratorNext = iterator.next();
        while(iteratorNext.done === false){
            console.log(iteratorNext.value);
            iteratorNext = iterator.next();
        }
    }
    iterator() {
        const iterator = iteratorGenerator4(this.frontNode);
        return iterator;
    }
}
export { HashTable1 as HashTable };
export { SinglyLinkedList1 as SinglyLinkedList };
export { DoublyLinkedList1 as DoublyLinkedList };
export { Stack1 as Stack };
export { Queue1 as Queue };
