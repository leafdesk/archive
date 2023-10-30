import java.util.Scanner;

public class WordGame {
	private Player[] players;
	private Scanner scanner = null;
	private int nPlayers = 0;
	private String startWord = "아버지";
	
	public WordGame() {
		scanner = new Scanner(System.in);
	}
	
	public void createPlayers() {
		System.out.print("참가 인원 수 >> ");
		nPlayers = scanner.nextInt();
		players = new Player[nPlayers]; // 레퍼런스
		
		for (int i = 0; i < players.length; i++) {
			System.out.print("참가자 이름 입력 >> ");
			String name = scanner.next();
			players[i] = new Player(name); // 실제 객체 생성
		}
	}
	
	public void run() {
		System.out.println("끝말잇기 게임을 시작합니다.");
		createPlayers();
		
		String lastWord = startWord;
		System.out.println("시작하는 단어는 " + lastWord + "입니다.");
		
		int next = 0;
		while (true) {
			String newWord = players[next].getWordFromUser();
			int index = lastWord.length() - 1; 
			if (lastWord.charAt(index) != newWord.charAt(0)) {
				System.out.println(players[next].getName() + ", 졌습니다.");
				break;
			}
			next++;
			next %= nPlayers;
			lastWord = newWord;
		}
	}
	
	public static void main(String[] args) {
		WordGame game = new WordGame();
		game.run();
	}
}
