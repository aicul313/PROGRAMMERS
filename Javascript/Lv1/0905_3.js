// 1️⃣ 중첩 for문 사용
// 2️⃣ 외부 for문 : 0부터 arr1의 길이만큼 반복 (arr1과 arr2의 길이 같다고 생각), 배열 sum 선언
// 3️⃣ 내부 for문 : 배열 sum에 arr1[i][j] + arr2[i][j] 값 하나씩 push해주기
// 4️⃣ 배열 answer에 배열 sum 값 전부 push해주고 반환하기

function solution(arr1, arr2) {
    let answer = [];

    for (let i = 0; i < arr1.length; i++) {
        let sum = [];
        for (let j = 0; j < arr1[i].length; j++) {
            sum.push(arr1[i][j] + arr2[i][j]);
        }
        answer.push(sum);
    }

    return answer;
}