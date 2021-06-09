import { HashTableApi, NodeType, DataType } from "./helper.d.ts";
import { hashFunction } from "./hashFunction.ts";
import { HashNode } from "./hashNode.ts";

export class HashTable implements HashTableApi {
	public table: Array<any>
	public length: number

	constructor() {
		this.table = new Array()
		this.length = 0
	}

	add(data: DataType<any>) {
		const index = hashFunction(data.key)
		const node = new HashNode(data)

		if (this.table[index] === undefined) {
			this.table[index] = node
			this.length++
			return true
		}
		
		let currentNode = this.table[index].next
		while (currentNode !== null) {
			if (currentNode.next === null) {
				currentNode.next = node
				return true
			}

			currentNode = currentNode.next
		}
		this.table[index].next = node
		return true;
	}

	remove(key: string) {
		let index = hashFunction(key)
		if (this.table[index] !== undefined) {
			if (this.table[index].data.key === key) {
				delete this.table[index]
				this.length--
				return true;
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
