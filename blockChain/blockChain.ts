import { BlockChainApi, BlockType, DataType } from "./helper.d.ts";
import { Block } from "./blockNode.ts";
import {
// 	addGenerator,
// 	updateGenerator,
// 	searchGenerator,
	iteratorGenerator
} from "./generators.ts"

export class BlockChain implements BlockChainApi {
	#chain: Array<any>

	constructor() {
		this.#chain = new Array()
	}

	createBlock(data: DataType<any>) {
		const newBlock = new Block(data, this.#chain.length + 1)

		if (this.#chain.length === 0) {
			this.#chain.push(newBlock)

			return true
		}

		if (this.#chain.length > 0) {
			const prevBlock = this.latestBlock()
			newBlock.prevHash = prevBlock!.hash
			this.#chain.push(newBlock)

			return true
		}

		return false
	}

	// get(key: string) {
	// 	if (this.length === 0) {
	// 		return false
	// 	}

	// 	return this.#chain[hash]
	// }

	latestBlock() {
		if (this.#chain.length <= 0) return false
		return this.#chain[this.#chain.length - 1]
	}

	iterator() {
		return iteratorGenerator(this.#chain)
	}

	checkValidation() {
		const iterator = this.iterator()
		let iteratNext = iterator.next()
		let prevHash: null|string = null
		let prevBlock: null|BlockType = null

		while (iteratNext.value) {
			const block = iteratNext.value
			const regeneratedHash = block.regenerateHash()
			if (block.hash !== regeneratedHash) {
				console.error(`index: ${block.index}, block is corrupted`)
				return false
			}
			if (prevBlock != null && block.prevHash !== prevHash) {
				console.error(`index: ${prevBlock!.index}, block is corrupted`)
				return false
			}

			prevHash = block.regenerateHash()
			prevBlock = block
			iteratNext = iterator.next()
		}

		console.log('The Chain is valid.')
		return true
	}

	log() {
		console.log(this.#chain)
	}

	// test() {
	// 	this.#chain[1].data.key = '1'
	// }

}
