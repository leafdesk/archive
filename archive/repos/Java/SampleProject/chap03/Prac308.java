import java.util.InputMismatchException;
import java.util.Scanner;

public class Prac308 {

	// 사용자로부터 정수를 입력받는 함수이다.
	public static int read() { 
		Scanner scanner = new Scanner(System.in);
		
		int num = 0; // 사용자가 입력한 정수를 저장할 변수이다.
		while (true) {
			System.out.print("정수 몇개?");
			
			try {
				num = scanner.nextInt(); // 사용자로부터 정수를 입력받는다.
			}
			catch (InputMismatchException e) { // 정수를 입력하지 않았을 경우,
				System.out.println("정수를 입력하세요.");
				System.out.println();
				scanner.nextLine(); // 라인 끝까지 읽어서 버린다.
				continue; // 정수를 입력할 때까지 계속한다. 
			}
			
			if (1 <= num && num <= 99) {
				break; // 1-99 사이의 정수를 입력했을 때만 넘어간다.
			}
			else { // 정수를 입력했으나 범위를 벗어나면 다시 while 루프를 반복한다.
				System.out.println("100보다 작은 개수를 입력하세요(1-99).");
				System.out.println();
			}	
		} // end of while
		
		scanner.close();
		return num; // 사용자가 입력한 정수를 리턴한다.
	}
	
	// 이미 나왔던 수인지 배열을 확인하는 함수이다.
	public static boolean isInArray(int[] arr, int i) { 
		boolean isInArray = false;
		
		// i 는 확인하고 싶은 정수의 인덱스이다. (함수 외부에서 매개변수로 받는다.)
		// j 는 배열에 이미 채워진 정수들을 순회할 때 사용할 인덱스이다.
		for (int j = 0; j < i; j++) {
			if (arr[i] == arr[j]) { 
				isInArray = true; // 같은 것이 발견되면 true, 
			}
		}
		return isInArray; // 같은 것이 나오지 않았다면 false 일 것이다.
	}
	
	// 배열을 랜덤 정수로 채우는 함수이다.
	public static void fillArray(int[] arr) {
		for (int i = 0; i < arr.length; i++) { // 배열의 크기만큼 반복한다.
			while (true) {
				arr[i] = (int)(Math.random() * 100 + 1); // 1-100 범위의 정수를 랜덤으로 삽입한다.
				if (!isInArray(arr, i)) { // 현재 정수가 이미 나왔는지 확인한다.
					break; // 이미 나왔던 수(같은 수)가 아니면 넘어간다.
				}
			} // end of while
		}
	}
	
	// 배열을 출력하는 함수이다.
	public static void printArray(int[] arr) {
		for (int i = 0; i < arr.length; i++) { // 배열의 크기만큼 반복한다.
			if ((i != 0) && (i % 10 == 0)) {
				System.out.println(); // 항목 10개를 출력했으면 줄바꿈한다. (처음은 제외)
			}
			System.out.print(arr[i] + " "); // 배열의 요소를 차례로 출력한다.
		}
	}
	
	// 메인함수이다.
	public static void main(String[] args) {
		
		int num = read(); // 사용자로부터 정수를 입력받는다.
		int[] arr = new int[num]; // 사용자가 입력한 개수만큼 정수 배열을 생성한다.
		fillArray(arr); // 배열에 랜덤으로 정수를 채워넣는다.
		printArray(arr); // 배열을 출력한다.

	} // end of main
}
