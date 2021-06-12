// import { Stack } from "https://deno.land/x/datastructure/mod.ts";
import { Stack } from "./stack.ts";

const stack = new Stack()

stack.push({key: 'a', value: 'apple'})
stack.push({key: 'b', value: [1, 2, 4]})
stack.push({key: 'c', value: [8, 9, 2]})
stack.push({key: 'd', value: 'dd'})

// console.log(stack.pop());
// console.log(stack.update('d', {name: 'Sourav'}));

// console.log(stack.getTop(), stack.getBottom());
// console.log(stack.search('d'));

const iterator = stack.iterator()
let iteratorNext = iterator.next()
// console.log(iterator.next(), iterator.next(), iterator.next());
while (iteratorNext.done === false) {
	console.log(iteratorNext.value);
	iteratorNext = iterator.next()
}

// console.log(stack);
// stack.log()
