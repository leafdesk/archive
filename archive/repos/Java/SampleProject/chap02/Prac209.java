import java.util.Scanner;

public class Prac209 {
	
	public static void main(String[] args) {
		
		Scanner scanner = new Scanner(System.in);
		System.out.print("원의 중심과 반지름 입력 >> ");
		
		double x = scanner.nextDouble();
		double y = scanner.nextDouble();
		double r = scanner.nextDouble();
		
		System.out.print("점 입력 >> ");
		
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
			System.out.println("점 (" + a + ", " + b + ") 는 원 안에 있다.");
		}
		else {
			System.out.println("점 (" + a + ", " + b + ") 는 원 밖에 있다.");
		}
		
		scanner.close();
		
	} // end of main
	
}
