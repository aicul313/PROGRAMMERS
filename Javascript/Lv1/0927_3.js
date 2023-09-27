// 1️⃣ 외부 for문 : 배열의 numbers를 전부 순회
// 2️⃣ 내부 for문 : 배열 numbers 내 요소를 선택할 때 중복 선택을 피하기 위해 i+1번째부터 시작
// 3️⃣ i번째 + j번째 더해서 sum에 넣기
// 4️⃣ answer 배열 내에 계산한 값(sum)이 들어있지 않으면 answer에 sum을 push 해주기
// 5️⃣ for문 끝나고 나서 answer에 저장된 값들 오름차순으로 정렬해주기

function solution(numbers) {
    let answer = [];

    for ( let i = 0; i < numbers.length; i++ ) {
        for ( let j = i + 1; j < numbers.length; j++ ) {
            let sum = numbers[i] + numbers[j];

            if (!answer.includes(sum)) {
                answer.push(sum);
            }
        }
    }

    return answer.sort((a, b) => a - b);
}