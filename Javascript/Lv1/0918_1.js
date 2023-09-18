// 1️⃣ 3중 for문 사용하여 합이 0인 경우를 찾아 변수 answer에 누적한 후 반환
// 2️⃣ 외부 for문 i : 배열의 처음부터 끝까지 순회
// 3️⃣ 중위 for문 j : i+1번째부터 배열 끝까지 순회함으로써 중복된 조합 피하기
// 4️⃣ 내부 for문 k : j+1번째부터 배열의 끝까지 순회
// 5️⃣ 각 반복문에서 선택된 세 요소의 합이 0인지 검사 > 0이면 answer에 1 증가

// 🟦 브루트 포스(Brute Force) 방식으로 동작
// 🟦 배열의 크기에 따라 시간 복잡도가 높아질 수 있음
// 🟦 사전적 의미 : Brute(무식한) + Force(힘) > 발생할 수 있는 모든 경우를 무식하게 탐색 (전체 탐색)
// 🟦 해가 하나 이상 존재한다는 가정을 세우고 모든 범위를 탐색하기 때문에 무조건 정답을 찾을 수 있음

// 🔶 장점 1 ) 알고리즘을 설계하고 구현하기 매우 쉬움
// 🔶 장점 2 ) 복잡한 알고리즘 없이 빠르게 구현 가능

// 🔶 단점 1 ) 실행 시간이 매우 오래 걸림 (시간 복잡도가 높음)
// 🔶 단점 2 ) 메모리 효율면에서 매우 비효율적

// 🟦 브루트 포스 종류
// 🟦 선형 구조 : 순차 탐색
// 🟦 비선형 구조 : 백트래킹, DFS, BFS

function solution(number) {
    let answer = 0;

    for ( let i = 0; i < number.length; i++ ) {
        for (  let j = i + 1; j < number.length; j++ ) {
            for ( let k = j + 1; k < number.length; k++ ) {
                if ( number[i] + number[j] + number[k] === 0 ) answer++;
            }
        }
    }
    
    return answer;
}