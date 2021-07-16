## Singly Linked List Api

```ts
DataType<T> = {
	key: string|number
	value: T
}

// static method that creates a instance of `SinglyLinkedList` class.
SinglyLinkedList.createSL()

// Time Complexity: O(1)
size: number;

// *generator function, it returens an iterator.
iterator(): Generator

// Time Complexity: O(1)
prepend(data: DataType<any>): boolean;
append(data: DataType<any>): boolean;

// Time Complexity: O(n)
add(data: DataType<any>, position: number): boolean;

// Time Complexity: O(1)
getFromHead(): object|false;

// Time Complexity: O(1)
getFromTail(): object|false;

// Time Complexity: O(n)
log(): void;

// Time Complexity:
// head node: O(1), other nodes: O(n)
remove(key: string|number): object|boolean;

// Time Complexity:
// head & tail node: O(1), other nodes: O(n)
update(key: string|number, newValue: any): object|boolean;

// Time Complexity:
// head node & tail node: O(1), other nodes: O(n)
search(key: string|number): object|boolean
```

<br>
<br>

## Examples
```ts
import { SinglyLinkedList } from "https://deno.land/x/datastructure/mod.ts";

const singlyLinkedList = SinglyLinkedList.createSL()

// iterator method returns a *generator function
const iterator = singlyLinkedList.iterator()
let iteratorNext = iterator.next()
// console.log(iteratorNext.next(), iteratorNext.next());
while (iteratorNext.done === false) {
	console.log(iteratorNext.value);
	iteratorNext = iterator.next()
}

// linked list size
singlyLinkedList.size

// adding data at the head of linked list
singlyLinkedList.prepend({key: 'a', value: 'apple'})
singlyLinkedList.prepend({key: 'b', value: [1, 2, 3]})
singlyLinkedList.prepend({key: 11, value: 'add to head'})

// adding data at the tail of linked list
singlyLinkedList.append({key: 'c', value: 'add to last'})

// insert anywhere except head & tail
singlyLinkedList.add({key: 'x', value: 'X'}, 1)

// get data from head or tail
singlyLinkedList.getFromHead()
singlyLinkedList.getFromTail()

// console all values
singlyLinkedList.log()

// remove or delete data from linked list
singlyLinkedList.remove('a')

// update data in linked list
singlyLinkedList.update('a', [1, 4, 8])

// searching data in linked list
singlyLinkedList.search('Sourav')

```
