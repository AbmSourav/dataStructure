import { SinglyLinkedList } from "./singlyLinkedList.ts";
// import { SinglyLinkedList } from "https://deno.land/x/datastructure/mod.ts"

const singlyLinkedList = new SinglyLinkedList()

singlyLinkedList.prepend({key: 'a', value: 'apple'})
singlyLinkedList.prepend({key: 'b', value: [1, 2, 3]})
singlyLinkedList.prepend({key: 11, value: 'add to head'})
// singlyLinkedList.append({key: 'c', value: 'add to last'})
// singlyLinkedList.add({key: 'x', value: 'X'}, 1)
// singlyLinkedList.add({key: 'x', value: 'X'}, 1)

// console.log(singlyLinkedList.getFromHead());
// console.log(singlyLinkedList.getFromTail());
// console.log(singlyLinkedList.remove('c'));

// console.log(singlyLinkedList.update('b', 'after head'));
// console.log(singlyLinkedList.search('a'));

// const it = singlyLinkedList.iterator()
// let itNext = it.next()
// console.log(it.next(), it.next(), it.next());
// while (itNext.done === false) {
// 	console.log(itNext.value);
// 	itNext = it.next()
// }

// console.log(singlyLinkedList);
// singlyLinkedList.log()
