import { QueueType } from "./helper.d.ts";

export function *searchGenerator(key: string|number, currentNode: QueueType) {
	while (currentNode !== null) {
		if (key === currentNode.data.key) {
			return currentNode.data
		}
		currentNode = currentNode.next
	}
	return false
}

export function *updateGenerator(key: string|number, currentNode: QueueType, newValue: any) {
	while (currentNode !== null) {
		if (key === currentNode.data.key) {
			currentNode.data.value = newValue
			return currentNode.data
		}

		currentNode = currentNode.next
	}
	return false
}

export function *iteratorGenerator(currentNode: QueueType) {
	while (currentNode !== null) {
		yield currentNode.data;

		currentNode = currentNode.next
	}
	return false
}
