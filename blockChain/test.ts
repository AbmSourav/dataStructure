import { BlockChain } from "./blockChain.ts";

const blockChain = new BlockChain()

blockChain.createBlock({key: 'sourav', value: "Sourav"})
blockChain.createBlock({key: 'abm', value: "AbmSourav"})
blockChain.createBlock({key: 'apple', value: "Apple Inc."})

const it = blockChain.iterator()
console.log(it.next(), it.next(), it.next(), it.next());

// const latestBlock = blockChain.latestBlock()
// console.log(latestBlock);

// latestBlock.data.key = '1'
// blockChain.test()
// console.log(blockChain.checkValidation());

// blockChain.log()
// console.log(blockChain.search('apple'))
console.log(blockChain.length)
