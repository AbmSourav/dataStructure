import { LinkedListApi, NodeType, DataType } from "./helper.d.ts";
import { DoublyNode } from "./doublyNode.ts";
import {
	addGenerator,
	updateGenerator,
	searchGenerator,
	iteratorGenerator
} from "./generators.ts"


export class DoublyLinkedList implements LinkedListApi {
	#head: null|NodeType
	#tail: null|NodeType
	public size: number

	constructor() {
		this.#head = null
		this.#tail = null
		this.size = 0
	}

	// insert in the head
	prepend(data: DataType<any>) {
		const newNode = new DoublyNode(data);
		if (this.#head === null) {
			this.#head = newNode
			this.#tail = newNode
			return true;
		}

		const currentNode = this.#head
		this.#head = newNode
		this.#head.next = currentNode
		currentNode.prev = newNode

		this.size++
		return true;
	}

	// inset in the tail
	append(data: DataType<any>) {
		const newNode = new DoublyNode(data);
		if (this.#head === null) {
			this.#head = newNode
			this.#tail = newNode
			return true;
		}

		const currentNode = this.#tail
		this.#tail!.next = newNode
		this.#tail = newNode
		this.#tail.prev = currentNode
		this.size++

		return false;
	}

	// // add anywhere of the linked list except head & tail
	add(data: DataType<any>, position: number) {
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
	
		// generator function that returns an iterator
		const iterator = addGenerator(this.#head, data, position)
		const iteratorNext = iterator.next()
		if (iteratorNext.value) {
			this.size++
			return true
		}

		return false;
	}

	getFromHead() {
		if (this.#head === null) {
			return false
		}

		return this.#head.data;
	}

	getFromTail() {
		if (this.#tail === null) {
			return false
		}

		return this.#tail.data
	}

	log() {
		let currentNode = this.#head
		while (currentNode !== null) {
			console.log(currentNode.data);
			currentNode = currentNode.next
		}
	}

	remove(key: string|number) {
		if (this.#head === null) {
			return false;
		}
		if (this.#head.data.key === key) {
			const prevHeadData = this.#head.data
			this.#head = this.#head.next
			if (this.#head === null) this.#tail = this.#head

			this.size--
			if (this.#head === null) this.size = 0
			return prevHeadData;
		}
		if (this.#tail!.data.key === key) {
			const prevTailData = this.#tail!.data
			
			this.#tail = this.#tail!.prev
			this.#tail!.next = null
			return prevTailData;
		}

		// two pointer approach
		let previousNode: NodeType = null;
		let currentNode: NodeType = this.#head
		while (currentNode !== null) {
			if (key === currentNode.data.key) {
				const temp = currentNode.data
				previousNode!.next = currentNode.next
				currentNode.next!.prev = previousNode
				if (currentNode!.next === null) this.#tail = previousNode

				this.size--
				return temp;
			}

			previousNode = currentNode
			currentNode = currentNode.next
		}

		return false;
	}

	update(key: string|number, newValue: any) {
		if (this.#head === null) {
			return false;
		}

		if (this.#head.data.key === key) {
			this.#head.data.value = newValue
			return this.#head.data;
		}
		if (this.#tail!.data.key === key) {
			this.#tail!.data.value = newValue
			return this.#tail!.data;
		}

		// generator function that returns an iterator
		const iterator = updateGenerator(key, this.#head, newValue)
		const iteratorNext = iterator.next()
		if (iteratorNext.value) {
			this.size++
			return iteratorNext.value
		}

		return false;
	}

	search(key: string|number) {
		if (this.#head === null) {
			return false;
		}

		if (this.#head.data.key === key) {
			return this.#head.data;
		}
		if (this.#tail!.data.key === key) {
			return this.#tail!.data
		}

		// generator function that returns an iterator
		const iterator = searchGenerator(key, this.#head)
		const iteratorNext = iterator.next()
		if (iteratorNext.value) {
			this.size++
			return iteratorNext.value
		}

		return false;
	}

	iterator() {
		// generator function that returns an iterator
		const iterator = iteratorGenerator(this.#head)
		return iterator
	}
}
