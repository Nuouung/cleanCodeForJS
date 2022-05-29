/**
 * 임시 변수란 getElements 함수 내의 result처럼 어정쩡하게 있는 변수를 말함
 * result라는 비어있는 변수가 있고 그 변수 외부에서 변수에 대한 crud를 수행할 경우
 * 프로그래머는 함수 내에 변수를 조작하는 여러가지 코드를 작성하고 싶은 유혹을 느끼게 됨
 */
function getElements() {
    const result = {};

    result.title = document.querySelector('.title');
    result.text = document.querySelector('.text');
    result.value = document.querySelector('.value');

    return result;
}

/**
 * result라는 변수 내에 동작을 수행하는 코드를 직접 작성함
 * 위의 getElements 함수의 경우보다 조금 더 안전해 보이고 바람직해 보이나
 * 사실 result라는 변수를 함수 내부에서 만들 필요가 없음
 */
function getElementsV2() {
    const result = {
          title:  document.querySelector('.title'),
          text: document.querySelector('.text'),
          value:  document.querySelector('.value')
    }

    return result;
}

/**
 * 임시변수를 제거한 경우
 * 포인트: 함수를 계속 추상화하자. 가능하면 가능할 수록.
 * 그러면 함수의 재사용성이 높아진다.
 * (getElements처럼 코드를 짤 경우 다른 사람이 함수 내에서 추가적인 로직을 하고 싶은 유혹을 느끼기 쉬움
 * 그러면 시스템 상에 어떤 영향을 줄지 알 수 없기 때문에 위험함. 따라서 함수 내에서 변수 선언을 최대한 줄여
 * 함수를 콤팩트하게 만들자.)
 * (추가적인 기능이 필요할 경우 함수를 상속하거나 해서 재사용하면 됨)
 */
function getElementsV3() {
    return  {
        title:  document.querySelector('.title'),
        text: document.querySelector('.text'),
        value:  document.querySelector('.value')
    }
}

// 목표는 하나의 역할만 하는 함수를 만들자.

// 임시변수를 왜 제거?
// 1. 명령형으로 가득한 로직이 될 가능성 높음
// 2. 어디서 어떻게 데이터가 바뀌지? 디버깅이 힘들어짐
// 3. 추가적인 코드를 작성하고 싶은 유혹 ('조금만 바꿔볼까?')
//
// 해결책
// 1. 함수 나누기
// 2. 바로 반환
// 3. 고차함수
// 4. 선언형으로 함수를 바꾸고자 시도