import java.util.Scanner;

public class Prac212_2 {

	public static void main(String[] args) {
		
		Scanner scanner = new Scanner(System.in);
		System.out.print("���� >> ");
		
		double a = scanner.nextDouble();
		String op = scanner.next();
		double b = scanner.nextDouble();
		
		double res;
		
		switch (op) {
			
		case "+":
			res = a + b;
			System.out.println("����� " + res);
			break;
			
		case "-":
			res = a - b;
			System.out.println("����� " + res);
			break;
			
		case "*":
			res = a * b;
			System.out.println("����� " + res);
			break;
			
		case "/":
			
			if (b == 0) {
				System.out.println("0���� ���� �� �����ϴ�.");
			}
			
			else {
				res = a / b;
				System.out.println("����� " + res);
			}
			
			break;
			
		} // end of switch
		
		scanner.close();

	} // end of main

}