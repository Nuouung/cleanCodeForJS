// == 느슨한 동등연산자 <- 자동으로 타입 캐스팅이 일어나는 동등연산자
console.log('1' == 1); // true
console.log(1 == true); // true

// === 엄격한 동등연산자
console.log('1' === 1); // false
console.log(1 === false); // false

console.log(Number('1') === 1); // true