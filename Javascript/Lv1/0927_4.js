// 1️⃣ 외부 for문 : 첫 번째 원소를 건너뛰기 위해 1부터 시작
// 2️⃣ 내부 for문 : food[i]를 2로 나눈 몫만큼, 해당 숫자 i를 문자열로 변환하여 문자열 answer에 추가 (food[i]가 6이라면 결과 문자열에는 66 추가)
// 3️⃣ 문자열 answer를 뒤집기 위해 split을 사용해서 배열로 분할 reverse 함수로 배열을 뒤집고 join으로 문자열로 합친 것을 reverse에 할당
// 4️⃣ answer 뒤에 0 추가 하고 reverse를 합치기

function solution(food) {
    let answer = '';

    for (let i = 1; i < food.length; i++) {
        for (let j = 0; j < Math.floor(food[i] / 2); j++) {
            answer += i.toString();
        }
    }

    let reverse = answer.split('').reverse().join('');
    return answer + '0' + reverse;
}