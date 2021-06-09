import { LinkedListApi, NodeType, DataType } from "./helper.d.ts";
import { SinglyNode } from "./singlyNode.ts";
import { addGenerator } from "./generators.ts"

export class SinglyLinkedList implements LinkedListApi {
	private head: null|NodeType
	private tail: null|NodeType
	public size: number

	constructor() {
		this.head = null
		this.tail = null
		this.size = 0
	}

	// insert in the head
	prepend(data: DataType<any>) {
		if (this.head === null) {
			const newNode = new SinglyNode(data);
			this.head = newNode
			this.tail = newNode
			return true;
		}

		const currentNode = this.head
		this.head = new SinglyNode(data)
		this.head.next = currentNode
		if (currentNode.next === null) {
			this.tail = currentNode
		}
		this.size++

		return true;
	}

	// inset in the tail
	append(data: DataType<any>) {
		const newNode = new SinglyNode(data);
		if (this.head === null) {
			this.head = newNode
			this.tail = newNode
			return true;
		}

		this.tail!.next = newNode
		this.tail = newNode
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
	
		let currentNode = this.head
		// *generator function for add method
		const iterator = addGenerator(currentNode, data, position)
		const iteratorNext = iterator.next()
		if (iteratorNext.value) {
			this.size++
		}

		return true;
	}

	getFromHead() {
		if (this.head === null) {
			return false
		}

		return this.head.data;
	}

	getFromTail() {
		if (this.tail === null) {
			return false
		}

		return this.tail.data
	}

	print() {
		let currentNode = this.head
		while (currentNode !== null) {
			console.log(currentNode.data);
			currentNode = currentNode.next
		}
	}

	remove(key: string|number) {
		if (this.head === null) {
			return false;
		} else if (this.head!.next === null) {
			this.tail = null
		}
		if (this.head.data.key === key) {
			const prevHeadData = this.head.data
			this.head = this.head.next
			if (this.head!.next === null) this.tail = this.head

			this.size--
			if (this.head === null) this.size = 0
			return prevHeadData;
		}

		// two pointer approach
		let previousNode: NodeType = null;
		let currentNode: NodeType = this.head
		while (currentNode !== null) {
			if (key === currentNode.data.key) {
				const temp = currentNode.data
				previousNode!.next = currentNode.next
				if (currentNode!.next === null) this.tail = previousNode

				this.size--
				return temp;
			}

			previousNode = currentNode
			currentNode = currentNode.next
		}

		return false;
	}

	update(key: string|number, newValue: any) {
		if (this.head === null) {
			return false;
		}

		if (this.head.data.key === key) {
			this.head.data.value = newValue
			return this.head.data;
		}
		if (this.tail!.data.key === key) {
			this.tail!.data.value = newValue
			return this.tail!.data;
		}

		let currentNode = this.head.next
		while (currentNode !== null) {
			if (currentNode.data.key === key) {
				currentNode.data.value = newValue
				return currentNode.data;
			}

			currentNode = currentNode.next
		}

		return false;
	}

	search(key: string|number) {
		if (this.head === null) {
			return null;
		}

		if (this.head.data.key === key) {
			return this.head.data;
		}
		if (this.tail!.data.key === key) {
			return this.tail!.data
		}

		let currentNode = this.head.next
		while (currentNode !== null) {
			if (currentNode.data.key === key) {
				return currentNode.data;
			}

			currentNode = currentNode.next
		}

		return null;
	}
}
