import { StackType, StackApi, StackNode } from "./helper.ts"

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
		return this.topNode!.value
	}

	getBottom() {
		return this.bottomNode!.value
	}

	push(value: string|number) {
		if (this.size === 0) {
			this.topNode = new StackNode(value)
			this.bottomNode = new StackNode(value)
			this.size++
			return true;
		}
		const newNode = new StackNode(value)
		newNode.next = this.topNode
		if (newNode.next === null) {
			this.bottomNode = newNode.next
		}
		this.topNode = newNode
		this.size++

		return true;
	}

	pop() {
		if (this.size === 0) {
			return false;
		} else if (this.size === 1) {
			this.bottomNode = null
		}
		
		const node = this.topNode
		this.topNode = node!.next
		this.size--

		return node!.value;
	}

	search(value: string|number) {
		if (this.size === 0) {
			return null
		}

		if (value === this.topNode!.value) {
			return 0
		}
		if (value === this.bottomNode!.value) {
			return this.size + 1
		}

		let count = 0
		let currentNode = this.topNode
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
		if (this.size === 0) {
			return false
		}

		if (oldValue === this.topNode!.value) {
			this.topNode!.value = newValue
			return true
		}
		if (oldValue === this.bottomNode!.value) {
			this.bottomNode!.value = newValue
			return true
		}

		let currentNode = this.topNode
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
