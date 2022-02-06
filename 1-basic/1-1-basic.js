// JS에서 함수는 일급

// 값으로 다룰 수 있다
const add5 = (a) => a + 5;
console.log(add5(5));
// 변수에 담을 수 있다
const a = 10;
// 함수의 인자로 사용 될 수 있다
const add10 = (a) => a + 10;
console.log(add10);
// 함수의 결과로 사용 될 수 있다
const add20 = (a) => a + 20;
const r = add20;
console.log(r);

///////////////////////
const f1 = () => () => 1;
console.log(f1);

const f2 = f1();
console.log(f2);
console.log(f2());

///// first class citizen ///// - 생활코딩
const words = ["spray", "lmit", "elite", "exuberant", "destruction", "present"];

function cb(elem) {
  console.log(elem);
  if (elem.length > 6) {
    return true;
  } else {
    return false;
  }
}

const newWords = words.filter(cb);
console.log(newWords);
