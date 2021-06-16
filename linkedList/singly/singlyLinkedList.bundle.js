class SinglyNode {
    data;
    next;
    constructor(data1){
        this.data = data1;
        this.next = null;
    }
}
function* addGenerator(currentNode, data1, position) {
    let count = 0;
    let prevNode = null;
    while(currentNode !== null){
        if (count === position) {
            prevNode.next = new SinglyNode(data1);
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
class SinglyLinkedList1 {
    #head;
    #tail;
    size;
    constructor(){
        this.#head = null;
        this.#tail = null;
        this.size = 0;
    }
    prepend(data) {
        if (this.#head === null) {
            const newNode = new SinglyNode(data);
            this.#head = newNode;
            this.#tail = newNode;
            return true;
        }
        const currentNode = this.#head;
        this.#head = new SinglyNode(data);
        this.#head.next = currentNode;
        if (currentNode.next === null) {
            this.#tail = currentNode;
        }
        this.size++;
        return true;
    }
    append(data) {
        const newNode = new SinglyNode(data);
        if (this.#head === null) {
            this.#head = newNode;
            this.#tail = newNode;
            return true;
        }
        this.#tail.next = newNode;
        this.#tail = newNode;
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
        let currentNode = this.#head;
        const iterator = addGenerator(currentNode, data, position);
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
        } else if (this.#head.next === null) {
            this.#tail = null;
        }
        if (this.#head.data.key === key) {
            const prevHeadData = this.#head.data;
            this.#head = this.#head.next;
            if (this.#head.next === null) this.#tail = this.#head;
            this.size--;
            if (this.#head === null) this.size = 0;
            return true;
        }
        let previousNode = null;
        let currentNode = this.#head;
        while(currentNode !== null){
            if (key === currentNode.data.key) {
                const temp = currentNode.data;
                previousNode.next = currentNode.next;
                if (currentNode.next === null) this.#tail = previousNode;
                this.size--;
                return true;
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
        let currentNode = this.#head.next;
        const iterator = updateGenerator(key, currentNode, newValue);
        const iteratorNext = iterator.next();
        if (iteratorNext.value) {
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
        let currentNode = this.#head.next;
        const iterator = searchGenerator(key, currentNode);
        const iteratorNext = iterator.next();
        if (iteratorNext.value) {
            return iteratorNext.value;
        }
        return false;
    }
    iterator() {
        const currentNode = this.#head;
        const iterator = iteratorGenerator(currentNode);
        return iterator;
    }
}
export { SinglyLinkedList1 as SinglyLinkedList };
