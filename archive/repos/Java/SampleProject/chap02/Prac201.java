import java.util.Scanner;

public class Prac201 {
	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		
		System.out.print("��ȭ�� �Է��ϼ���(����:��) >> ");
		int won = scanner.nextInt();
		double dollar = won / 1100;
		System.out.println(won + "���� $" + dollar + "�Դϴ�.");
		
		scanner.close();
	}
}
