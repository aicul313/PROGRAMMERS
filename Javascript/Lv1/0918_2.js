// 1️⃣ (t길이 - p길이 + 1) 만큼 반복
// 2️⃣ 문자열 t를 i번째부터 문자열 p의 길이만큼 부분 문자열 추출 후 변수 num에 저장
// 3️⃣ num이 p보다 크거나 같다면 변수 answer에 1증가

function solution(t, p) {
    let answer = 0;

    for ( let i = 0; i < t.length - p.length + 1; i++ ) {
        let num = t.substr(i, p.length);

        if ( parseInt(num) <= parseInt(p) ) answer++;
    }

    return answer;
}