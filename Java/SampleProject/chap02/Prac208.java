import java.util.Scanner;

public class Prac208 {
	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		
		System.out.print("(x1, y1)�� �Է��Ͻÿ� >> ");
		int x1 = scanner.nextInt();
		int y1 = scanner.nextInt();
		System.out.print("(x2, y2)�� �Է��Ͻÿ� >> ");
		int x2 = scanner.nextInt();
		int y2 = scanner.nextInt();
		
		if (inRect(x1, y1, 100, 100, 200, 200) ||
				inRect(x2, y2, 100, 100, 200, 200)) {
			System.out.println("�浹�Ѵ�.");
		}
		else System.out.println("�浹���� �ʴ´�.");
		
		scanner.close();
	}
	
	public static boolean inRect(int x, int y, 
			int rectx1, int recty1, int rectx2, int recty2) {
		if ((x >= rectx1 && x <= rectx2) && (y >= recty1 && y <= recty2)) { 
			return true;
		}
		else return false;
	}
}
