## Queue Api

```ts
DataType<T> = {
	key: string|number
	value: T
}

// static method that creates a instance of Queue class.
Queue.createQueue()

// Time Complexity: O(1)
size: number;

// *generator function, it returens an iterator.
iterator(): Generator

// Time Complexity: O(1)
getFront(): number|DataType<any>

// Time Complexity: O(1)
getBack(): number|DataType<any>

// Time Complexity: O(1)
enqueue(data: DataType<any>): boolean

// Time Complexity: O(1)
dequeue(): boolean|DataType<any>

// Time Complexity:
// Front Node & Back Node:  O(1), other Nodes: O(n)
search(key: string|number): null|DataType<any>

// Time Complexity:
// Front Node & Back Node:  O(1), other Nodes: O(n)
update(key: string|number, newValue: any): boolean|DataType<any>

// Time Complexity: O(n)
log(): void;
```

<br>
<br>

## Example
```ts
import { Queue } from "https://deno.land/x/datastructure/mod.ts";

const queue = Queue.createQueue()

// add data in the Queue in a FIFO way
queue.enqueue({key: 'a', value: [1, 2, 5]})
queue.enqueue({key: 'sourav', value: {name: "Sourav"}})

// get and remove first added data from the Queue
queue.dequeue()

// get the item which added at first
queue.getFront()

// get the item which added at last
queue.getBack()

// search item data in the Queue
queue.search('sourav')

// update item data
queue.update('sourav', 'Abm Sourav')

// iterator method returns a *generator function
const iterator = queue.iterator()
let iteratorNext = iterator.next()
// console.log(iteratorNext.next(), iteratorNext.next());
while (iteratorNext.done === false) {
	console.log(iteratorNext.value);
	iteratorNext = iterator.next()
}

// console all values
queue.log()

```
