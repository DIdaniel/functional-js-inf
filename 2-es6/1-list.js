// 리스트 순회
const list = [1, 2, 3];
// 1. 기존 방식
for (let i = 0; i < list.length; i++) {
  console.log(list[i]);
}

const str = "abc";
for (let i = 0; i < str.length; i++) {
  console.log(str[i]);
}

// 2. es6
for (const a of list) {
  console.log(a);
}

for (const a of str) {
  console.log(a);
}
