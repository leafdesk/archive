
public class Ex207_LogicalOperator {
	public static void main(String[] args) {
		System.out.println('a' > 'b');
		System.out.println(3 >= 2);
		System.out.println(-1 < 0);
		System.out.println(3.45 <= 2);
		System.out.println(3 == 2);
		System.out.println(3 != 2);
		System.out.println(!(3 != 2));
		
		System.out.println((3 > 2) && (3 > 4));
		System.out.println((3 != 2) || (-1 > 0)); // Dead code 경고는 전혀 실행되지 않는 코드라는 의미
		System.out.println((3 != 2) ^ (-1 > 0));
	}
}
