import java.util.Scanner;

public class Prac303 {

	public static void main(String[] args) {
	
		Scanner scanner = new Scanner(System.in);
		System.out.print("������ �Է��Ͻÿ� >> ");
		int ans = scanner.nextInt();
		
		for (int i = ans; i > 0; i--) {
			for (int j = i; j > 0; j--) {
				System.out.print("*");
			}
			System.out.println();
		}
		
		scanner.close();
		
	} // end of main
	
}
