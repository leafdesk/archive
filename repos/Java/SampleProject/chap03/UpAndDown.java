import java.util.InputMismatchException;
import java.util.Random;
import java.util.Scanner;

public class UpAndDown {

	public static void main(String[] args) {
		
		Random r = new Random();
		Scanner scanner = new Scanner(System.in);
		System.out.println("Up & Down ������ �����մϴ�.");
		
		while (true) {
			
			int min = 0, max = 99, i = 1;
			int card = r.nextInt(100); // 0-99
			int n = 0;
			
			System.out.println("���� �����߽��ϴ�. ���纸����.");
			System.out.println();
					
			while (true) {
				
				System.out.println(min + "-" + max);
				System.out.print(i + " >> ");
				
				try {
					n = scanner.nextInt();
				}
				
				catch (InputMismatchException e) {
					System.out.println("������ �Է��ϼ���.");
					System.out.println();
					scanner.nextLine(); // ���� ������ �о ������.
					continue;
				}

				if (n > max || n < min) {
					System.out.println("���� ������ �Է��ϼ���.");
				}
				
				else if (n > card) {
					System.out.println("�� ����");
					max = n;
				}
				
				else if (n < card) {
					System.out.println("�� ����");
					min = n;
				}
				
				else { // n == card
					System.out.println("�¾ҽ��ϴ�.");
					break;
				}
				
				System.out.println();
				i++;
				
			} // end of while
			
			System.out.println();
			System.out.print("���(y/n)? >> ");
			String res = scanner.next();
			
			if (res.equals("n")) {
				break;
			}
			
		} // end of while
		
		scanner.close();
		
	} // end of main
	
}
