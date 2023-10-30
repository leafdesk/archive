import java.util.Scanner;

public class Open2_RockPaperScissors {
	public static void main(String[] args) {
		System.out.println("가위바위보 게임입니다. 가위, 바위, 보 중에서 입력하세요.");
		
		Scanner s = new Scanner(System.in);
		System.out.print("철수 >> ");
		String cs = s.next();
		System.out.print("영희 >> ");
		String yh = s.next();
		
		if (cs.equals("가위")) {		
			if (yh.equals("가위")) System.out.println("비겼습니다.");
			else if (yh.equals("바위")) System.out.println("영희가 이겼습니다.");
			else if (yh.equals("보")) System.out.println("철수가 이겼습니다.");
			else System.out.println("알 수 없는 String 이 입력되었습니다.");
		}
		else if (cs.equals("바위")) {
			if (yh.equals("가위")) System.out.println("철수가 이겼습니다.");
			else if (yh.equals("바위")) System.out.println("비겼습니다.");
			else if (yh.equals("보")) System.out.println("영희가 이겼습니다.");
			else System.out.println("알 수 없는 String 이 입력되었습니다.");
		}
		else if (cs.equals("보")) {
			if (yh.equals("가위")) System.out.println("영희가 이겼습니다.");
			else if (yh.equals("바위")) System.out.println("철수가 이겼습니다.");
			else if (yh.equals("보")) System.out.println("비겼습니다.");
			else System.out.println("알 수 없는 String 이 입력되었습니다.");
		}
		else System.out.println("알 수 없는 String 이 입력되었습니다.");
		
		s.close();
	}
}
