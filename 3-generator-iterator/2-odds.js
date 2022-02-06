const log = console.log;
////////////////////////////////////////////
function* odds() {
  yield 1;
  yield 2;
  yield 3;
}

let iter = odds();
log(iter.next());
log(iter.next());
log(iter.next());
log(iter.next());

// for of, 전개 연산자, 구조분해, 나머지 연산자
log(...odds(10));
