import { SinglyLinkedList } from "./singly/singlyLinkedList.ts";
// import { SinglyLinkedList } from "https://deno.land/x/datastructure/mod.ts"

const singlyLinkedList = new SinglyLinkedList()

singlyLinkedList.prepend('a')
singlyLinkedList.prepend('b')
singlyLinkedList.append('c')
// singlyLinkedList.add('x', 4)

// console.log(singlyLinkedList.getFromHead());
// console.log(singlyLinkedList.getFromTail());
singlyLinkedList.remove('a')

// singlyLinkedList.update('b', 'bb')
console.log(singlyLinkedList);
singlyLinkedList.print()