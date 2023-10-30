
public class Prac309 {
	
	public static void fillArray(int[][] arr) {
		
		for (int i = 0; i < arr.length; i++) {
			for (int j = 0; j < arr[i].length; j++) {
				arr[i][j] = (int)(Math.random() * 10 + 1);
			}
		}
		
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
		
		int[][] myArray = new int[4][4];
		fillArray(myArray);
		printArray(myArray);
				
	}
	
}