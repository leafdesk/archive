
public class Prac310 {
	
	public static int[][] makeArray() {
		
		int[][] ret = new int[4][4];
		return ret;

	}
		
	public static void initArray(int[][] arr) {
		
		for (int i = 0; i < arr.length; i++) {
			for (int j = 0; j < arr[i].length; j++) {
				arr[i][j] = 0; // 0 으로 초기화
			}
		}
		
	}
	
	public static boolean isFilled(int[][] arr, int i, int j) {
		
		boolean ret = false;
		
		if (arr[i][j] == 0) {
			ret = false; // 0 으로 초기 상태 (채워지지 않음)
		} 
		else {
			ret = true; // 초기 상태가 아님 (채워짐)
		}
		
		return ret;
		
	} 
	
	public static void fillArray(int[][] arr) {
		
		int i, j, state = 0;
		
		while (state < 10) { // 10개를 삽입하면 종료
			
			while (true) {
				
				i = (int)(Math.random() * 4); // 0-3 범위에서 랜덤
				j = (int)(Math.random() * 4); // 0-3 범위에서 랜덤
				
				if (isFilled(arr, i, j)) {
					continue;
				}
				else {
					break;
				}
				
			} // end of while
			
			arr[i][j] = (int)(Math.random() * 10 + 1); // 1-10 범위에서 랜덤
			state++;
			
		} // end of while
		
	}
	
	public static void printArray(int[][] arr) {
		
		for (int i = 0; i < arr.length; i++) {
			for (int j = 0; j < arr[i].length; j++) {
				System.out.print(arr[i][j] + "\t");
			}
			System.out.println();
		}
		
	}
	
	public static void main(String[] args) {
		
		int[][] myArray = makeArray();
		initArray(myArray);
		fillArray(myArray);
		printArray(myArray);
		
	} // end of main
	
}
