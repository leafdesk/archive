import java.util.Scanner;

public class Prac205 {
	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);		
		System.out.print("���� 3���� �Է��Ͻÿ� >> ");
		
		int a = scanner.nextInt();
		int b = scanner.nextInt();
		int c = scanner.nextInt();
		
		int max = a;
		if (max < b) max = b;
		if (max < c) max = c;
		
		if (max == a) {
			if (a < b + c) System.out.println("�ﰢ���� �˴ϴ�.");
			else System.out.println("�ﰢ���� �� �� �����ϴ�.");
		}
		else if (max == b) {
			if (b < a + c) System.out.println("�ﰢ���� �˴ϴ�.");
			else System.out.println("�ﰢ���� �� �� �����ϴ�.");
		}
		else if (max == c) {
			if (c < a + b) System.out.println("�ﰢ���� �˴ϴ�.");
			else System.out.println("�ﰢ���� �� �� �����ϴ�.");
		}
		
		scanner.close();
	}
}
