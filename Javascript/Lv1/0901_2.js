// 1️⃣ a와 b의 길이는 같다고 했으니까, a 길이 만큼 for문 돌기
// 2️⃣ a[i] * b[i] 해서 answer에 차곡차곡 더해주기

function solution(a, b) {
    let answer = 0;

    for (let i = 0; i < a.length; i++) {
       answer += a[i] * b[i];
    }

    return answer;
}