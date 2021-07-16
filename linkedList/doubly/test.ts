import { DoublyLinkedList } from "./doublyLinkedList.ts";
// import { DoublyLinkedList } from "https://deno.land/x/datastructure/mod.ts"

const doublyLinkedList = DoublyLinkedList.createDL()

doublyLinkedList.prepend({key: 'a', value: 'apple'})
doublyLinkedList.prepend({key: 'b', value: [1, 2, 3]})
// doublyLinkedList.prepend({key: 11, value: {val: 'add to head'}})
// doublyLinkedList.append({key: 'c', value: 'add before last'})
doublyLinkedList.append({key: 'd', value: 'add to last'})
// doublyLinkedList.add({key: 'x', value: 'X'}, 1)

// console.log(doublyLinkedList.getFromHead());
// console.log(doublyLinkedList.getFromTail());
// console.log(doublyLinkedList.remove('c'));

// console.log(doublyLinkedList.update('b', 'bbbb'));
console.log(doublyLinkedList.search('b'));
console.log('');
// console.log(doublyLinkedList)
doublyLinkedList.log()

// const it = doublyLinkedList.iterator()
// let itNext = it.next()
// console.log(it.next(), it.next(), it.next());
// while (itNext.done === false) {
// 	console.log(itNext.value);
// 	itNext = it.next()
// }
