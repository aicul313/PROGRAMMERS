// 1️⃣ int[] 타입의 배열을 이자로 받아서 int[] 타입의 배열을 반환
// 2️⃣ answer라는 이름의 int 배열 선언, 배열 answer의 길이는 입력받은 배열 arr의 길이와 같도록 함
// 3️⃣ 배열 answer는 변환된 결과를 담을 용도로 사용
// 4️⃣ for문 돌면서 조건 충족시켜주고 answer 배열에 저장하여 반환

public class _0831_2 {
    public int[] solution(int[] arr) {
        int[] answer = new int[arr.length];

        for ( int i = 0; i < answer.length; i++ ) {
            if (arr[i] >= 50 && arr[i] % 2 == 0 ) {
                answer[i] = arr[i] / 2;
            } else if (arr[i] < 50 && arr[i] % 2 != 0) {
                answer[i] = arr[i] * 2;
            } else {
                answer[i] = arr[i];
            }
        }

        return answer;
    }
}
