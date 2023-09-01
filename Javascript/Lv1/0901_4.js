// 1️⃣ 문자열 s를 split 메서드 사용해서 배열로 만들기
// 2️⃣ sort 메서드 사용해서 순차적으로 정렬해주기
// 3️⃣ reverse 메서드 사용해서 순서 거꾸로 뒤집어주기
// 4️⃣ join 메서드 사용해서 배열을 문자열로 바꾸어주어서 반환하기

function solution(s) {
    return s.split('').sort().reverse().join('');
}