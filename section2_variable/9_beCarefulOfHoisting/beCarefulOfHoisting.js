// 호이스팅이란?
// 선언과 할당이 분리된 것 (런타임시에)
// 코드를 작성할 때 '이 변수의 스코프는 이렇게 될 것이다' 예측
// but 런타임에 이상하게 동작
//
// 호이스팅 때문에 그럼
//
// 호이스팅은 런타임시 선언이 최상단으로 끌어 올려짐
//
// 해결
// 1. var 사용하지 말 것
// 2. 함수도 호이스팅 되므로 함수 사용 시 const a = function() {} 이런식으로 쓸 것

var global = 0;

function outer() {
    console.log(global); // undefined
    var global = 5;

    function inner() {
        var global = 10;

        console.log(global); // 10
    }

    inner();

    global = 1;

    console.log(global); // 1
}

outer();

function duplicatedVar() {
    var a;

    console.log(a); // undefined

    var a = 100;

    console.log(a); // 100
}

duplicatedVar();