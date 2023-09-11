// 1️⃣ 배열 answer에 배열 arr의 0번째 값 push해서 넣어주기
// 2️⃣ 0번째부터 배열 arr의 길이까지 for문 반복
// 3️⃣ for문 내 if 조건문 : 배열 answer의 마지막 번째가 배열 arr의 i 번째와 같지 않다면 answer에 arr[i] push해주기

function solution(arr) {

    let answer = [];
    answer.push(arr[0]);

    for ( let i = 0; i < arr.length; i++ ) {
        if ( answer[answer.length-1] !== arr[i] ) {
            answer.push(arr[i]);
        }
    }

    return answer;
}