import { QueueType, DataType, QueueApi, QueueNode } from "./helper.ts"

export class Queue implements QueueApi {
	public frontNode: QueueType
	private backNode: QueueType
	public size: number

	constructor() {
		this.frontNode = null
		this.backNode = null
		this.size = 0
	}

	getFront() {
		if (this.frontNode === null) return null
		return this.frontNode!.data
	}

	getBack() {
		if (this.frontNode === null) return null
		return this.backNode!.data
	}

	enqueue(data: DataType<any>) {
		const newNode = new QueueNode(data)
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

		return node!.data;
	}

	search(key: string|number) {
		if (this.frontNode === null) {
			return null
		}

		if (key === this.frontNode!.data.key) {
			return this.frontNode!.data
		}
		if (key === this.backNode!.data.key) {
			return this.backNode!.data
		}

		let currentNode = this.frontNode!.next
		while (currentNode !== null) {
			if (key === currentNode.data.key) {
				return currentNode.data
			}

			currentNode = currentNode.next
		}

		return null
	}

	update(key: string|number, newValue: any) {
		if (this.frontNode === null) {
			return false
		}

		if (key === this.frontNode!.data.key) {
			this.frontNode!.data.value = newValue
			return this.frontNode!.data
		}
		if (key === this.backNode!.data.key) {
			this.backNode!.data.value = newValue
			return this.backNode!.data
		}

		let currentNode = this.frontNode!.next
		while (currentNode !== null) {
			if (key === currentNode.data.key) {
				currentNode.data.value = newValue
				return currentNode.data
			}

			currentNode = currentNode.next
		}

		return false
	}
}
