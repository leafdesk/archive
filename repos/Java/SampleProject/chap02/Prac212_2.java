import java.util.Scanner;

public class Prac212_2 {

	public static void main(String[] args) {
		
		Scanner scanner = new Scanner(System.in);
		System.out.print("연산 >> ");
		
		double a = scanner.nextDouble();
		String op = scanner.next();
		double b = scanner.nextDouble();
		
		double res;
		
		switch (op) {
			
		case "+":
			res = a + b;
			System.out.println("결과는 " + res);
			break;
			
		case "-":
			res = a - b;
			System.out.println("결과는 " + res);
			break;
			
		case "*":
			res = a * b;
			System.out.println("결과는 " + res);
			break;
			
		case "/":
			
			if (b == 0) {
				System.out.println("0으로 나눌 수 없습니다.");
			}
			
			else {
				res = a / b;
				System.out.println("결과는 " + res);
			}
			
			break;
			
		} // end of switch
		
		scanner.close();

	} // end of main

}