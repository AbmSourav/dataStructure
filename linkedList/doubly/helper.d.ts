
// data type
export type DataType<T> = {
	key: string|number
	value: T
}

// singly linked list node class
export type NodeType = {
	data: DataType<any>
	next: null|NodeType
	prev: null|NodeType
}|null

// singly linked list interface
export interface LinkedListApi {
	size: number;
	prepend(data: DataType<any>): boolean;
	append(data: DataType<any>): boolean;
	add(data: DataType<any>, position: number): boolean;
	getFromHead(): object|false;
	getFromTail(): object|false;
	print(): void;
	remove(key: string|number): object|boolean;
	update(key: string|number, newValue: any): object|boolean;
	search(key: string|number): object|null
}
