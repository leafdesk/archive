import java.util.Scanner;

public class Prac204 {
	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		
		System.out.print("정수 3개 입력 >> ");
		int num1 = scanner.nextInt();
		int num2 = scanner.nextInt();
		int num3 = scanner.nextInt();
		
		int max = num1, min = num1;
		double middle = -0.1;
		
		if (max < num2) max = num2;
		if (max < num3) max = num3;
		
		if (min > num2) min = num2;
		if (min > num3) min = num3;
		
		if (max == num1) {
			if (min == num2) middle = num3;
			if (min == num3) middle = num2;
		}
		if (max == num2) {
			if (min == num1) middle = num3;
			if (min == num3) middle = num1;
		}
		if (max == num3) {
			if (min == num1) middle = num2;
			if (min == num2) middle = num1;
		}
		
		if (middle == -0.1) System.out.println("ERROR");
		else System.out.println("중간 값은 " + (int)middle);
		
		scanner.close();
	}
}
