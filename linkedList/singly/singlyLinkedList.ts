import { ILinkedList, NodeType, Node } from "./helper.ts";


export class SinglyLinkedList implements ILinkedList {
	head: null|NodeType
	tail: null|NodeType
	size: number

	constructor() {
		this.head = null
		this.tail = null
		this.size = 0
	}

	insertInHead(data: string) {
		if (this.head === null) {
			const newNode = new Node(data);
			this.head = newNode
			this.tail = newNode
			this.size++;
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

	insertInTail(data: string) {
		if (this.head === null) {
			const newNode = new Node(data);
			this.head = newNode
			this.tail = newNode
			this.size++;
			return true;
		}

		let currentNode = this.head
		while ( currentNode !== null ) {
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

	insertInPositonX(data: string, position: number) {
		if (position === 0) {
			console.error("Use `insertAtHead()` method to insert data at Head.");
			return false;
		} else if (position === this.size) {
			console.error("Use `insertAtTail()` method to insert data at Tail.");
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
			return null
		}

		return this.head.value;
	}

	getFromTail() {
		if (this.tail === null) {
			return null
		}

		return this.tail.value
	}

	printValues() {
		let currentNode = this.head
		while (currentNode !== null) {
			console.log(currentNode.value);
			currentNode = currentNode.next
		}
	}
}
