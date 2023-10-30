
public class Array2d {
	
	public static void print2d(int[][] m) {
		
		for (int i = 0; i < m.length; i++) {
			for (int j = 0; j < m[i].length; j++) {
				System.out.print(m[i][j] + "\t");
			}
			System.out.println();
		}
		
	}
	
	public static int[][] makeArray() {
		
		int[][] m = new int[3][];
		
		m[0] = new int[3];
		m[1] = new int[7];
		m[2] = new int[10];
		
		return m;
		
	}
	
	public static void main(String[] args) {

		int n[][];
		n = makeArray();
		
		for (int i = 0; i < n.length; i++) {			
			for (int j = 0; j < n[i].length; j++) {
				n[i][j] = i * j;
			}
		}
		
		print2d(n);
		
	}
	
}
