import java.util.Scanner;

public class Prac210 {
	
	public static void main(String[] args) {
		
		Scanner scanner = new Scanner(System.in);
		
		System.out.print("ù ��° ���� �߽ɰ� ������ �Է� >> ");
		double x1 = scanner.nextDouble();
		double y1 = scanner.nextDouble();
		double r1 = scanner.nextDouble();
		
		System.out.print("�� ��° ���� �߽ɰ� ������ �Է� >> ");
		double x2 = scanner.nextDouble();
		double y2 = scanner.nextDouble();
		double r2 = scanner.nextDouble();
		
		double w = x1 - x2;
		if (w < 0) {
			w = -w;
		}
		
		double h = y1 - y2;
		if (h < 0) {
			h = -h;
		}
		
		double distance = Math.sqrt(w * w + h * h);
		
		if (distance <= r1 + r2) {
			System.out.println("�� ���� ���� ��ģ��.");
		}
		else {
			System.out.println("�� ���� ���� ��ġ�� �ʴ´�.");
		}
		
		scanner.close();
		
	} // end of main
	
}
