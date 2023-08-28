// 1️⃣ for문 : 배열 arr의 길이 만큼 반복
// 2️⃣ 배열의 요소가 divisior로 나누어 떨어진다면, 배열 answer에 push하기
// 3️⃣ 배열 answer 내 요소들 sort로 오름차순 정렬해주기
// 4️⃣ 배열의 길이는 1이상이기 때문에 1보다 작다면 -1 push해서 출력하기

function solution(arr, divisor) {
    let answer = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % divisor === 0) {
            answer.push(arr[i]);
        }
    }

    answer.sort((a, b) => a - b);

    // 배열 내 요소는 0개 미만일 수가 없기 때문에 if문 조건식을 (answer.length === 0)으로 해도 됨
    if (answer.length < 1) {
        answer.push(-1)
    }

    return answer;

    // 삼항연산자로 가능
    // return answer.length === 0 ? [-1] : answer.sort((a, b) => a - b);
}
