## BlockChain Api
<p><code>sha256</code> has been used for creating Hashes.</p>

```ts
DataType<T> = {
	key: string|number
	value: T
}

// Time Complexity: O(1)
length: number;

// *generator function, it returens an iterator.
// loop through all blocks in the chain
iterator(): Generator

// Time Complexity: O(n)
// check for 'the blockChain is corrupted/manipulated or valid'. 
checkValidation(): boolean

// Time Complexity: O(1)
createBlock(data: any): boolean

// Time Complexity: O(1)
latestBlock(): boolean|BlockType

// Time Complexity: O(n)
log(): void;

// Time Complexity: O(n)
search(key: string): boolean|BlockType

```

<br>
<br>

## Examples
```ts
import { BlockChain } from "https://deno.land/x/datastructure/mod.ts";

const blockChain = new BlockChain()

// iterator method returns a *generator function
const iterator = blockChain.iterator()
let iteratorNext = iterator.next()
// console.log(iteratorNext.next(), iteratorNext.next());
while (iteratorNext.done === false) {
	console.log(iteratorNext.value);
	iteratorNext = iterator.next()
}

// length or count of total blocks.
blockChain.length

// create a block in the blockChain.
blockChain.createBlock({key: 'sourav', value: {name: "Sourav"}})
blockChain.createBlock({key: 'abm', value: "AbmSourav"})
blockChain.createBlock({key: 'JS', value: ['JS', 'TS']})

// get latest created block
blockChain.latestBlock()

// console all values
blockChain.log()

// searching data in in the blocks
blockChain.search('JS')

```
