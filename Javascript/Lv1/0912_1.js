// 1️⃣ 배열 d를 오름차순으로 정렬 > 예산 요청이 낮은 것부터 처리할 수 있음
// 2️⃣ forEach 사용하여 배열 d에 있는 각 요소들 반복
// 3️⃣ forEach 함수 내 콜백 함수는 예산 요청을 나타내는 변수 request를 받음
// 4️⃣ 콜백 함수 내에서 예산요청 request랑 주어진 예산 budget 비교
// 5️⃣ request가 budget를 초과하면 return을 사용해서 forEach 종료
// 6️⃣ request가 budget 내에 있으면, answer 1증가, 사용한 예산(request) 만큼 budget에서 차감
// 7️⃣ forEach 종료 후 answer 반환

// 🔶 return 사용 1 : 조기종료 - 특정 조건 만족하는 경우 함수 실행 종료 하고 값 반환
// 🔶 return 사용 2 : 함수 결과값 반환 - 함수 결과 반환하는 역할

function solution(d, budget) {
    let answer = 0;

    d.sort((a, b) => a - b);

    d.forEach((request) => {
        if (request > budget) {
            return;
        }

        answer += 1;
        budget -= request;
    });

    return answer;
}
