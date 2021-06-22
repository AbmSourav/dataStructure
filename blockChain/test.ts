import { BlockChain } from "./blockChain.ts";
// import { BlockChain } from "https://deno.land/x/datastructure/mod.ts";

const blockChain = new BlockChain()

blockChain.createBlock({key: 'sourav', value: "Sourav"})
blockChain.createBlock({key: 'abm', value: "AbmSourav"})
blockChain.createBlock({key: 'apple', value: "Apple Inc."})

// const iterator = blockChain.iterator()
// let iteratorNext = iterator.next()
// console.log(iterator.next(), iterator.next());
// while (iteratorNext.done === false) {
// 	console.log(iteratorNext.value);
// 	iteratorNext = iterator.next()
// }

// console.log(blockChain.latestBlock());

// blockChain.latestBlock().data.key = '1'
// console.log(blockChain.checkValidation());

// blockChain.log(null, 3)
console.log(blockChain.search('sourav'))
// console.log(blockChain.length)
