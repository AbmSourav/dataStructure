import { SinglyLinkedList } from "./singly/singlyLinkedList.ts";

const singlyLinkedList = new SinglyLinkedList()

singlyLinkedList.insertInHead('a')
singlyLinkedList.insertInHead('b')
singlyLinkedList.insertInTail('c')
singlyLinkedList.insertInPositonX('x', 2)

// console.log(singlyLinkedList);
// console.log(singlyLinkedList.getFromHead());
// console.log(singlyLinkedList.getFromTail());
singlyLinkedList.printValues()
