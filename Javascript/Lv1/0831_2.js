// 1️⃣ substr(a,b) 사용 : a번째부터 b개 글자 가져오기

function solution(s) {
    if (s.length % 2 === 0) {
        // (s의 길이 / 2 - 1)번째부터 2개 가져오기
        return s.substr(s.length / 2 - 1, 2);
    } else {
        // (s의 길이 / 2)번째부터 1개 가져오기
        return s.substr(s.length / 2, 1);
    }
}