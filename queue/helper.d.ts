// data type
export type DataType<T> = {
	key: string|number
	value: T
}

export type QueueType = {
	data: DataType<any>
	next: null|QueueType
}|null

// Stack interface
export interface QueueApi {
	size: number;
	getFront(): null|DataType<any>
	getBack(): null|DataType<any>
	enqueue(data: DataType<any>): boolean
	dequeue(): boolean|DataType<any>
	search(key: string|number): boolean|DataType<any>
	update(key: string|number, newValue: any): boolean|DataType<any>
	log(): void
}
