// 1️⃣ 문자열 s를 띄어쓰기 단위로 분할해서 배열 만들어 str에 
// 2️⃣ 외부 for 문 : 배열 str 길이만큼 for문 반복
// 3️⃣ 내부 for 문 : 배열 str 내 각 문자열 길이만큼 for문 반복
// 4️⃣ 내부 for문에서, 문자의 인덱스가 짝수이면 대문자, 홀수이면 소문자로 변환하여 answer에 추가
// 5️⃣ 외부 for 문 마지막에, 현재 단어가 배열 str의 마지막 단어가 아니라면, 공백 문자를 answer에 추가하여 단어 구분

function solution(s) {
    let answer = '';
    let str = s.split(" ");

    for ( let i = 0; i < str.length; i++ ) {
        for ( let j = 0 ; j < str[i].length; j++) {
            if ( j % 2 === 0 ) {
                answer += str[i][j].toUpperCase();
            } else {
                answer += str[i][j].toLowerCase();
            }
        }

        if ( i < str.length - 1 ) {
            answer += " ";
        }
    }

    return answer;
}