// 1️⃣ 중첩 for문 사용하기
// 2️⃣ 외부 for문 : left부터 right가 될 때까지 반복
// 3️⃣ 내부 for문 : 약수 구하기
// 🟦 약수 구하는 방법 : 1부터 i까지 for문 반복 > 숫자 i가 j로 나누어 떨어지면 약수 > 약수는 개수 카운팅 해주기 (cnt++)
// 4️⃣ 약수 개수가 짝수이면 answer에 더해주고, 약수 개수가 홀수이면 answer에서 빼주기

function solution(left, right) {
    let answer = 0;

    for (let i = left; i <= right; i++) {
        let cnt = 0;

        for (let j = 1; j <= i; j++) {
            if (i % j === 0) {
                cnt ++;
            }
        }

        if (cnt % 2 === 0) {
            answer += i;
        } else {
            answer -= i;
        }
    }

    return answer;

}