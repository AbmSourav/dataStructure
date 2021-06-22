
export type DataType<T> = {
	key: string
	value: T
}

// BlockChain type of each block
export type BlockType = {
	index: number
	data: DataType<any>
	time: Date
	hash: string
	prevHash: null|string
}

// Block chain interface
export interface BlockChainApi {
	length: number
	createBlock(data: DataType<any>): boolean
	search(key: null|string, index: null|number): boolean|BlockType
	latestBlock(): boolean|BlockType
	log(key: null|string, index: null|number): void;
	iterator(): Generator
	checkValidation(): boolean
}
