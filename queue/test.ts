// import { Queue } from "https://deno.land/x/datastructure/mod.ts";
import { Queue } from "./queue.ts";

const queue = new Queue()
queue.enqueue({key: 'a', value: 'aa'});
queue.enqueue({key: 'b', value: [1, 2, 5]})
queue.enqueue({key: 'sourav', value: {name: "Sourav"}})

// console.log(queue.getFront(), queue.getBack());

// queue.dequeue()
// console.log(queue.update('sourav', 'Abm'));
// console.log(queue.search('b'));

// const iterator = queue.iterator()
// let iteratorNext = iterator.next()
// console.log(iterator.next(), iterator.next(), iterator.next());
// while (iteratorNext.done === false) {
// 	console.log(iteratorNext.value);
// 	iteratorNext = iterator.next()
// }

// console.log(queue);
queue.log()
