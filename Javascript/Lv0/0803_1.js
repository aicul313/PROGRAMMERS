// 문자열 출력하기

// #1 readline 모듈 : javascript에 내장된 모듈로, readable 스트림에서 한 줄씩 입출력을 처리할 수 있게 도와줌.

// #2 모듈 불러오기 : require("모듈이름") 선언하고, 변수를 선언하여 저장.
const readline = require('readline');

// #3 readline interface 객체 만들기 : 
//      정의한 변수를 이용하여 readline interface 객체 하나 만들기
//      readline interface 객체를 이용해 콘솔에서 표준 입출력을 처리할 수 있음
//      createInterface() method를 이용해 객체를 만들고, rl 변수에 저장
const rl = readline.createInterface({
    input: procss.stdin,
    output: process.stdout
});

let input = [];

// #4 on method : 생성한 변수 rl 객체로 입출력과 관련된 여러 이벤트 처리 할 수 있음
// #5 line event : readline interface를 통해 line 이벤트로 사용자가 
rl.on('line', function (line) {
    input = [line];
    rl.close(); // 입력 종료
}).on('close',function(){
    // 입력 종료 후 동작할 코드
    str = input[0];
});