import java.util.Scanner;

public class WordGame {
	private Player[] players;
	private Scanner scanner = null;
	private int nPlayers = 0;
	private String startWord = "�ƹ���";
	
	public WordGame() {
		scanner = new Scanner(System.in);
	}
	
	public void createPlayers() {
		System.out.print("���� �ο� �� >> ");
		nPlayers = scanner.nextInt();
		players = new Player[nPlayers]; // ���۷���
		
		for (int i = 0; i < players.length; i++) {
			System.out.print("������ �̸� �Է� >> ");
			String name = scanner.next();
			players[i] = new Player(name); // ���� ��ü ����
		}
	}
	
	public void run() {
		System.out.println("�����ձ� ������ �����մϴ�.");
		createPlayers();
		
		String lastWord = startWord;
		System.out.println("�����ϴ� �ܾ�� " + lastWord + "�Դϴ�.");
		
		int next = 0;
		while (true) {
			String newWord = players[next].getWordFromUser();
			int index = lastWord.length() - 1; 
			if (lastWord.charAt(index) != newWord.charAt(0)) {
				System.out.println(players[next].getName() + ", �����ϴ�.");
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
