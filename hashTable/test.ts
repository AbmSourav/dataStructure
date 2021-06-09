import { HashTable } from "./hashTable.ts"

const hashTable = new HashTable()

// hashTable.add({key: "apple", value: "Apple"})
// hashTable.add({key: "apple", value: {company: "Apple LLC"}})
// hashTable.add({key: "apple", value: {product: "iPhone"}})
// hashTable.add({key: "microsoft", value: "MicroSoft"})
// hashTable.add({key: "Linux", value: "Ubuntu"})
// hashTable.add({key: "ChromeOS", value: "Google"})
// console.log(hashTable.remove("ChromeOS"));

// console.log(hashTable);
// hashTable.log()


class LinkedList {
	testIterator() {
	  return {
		[Symbol.iterator]: function() {
		  return {
			next() {
			  return {
				value: 'a value',
				done: false
			  };
			}
		  };
		}
	  };
	}
  }
  
  // const linkedList = new LinkedList();
  // console.log([...linkedList.testIterator()]);
  