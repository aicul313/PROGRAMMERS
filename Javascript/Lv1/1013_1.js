// 1️⃣ 배열 photo의 각 요소 item에 대해 반복
// 2️⃣ totalYearning 변수를 초기화하여 현재 사진에 대한 총 추억점수를 저장할 변수 생성
// 3️⃣ 배열 name의 각 이름에 대해 반복하면서, 현재 사진 item에 이름이 포함되어 있는지 확인
// 4️⃣ 만약 현재 이름이 사진에 포함되어 있다면, 해당 이름의 그리움 점수 yearning을 totalYearning에 더해줌
// 5️⃣ totalYearning 계산 후 answer에 push하기
// 6️⃣ 전부 반복 후 answer 배열 반환

function solution(name, yearning, photo) {
    let answer = [];

    for (let item of photo) {
        let totalYearning = 0;

        for (let i = 0; i < name.length; i++) {
            if (item.includes(name[i])) {
                totalYearning += yearning[i];
            }
        }

        answer.push(totalYearning);
    }

    return answer;
}
