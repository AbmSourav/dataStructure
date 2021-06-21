
export type DataType<T> = {
	key: string
	value: T
}

// singly linked list node class
export type BlockType = {
	index: number
	data: DataType<any>
	time: Date
	hash: string
	prevHash: null|string
}|null

// singly linked list interface
export interface BlockChainApi {
	createBlock(data: any): boolean
	// get(key: string): boolean|BlockType
	latestBlock(): boolean|BlockType
	log(): void;
	iterator(): Generator
	checkValidation(): boolean
}
