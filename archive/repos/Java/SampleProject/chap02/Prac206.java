import java.util.Scanner;

public class Prac206 {
	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		System.out.print("1-99 ������ ������ �Է��Ͻÿ� >> ");
		int input = scanner.nextInt();
		int count = 0;
		
		if (input >= 10) {
			if (input / 10 % 3 == 0) {
				count++;
				input = input % 10; // ���� �ڸ��� ����
			}
		}

		if (input % 3 == 0 && input != 0) count++;
		
		if (count == 2) System.out.println("�ڼ�¦¦");
		if (count == 1) System.out.println("�ڼ�¦");
		
		scanner.close();
	}
}
