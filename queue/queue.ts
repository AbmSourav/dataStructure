import { QueueType, DataType, QueueApi } from "./helper.d.ts"
import { QueueNode } from "./queueNode.ts"
import {
	searchGenerator,
	updateGenerator,
	iteratorGenerator
} from "./generators.ts"


export class Queue implements QueueApi {
	#frontNode: QueueType
	#backNode: QueueType
	public size: number

	constructor() {
		this.#frontNode = null
		this.#backNode = null
		this.size = 0
	}

	getFront() {
		if (this.#frontNode === null) return null
		return this.#frontNode!.data
	}

	getBack() {
		if (this.#frontNode === null) return null
		return this.#backNode!.data
	}

	enqueue(data: DataType<any>) {
		const newNode = new QueueNode(data)
		if (this.#frontNode === null) {
			// adding same pointer for frontNode & backNode
			this.#frontNode = newNode
			this.#backNode = newNode
			return true;
		}

		// pointer and it's greatness
		this.#backNode!.next = newNode
		this.#backNode = newNode
		this.size++

		return true;
	}

	dequeue() {
		if (this.#frontNode === null) {
			return false;
		} else if (this.#frontNode!.next === null) {
			this.#backNode = null
		}
		
		const node = this.#frontNode
		this.#frontNode = node!.next
		this.size--
		if (this.#frontNode === null) this.size = 0

		return node!.data;
	}

	search(key: string|number) {
		if (this.#frontNode === null) {
			return false
		}

		if (key === this.#frontNode!.data.key) {
			return this.#frontNode!.data
		}
		if (key === this.#backNode!.data.key) {
			return this.#backNode!.data
		}

		// generator function that returns an iterator
		const iterator = searchGenerator(key, this.#frontNode)
		const iteratorNext = iterator.next()
		if (iteratorNext.value) {
			return iteratorNext.value
		}

		return false
	}

	update(key: string|number, newValue: any) {
		if (this.#frontNode === null) {
			return false
		}

		if (key === this.#frontNode!.data.key) {
			this.#frontNode!.data.value = newValue
			return this.#frontNode!.data
		}
		if (key === this.#backNode!.data.key) {
			this.#backNode!.data.value = newValue
			return this.#backNode!.data
		}

		// generator function that returns an iterator
		const iterator = updateGenerator(key, this.#frontNode, newValue)
		const iteratorNext = iterator.next()
		if (iteratorNext.value) {
			return iteratorNext.value
		}

		return false
	}

	log() {
		const iterator = this.iterator()
		let iteratorNext = iterator.next()
		
		while (iteratorNext.done === false) {
			console.log(iteratorNext.value);
			iteratorNext = iterator.next()
		}
	}

	iterator() {
		// generator function that returns an iterator
		const iterator = iteratorGenerator(this.#frontNode)
		return iterator
	}
}
