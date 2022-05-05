import java.util.Scanner;

public class Prac314 {
	
	public static int find(String[] course, String name) {

		int index = -1;
		
		for (int i = 0; i < course.length; i++) {
			if (course[i].equals(name)) {
				index = i; // �˻� �� ���� �̸��� �߰��ϸ� �ش� �ε����� �����Ѵ�.
				break;
			}
		}
		
		return index; // ã�� �ε����� ��ȯ�Ѵ�. �˻� ���� �� -1 �� ��ȯ�Ѵ�. 
		
	}
	
	public static void main(String[] args) {
	
		String[] course = { "Java", "C++", "HTML5", "��ǻ�ͱ���", "�ȵ���̵�" };
		int[] score = { 95, 88, 76, 62, 55 };
		Scanner scanner = new Scanner(System.in);
		
		while (true) {
			
			System.out.print("���� �̸�>>");
			String name = scanner.next(); // ����ڷκ��� ���� �̸��� �Է¹޴´�.		
			
			if (name.equals("�׸�")) { // ����ڰ� "�׸�"�� �Է��ϸ� �����Ѵ�.
				break;
			}
			
			int index = find(course, name); // ����ڰ� �Է��� ������ �ε����� ã�´�.
			if (index == -1) {
				System.out.println("���� �����Դϴ�."); // �˻��� �����ϸ� �� ������ ����ȴ�.
			}
			else { // �˻��� �����ϸ� score �迭���� �ش� �ε����� ������ ����Ѵ�.
				System.out.println(name + "�� ������ " + score[index]);
			}
			
		} // end of while
		
		scanner.close();

	} // end of main
	
}
