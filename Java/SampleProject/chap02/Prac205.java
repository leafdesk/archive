import java.util.Scanner;

public class Prac205 {
	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);		
		System.out.print("정수 3개를 입력하시오 >> ");
		
		int a = scanner.nextInt();
		int b = scanner.nextInt();
		int c = scanner.nextInt();
		
		int max = a;
		if (max < b) max = b;
		if (max < c) max = c;
		
		if (max == a) {
			if (a < b + c) System.out.println("삼각형이 됩니다.");
			else System.out.println("삼각형이 될 수 없습니다.");
		}
		else if (max == b) {
			if (b < a + c) System.out.println("삼각형이 됩니다.");
			else System.out.println("삼각형이 될 수 없습니다.");
		}
		else if (max == c) {
			if (c < a + b) System.out.println("삼각형이 됩니다.");
			else System.out.println("삼각형이 될 수 없습니다.");
		}
		
		scanner.close();
	}
}
