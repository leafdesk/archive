import java.util.Scanner;

public class Open2_RockPaperScissors {
	public static void main(String[] args) {
		System.out.println("���������� �����Դϴ�. ����, ����, �� �߿��� �Է��ϼ���.");
		
		Scanner s = new Scanner(System.in);
		System.out.print("ö�� >> ");
		String cs = s.next();
		System.out.print("���� >> ");
		String yh = s.next();
		
		if (cs.equals("����")) {		
			if (yh.equals("����")) System.out.println("�����ϴ�.");
			else if (yh.equals("����")) System.out.println("���� �̰���ϴ�.");
			else if (yh.equals("��")) System.out.println("ö���� �̰���ϴ�.");
			else System.out.println("�� �� ���� String �� �ԷµǾ����ϴ�.");
		}
		else if (cs.equals("����")) {
			if (yh.equals("����")) System.out.println("ö���� �̰���ϴ�.");
			else if (yh.equals("����")) System.out.println("�����ϴ�.");
			else if (yh.equals("��")) System.out.println("���� �̰���ϴ�.");
			else System.out.println("�� �� ���� String �� �ԷµǾ����ϴ�.");
		}
		else if (cs.equals("��")) {
			if (yh.equals("����")) System.out.println("���� �̰���ϴ�.");
			else if (yh.equals("����")) System.out.println("ö���� �̰���ϴ�.");
			else if (yh.equals("��")) System.out.println("�����ϴ�.");
			else System.out.println("�� �� ���� String �� �ԷµǾ����ϴ�.");
		}
		else System.out.println("�� �� ���� String �� �ԷµǾ����ϴ�.");
		
		s.close();
	}
}
