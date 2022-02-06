// @ts-nocheck
const log = console.log;
// 제너레이터와 이터레이터
// - Generator : == iterator // itarable 생성하는 함수
function* gen() {
  yield 1;
  if (false) yield 2;
  yield 3;
  return 100;
}

let iter = gen();
log(iter.next());
log(iter.next());
log(iter.next());
log(iter.next());

for (const a of gen()) log(a);
