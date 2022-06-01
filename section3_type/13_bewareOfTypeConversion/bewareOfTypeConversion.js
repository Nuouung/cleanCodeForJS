// 암묵적인 형 변환
console.log(11 + ' 문자열 결합');
console.log(!!'문자열');
console.log(!!'');

// 명시적인 형 변환
console.log(parseInt('9.999', 10));

// 반드시 명시적으로 형 변환하자.
String(11 + ' 문자열 결합');
Boolean('문자열');
Boolean('');
Number('11');