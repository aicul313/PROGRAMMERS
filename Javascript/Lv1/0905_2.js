// 1️⃣ 첫 번째 조건 : s의 길이가 4 또는 6을 만족
// 2️⃣ 두 번째 조건 : 첫 번째 조건을 만족하면서 문자열의 모든 문자가 숫자로 이루어져 있어야 함
// 🟦 문자열 s를 배열로 분할하고, 배열의 몯느 요소가 숫자인지 확인
// 3️⃣ 두 가지 조건이 모두 충족된다면 true, 그렇지 않다면 false 반환

function solution(s) {
    return (s.length === 4 || s.length === 6) && s.split("").every(c => !isNaN(c)) ? true : false;
}