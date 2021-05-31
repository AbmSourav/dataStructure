export type StackType = {
	value: string|number
	next: null|StackType
}|null

export class StackNode {
	public value: string|number
	public next: StackType|null = null

	constructor(data: string|number) {
		this.value = data;
		this.next = null;
	}
}

// Stack interface
export interface StackApi {
	size: number;
	getTop(): string|number
	getBottom(): string|number
	push(value: string|number): boolean
	pop(): string|number|boolean
	search(value: string|number): null|number
	update(oldValue: string|number, newValue: string|number): boolean
}
