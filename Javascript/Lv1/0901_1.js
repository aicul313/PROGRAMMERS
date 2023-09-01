// 1️⃣ 입력 받은 n 만큼 for문 반복하기
// 2️⃣ for문 내 홀수 번째 반복하는 거면 answer에 "박" 넣어주기
// 3️⃣ for문 내 짝수 번째 반복하는 거면 answer에 "수" 넣어주기
// 4️⃣ answer 리턴

function solution(n) {
    let answer = "";

    for (let i = 0; i < n; i++) {
        if ( i % 2 == 0 ) {
            answer += "수"
        } else {
            answer += "박";
        }
    }

    return answer;
}