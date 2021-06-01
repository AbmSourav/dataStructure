// import { Stack } from "https://deno.land/x/datastructure/mod.ts";
import { Stack } from "./stack.ts";

const stack = new Stack()

stack.push({key: 'a', value: 'apple'})
stack.push({key: 'b', value: [1, 2, 4]})
stack.push({key: 'c', value: [8, 9, 2]})
stack.push({key: 'd', value: 'dd'})

// console.log(stack.pop());
console.log(stack.update('a', {name: 'Sourav'}));

// console.log(stack.getTop(), stack.getBottom());
console.log(stack.search('a'));

console.log(stack);
