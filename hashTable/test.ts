import { HashTable } from "./hashTable.ts"
import { assert, assertEquals } from "https://deno.land/std/testing/asserts.ts";

const hashTable = new HashTable()

hashTable.add({key: "abm", value: "Sourav"})
hashTable.add({key: "bma", value: {company: "Apple LLC"}})
hashTable.add({key: "appl", value: {product: "iPhone"}})
hashTable.add({key: "microsoft", value: "MicroSoft"})
// hashTable.add({key: "Linux", value: "Ubuntu"})
// hashTable.add({key: "ChromeOS", value: "Google"})
// console.log(hashTable.remove("microsoft"));

// const it = hashTable.iterator()
// console.log(it.next(), it.next(), it.next(), it.next());

// console.log(hashTable.update('bma', {name: 'Apple'}));
// console.log(hashTable)

hashTable.log()

// Deno.test("Add", function() {
// 	assertEquals(hashTable.add({key: "abm", value: "Sourav"}), true)
// })

// Deno.test("remove", function() {
// 	assertEquals(hashTable.remove("microsoft"), false);
// })
