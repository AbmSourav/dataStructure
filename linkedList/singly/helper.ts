
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
export interface LinkedListApi {
	size: number;
	prepend(data: string): boolean;
	append(data: string): boolean;
	add(data: string, position: number): boolean;
	getFromHead(): string|number|false;
	getFromTail(): string|number|false;
	print(): void;
	remove(value: string): boolean;
	update(oldValue: string|number, newValue: string|number): boolean;
}
