export type QueueType = {
	value: string|number
	next: null|QueueType
}|null

export class QueueNode {
	public value: string|number
	public next: QueueType|null = null

	constructor(data: string|number) {
		this.value = data;
		this.next = null;
	}
}

// Stack interface
export interface QueueApi {
	size: number;
	getFront(): string|number
	getBack(): string|number
	enqueue(value: string|number): boolean
	dequeue(): string|number|boolean
	search(value: string|number): null|number
	update(oldValue: string|number, newValue: string|number): boolean
}
