// 🟦 최대공약수 : greatest common divisor
// 🟦 최소공배수 : largest common multiple
// 1️⃣ 최대공약수, 최소공배수 각각 초기값 선언해주기
// 2️⃣ n과 m을 비교해서 num에 저장하기 ( > for문 반복할 때 num 만큼 반복하면 최대공약수를 찾을 수 있기 때문 )
// 3️⃣ 최대공약수 찾기 : for문 사용하여 0부터 num까지 반복하기
// 4️⃣ for문 내 if문 조건 : i가 n과 m 모두를 나누어 떨어지냐! 즉, i가 두 수의 공약수인가
// 5️⃣ GCD 변수에 i를 넣으면, 현재까지 찾은 가장 큰 공약수가 GCD에 저장됨
// 6️⃣ 최소공배수 : 두 수의 곱을 최대공약수로 나눈 값 = n * m / GCD
// 7️⃣ answer 배열에 계산된 최대공약수 GCD와 최소공배수 LCM 반환

function solution(n, m) {
    let answer = [];

    let GCD = 0; // 최대공약수
    let LCM = 0; // 최소공배수

    let num = n > m ? n : m;

    // 최대공약수
    for ( let i = 0; i < num; i++ ) {
        if ( n % i === 0 && m % i === 0 ) {
            GCD = i;
        }
    }

    // 최소공배수
    LCM = n * m / GCD;
    answer = [GCD, LCM];

    return answer;
}