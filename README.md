# Data Structure

Implement different Data Structures using TypeScript.

## Singly Linked List
```ts
import { SinglyLinkedList } from "./singly/singlyLinkedList.ts";

const singlyLinkedList = new SinglyLinkedList()

singlyLinkedList.insertInHead('a')
singlyLinkedList.insertInHead('b')
singlyLinkedList.insertInTail('c')
singlyLinkedList.insertInPositonX('x', 2)

singlyLinkedList.getFromHead()
singlyLinkedList.getFromTail()

singlyLinkedList.printValues()
```
