// 1️⃣ num이 1이 아닐 때까지 while문 돌리기
// 2️⃣ num이 짝수(2로 나누었을 때 나머지가 0)라면 2로 나누기
// 3️⃣ num이 홀수(2로 나누었을 때 나머지가 1)라면 3을 곱하고 1을 더해주기
// 4️⃣ while문 안에서 짝수와 홀수를 판별하고 조건문을 돌고 나올 때마다 answer에 1을 더해주면서 while문 반복하는 횟수 카운팅하기
// 5️⃣ answer(while문을 반복한 횟수)가 500을 넘으면 -1, 그렇지 않으면 answer을 return 하기

function solution(num) {
    let answer = 0;

    while(num !== 1){
        if (num % 2 === 0) {
            num /= 2;
        } else if (num % 2 !== 0) {
            num = num * 3 + 1;
        }
        answer++;
    }

    if (answer < 500) {
        return answer;
    } else {
        return -1;
    }
}
