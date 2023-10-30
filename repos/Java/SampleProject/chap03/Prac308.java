import java.util.InputMismatchException;
import java.util.Scanner;

public class Prac308 {

	// ����ڷκ��� ������ �Է¹޴� �Լ��̴�.
	public static int read() { 
		Scanner scanner = new Scanner(System.in);
		
		int num = 0; // ����ڰ� �Է��� ������ ������ �����̴�.
		while (true) {
			System.out.print("���� �?");
			
			try {
				num = scanner.nextInt(); // ����ڷκ��� ������ �Է¹޴´�.
			}
			catch (InputMismatchException e) { // ������ �Է����� �ʾ��� ���,
				System.out.println("������ �Է��ϼ���.");
				System.out.println();
				scanner.nextLine(); // ���� ������ �о ������.
				continue; // ������ �Է��� ������ ����Ѵ�. 
			}
			
			if (1 <= num && num <= 99) {
				break; // 1-99 ������ ������ �Է����� ���� �Ѿ��.
			}
			else { // ������ �Է������� ������ ����� �ٽ� while ������ �ݺ��Ѵ�.
				System.out.println("100���� ���� ������ �Է��ϼ���(1-99).");
				System.out.println();
			}	
		} // end of while
		
		scanner.close();
		return num; // ����ڰ� �Է��� ������ �����Ѵ�.
	}
	
	// �̹� ���Դ� ������ �迭�� Ȯ���ϴ� �Լ��̴�.
	public static boolean isInArray(int[] arr, int i) { 
		boolean isInArray = false;
		
		// i �� Ȯ���ϰ� ���� ������ �ε����̴�. (�Լ� �ܺο��� �Ű������� �޴´�.)
		// j �� �迭�� �̹� ä���� �������� ��ȸ�� �� ����� �ε����̴�.
		for (int j = 0; j < i; j++) {
			if (arr[i] == arr[j]) { 
				isInArray = true; // ���� ���� �߰ߵǸ� true, 
			}
		}
		return isInArray; // ���� ���� ������ �ʾҴٸ� false �� ���̴�.
	}
	
	// �迭�� ���� ������ ä��� �Լ��̴�.
	public static void fillArray(int[] arr) {
		for (int i = 0; i < arr.length; i++) { // �迭�� ũ�⸸ŭ �ݺ��Ѵ�.
			while (true) {
				arr[i] = (int)(Math.random() * 100 + 1); // 1-100 ������ ������ �������� �����Ѵ�.
				if (!isInArray(arr, i)) { // ���� ������ �̹� ���Դ��� Ȯ���Ѵ�.
					break; // �̹� ���Դ� ��(���� ��)�� �ƴϸ� �Ѿ��.
				}
			} // end of while
		}
	}
	
	// �迭�� ����ϴ� �Լ��̴�.
	public static void printArray(int[] arr) {
		for (int i = 0; i < arr.length; i++) { // �迭�� ũ�⸸ŭ �ݺ��Ѵ�.
			if ((i != 0) && (i % 10 == 0)) {
				System.out.println(); // �׸� 10���� ��������� �ٹٲ��Ѵ�. (ó���� ����)
			}
			System.out.print(arr[i] + " "); // �迭�� ��Ҹ� ���ʷ� ����Ѵ�.
		}
	}
	
	// �����Լ��̴�.
	public static void main(String[] args) {
		
		int num = read(); // ����ڷκ��� ������ �Է¹޴´�.
		int[] arr = new int[num]; // ����ڰ� �Է��� ������ŭ ���� �迭�� �����Ѵ�.
		fillArray(arr); // �迭�� �������� ������ ä���ִ´�.
		printArray(arr); // �迭�� ����Ѵ�.

	} // end of main
}
