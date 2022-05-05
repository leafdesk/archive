import java.util.Scanner;

public class Player {
	private String name;
	private Scanner scanner = null;
	private String word = null;
	
	public Player(String name) {
		this.name = name;
		scanner = new Scanner(System.in);
	}
	
	public String getWordFromUser() {
		System.out.print(name + " >> ");
		word = scanner.next();
		return word;
	}
	
	public String getName() {
		return name;
	}
}
