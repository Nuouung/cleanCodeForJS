// typeof는 문자열을 반환한다
// ex. typeof '문자열' -> 'string'

// primitive vs reference <- 객체, 배열 등
function myFunction() {}
class MyClass {}

console.log(typeof myFunction); // 'function'
console.log(typeof MyClass); // 'function'
// reference value는 typeof로 검출하기 어렵다
// primitive는 잘 검출해줌

console.log(typeof null); // object <- 자바스크립트 측에서 인정한 '오류'

// 자바스크립트는 동적으로 변하는 언어 -> 타입도 변함

// instanceof <- reference type을 검사할 때 쓰자

function Person(name, age) {
    this.name = name;
    this.age = age;
}

const me = new Person('jinseok', 29);

console.log(me instanceof Person); // true


