import java.util.Scanner;

public class Prac212_1 {
	
	public static void main(String[] args) {
	
		Scanner scanner = new Scanner(System.in);
		System.out.print("���� >> ");
		
		double a = scanner.nextDouble();
		String op = scanner.next();
		double b = scanner.nextDouble();
		
		if (op.equals("+")) {
			double res = a + b;
			System.out.println(a + " + " + b + " �� ��� ����� " + res);
		}
		
		else if (op.equals("-")) {
			double res = a - b;
			System.out.println(a + " - " + b + " �� ��� ����� " + res);
		}
		
		else if (op.equals("*")) {
			double res = a * b;
			System.out.println(a + " * " + b + " �� ��� ����� " + res);
		}
		
		else if (op.equals("/")) {
			
			if (b == 0) {
				System.out.println("0���� ���� �� �����ϴ�.");
			}
			
			else {
				double res = a / b;
				System.out.println(a + " / " + b + " �� ��� ����� " + res);
			}
			
		}
		
		else {
			System.out.println("�߸��� �����ڸ� �Է��߽��ϴ�.");
		}
		
		scanner.close();
		
	} // end of main
	
}
