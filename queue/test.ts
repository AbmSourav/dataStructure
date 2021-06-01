// import { Queue } from "https://deno.land/x/datastructure/mod.ts";
import { Queue } from "./queue.ts";

const queue = new Queue()
queue.enqueue('a');
queue.enqueue('Sourav')
queue.enqueue('c')
queue.enqueue('d')

// queue.dequeue()
console.log(queue.update('Sourav', 'Abm'));
console.log(queue.search('Sourav'));

console.log(queue);
