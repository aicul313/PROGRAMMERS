// 1️⃣ 문자열 s를 배열 arr로 변환
// 2️⃣ 반복문 for로 qㅐ열 arr 내 각 문자 순회
// 3️⃣ let ASC = arr[i].codePointAt() : i번째 문자를 아스키코드로 변환하여 ASC에 저장
// 4️⃣ if (ASC !== 32) { ... } : 문자가 공백이 아닐 때만 수행하기
// 5️⃣ if (ASC >= 65 && ASC <= 90) { ... } : 대문자 알파벳 범위에 있을 경우에만 수행
// 6️⃣ ((ASC - 65 + n) % 26) + 65 : n만큼 더한 값
// 7️⃣ % 26 : 알파벳 루프를 처리하기 위함
// 8️⃣ else if (ASC >= 97 && ASC <= 122) { ... } : 소문자 알파벳 범위에 있을 경우 수행
// 9️⃣ arr[i] = String.fromCharCode(ASC) : 아스키코드 ASC를 다시 문자로 변환하여 배열 arr에 넣기
// 🔟 return arr.join("") : 배열 arr를 문자열로 변환하여 반환

function solution(s, n) {
    let arr = [...s];

    for (let i = 0; i < arr.length; i++) {
        let ASC = arr[i].codePointAt();

        if (ASC !== 32) {
            if (ASC >= 65 && ASC <= 90) {
                ASC = ((ASC - 65 + n) % 26) + 65;
            } else if (ASC >= 97 && ASC <= 122) {
                ASC = ((ASC - 97 + n) % 26) + 97;
            }
        }

        arr[i] = String.fromCharCode(ASC);
    }

    return arr.join("");
}