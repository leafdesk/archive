import java.util.Scanner;

public class Prac202 {
	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		
		System.out.print("�� �ڸ� ���� ������ �Է�(10-99) >> ");
		int input = scanner.nextInt();
		int x = input / 10;
		int y = input % 10;
		
		if (x == y) {
			System.out.println("Yes! 10�� �ڸ��� 1�� �ڸ��� �����ϴ�.");
		}
		scanner.close();
	}
}
