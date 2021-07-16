class StackNode {
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
class Stack1 {
    #topNode;
    #bottomNode;
    size;
    constructor(){
        this.#topNode = null;
        this.#bottomNode = null;
        this.size = 0;
    }
    static createStack() {
        return new this();
    }
    getTop() {
        if (this.#topNode === null) return null;
        return this.#topNode.data;
    }
    getBottom() {
        if (this.#topNode === null) return null;
        return this.#bottomNode.data;
    }
    push(data) {
        const newNode = new StackNode(data);
        if (this.#topNode === null) {
            this.#topNode = newNode;
            this.#bottomNode = newNode;
            return true;
        }
        newNode.next = this.#topNode;
        if (newNode.next === null) {
            this.#bottomNode = newNode.next;
        }
        this.#topNode = newNode;
        this.size++;
        return true;
    }
    pop() {
        if (this.#topNode === null) {
            return false;
        } else if (this.#topNode.next === null) {
            this.#bottomNode = null;
        }
        const node = this.#topNode;
        this.#topNode = node.next;
        this.size--;
        if (this.#topNode === null) this.size = 0;
        return node.data;
    }
    search(key) {
        if (this.#topNode === null) {
            return false;
        }
        if (key === this.#topNode.data.key) {
            return this.#topNode.data;
        }
        if (key === this.#bottomNode.data.key) {
            return this.#bottomNode.data;
        }
        const iterator = searchGenerator(key, this.#topNode);
        const iteratorNext = iterator.next();
        if (iteratorNext.value) {
            return iteratorNext.value;
        }
        return false;
    }
    update(key, newValue) {
        if (this.#topNode === null) {
            return false;
        }
        if (key === this.#topNode.data.key) {
            this.#topNode.data.value = newValue;
            return this.#topNode.data;
        }
        if (key === this.#bottomNode.data.key) {
            this.#bottomNode.data.value = newValue;
            return this.#bottomNode.data;
        }
        const iterator = updateGenerator(key, this.#topNode, newValue);
        const iteratorNext = iterator.next();
        if (iteratorNext.value) {
            return iteratorNext.value;
        }
        return false;
    }
    log() {
        let currentNode = this.#topNode;
        while(currentNode !== null){
            console.log(currentNode.data);
            currentNode = currentNode.next;
        }
    }
    iterator() {
        const iterator = iteratorGenerator(this.#topNode);
        return iterator;
    }
}
export { Stack1 as Stack };
