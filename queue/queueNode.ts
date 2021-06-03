import { DataType, QueueType } from "./helper.d.ts"

export class QueueNode {
	public data: DataType<any>
	public next: QueueType|null = null

	constructor(data: DataType<any>) {
		this.data = data;
		this.next = null;
	}
}
