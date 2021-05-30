
// singly linked list node class
export type NodeType = {
	value: string
	next: null|NodeType
}|null

export class Node {
	public value: string
	public next: NodeType|null = null

	constructor(data: string) {
		this.value = data;
		this.next = null;
	}
}

// singly linked list interface
export interface ILinkedList {
	size: number;
	insertInHead(data: string): boolean;
	insertInTail(data: string): boolean;
	insertInPositonX(data: string, position: number): boolean;
	printValues(): void
	// deleteNode(node: Node): void;
	// search(comparator: (data: T) => boolean): Node<T> | null;
}
