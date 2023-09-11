// 1️⃣ 입력된 숫자 n을 3진법 문자열로 변환
// 🟦 toString(3) 함수를 사용하면 문자를 3진법 문자열로 변환할 수 있음
// 🟦 toString([진수])에서 진수를 생략하면 10진수로 변환
// 2️⃣ 3진법 문자열을 배열로 변환
// 3️⃣ 배열의 순서를 뒤집음
// 4️⃣ 배열의 요소들을 빈 문자열을 사용해서 다시 하나의 문자열로 합침
// 5️⃣ 3진법 숫자 문자열을 parseInt 함수를 사용하여 10진법으로 변환
// 🟦 변환할 진법(3진법)을 골라 두 번째 인자로 지정
// 6️⃣ 변환된 10진법 숫자 반환

function solution(n) {
    return parseInt( [...n.toString(3)].reverse().join(""), 3 );
}