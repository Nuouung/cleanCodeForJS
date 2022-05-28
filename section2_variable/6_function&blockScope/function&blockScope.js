/**
 * var는 함수 스코프를 가지고
 * let과 const는 블록 스코프를 가짐
 *
 * 아래의 예제처럼 if는 함수가 아니기 때문에 if 내부의 global('지역') 변수가 위의 global('전역')을 대체한 것을 볼 수 있음.
 * 그러나 let은 블록 단위의 스코프를 지니기 때문에 if문 안의 global2('지역') 변수가 블록 외부로 누수되지 않아 조금 더 안전함.
 */
var global = '전역';
if (global === '전역') {
    var global = '지역';
    console.log(global); // 지역
}
console.log(global); // 지역


let global2 = '전역';
if (global2 === '전역') {
    let global2 = '지역';
    console.log(global2); // 지역
}
console.log(global2); // 전역