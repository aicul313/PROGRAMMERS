// 1️⃣ 문자열 s를 문자 단위로 분할하여 배열 arr에 넣기
// 2️⃣ 배열 arr의 길이 만큼 반복
// 3️⃣ 배열 arr의 i번째를 str에 할당
// 4️⃣ 가장 가까운 왼쪽에 있는 동일한 문자의 인덱스를 저장할 변수 close를 초기화함 초기값은 -1로 설정
// 5️⃣ 현재 문자와 동일한 문자가 이전에 나타나지 않았다면 -1을 배열 answer에 push
// 6️⃣ 현재 문자와 동일한 문자가 이전에 나타났다면 현재 인덱스 i와 가장 가까운 왼쪽 동일한 문자의 인덱스 close간의 거리를 계산하여 배열 answer에 추가

function solution(s) {
    let answer = [];
    let arr = s.split("");

    for (let i = 0; i < arr.length; i++) {
        let str = arr[i];
        let close = -1;

        for (let j = 0; j < i; j++) {
            if (arr[j] === str) {
                close = j;
            }
        }

        answer.push(close === -1 ? close : i - close);
    }

    return answer;
}