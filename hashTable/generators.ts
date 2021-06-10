import { NodeType } from "./helper.d.ts";

export function *addGenerator(currentNode: NodeType, newNode: NodeType) {
	while (currentNode !== null) {
		if (currentNode.next === null) {
			currentNode.next = newNode
			yield true
		}

		currentNode = currentNode.next
	}
	return false
}

export function *removeGenerator(key: string, currentNode: NodeType) {
	let prevNode: NodeType = null
	while (currentNode !== null) {
		if (currentNode.data.key === key) {
			prevNode!.next = currentNode.next
			yield true
		}
		
		prevNode = currentNode
		currentNode = currentNode.next
	}
	return false
}

export function *iteratorGenerator(table: Array<any>) {
	for (let key in table) {
		yield table[key]
	}
	return false
}

export function *updateGenerator(key: string, newValue: any, currentNode: NodeType) {
	while (currentNode !== null) {
		if (currentNode.data.key === key) {
			currentNode.data.value = newValue
			yield true
		}
		
		currentNode = currentNode.next
	}
	return false
}

export function *getGenerator(key: string, currentNode: NodeType) {
	while (currentNode !== null) {
		if (currentNode.data.key === key) {
			yield currentNode.data
		}
		
		currentNode = currentNode.next
	}
	return false
}
