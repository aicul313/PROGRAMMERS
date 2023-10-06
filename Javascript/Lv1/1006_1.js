// 1️⃣ while문 : n이 a이상이 아닐 때 반복문 종료
// 2️⃣ 현재 n을 a로 나눈 몫을 구하고 이를 b로 곱한 값을 colaBottle에 더하기 (n을 a로 나눈 몫을 colaBottle에 누적하는 과정)
// 3️⃣ n을 a로 나눈 나머지를 구하고, 그 결과에 이전 단계에서 구한 몫을 b로 곱한 값을 더하여 새로운 n 값을 계산 (n의 값을 업데이트하는 과정)
// 4️⃣ n이 a보다 작아질 때까지 colaBottle에 누적하고 n 값을 업데이트
// 5️⃣ 반복문 종료 후 colaBottle 최종값 반환

function solution(a, b, n) {
    let colaBottle = 0;
    
    while ( n >= a ) {
        colaBottle += parseInt(n / a) * b;
        n = (n % a) + parseInt(n / a) * b;
    }

    return colaBottle;
}