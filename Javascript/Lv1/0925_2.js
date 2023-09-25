// 1️⃣ sort에서 a와 b 비교
// 2️⃣ a[n]이 b[n]보다 크면 1 반환 > a를 b보다 뒤로 배치
// 3️⃣ a[n]이 b[n]보다 작으면 -1 반환 > a를 b보다 앞으로 배치
// 4️⃣ a[n]과 b[n]이 같으면 문자열 전체를 비교 > a가 b보다 크면 1 그렇지 않으면 -1 반환하여 전체 문자열을 기준으로 정렬

function solution(strings, n) {
    return strings.sort((a, b) => {
        if ( a[n] > b[n] ) {
            return 1;
        } else if ( a[n] < b[n] ) {
            return -1;
        } else {
            return a > b ? 1 : -1;
        }
    })
}