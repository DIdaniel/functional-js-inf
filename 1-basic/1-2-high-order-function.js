// 고차함수

// 1. 함수를 인자로 받아서 실행하는 함수
const apply1 = (func) => func(1);
const add2 = (a) => a + 2;
console.log(apply1(add2));
console.log(apply1((a) => a - 1));

const times = (func, num) => {
  let i = -1;
  while (++i < num) func(i);
};

times(console.log, 3);

// 2. 함수를 만들어 리턴하는 함수(클로저를 만들어 리턴하는 함수)
const addMaker = (a) => (b) => a + b;
const add10 = addMaker(10);
console.log(add10(5));
console.log(add10(10));
