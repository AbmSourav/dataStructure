import { DoublyLinkedList } from "./doublyLinkedList.ts";
// import { DoublyLinkedList } from "https://deno.land/x/datastructure/mod.ts"

const doublyLinkedList = new DoublyLinkedList()

doublyLinkedList.prepend({key: 'a', value: 'apple'})
doublyLinkedList.prepend({key: 'b', value: [1, 2, 3]})
doublyLinkedList.prepend({key: 11, value: {val: 'add to head'}})
// doublyLinkedList.append({key: 'c', value: 'add before last'})
doublyLinkedList.append({key: 'd', value: 'add to last'})
// doublyLinkedList.add({key: 'x', value: 'X'}, 1)

// console.log(doublyLinkedList.getFromHead());
// console.log(doublyLinkedList.getFromTail());
// console.log(doublyLinkedList.remove('c'));

// console.log(doublyLinkedList.update('d', 'dddd'));
// console.log(doublyLinkedList.search('c'));
console.log('');
// doublyLinkedList.print()
console.log(doublyLinkedList)
