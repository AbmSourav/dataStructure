class DoublyNode {
    data;
    next;
    prev;
    constructor(data1){
        this.data = data1;
        this.next = null;
        this.prev = null;
    }
}
function* addGenerator(currentNode, data1, position) {
    let count = 0;
    let prevNode = null;
    while(currentNode !== null){
        if (count === position) {
            prevNode.next = new DoublyNode(data1);
            prevNode.next.next = currentNode;
            yield true;
        }
        prevNode = currentNode;
        currentNode = currentNode.next;
        count++;
    }
    return false;
}
function* updateGenerator(key, currentNode, newValue) {
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
function* iteratorGenerator(currentNode) {
    while(currentNode !== null){
        yield currentNode.data;
        currentNode = currentNode.next;
    }
    return false;
}
class DoublyLinkedList1 {
    #head;
    #tail;
    size;
    constructor(){
        this.#head = null;
        this.#tail = null;
        this.size = 0;
    }
    prepend(data) {
        const newNode = new DoublyNode(data);
        if (this.#head === null) {
            this.#head = newNode;
            this.#tail = newNode;
            return true;
        }
        const currentNode = this.#head;
        this.#head = newNode;
        this.#head.next = currentNode;
        currentNode.prev = newNode;
        this.size++;
        return true;
    }
    append(data) {
        const newNode = new DoublyNode(data);
        if (this.#head === null) {
            this.#head = newNode;
            this.#tail = newNode;
            return true;
        }
        const currentNode = this.#tail;
        this.#tail.next = newNode;
        this.#tail = newNode;
        this.#tail.prev = currentNode;
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
        const iterator = addGenerator(this.#head, data, position);
        const iteratorNext = iterator.next();
        if (iteratorNext.value) {
            this.size++;
            return true;
        }
        return false;
    }
    getFromHead() {
        if (this.#head === null) {
            return false;
        }
        return this.#head.data;
    }
    getFromTail() {
        if (this.#tail === null) {
            return false;
        }
        return this.#tail.data;
    }
    log() {
        let currentNode = this.#head;
        while(currentNode !== null){
            console.log(currentNode.data);
            currentNode = currentNode.next;
        }
    }
    remove(key) {
        if (this.#head === null) {
            return false;
        }
        if (this.#head.data.key === key) {
            const prevHeadData = this.#head.data;
            this.#head = this.#head.next;
            if (this.#head === null) this.#tail = this.#head;
            this.size--;
            if (this.#head === null) this.size = 0;
            return prevHeadData;
        }
        if (this.#tail.data.key === key) {
            const prevTailData = this.#tail.data;
            this.#tail = this.#tail.prev;
            this.#tail.next = null;
            return prevTailData;
        }
        let previousNode = null;
        let currentNode = this.#head;
        while(currentNode !== null){
            if (key === currentNode.data.key) {
                const temp = currentNode.data;
                previousNode.next = currentNode.next;
                currentNode.next.prev = previousNode;
                if (currentNode.next === null) this.#tail = previousNode;
                this.size--;
                return temp;
            }
            previousNode = currentNode;
            currentNode = currentNode.next;
        }
        return false;
    }
    update(key, newValue) {
        if (this.#head === null) {
            return false;
        }
        if (this.#head.data.key === key) {
            this.#head.data.value = newValue;
            return this.#head.data;
        }
        if (this.#tail.data.key === key) {
            this.#tail.data.value = newValue;
            return this.#tail.data;
        }
        const iterator = updateGenerator(key, this.#head, newValue);
        const iteratorNext = iterator.next();
        if (iteratorNext.value) {
            this.size++;
            return iteratorNext.value;
        }
        return false;
    }
    search(key) {
        if (this.#head === null) {
            return false;
        }
        if (this.#head.data.key === key) {
            return this.#head.data;
        }
        if (this.#tail.data.key === key) {
            return this.#tail.data;
        }
        const iterator = searchGenerator(key, this.#head);
        const iteratorNext = iterator.next();
        if (iteratorNext.value) {
            this.size++;
            return iteratorNext.value;
        }
        return false;
    }
    iterator() {
        const iterator = iteratorGenerator(this.#head);
        return iterator;
    }
}
export { DoublyLinkedList1 as DoublyLinkedList };
