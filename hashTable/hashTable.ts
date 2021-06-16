import { HashTableApi, DataType } from "./helper.d.ts";
import { hashFunction } from "./hashFunction.ts";
import { HashNode } from "./hashNode.ts";
import { 
	addGenerator,
	removeGenerator,
	updateGenerator,
	getGenerator,
	iteratorGenerator
} from "./generators.ts";


export class HashTable implements HashTableApi {
	#table: Array<any>
	public length: number

	constructor() {
		this.#table = new Array()
		this.length = 0
	}

	add(data: DataType<any>) {
		const index = hashFunction(data.key)
		const node = new HashNode(data)

		if (this.#table[index] === undefined) {
			this.#table[index] = node
			this.length++
			return true
		}
		if (this.#table[index].next === null) {
			this.#table[index].next = node
			return true
		}

		let currentNode = this.#table[index].next
		// generator function that returns an iterator
		const iterator = addGenerator(currentNode, node)
		const iteratorNext = iterator.next()
		if (iteratorNext.value) {
			return true
		}
		
		return false;
	}

	remove(key: string) {
		let index = hashFunction(key)
		if (this.#table[index] === undefined) return false

		if (this.#table[index].data.key === key) {
			delete this.#table[index]
			this.length--
			return true;
		}

		if (this.#table[index].next !== null) {
			let currentNode = this.#table[index]
			// generator function that returns an iterator
			const iterator = removeGenerator(key, currentNode)
			const iteratorNext = iterator.next()
			if (iteratorNext.value) {
				return true
			}
		}

		return false
	}

	update(key: string, newValue: any) {
		let index = hashFunction(key)
		if (this.#table[index] === undefined) return false

		if (this.#table[index].data.key === key) {
			this.#table[index].data.value = newValue
			return this.#table[index].data.value;
		}

		if (this.#table[index].next !== null) {
			let currentNode = this.#table[index]
			// generator function that returns an iterator
			const iterator = updateGenerator(key, newValue, currentNode)
			const iteratorNext = iterator.next()
			if (iteratorNext.value) {
				return true
			}
		}
		
		return false
	}

	get(key: string) {
		let index = hashFunction(key)
		if (this.#table[index] === undefined) return false

		if (this.#table[index].data.key === key) {
			return this.#table[index].data;
		}

		if (this.#table[index].next !== null) {
			let currentNode = this.#table[index]
			// generator function that returns an iterator
			const iterator = getGenerator(key, currentNode)
			const iteratorNext = iterator.next()
			if (iteratorNext.value) {
				return iteratorNext.value
			}
		}

		return false
	}

	log(column: string[] = []) {
		if (column.length > 0) {
			return console.table(this.#table, column)
		}
		return console.table(this.#table);
	}

	iterator() {
		// generator function that returns an iterator
		const iterator = iteratorGenerator(this.#table)
		return iterator
	}
}
