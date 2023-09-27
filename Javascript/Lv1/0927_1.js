// 1️⃣ for문 반복 : z는 현재 처리 중인 명령어의 인덱스
// 2️⃣ 배열 array에서 i-1부터 j까지의 부분 배열 추출 후 오름차순 정렬 후 slice에 넣기
// 3️⃣ slice에서 k-1번째 원소를 추출해서 배열 answer에 추가 (배열의 인덱스가 0부터 시작하기 때문에)

function solution(array, commands) {
    let answer = [];
    for ( let z = 0; z < commands.length; z++ ) {
        let [i, j, k] = commands[z];
        let slice = array.slice(i - 1, j).sort((a, b) => a - b);
        answer.push(slice[k - 1]);
    }
    return answer;
}
