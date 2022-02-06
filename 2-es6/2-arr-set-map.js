// Array
console.log("Arr-------------------");
const arr = [1, 2, 3];
// array는 원래 iterable
//arr[Symbol.iterator] = null;
let iter1 = arr[Symbol.iterator]();
console.log(iter1.next());
console.log(iter1.next());
console.log(iter1.next());
console.log(iter1.next());
for (const a of arr) console.log(a);

// Set
console.log("Set-------------------");
const set = new Set([1, 2, 3]);
let iter2 = set[Symbol.iterator]();
console.log(iter2.next());
console.log(iter2.next());
console.log(iter2.next());
console.log(iter2.next());
for (const a of set) console.log(a);

// Map
console.log("Map-------------------");
const map = new Map([
  ["a", 1],
  ["b", 2],
  ["c", 3],
]);
let iter3 = map[Symbol.iterator]();
console.log(iter3.next());
console.log(iter3.next());
console.log(iter3.next());
console.log(iter3.next());
for (const a of map) console.log(a);
for (const a of map.keys()) console.log(a);
for (const a of map.values()) console.log(a);
for (const a of map.entries()) console.log(a);
