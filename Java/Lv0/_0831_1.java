// 1️⃣ Scanner 사용하여 String에 문자열 a 받아오기
// 2️⃣ 문자열 a의 길이만큼 반복문 for 돌기
// 3️⃣ charAt()을 이용해서 i번째 인덱스에 위치한 문자를 'c'변수에 저장
// 4️⃣ if-else 구문을 이용하여, c가 소문자인지 대문자인지 판별
// 5️⃣ 만약 c가 소문자이면 대문자로, c가 대문자이면 소문자로 변환하여 출력

import java.util.Scanner;

public class _0831_1 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String a = sc.next();

        for ( int i = 0; i < a.length(); i++ ) {
            char c = a.charAt(i);

            if (Character.isLowerCase(c)) {
                System.out.print(Character.toUpperCase(c));
            } else {
                System.out.print(Character.toLowerCase(c));
            }
        }

        sc.close();
    }
}