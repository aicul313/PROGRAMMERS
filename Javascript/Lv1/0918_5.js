// 1️⃣ s.replaceAll('zero', '0') : 문자열 s에서 zero라는 영단어 모두 찾아 0으로 대체
// 2️⃣ return parseInt(s) 문자열 s를 정수로 변환하여 반환

function solution(s) {
    s = s.replaceAll('zero', '0')
        .replaceAll('one', '1')
        .replaceAll('two', '2')
        .replaceAll('three', '3')
        .replaceAll('four', '4')
        .replaceAll('five', '5')
        .replaceAll('six', '6')
        .replaceAll('seven', '7')
        .replaceAll('eight', '8')
        .replaceAll('nine', '9');
    
    return parseInt(s);
}