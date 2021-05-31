# Data Structure

Implement different Data Structures using TypeScript.

## Singly Linked List
```ts
import { SinglyLinkedList } from "https://deno.land/x/datastructure/mod.ts";

const singlyLinkedList = new SinglyLinkedList()

// Time Complexity: O(1)
singlyLinkedList.prepend('a')	// insert in the head
singlyLinkedList.prepend('b')

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
