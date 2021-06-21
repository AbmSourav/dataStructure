export function *searchGenerator(key: string|number, chain: Array<any>) {
	for (let block in chain) {
		if (chain[block].data.key === key) {
			yield chain[block]
		}
	}
	return false
}

export function *iteratorGenerator(chain: Array<any>) {
	for (let block in chain) {
		yield chain[block]
	}
	return false
}
