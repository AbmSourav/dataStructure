import { LinkedListApi, NodeType, Node } from "./helper.ts";


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
	prepend(data: string|number) {
		if (this.head === null) {
			const newNode = new Node(data);
			this.head = newNode
			this.tail = newNode
			// this.size++;
			return true;
		}

		const currentNode = this.head
		this.head = new Node(data)
		this.head.next = currentNode
		if (currentNode.next === null) {
			this.tail = currentNode
		}
		this.size++

		return true;
	}

	// inset in the tail
	append(data: string|number) {
		if (this.head === null) {
			const newNode = new Node(data);
			this.head = newNode
			this.tail = newNode
			// this.size++;
			return true;
		}

		let currentNode: NodeType = this.head
		while (currentNode !== null) {
			const newItem = new Node(data);
			this.tail = newItem

			if (currentNode.next === null) {
				currentNode.next = newItem

				this.size++;
				return true;
			}
			currentNode = currentNode.next
		}

		return false;
	}

	// add anywhere of the linked list except head & tail
	add(data: string|number, position: number) {
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
	
		let prevNode: NodeType = null;
		let currentNode = this.head
		let count = 0
		while (currentNode !== null) {
			if (count === position) {
				prevNode!.next = new Node(data)
				prevNode!.next.next = currentNode
				this.size++
			}
	
			prevNode = currentNode
			currentNode = currentNode.next
			count++
		}

		return true;
	}

	getFromHead() {
		if (this.head === null) {
			return false
		}

		return this.head.value;
	}

	getFromTail() {
		if (this.tail === null) {
			return false
		}

		return this.tail.value
	}

	print() {
		let currentNode = this.head
		while (currentNode !== null) {
			console.log(currentNode.value);
			currentNode = currentNode.next
		}
	}

	remove(value: string|number) {
		if (this.head === null) {
			return false;
		} else if (this.head!.next === null) {
			this.tail = null
		}
		if (this.head.value === value) {
			this.head = this.head.next
			if (this.head!.next === null) this.tail = this.head

			this.size--
			if (this.head === null) this.size = 0
			return true;
		}

		// two pointer approach
		let previousNode: NodeType = null;
		let currentNode: NodeType = this.head
		while (currentNode !== null) {
			if (value === currentNode.value) {
				previousNode!.next = currentNode.next
				if (currentNode!.next === null) this.tail = this.head

				this.size--
				return true;
			}

			previousNode = currentNode
			currentNode = currentNode.next
		}

		return false;
	}

	update(oldValue: string|number, newValue: string|number) {
		if (this.head === null) {
			return false;
		}
		if (this.head.value === oldValue) {
			this.head.value = newValue
			return true;
		}
		if (this.tail!.value === oldValue) {
			this.tail!.value = newValue
		}

		let currentNode: NodeType = this.head
		while (currentNode !== null) {
			if (oldValue === currentNode.value) {
				currentNode.value = newValue
				return true;
			}

			currentNode = currentNode.next
		}

		return false;
	}
}
