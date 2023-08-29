// 1️⃣ 마지막 4개의 숫자를 제외한 나머지 부분 선택하기
// 2️⃣ 선택한 나머지 부분을 *로 대체하기 (정규표현식 사용)
// 3️⃣ 문자열의 마지막 4개의 숫자 선택하여 *로 가린 부분 뒤에 붙여주기

function solution(phone_number) {
    let answer = phone_number.slice(0, -4).replace(/[0-9]/g, '*') + phone_number.slice(-4);

    return answer;
}
