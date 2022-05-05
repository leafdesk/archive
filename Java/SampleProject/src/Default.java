import java.util.Scanner;

public class Default {
	
	public static void pr(int[] arr) {
		
//		for (int i = 0; i < arr.length; i++) {
//			System.out.print(arr[i] + " ");
//		}
		
		for (int k : arr) {
			System.out.print(k + " ");
		}
		
	}
	
	public static int big(int[] arr) {
		
		int max = arr[0];
		
		for (int i = 0; i < arr.length; i++) {
			if (arr[i] > max) max = arr[i];
		}
		
		return max;
		
	}
	
	public static void read(int[] arr) {
		
		Scanner scanner;
		scanner = new Scanner(System.in);
		
		for (int i = 0; i < arr.length; i++) {
			arr[i] = scanner.nextInt();
		}
		
		scanner.close();
		
	}
	
	public static void main(String[] args) {

		int[] intArray = new int[7];
		
		System.out.println("정수" + intArray.length + "개를 입력하세요.");
		
		read(intArray);
		pr(intArray);
		int max = big(intArray);
		
		System.out.println("제일 큰 값은 " + max);
		
	}
	
}



