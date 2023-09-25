// 1️⃣ 배열의 길이 n만큼 반복
// 2️⃣ 배열 arr1과 arr2를 각각 OR 연산하여 두 지도를 합친 결과를 이진수 문자열로 변환하여 변수 bin에 저장
// 3️⃣ 이진수 문자열 bin의 각 자릿수를 반복 > 결과 문자열의 길이가 n이 되도록 하기 위해 bin.length - n 위치부터 시작하여 bin.length까지 반복
// 4️⃣ 문자열 bin을 한 자릿수씩 검사하면서 자릿수가 1이면 # 그렇지 않으면 공백을 배열 line에 push

// ⬇️ const bin = (arr1[i] | arr2[i]).toString(2);
// 🟦 arr1과 arr2는 두 개의 이진수 배열로 각각 지도의 한 줄을 나타냄
// 🟦 지도를 표현하는 두 배열 중 하나라도 해당 위치에 벽이 있으면 최종 지도에서 해당 위치에 벽을 표시하기 위해 OR 연산 사용하여 합침
// 🟦 arr1[i]와 arr2[i]의 각 비트 중 하나라도 1이라면 그 자리는 최종 지도에서 벽으로 표시되어야 함 그렇지 않으면 그 자리는 공백
// 🟦 [ 가정 ] arr1의 한 줄이 01010이고, arr2의 한 줄이 10100이라고 가정하면, 이 두 줄을 OR 연산하면 11110이 됨 이 결과는 최종 지도에서 벽이 있는 부분을 나타내며 1은 벽을 나타내는 문자 #으로 변환됨

// ⬇️ for ( let j = bin.length - n; j < bin.length; j++ ) 
// 🟦 문자열 bin의 길이에서 n을 뺀 값을 시작값으로 설정 > 문자열 bin의 끝에서부터 역순으로 n개의 문자를 처리할 수 있음
// 🟦 bin 문자열을 끝까지 순회할 때까지 반복
// 🟦 문자열 bin의 뒤에서부터 n개의 자릿수를 차례대로 검사하며 각 자릿수가 1인지 아닌지 확인하여 해당하는 문자열 배열 line에 추가

function solution(n, arr1, arr2) {
    let answer = [];

    for ( let i = 0; i < n; i++ ) {
        const bin = (arr1[i] | arr2[i]).toString(2);
        console.log(bin);

        let line = [];

        for ( let j = bin.length - n; j < bin.length; j++ ) { // j가(인덱스값)이 -1일 경우 undefined 반환.
            if ( bin[j] === "1" ) { // 1이면 '#', 그 외 ' '
                line.push("#");
            } else {
                line.push(" ");
            }
        }
        answer.push(line.join(""));
    }
    return answer;
}