// 이터러블 / 이터레이터 프로토콜
// - iterable : iterator를 리턴하는 [Symbol.iterator]()를 가진 값 => Array = iterator
// - iterator : { value, done } 객체를 리턴하는 next()를 가진 값
// iterable, iterator protocol : iterable을 for... of, 전개 연산자 등과 함께 동작하도록한 규약

const iterable = {
  [Symbol.iterator]() {
    let i = 3;
    return {
      next() {
        return i == 0 ? { done: true } : { value: i--, done: false };
      },
      [Symbol.iterator]() {
        return this;
      },
    };
  },
};

let iterator = iterable[Symbol.iterator]();
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());

for (const a of iterator) console.log(a);
