import java.util.Scanner;

public class Prac304 {

	public static void main(String[] args) {

		Scanner scanner = new Scanner(System.in);
		
		System.out.print("소문자 알파벳 하나를 입력하시오 >> ");
		String str = scanner.next();
		char alpha = str.charAt(0);
		
		for (char c = alpha; c >= 'a'; c--) {
			for (char d = 'a'; d <= c; d++) {
				System.out.print(d);
			}
			System.out.println();
		} // a == 97
		
		scanner.close();

	}

}
