import java.util.Scanner;

public class Prac203 {
	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		
		System.out.print("�ݾ��� �Է��Ͻÿ� >> ");
		int input = scanner.nextInt();
		
		int b50000 = 0;
		int b10000 = 0;
		int b1000 = 0;
		int c100 = 0;
		int c50 = 0;
		int c10 = 0;
		int c1 = 0;
		
		if (input >= 50000) {
			b50000 = input / 50000;
			input -= b50000 * 50000;
		}
		if (input >= 10000) {
			b10000 = input / 10000;
			input -= b10000 * 10000;
		}
		if (input >= 1000) {
			b1000 = input / 1000;
			input -= b1000 * 1000;
		}
		if (input >= 100) {
			c100 = input / 100;
			input -= c100 * 100;
		}
		if (input >= 50) {
			c50 = input / 50;
			input -= c50 * 50;
		}
		if (input >= 10) {
			c10 = input / 10;
			input -= c10 * 10;
		}
		if (input >= 1) {
			c1 = input;
		}
		
		System.out.println("�������� " + b50000 + "��");
		System.out.println("������ " + b10000 + "��");
		System.out.println("õ���� " + b1000 + "��");
		System.out.println("��� " + c100 + "��");
		System.out.println("���ʿ� " + c50 + "��");
		System.out.println("�ʿ� " + c10 + "��");
		System.out.println("�Ͽ� " + c1 + "��");
		
		scanner.close();
	}
}
