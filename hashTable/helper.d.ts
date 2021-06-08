
// data type
export type DataType<T> = {
	key: string
	value: T
}

export type NodeType = {
	data: DataType<any>
	next: null|NodeType
}|null

export interface HashTableApi {
	size: number
	add(data: DataType<any>): boolean
	remove(key: string): boolean|any[]
	log(column: string[]): void
}
