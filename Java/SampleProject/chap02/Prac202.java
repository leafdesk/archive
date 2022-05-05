import java.util.Scanner;

public class Prac202 {
	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		
		System.out.print("두 자리 수인 정수를 입력(10-99) >> ");
		int input = scanner.nextInt();
		int x = input / 10;
		int y = input % 10;
		
		if (x == y) {
			System.out.println("Yes! 10의 자리와 1의 자리가 같습니다.");
		}
		scanner.close();
	}
}
