// 1️⃣ 배열 absolutes 길이 만큼 for문 돌리기
// 2️⃣ for 문 반복 중, 배열 signs의 i번째가 true면 배열 absolutes의 i번째를 answer에 더해주기
// 3️⃣ 반대로 for 문 반복 중, 배열 signs의 i번째가 false면 배열 absolutes의 i번째를 answer에 빼주기

function solution(absolutes, signs) {
    let answer = 0;

    for (let i = 0; i < absolutes.length; i++ ) {
        signs[i] ? answer += absolutes[i] : answer -= absolutes[i];
    }

    return answer;
}
