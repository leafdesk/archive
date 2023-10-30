import java.util.InputMismatchException;
import java.util.Random;
import java.util.Scanner;

public class UpAndDown {

	public static void main(String[] args) {
		
		Random r = new Random();
		Scanner scanner = new Scanner(System.in);
		System.out.println("Up & Down 게임을 시작합니다.");
		
		while (true) {
			
			int min = 0, max = 99, i = 1;
			int card = r.nextInt(100); // 0-99
			int n = 0;
			
			System.out.println("수를 결정했습니다. 맞춰보세요.");
			System.out.println();
					
			while (true) {
				
				System.out.println(min + "-" + max);
				System.out.print(i + " >> ");
				
				try {
					n = scanner.nextInt();
				}
				
				catch (InputMismatchException e) {
					System.out.println("정수를 입력하세요.");
					System.out.println();
					scanner.nextLine(); // 라인 끝까지 읽어서 버린다.
					continue;
				}

				if (n > max || n < min) {
					System.out.println("범위 내에서 입력하세요.");
				}
				
				else if (n > card) {
					System.out.println("더 낮게");
					max = n;
				}
				
				else if (n < card) {
					System.out.println("더 높게");
					min = n;
				}
				
				else { // n == card
					System.out.println("맞았습니다.");
					break;
				}
				
				System.out.println();
				i++;
				
			} // end of while
			
			System.out.println();
			System.out.print("계속(y/n)? >> ");
			String res = scanner.next();
			
			if (res.equals("n")) {
				break;
			}
			
		} // end of while
		
		scanner.close();
		
	} // end of main
	
}
