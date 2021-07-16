import { StackType, DataType, StackApi } from "./helper.d.ts"
import { StackNode } from "./stackNode.ts"
import {
	searchGenerator,
	updateGenerator,
	iteratorGenerator
} from "./generators.ts"


export class Stack implements StackApi {
	#topNode: StackType
	#bottomNode: StackType
	public size: number

	constructor() {
		this.#topNode = null
		this.#bottomNode = null
		this.size = 0
	}

	static createStack() {
		return new this();
	}

	getTop() {
		if (this.#topNode === null) return null;
		return this.#topNode!.data
	}

	getBottom() {
		if (this.#topNode === null) return null;
		return this.#bottomNode!.data
	}

	push(data: DataType<any>) {
		const newNode = new StackNode(data)
		if (this.#topNode === null) {
			this.#topNode = newNode
			this.#bottomNode = newNode
			return true;
		}
		
		newNode.next = this.#topNode
		if (newNode.next === null) {
			this.#bottomNode = newNode.next
		}
		this.#topNode = newNode
		this.size++

		return true;
	}

	pop() {
		if (this.#topNode === null) {
			return false;
		} else if (this.#topNode!.next === null) {
			this.#bottomNode = null
		}
		
		const node = this.#topNode
		this.#topNode = node!.next
		this.size--
		if (this.#topNode === null) this.size = 0

		return node!.data;
	}

	search(key: string|number) {
		if (this.#topNode === null) {
			return false
		}

		if (key === this.#topNode!.data.key) {
			return this.#topNode!.data
		}
		if (key === this.#bottomNode!.data.key) {
			return this.#bottomNode!.data
		}

		// generator function that returns an iterator
		const iterator = searchGenerator(key, this.#topNode)
		const iteratorNext = iterator.next()
		if (iteratorNext.value) {
			return iteratorNext.value
		}

		return false
	}

	update(key: string|number, newValue: any) {
		if (this.#topNode === null) {
			return false
		}

		if (key === this.#topNode!.data.key) {
			this.#topNode!.data.value = newValue
			return this.#topNode!.data
		}
		if (key === this.#bottomNode!.data.key) {
			this.#bottomNode!.data.value = newValue
			return this.#bottomNode!.data
		}

		// generator function that returns an iterator
		const iterator = updateGenerator(key, this.#topNode, newValue)
		const iteratorNext = iterator.next()
		if (iteratorNext.value) {
			return iteratorNext.value
		}

		return false
	}

	log() {
		let currentNode = this.#topNode
		while (currentNode !== null) {
			console.log(currentNode.data);
			currentNode = currentNode.next
		}
	}

	iterator() {
		// generator function that returns an iterator
		const iterator = iteratorGenerator(this.#topNode)
		return iterator
	}
}
