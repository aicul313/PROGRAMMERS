// 문자열 반복해서 출력하기
import java.util.*;

public class _0803_3 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        String str = sc.next();
        int n = sc.nextInt();

        sc.close();

        for(int i=0; i<n; i++) {
            System.out.print(str);
        }
    }
}
