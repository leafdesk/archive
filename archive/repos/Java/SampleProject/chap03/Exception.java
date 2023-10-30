import java.util.InputMismatchException;
import java.util.Scanner;

public class Exception {
	
	public static void main(String[] args) {
		
		Scanner scanner = new Scanner(System.in);
		
		while (true) {
			
			try {
				System.out.print("�������� �Է� >> ");
				int dividend = scanner.nextInt();
				System.out.print("�������� �Է� >> ");
				int divisor = scanner.nextInt();
				
				System.out.println("������ " + dividend / divisor);
				break;
			}
			
			catch (ArithmeticException e) {
//				e.printStackTrace();
				System.out.println("0���� ������ �ȵ˴ϴ�. �ٽ� �Է��ϼ���.");
			}
			
			catch (InputMismatchException e) {
				System.out.println("������ �Է��ϼ���. �ٽ� �Է��ϼ���.");
				scanner.nextLine(); // ���ۿ��� Enter Ű���� �о ������
			}
			
		} // end of while
	
		scanner.close();
		
	} // end of main
	
}
