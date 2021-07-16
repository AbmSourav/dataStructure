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
    #table;
    length;
    constructor(){
        this.#table = new Array();
        this.length = 0;
    }
    static createHT() {
        return new this();
    }
    add(data) {
        const index = hashFunction(data.key);
        const node = new HashNode(data);
        if (this.#table[index] === undefined) {
            this.#table[index] = node;
            this.length++;
            return true;
        }
        if (this.#table[index].next === null) {
            this.#table[index].next = node;
            return true;
        }
        let currentNode = this.#table[index].next;
        const iterator = addGenerator(currentNode, node);
        const iteratorNext = iterator.next();
        if (iteratorNext.value) {
            return true;
        }
        return false;
    }
    remove(key) {
        let index = hashFunction(key);
        if (this.#table[index] === undefined) return false;
        if (this.#table[index].data.key === key) {
            delete this.#table[index];
            this.length--;
            return true;
        }
        if (this.#table[index].next !== null) {
            let currentNode = this.#table[index];
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
        if (this.#table[index] === undefined) return false;
        if (this.#table[index].data.key === key) {
            this.#table[index].data.value = newValue;
            return this.#table[index].data.value;
        }
        if (this.#table[index].next !== null) {
            let currentNode = this.#table[index];
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
        if (this.#table[index] === undefined) return false;
        if (this.#table[index].data.key === key) {
            return this.#table[index].data;
        }
        if (this.#table[index].next !== null) {
            let currentNode = this.#table[index];
            const iterator = getGenerator(key, currentNode);
            const iteratorNext = iterator.next();
            if (iteratorNext.value) {
                return iteratorNext.value;
            }
        }
        return false;
    }
    log(key) {
        if (this.length <= 0) return false;
        if (key) {
            let index = hashFunction(key);
            if (this.#table[index].data.key === key) {
                return console.log(this.#table[index]);
            }
            if (this.#table[index] && this.#table[index].next) {
                let currentNode = this.#table[index].next;
                while(currentNode){
                    if (currentNode.data.key === key) {
                        return console.log(currentNode);
                    }
                    currentNode = currentNode.next;
                }
            }
        }
        for(let cell in this.#table){
            console.log(this.#table[cell]);
        }
    }
    iterator() {
        const iterator = iteratorGenerator(this.#table);
        return iterator;
    }
}
export { HashTable1 as HashTable };
