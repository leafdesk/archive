import java.util.Scanner;

public class Prac209 {
	
	public static void main(String[] args) {
		
		Scanner scanner = new Scanner(System.in);
		System.out.print("���� �߽ɰ� ������ �Է� >> ");
		
		double x = scanner.nextDouble();
		double y = scanner.nextDouble();
		double r = scanner.nextDouble();
		
		System.out.print("�� �Է� >> ");
		
		double a = scanner.nextDouble();
		double b = scanner.nextDouble();
		
		double w = x - a;
		if (w < 0) {
			w = -w;
		}
		
		double h = y - b;
		if (h < 0) {
			h = -h;
		}
		
		double distance = Math.sqrt(w * w + h * h);
		
		if (distance <= r) {
			System.out.println("�� (" + a + ", " + b + ") �� �� �ȿ� �ִ�.");
		}
		else {
			System.out.println("�� (" + a + ", " + b + ") �� �� �ۿ� �ִ�.");
		}
		
		scanner.close();
		
	} // end of main
	
}
