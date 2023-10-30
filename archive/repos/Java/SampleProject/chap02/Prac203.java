import java.util.Scanner;

public class Prac203 {
	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		
		System.out.print("금액을 입력하시오 >> ");
		int input = scanner.nextInt();
		
		int b50000 = 0;
		int b10000 = 0;
		int b1000 = 0;
		int c100 = 0;
		int c50 = 0;
		int c10 = 0;
		int c1 = 0;
		
		if (input >= 50000) {
			b50000 = input / 50000;
			input -= b50000 * 50000;
		}
		if (input >= 10000) {
			b10000 = input / 10000;
			input -= b10000 * 10000;
		}
		if (input >= 1000) {
			b1000 = input / 1000;
			input -= b1000 * 1000;
		}
		if (input >= 100) {
			c100 = input / 100;
			input -= c100 * 100;
		}
		if (input >= 50) {
			c50 = input / 50;
			input -= c50 * 50;
		}
		if (input >= 10) {
			c10 = input / 10;
			input -= c10 * 10;
		}
		if (input >= 1) {
			c1 = input;
		}
		
		System.out.println("오만원권 " + b50000 + "매");
		System.out.println("만원권 " + b10000 + "매");
		System.out.println("천원권 " + b1000 + "매");
		System.out.println("백원 " + c100 + "개");
		System.out.println("오십원 " + c50 + "개");
		System.out.println("십원 " + c10 + "개");
		System.out.println("일원 " + c1 + "개");
		
		scanner.close();
	}
}
