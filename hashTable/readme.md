## Hash Table Api

```ts
// Time Complexity: O(1)
length: number

// *generator function, it returens an iterator.
iterator(): Generator

// Time Complexity: 
//  average cases: O(1)
//  worst case: O(n)
add(data: DataType<any>): boolean

// Time Complexity: 
//  average cases: O(1)
//  worst case: O(n)
remove(key: string): boolean|any[]

// Time Complexity: 
//  average cases: O(1)
//  worst case: O(n)
update(key: string, newValue: DataType<any>): boolean|DataType<any>

// Time Complexity: 
//  average cases: O(1)
//  worst case: O(n)
get(key: string): boolean|DataType<any>

// Time Complexity: O(n)
log(column: string[]): void,
```

<br>
<br>

## Example
```ts
import { HashTable } from "https://deno.land/x/datastructure/mod.ts";

const hashTable = new HashTable()

// add element in the hash table
// if hash keys are same, then it will create chaining with LinkedList
hashTable.add({key: "abm", value: "Sourav"})
hashTable.add({key: "apple", value: {company: "Apple Inc"}})
hashTable.add({key: "arr", value: [1, 2, 3]})

// remove element from hastabel
hashTable.remove("arr");

const iterator = hashTable.iterator()
let iteratorNext = iterator.next()
// console.log(iteratorNext.next(), iteratorNext.next());
while (iteratorNext.done === false) {
	console.log(iteratorNext.value);
	iteratorNext = iterator.next()
}

// get element from hash table
hashTable.get('abm')

// update elements using the key
hashTable.update('abm', {name: 'AbmSourav'})

// console all values
hashTable.log()
```
