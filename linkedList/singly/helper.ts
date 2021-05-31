
// singly linked list node class
export type NodeType = {
	value: string|number
	next: null|NodeType
}|null
 
export class Node {
	public value: string|number
	public next: NodeType|null = null

	constructor(data: string|number) {
		this.value = data;
		this.next = null;
	}
}

// singly linked list interface
export interface ILinkedList {
	size: number;
	prepend(data: string): boolean;
	append(data: string): boolean;
	add(data: string, position: number): boolean;
	print(): void
	remove(value: string): boolean
	update(oldValue: string|number, newValue: string|number): boolean
	// deleteNode(node: Node): void;
	// search(comparator: (data: T) => boolean): Node<T> | null;
}
