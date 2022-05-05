import java.util.Scanner;

public class Prac314 {
	
	public static int find(String[] course, String name) {

		int index = -1;
		
		for (int i = 0; i < course.length; i++) {
			if (course[i].equals(name)) {
				index = i; // 검색 중 같은 이름을 발견하면 해당 인덱스를 저장한다.
				break;
			}
		}
		
		return index; // 찾은 인덱스를 반환한다. 검색 실패 시 -1 을 반환한다. 
		
	}
	
	public static void main(String[] args) {
	
		String[] course = { "Java", "C++", "HTML5", "컴퓨터구조", "안드로이드" };
		int[] score = { 95, 88, 76, 62, 55 };
		Scanner scanner = new Scanner(System.in);
		
		while (true) {
			
			System.out.print("과목 이름>>");
			String name = scanner.next(); // 사용자로부터 과목 이름을 입력받는다.		
			
			if (name.equals("그만")) { // 사용자가 "그만"을 입력하면 종료한다.
				break;
			}
			
			int index = find(course, name); // 사용자가 입력한 과목의 인덱스를 찾는다.
			if (index == -1) {
				System.out.println("없는 과목입니다."); // 검색을 실패하면 이 문장이 실행된다.
			}
			else { // 검색에 성공하면 score 배열에서 해당 인덱스의 점수를 출력한다.
				System.out.println(name + "의 점수는 " + score[index]);
			}
			
		} // end of while
		
		scanner.close();

	} // end of main
	
}
