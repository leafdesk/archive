
public class Prac307 {

	public static void main(String[] args) {
		
		int[] arr = new int[10];
		
		System.out.print("������ ������ : ");
		
		double sum = 0;
		for (int i = 0; i < arr.length; i++) {
			arr[i] = (int)(Math.random() * 10 + 1);
			sum += arr[i];
			System.out.print(arr[i] + " ");
		}
		
		System.out.println();
		
		double avg = sum / arr.length;
		System.out.print("����� " + avg);

	} // end of main

}
