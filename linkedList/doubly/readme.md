## Doubly Linked List Api

```ts
DataType<T> = {
	key: string|number
	value: T
}

// Time Complexity: O(1)
size: number;

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
print(): void;

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
import { SinglyLinkedList } from "https://deno.land/x/datastructure/mod.ts";

const singlyLinkedList = new SinglyLinkedList()

singlyLinkedList.size	// get the size of the linked list

singlyLinkedList.prepend({key: 'a', value: 'apple'})	// insert in the head
singlyLinkedList.prepend({key: 'b', value: [1, 2, 3]})
singlyLinkedList.prepend({key: 11, value: 'add to head'})

singlyLinkedList.append({key: 'c', value: 'add to last'})	// insert in the tail

singlyLinkedList.add({key: 'x', value: 'X'}, 1)	// insert anywhere except head & tail

singlyLinkedList.getFromHead()
singlyLinkedList.getFromTail()

singlyLinkedList.print()	// print all values

singlyLinkedList.remove('a')
singlyLinkedList.update('a', [1, 4, 8])

singlyLinkedList.search('Sourav')

```
