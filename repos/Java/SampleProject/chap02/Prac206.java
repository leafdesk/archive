import java.util.Scanner;

public class Prac206 {
	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		System.out.print("1-99 사이의 정수를 입력하시오 >> ");
		int input = scanner.nextInt();
		int count = 0;
		
		if (input >= 10) {
			if (input / 10 % 3 == 0) {
				count++;
				input = input % 10; // 일의 자리만 남김
			}
		}

		if (input % 3 == 0 && input != 0) count++;
		
		if (count == 2) System.out.println("박수짝짝");
		if (count == 1) System.out.println("박수짝");
		
		scanner.close();
	}
}
