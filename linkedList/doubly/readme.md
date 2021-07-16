## Doubly Linked List Api

```ts
DataType<T> = {
	key: string|number
	value: T
}

// static method that creates a instance of `DoublyLinkedList` class.
DoublyLinkedList.createDL()

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
// head node & tail: O(1), other nodes: O(n)
update(key: string|number, newValue: any): object|boolean;

// Time Complexity:
// head node & tail node: O(1), other nodes: O(n)
search(key: string|number): object|null
```

<br>
<br>

## Examples
```ts
import { DoublyLinkedList } from "https://deno.land/x/datastructure/mod.ts";

const doublyLinkedList = DoublyLinkedList.createDL()

// iterator method returns a *generator function
const iterator = doublyLinkedList.iterator()
let iteratorNext = iterator.next()
// console.log(iteratorNext.next(), iteratorNext.next());
while (iteratorNext.done === false) {
	console.log(iteratorNext.value);
	iteratorNext = iterator.next()
}

// get the size of the linked list
doublyLinkedList.size

// insert in the head
doublyLinkedList.prepend({key: 'a', value: 'apple'})
doublyLinkedList.prepend({key: 'b', value: [1, 2, 3]})
doublyLinkedList.prepend({key: 11, value: {name: 'Sourav'}})

// insert in the tail
doublyLinkedList.append({key: 'c', value: 'add to last'})

// insert anywhere except head & tail
doublyLinkedList.add({key: 'x', value: 'X'}, 1)

// get data from head or tail of linked list
doublyLinkedList.getFromHead()
doublyLinkedList.getFromTail()

// console all values
doublyLinkedList.log()

// remove or delete data from linked list
doublyLinkedList.remove('a')

// update data in linked list
doublyLinkedList.update('a', [1, 4, 8])

// search data in the linked list
doublyLinkedList.search('Sourav')

```
