## Queue Api

```ts
DataType<T> = {
	key: string|number
	value: T
}

// Time Complexity: O(1)
size: number;

// Time Complexity: O(1)
getFront(): number|DataType<any>

// Time Complexity: O(1)
getBack(): number|DataType<any>

// Time Complexity: O(1)
enqueue(data: DataType<any>): boolean

// Time Complexity: O(1)
dequeue(): boolean|DataType<any>

// Time Complexity:
// Front Node & Back Node:  O(1), other Nodes: O(n)
search(key: string|number): null|DataType<any>

// Time Complexity:
// Front Node & Back Node:  O(1), other Nodes: O(n)
update(key: string|number, newValue: any): boolean|DataType<any>
```

<br>
<br>

## Example
```ts
import { Queue } from "https://deno.land/x/datastructure/mod.ts";

const queue = new Queue()

queue.enqueue({key: 'a', value: [1, 2, 5]})
queue.enqueue({key: 'sourav', value: {name: "Sourav"}})

queue.dequeue()

queue.getFront()
queue.getBack()


queue.search('sourav')

queue.update('sourav', 'Abm Sourav')

```
