## Stack Api

```ts
DataType<T> = {
	key: string|number
	value: T
}

// Time Complexity: O(1)
size: number;

// Time Complexity: O(1)
getTop(): null|DataType<any>

// Time Complexity: O(1)
getBottom(): null|DataType<any>

// Time Complexity: O(1)
push(data: DataType<any>): boolean

// Time Complexity: O(1)
pop(): boolean|DataType<any>

// Time Complexity:
// Top Node & Bottom Node:  O(1), other Nodes: O(n)
search(key: string|number): null|DataType<any>

// Time Complexity:
// Top Node & Bottom Node:  O(1), other Nodes: O(n)
update(key: string|number, newValue: any): boolean|DataType<any>
```

<br>
<br>

## Example
```ts
import { Stack } from "https://deno.land/x/datastructure/mod.ts";

const stack = new Stack()

stack.size

stack.push({key: 'a', value: 'apple'})
stack.push({key: 'b', value: [1, 2, 4]})

stack.pop()

stack.search('a');

stack.getTop()

stack.getBottom()

stack.update('a', {name: 'Abm Sourav'})
```
