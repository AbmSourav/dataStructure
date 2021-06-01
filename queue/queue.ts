import { QueueType, QueueApi, QueueNode } from "./helper.ts"

export class Queue implements QueueApi {
	private frontNode: QueueType
	private backNode: QueueType
	public size: number

	constructor() {
		this.frontNode = null
		this.backNode = null
		this.size = 0
	}

	getFront() {
		return this.frontNode!.value
	}

	getBack() {
		return this.backNode!.value
	}

	enqueue(value: string|number) {
		const newNode = new QueueNode(value)
		if (this.frontNode === null) {
			// adding same pointer for frontNode & backNode
			this.frontNode = newNode
			this.backNode = newNode
			return true;
		}

		// pointer and it's greatness
		// frontNode & backNode both have same reference.
		// so backNode.next will also update frontNode.next

		// then in secound insertion frontNode & backNode pointers are changed,
		// but frontNode.next & backNode.next pointers are still same.
		// so backNode.next will also update frontNode.next
		this.backNode!.next = newNode
		this.backNode = newNode
		this.size++

		return true;
	}

	dequeue() {
		if (this.frontNode === null) {
			return false;
		} else if (this.frontNode!.next === null) {
			this.backNode = null
		}
		
		const node = this.frontNode
		this.frontNode = node!.next
		this.size--
		if (this.frontNode === null) this.size = 0

		return node!.value;
	}

	search(value: string|number) {
		if (this.frontNode === null) {
			return null
		}

		if (value === this.frontNode!.value) {
			return 0
		}
		if (value === this.backNode!.value) {
			return this.size
		}

		let count = 1
		let currentNode = this.frontNode!.next
		while (currentNode !== null) {
			if (value === currentNode.value) {
				return count
			}

			count++
			currentNode = currentNode.next
		}

		return null
	}

	update(oldValue: string|number, newValue: string|number) {
		if (this.frontNode === null) {
			return false
		}

		if (oldValue === this.frontNode!.value) {
			this.frontNode!.value = newValue
			return true
		}
		if (oldValue === this.backNode!.value) {
			this.backNode!.value = newValue
			return true
		}

		let currentNode = this.frontNode!.next
		while (currentNode !== null) {
			if (oldValue === currentNode.value) {
				currentNode.value = newValue
				return true
			}

			currentNode = currentNode.next
		}

		return false
	}
}
