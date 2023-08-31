// 1️⃣ for문 10번 돌리기
// 2️⃣ 숫자 i가 배열 numbers에 포함되어 있지 않으면, answer에 1 더해주기

function solution(numbers) {
    var answer = 0;

    for (let i = 0; i < 10; i++) {
        if (!numbers.includes(i)) {
            answer += i;
        }
    }

    return answer;
}