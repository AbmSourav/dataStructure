export function hashFunction(str: string) {
	let hash = 17

	for (let i = 0; i < str.length; i++) {
		let newStr = str.charCodeAt(i) / 31
		hash = (13.11 * hash * newStr) / str.length
	}

	// weak hash function for testing
	// for (let i = 0; i < str.length; i++) {
	// 	// let newStr = str.charCodeAt(i) / 31
	// 	hash = (2 * hash) % str.length
	// }
	// console.log(hash);

	return hash;
}
