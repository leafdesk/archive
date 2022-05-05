import java.util.Scanner;

public class Prac212_1 {
	
	public static void main(String[] args) {
	
		Scanner scanner = new Scanner(System.in);
		System.out.print("연산 >> ");
		
		double a = scanner.nextDouble();
		String op = scanner.next();
		double b = scanner.nextDouble();
		
		if (op.equals("+")) {
			double res = a + b;
			System.out.println(a + " + " + b + " 의 계산 결과는 " + res);
		}
		
		else if (op.equals("-")) {
			double res = a - b;
			System.out.println(a + " - " + b + " 의 계산 결과는 " + res);
		}
		
		else if (op.equals("*")) {
			double res = a * b;
			System.out.println(a + " * " + b + " 의 계산 결과는 " + res);
		}
		
		else if (op.equals("/")) {
			
			if (b == 0) {
				System.out.println("0으로 나눌 수 없습니다.");
			}
			
			else {
				double res = a / b;
				System.out.println(a + " / " + b + " 의 계산 결과는 " + res);
			}
			
		}
		
		else {
			System.out.println("잘못된 연산자를 입력했습니다.");
		}
		
		scanner.close();
		
	} // end of main
	
}
