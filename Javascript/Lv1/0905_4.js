// 1️⃣ 중첩 for문 사용
// 2️⃣ 외부 for문 : 세로의 길이 만큼 반복, 변수 star 초기화 시키기
// 3️⃣ 내부 for문 : 가로의 길이 만큼 변수 star에 * 더해주기
// 4️⃣ 내부 for문 반복이 끝나면, 외부 for문에서 현재까지 저장된 변수 star의 값을 console로 보여주기

process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {

    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);

    for (let i = 0; i < b; i++) {
        let star = "";
        for (let j = 0; j < a; j++) {
            star += '*';
        }

        console.log(star);
    }
    
});