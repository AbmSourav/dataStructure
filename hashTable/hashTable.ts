import { HashTableApi, NodeType, DataType } from "./helper.d.ts";
import { hashFunction } from "./hashFunction.ts";
import { HashNode } from "./hashNode.ts";

export class HashTable implements HashTableApi {
	private table: Array<any>
	public size: number

	constructor() {
		this.table = new Array(10)
		this.size = 0
	}

	add(data: DataType<any>) {
		const index = hashFunction(data.key)
		const node = new HashNode(data)

		if (this.table[index] !== undefined) {
			this.table[index].next = node
			return true;
		}
		this.table[index] = node
		this.size++;
		return true
	}

	remove(key: string) {
		let index = hashFunction(key)
		if (this.table[index] !== undefined) {
			if (this.table[index].data.key === key) {
				const data = this.table[index].data
				delete this.table[index]
				this.size--
				return data;
			}
		}

		return false
	}

	log(column: string[] = []) {
		if (column.length > 0) {
			return console.table(this.table, column)
		}
		return console.table(this.table);
	}
}
