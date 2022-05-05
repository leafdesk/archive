import java.util.Scanner;

public class Prac210 {
	
	public static void main(String[] args) {
		
		Scanner scanner = new Scanner(System.in);
		
		System.out.print("첫 번째 원의 중심과 반지름 입력 >> ");
		double x1 = scanner.nextDouble();
		double y1 = scanner.nextDouble();
		double r1 = scanner.nextDouble();
		
		System.out.print("두 번째 원의 중심과 반지름 입력 >> ");
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
			System.out.println("두 원은 서로 겹친다.");
		}
		else {
			System.out.println("두 원은 서로 겹치지 않는다.");
		}
		
		scanner.close();
		
	} // end of main
	
}
