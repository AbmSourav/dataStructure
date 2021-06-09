import { NodeType, DataType } from "./helper.d.ts";
import { SinglyNode } from "./singlyNode.ts";

export function *addGenerator(currentNode: NodeType, data: DataType<any>, position: number) {
	let count = 0
	let prevNode: NodeType = null;

	while (currentNode !== null) {
		if (count === position) {
			prevNode!.next = new SinglyNode(data)
			prevNode!.next.next = currentNode
			yield currentNode
		}

		prevNode = currentNode
		currentNode = currentNode.next
		count++
	}
	return false
}
