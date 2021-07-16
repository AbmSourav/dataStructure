## Stack Api

```ts
DataType<T> = {
	key: string|number
	value: T
}

// static method that creates a instance of `Stack` class.
Stack.createStack()

// Time Complexity: O(1)
size: number;

// *generator function, it returens an iterator.
iterator(): Generator

// Time Complexity: O(1)
getTop(): null|DataType<any>

// Time Complexity: O(1)
getBottom(): null|DataType<any>

// Time Complexity: O(1)
push(data: DataType<any>): boolean

// Time Complexity: O(1)
pop(): boolean|DataType<any>

// Time Complexity:
// Top Node & Bottom Node:  O(1), other Nodes: O(n)
search(key: string|number): null|DataType<any>

// Time Complexity:
// Top Node & Bottom Node:  O(1), other Nodes: O(n)
update(key: string|number, newValue: any): boolean|DataType<any>

// Time Complexity: O(n)
log(): void;
```

<br>
<br>

## Example
```ts
import { Stack } from "https://deno.land/x/datastructure/mod.ts";

const stack = Stack.createStack()

// stack length/size
stack.size

// iterator method returns a *generator function
const iterator = stack.iterator()
let iteratorNext = iterator.next()
// console.log(iteratorNext.next(), iteratorNext.next());
while (iteratorNext.done === false) {
	console.log(iteratorNext.value);
	iteratorNext = iterator.next()
}

// add data in the stack in a LIFO way
stack.push({key: 'a', value: 'apple'})
stack.push({key: 'b', value: [1, 2, 4]})
stack.push({key: 'b', value: {name: 'AbmSourav'}})

// get data from stack (LIFO)
stack.pop()

// searching data in the stack
stack.search('a');

// get the last added item of the stack
stack.getTop()

// get the item that added at fast
stack.getBottom()

// update stack item data
stack.update('a', {name: 'Abm Sourav'})

// console all values
stack.log()
```
