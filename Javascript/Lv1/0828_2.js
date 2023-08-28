// 풀이 1
// 1️⃣ a와 b 크기 비교하기
// 2️⃣ a가 b보다 크거나 같다면, b부터 a까지 for문 돌리면서 a와 b 사이에 있는 값 전부 더해서 answer에 넣기
// 3️⃣ a가 b보다 작다면, a부터 b까지 for문 돌리면서 b와 a 사이에 있는 값 전부 더해서 answer에 넣기
function solution(a, b) {
    let answer = 0;
    if (a >= b) {
        for (let i = b; i <= a; i++) {
            answer += i;
        }
    } else if (a < b) {
        for (let j = a; j <= b; j++) {
            answer += j;
        }
    }

    return answer;
}

// 풀이 2
// 1️⃣ a, b 중 크기 비교해서 큰값 작은값 구하기
// 2️⃣ 작은값부터 큰값까지 for문 돌리기
// 3️⃣ 작은값과 큰값 사이의 값 더하기
function solution (a, b) {
    let answer = 0;
    let min = Math.min(a, b);
    let max = Math.max(a, b);

    for (let i = min; i <= max; i++) {
        answer += i;
    }

    return answer;
}
