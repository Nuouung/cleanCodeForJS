const array = [10, 20, 30];

for (var index = 0; index < array.length; index++) {
    const element = array[index];
}

// var는 전역변수이기 때문에 for문 내에 작성되어 있어도 전역변수로 튀어 나옴
// 브라우저에서 console.dir(window)를 치면 필드 값으로 index: 3이 들어간 걸 볼 수 있음