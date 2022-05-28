
console.log(name); // undefined

var name = '이름';
var name = '이름2';
var name = '이름3'; // 에러가 안나옴

console.log(name); // 이름3
// let의 문제 = 변수를 선언하지 않아도 사용 가능(undefined). 변수 재선언 가능 (기존 데이터는 무시. 에러 나지 않음)