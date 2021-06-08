import { HashTable } from "./hashTable.ts"

const hashTable = new HashTable()

hashTable.add({key: "apple", value: "Apple"})
hashTable.add({key: "apple", value: {company: "Apple LLC"}})
hashTable.add({key: "microsoft", value: "MicroSoft"})
hashTable.add({key: "Linux", value: "Ubuntu"})
hashTable.add({key: "ChromeOS", value: "Google"})
console.log(hashTable.remove("ChromeOS"));

// for (const key in hashTable.table) {console.log(key)}
console.log(hashTable);
// hashTable.log()

