// 1️⃣ 변수 rotate : 배열 sizes 내 사각형 순회하여 가로 세로 길이 비교
// 2️⃣ 가로 길이가 세로 길이보다 작다면, 해당 사각형을 돌렸다고 생각하고 [세로, 가로]로 대체
// 3️⃣ 배열 rotate에서 가로 길이와 세로 길이 추출 후 가장 큰 값을 찾아 변수에 저장

// 🟦 '...' 연산자 : 배열의 요소를 펼쳐서 개별적인 인수로 전달하는 역할
// 🟦 '...rotate.map(([width, _]) => width)' : 배열 rotate 순회하면서 각 사각형의 가로 길이 추출 후, 개별적인 인수로 전달하여 Math.max 함수에 넘김
// 🟦 'rotate.map(([width, _]) => width)' : 배열 rotate 순회하면서 '[width, _]' 구조 분해를 사용해서 각 가로길이를 추출한 새로운 배열 생성
// 🟦 위 각 가로길이를 추출한 새로운 배열은 [width1, width2, width3, ...]과 같은 형태를 가짐

// 4️⃣ 최대 사각형 넓이 = 최대 가로 길이 X 최대 세로 길이 반환

function solution(sizes) {
    let rotate = sizes.map(([width, height]) => width < height ? [height, width] : [width, height]);

    let maxWidth = Math.max(...rotate.map(([width, _]) => width));
    let maxHeight = Math.max(...rotate.map(([_, height]) => height));

    return maxWidth * maxHeight;
}