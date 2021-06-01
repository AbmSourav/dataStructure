# Data Structure

Implement different Data Structures using TypeScript.
Use this library API to create different Data Structures.
<br>
This library is also available as **[Deno Third party Module](https://deno.land/x/datastructure)**

<br>

## Singly Linked List
```ts
import { SinglyLinkedList } from "https://deno.land/x/datastructure/mod.ts";

const singlyLinkedList = new SinglyLinkedList()

// Time Complexity: O(1)
singlyLinkedList.size	// get the size of the linked list

// Time Complexity: O(1)
singlyLinkedList.prepend('a')	// insert in the head

// Time Complexity: O(n)
singlyLinkedList.append('c')	// insert in the tail

// Time Complexity: O(n)
singlyLinkedList.add('x', 2)	// insert anywhere except head & tail

// Time Complexity: O(1)
singlyLinkedList.getFromHead()
// Time Complexity: O(1)
singlyLinkedList.getFromTail()

// Time Complexity: O(n)
singlyLinkedList.print()	// print all values

// Time Complexity:
// head node: O(1), other nodes: O(n)
singlyLinkedList.remove('a')

// Time Complexity:
// head node: O(1), other nodes: O(n)
singlyLinkedList.update('a', 'apple')
```

<br>
<br>

## Stack
```ts
import { Stack } from "https://deno.land/x/datastructure/mod.ts";

const stack = new Stack()

// Time Complexity: O(1)
stack.size

// Time Complexity: O(1)
// return: boolean
stack.push('Sourav')

// Time Complexity: O(1)
// return: string|number|boolean
stack.pop()

// Time Complexity:
//	Top Node & Bottom Node:  O(1), other Nodes: O(n)
// return: null|number [number: position of the item]
stack.search('Sourav');

// Time Complexity: O(1)
// return: string|number
stack.getTop()

// Time Complexity: O(1)
// return: string|number
stack.getBottom()

// Time Complexity:
//	Top Node & Bottom Node:  O(1), other Nodes: O(n)
// return: boolean
stack.update('Sourav', 'Abm Sourav')
```

<br>
<br>

## Queue
```ts
import { Queue } from "https://deno.land/x/datastructure/mod.ts";

const queue = new Queue()

// Time Complexity: O(1)
queue.size

// Time Complexity: O(1)
// return: boolean
queue.enqueue('Sourav')

// Time Complexity: O(1)
// return: string|number|boolean
queue.dequeue()

// Time Complexity:
//   Top Node & Bottom Node:  O(1), other Nodes: O(n)
// return: null|number [number: position of the item]
queue.search('Sourav');

// Time Complexity: O(1)
// return: string|number
queue.getFront()

// Time Complexity: O(1)
// return: string|number
queue.getBack()

// Time Complexity:
//   Top Node & Bottom Node:  O(1), other Nodes: O(n)
// return: boolean
queue.update('Sourav', 'Abm Sourav')
```
