import { StackType, DataType, StackApi } from "./helper.d.ts"
import { StackNode } from "./stackNode.ts"

export class Stack implements StackApi {
	private topNode: StackType
	private bottomNode: StackType
	public size: number

	constructor() {
		this.topNode = null
		this.bottomNode = null
		this.size = 0
	}

	getTop() {
		if (this.topNode === null) return null;
		return this.topNode!.data
	}

	getBottom() {
		if (this.topNode === null) return null;
		return this.bottomNode!.data
	}

	push(data: DataType<any>) {
		const newNode = new StackNode(data)
		if (this.topNode === null) {
			this.topNode = newNode
			this.bottomNode = newNode
			return true;
		}
		
		newNode.next = this.topNode
		if (newNode.next === null) {
			this.bottomNode = newNode.next
		}
		this.topNode = newNode
		this.size++

		return true;
	}

	pop() {
		if (this.topNode === null) {
			return false;
		} else if (this.topNode!.next === null) {
			this.bottomNode = null
		}
		
		const node = this.topNode
		this.topNode = node!.next
		this.size--
		if (this.topNode === null) this.size = 0

		return node!.data;
	}

	search(key: string|number) {
		if (this.topNode === null) {
			return null
		}

		if (key === this.topNode!.data.key) {
			return this.topNode!.data
		}
		if (key === this.bottomNode!.data.key) {
			return this.bottomNode!.data
		}

		let currentNode = this.topNode!.next
		while (currentNode !== null) {
			if (key === currentNode.data.key) {
				return currentNode.data
			}
			currentNode = currentNode.next
		}

		return null
	}

	update(key: string|number, newValue: any) {
		if (this.topNode === null) {
			return false
		}

		if (key === this.topNode!.data.key) {
			this.topNode!.data.value = newValue
			return this.topNode!.data
		}
		if (key === this.bottomNode!.data.key) {
			this.bottomNode!.data.value = newValue
			return this.bottomNode!.data
		}

		let currentNode: StackType = this.topNode
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
