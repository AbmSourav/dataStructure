// import { Queue } from "https://deno.land/x/datastructure/mod.ts";
import { Queue } from "./queue.ts";

const queue = new Queue()
queue.enqueue({key: 'a', value: 'aa'});
queue.enqueue({key: 'b', value: [1, 2, 5]})
queue.enqueue({key: 'sourav', value: {name: "Sourav"}})

// console.log(queue.getFront(), queue.getBack());

// queue.dequeue()
// console.log(queue.update('b', 'Abm'));
// console.log(queue.search('sourav'));

console.log(queue.frontNode);
