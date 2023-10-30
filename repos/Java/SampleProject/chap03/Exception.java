import java.util.InputMismatchException;
import java.util.Scanner;

public class Exception {
	
	public static void main(String[] args) {
		
		Scanner scanner = new Scanner(System.in);
		
		while (true) {
			
			try {
				System.out.print("나뉨수를 입력 >> ");
				int dividend = scanner.nextInt();
				System.out.print("나눗수를 입력 >> ");
				int divisor = scanner.nextInt();
				
				System.out.println("나누면 " + dividend / divisor);
				break;
			}
			
			catch (ArithmeticException e) {
//				e.printStackTrace();
				System.out.println("0으로 나누면 안됩니다. 다시 입력하세요.");
			}
			
			catch (InputMismatchException e) {
				System.out.println("정수만 입력하세요. 다시 입력하세요.");
				scanner.nextLine(); // 버퍼에서 Enter 키까지 읽어서 버리기
			}
			
		} // end of while
	
		scanner.close();
		
	} // end of main
	
}
