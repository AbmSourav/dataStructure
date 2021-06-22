import { DataType, BlockType } from "./helper.d.ts";
import { createHash } from "https://deno.land/std/hash/mod.ts";

function blockHash(index: number, data: DataType<any>, time: Date) {
	let hash = createHash("sha256")
	hash = hash.update(JSON.stringify(data) + index + time)

	return hash.toString();
}

export class Block {
	index: number
	data: DataType<any>
	hash: string
	prevHash: string|null
	time: Date

	constructor(data: DataType<any>, index: number) {
		this.index = index
		this.data = data
		this.time = new Date()
		this.hash = blockHash(index, data, this.time)
		this.prevHash = null;
	}

	regenerateHash() {
		const data: DataType<any>|any = this.data
		const hash = blockHash(this.index, data, this.time)

		return hash.toString();
	}
}
