// import { Stack } from "https://deno.land/x/datastructure/mod.ts";
import { Stack } from "./stack.ts";

const stack = new Stack()
// stack.push('bottom')
stack.push('a')
stack.push('b')
stack.push('c')
stack.push('d')

// stack.pop()
console.log(stack.update('c', 'apple'));

// console.log(stack.getTop(), stack.getBottom());
console.log(stack.search('c'));

console.log(stack);
