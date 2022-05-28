// index1에서 생성한 globalVar를 index2에서 접근할 수 있을까?
// (index.html이 index1과 index2를 모두 호출하는 상황)

console.log("[이곳은 index2.js의 영역입니다.");
console.log(globalVar); // global <- 접근이 된다

window.setTimeout(() => {
    console.log('1초');
}, 1000);
// 일반적으로는 1초 후 1초라는 메세지가 콘솔에 찍여야 함
// but ex1_1.js 파일에 setTimeout이라는 전역변수가 정의되어 있으므로
// Uncaught TypeError: window.setTimeout is not a function 에러가 난다.

// 더 큰 문제는 브라우저 상에서는 에러가 나고, 코드 상에서는 에러가 나온다는 표시가 없으니
// 디버깅을 어떻게 해야할지 매우 막막한 상황이 발생하는 것.