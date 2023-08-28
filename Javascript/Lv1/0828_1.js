// 1️⃣ x를 split()을 이용해서 자릿수로 나누어주기
// 2️⃣ for문으로 나눈 자릿수들 더해주기
// 3️⃣ x와 더한 값을 나누어 반환되는 나머지를 판별해서 조건에 따라 출력할 수 있도록 하기

function solution(x) {
    let sum = 0;
    let arr = String(x).split("");
    let answer = true;

    for(let i = 0; i < arr.length; i++) {
        sum += Number(arr[i]);
    }

    // 삼항연산자 사용해도 될 것 같음
    // 간단한 조건문에서는 삼항연산자가 가독성이 뛰어나기 때문
    // 단, 복잡한 조건문에는 삼항연산자가 가독성이 떨어질 수 있음
    if (!(x % sum === 0)) {
        answer = false;
    }

    return answer;
}
