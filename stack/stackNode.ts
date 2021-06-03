import { DataType, StackType } from "./helper.d.ts"

export class StackNode {
	public data: DataType<any>
	public next: StackType|null = null

	constructor(data: DataType<any>) {
		this.data = data;
		this.next = null;
	}
}
