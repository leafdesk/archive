import java.util.Scanner;

public class Prac306 {

	public static void main(String[] args) {
		
		int[] unit = { 50000, 10000, 1000, 500, 100, 50, 10, 1 };
		
		Scanner scanner = new Scanner(System.in);
		System.out.print("금액을 입력하시오 >> ");
		int ans = scanner.nextInt();
		
		for (int i = 0; i < unit.length; i++) {
			
			int n = ans / unit[i];
			
			if (n == 0) {
//				continue;
			}
			
			else {
				System.out.print(unit[i] + " 원 짜리 : " + n + "개");
				System.out.println();
				ans = ans % unit[i];
			}
			
		}
		
		scanner.close();
		
	} // end of main
	
}
