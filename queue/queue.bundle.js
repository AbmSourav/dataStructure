class QueueNode {
    data;
    next = null;
    constructor(data1){
        this.data = data1;
        this.next = null;
    }
}
function* searchGenerator(key, currentNode) {
    while(currentNode !== null){
        if (key === currentNode.data.key) {
            return currentNode.data;
        }
        currentNode = currentNode.next;
    }
    return false;
}
function* updateGenerator(key, currentNode, newValue) {
    while(currentNode !== null){
        if (key === currentNode.data.key) {
            currentNode.data.value = newValue;
            return currentNode.data;
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
class Queue1 {
    #frontNode;
    #backNode;
    size;
    constructor(){
        this.#frontNode = null;
        this.#backNode = null;
        this.size = 0;
    }
    static createQueue() {
        return new this();
    }
    getFront() {
        if (this.#frontNode === null) return null;
        return this.#frontNode.data;
    }
    getBack() {
        if (this.#frontNode === null) return null;
        return this.#backNode.data;
    }
    enqueue(data) {
        const newNode = new QueueNode(data);
        if (this.#frontNode === null) {
            this.#frontNode = newNode;
            this.#backNode = newNode;
            return true;
        }
        this.#backNode.next = newNode;
        this.#backNode = newNode;
        this.size++;
        return true;
    }
    dequeue() {
        if (this.#frontNode === null) {
            return false;
        } else if (this.#frontNode.next === null) {
            this.#backNode = null;
        }
        const node = this.#frontNode;
        this.#frontNode = node.next;
        this.size--;
        if (this.#frontNode === null) this.size = 0;
        return node.data;
    }
    search(key) {
        if (this.#frontNode === null) {
            return false;
        }
        if (key === this.#frontNode.data.key) {
            return this.#frontNode.data;
        }
        if (key === this.#backNode.data.key) {
            return this.#backNode.data;
        }
        const iterator = searchGenerator(key, this.#frontNode);
        const iteratorNext = iterator.next();
        if (iteratorNext.value) {
            return iteratorNext.value;
        }
        return false;
    }
    update(key, newValue) {
        if (this.#frontNode === null) {
            return false;
        }
        if (key === this.#frontNode.data.key) {
            this.#frontNode.data.value = newValue;
            return this.#frontNode.data;
        }
        if (key === this.#backNode.data.key) {
            this.#backNode.data.value = newValue;
            return this.#backNode.data;
        }
        const iterator = updateGenerator(key, this.#frontNode, newValue);
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
        const iterator = iteratorGenerator(this.#frontNode);
        return iterator;
    }
}
export { Queue1 as Queue };
