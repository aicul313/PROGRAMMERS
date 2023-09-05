// 1️⃣ for문 사용 : 원래 이용료 price와 1부터 count 번째까지 차례대로 곱해서 각 결과값 sum에 더해주기
// 2️⃣ 소지한 돈 money가 sum보다 크거나 같으면 돈이 부족하지 않으므로 0을 리턴
// 3️⃣ 돈이 부족하면 모자란 돈(sum에서 소지한 돈 money 뺀 값) 반환

function solution(price, money, count) {
    let sum = 0;

    for (let i = 1; i <= count; i++) {
        sum += price * i;
    }
    
    return (money >= sum) ? 0 : (sum - money);
}