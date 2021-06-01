import { SinglyLinkedList } from "./singly/singlyLinkedList.ts";
// import { SinglyLinkedList } from "https://deno.land/x/datastructure/mod.ts"

const singlyLinkedList = new SinglyLinkedList()

singlyLinkedList.prepend({key: 'a', value: 'apple'})
singlyLinkedList.prepend({key: 'b', value: [1, 2, 3]})
singlyLinkedList.prepend({key: 11, value: 'add to head'})
singlyLinkedList.append({key: 'c', value: 'add to last'})
// singlyLinkedList.add({key: 'x', value: 'X'}, 1)

// console.log(singlyLinkedList.getFromHead());
// console.log(singlyLinkedList.getFromTail());
// console.log(singlyLinkedList.remove(11));

// console.log(singlyLinkedList.update('c', 'ccc'));
// console.log(singlyLinkedList.search(11));
console.log('');
console.log(singlyLinkedList);
// singlyLinkedList.print()
