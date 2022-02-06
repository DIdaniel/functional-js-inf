// 전개연산자
const a = [1, 2];
//a[Symbol.iterator] = null;
console.log([...a, ...[3, 4]]);
