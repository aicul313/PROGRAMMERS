// 1️⃣ 배열의 길이가 1이거나 빈배열이면 [-1] 리턴
// 2️⃣ 배열 내 최소값 구하기
// 3️⃣ 배열 내 최소값만 제외하고 다시 배열 반환하기

function solution(arr) {
    if (arr.length <= 1) {
        return [-1];
    }

    // 배열 arr에서 최소값을 찾아서 min에 할당하기
    let min = Math.min(...arr) ;
    // 배열 arr에서 최소값 min의 인덱스를 찾아서 없애기
    arr.splice(arr.indexOf(min), 1);
    
    // 최소값 min이 제거된 배열 반환하기
    return arr;
}