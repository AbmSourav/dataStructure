import { Stack } from "./stack.ts";

const stack = new Stack()
stack.push('bottom')
stack.push('a')
stack.push('b')
stack.push('c')

stack.pop()
console.log(stack.update('a', 'apple'));

// console.log(stack.getTop(), stack.getBottom());
console.log(stack.search('bottom'));

console.log(stack);
