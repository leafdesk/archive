#include <iostream>
#include <fstream>
#include <vector>
#include <string>
#include <cstdlib>
#include <ctime>
using namespace std;

class HiddenChar {
	int index; // �������� ������ ������ �ε���
	char character; // �������� ������ ����
public:
	void setIndex(int index);
	void setChar(int character);
	int getIndex();
	char getChar();
};

void HiddenChar::setIndex(int index) {
	this->index = index;
}

void HiddenChar::setChar(int character) {
	this->character = character;
}

int HiddenChar::getIndex() {
	return index;
}

char HiddenChar::getChar() {
	return character;
}

class HangmanGame {
	vector<string> words;
	int wordNum; // �� �ܾ� ����
	int wordLen; // ���� ���õ� �ܾ� ����
	int level; // ������ ����
	int life; // ������ �� �ִ� Ƚ�� (���)
	int lifeCount;
	string current, veiled; // ���õ� ���� �ܾ��� ����, �Ϻ� ������ ��µ� ���
	HiddenChar* hidden; // ������ ����
public:
	HangmanGame();
	~HangmanGame();
	bool readFile(int& wordNum); // words.txt ������ �о����
	void selectWord(int& wordLen); // ���� �ܾ� ����
	void veilWord(); // ���õ� �ܾ �Ϻ� ������
	char getAnswer(); // ����ڷκ��� ���� �Է¹���
	char getMenu(); // ����ڷκ��� �ݺ� ���ο� ���� ���� �Է¹���
	bool isCorrect(char answer); // ������� ���� �´��� Ȯ��
	bool isDone(); // ����ڰ� �ܾ ��� �ϼ��ߴ��� Ȯ��
	void run(); // ���� ����
};

HangmanGame::HangmanGame() {
	wordNum = wordLen = 0;
	level = 2; // level ��ŭ ������, ���̵� ������ ���ϸ� level �� ����
	life = lifeCount = 5; // life ��ŭ ���� ����, ����� �� ������ ���ϸ� life �� ����
	hidden = new HiddenChar[level]; // level ��ŭ ������ ���ڸ� ������ ���� �Ҵ�
}

HangmanGame::~HangmanGame() {
	delete[] hidden;
}

bool HangmanGame::readFile(int& wordNum) {
	ifstream file("words.txt");
	if (!file) {
		cout << "���� ���⿡ �����߽��ϴ�." << endl;
		return false;
	}

	string line;
	while (getline(file, line)) {
		words.push_back(line);
		wordNum++; // ���Ͽ��� ���� ������ ������ �� �ܾ��� ����
	}
	file.close();
	return true; // ���� ���� ����
}

void HangmanGame::selectWord(int& wordLen) {
	while (true) {
		srand((unsigned)time(0));
		int randomNum = rand() * rand() % wordNum; // �ܾ��� ���� �ȿ��� ���� ���� ���
		current = veiled = words[randomNum]; // current �� ����, veiled �� ���� ����
		wordLen = current.length();
		if (level < wordLen) break; // ���� ������ �������� �ܾ �� ���� ��
	}
}

void HangmanGame::veilWord() {
	int i = 0;
	while (true) {
		srand((unsigned)time(0));
		int randomNum = rand() % wordLen; // �ܾ��� ���� �ȿ��� ���� ���� ���

		if (veiled[randomNum] != '-') { // �̹� ������ ���ڰ� �ƴ� ���
			hidden[i].setIndex(randomNum); // ���� ���õ� �� ������ �ε��� ����
			hidden[i].setChar(veiled[randomNum]); // ���� ���õ� �� ���� ����
			veiled[randomNum] = '-'; // �׸��� �� ���ڸ� ����
			i++;
		}

		if (i == level) break; // level ��ŭ ���ڸ� ���ȴٸ� break
	}
}

char HangmanGame::getAnswer() {
	char answer;
	while (true) {
		cout << ">> ";
		cin >> answer;
		if (isalpha(answer)) break; // ���ĺ��� �Է����� ��쿡�� break
	}
	return answer;
}

char HangmanGame::getMenu() {
	char menu;
	while (true) {
		cout << "Next(Y/N)? ";
		cin >> menu;
		if (menu == 'y' ||
			menu == 'n' ||
			menu == 'Y' ||
			menu == 'N') {
			break; // �� 4���� ���ڸ� �Է����� ��쿡�� break
		}
	}
	return toupper(menu); // �ҹ��� y, n �� �Է��ص� �빮�ڷ� ����
}

bool HangmanGame::isCorrect(char answer) {
	bool correct = false;
	for (int i = 0; i < level; i++) { 
		if (answer == hidden[i].getChar()) { // hidden �� ��ȸ�ϴٰ� ������� ��� �´� ���ڸ� �߰��ϸ� 
			veiled[hidden[i].getIndex()] = hidden[i].getChar(); // ������ �κ��� ��ġ�� ������ ���ڸ� ����
			hidden[i].setChar(NULL); // hidden �� ����
			correct = true; // �ϳ��� �¾Ҵٸ� correct
		}
	}
	return correct; // �ϳ��� ���� �ʾҴٸ� false ��ȯ
}

bool HangmanGame::isDone() {
	for (int i = 0; i < wordLen; i++) {
		if (veiled[i] == '-') return false; // �ϳ��� ������ ���� �ִٸ� ���� ������ ����
	}
	return true; // ������ ���� �ϳ��� ���ٸ� �ܾ �ϼ��� ����
}

void HangmanGame::run() {
	bool read = readFile(wordNum);
	if (!read) return; // �б� �����ߴٸ� ���� ����

	cout << "--------------------------------" << endl;
	cout << "���ݺ��� ��� ������ �����մϴ�." << endl;
	cout << "--------------------------------" << endl << endl;

	while (true) {
		selectWord(wordLen); // ���� �ܾ� ����
		veilWord(); // ���õ� �ܾ ����

		while (true) {
			cout << veiled << endl;
			char answer = getAnswer();
			bool correct = isCorrect(answer);
			if (!correct) lifeCount--; // Ʋ�ȴٸ� lifeCount �� �ϳ� ����

			bool done = isDone();
			if (done) { // �ܾ �ϼ��ߴٸ� 
				cout << veiled << endl; // �ϼ��� �ܾ ����ϰ� break
				break;
			}

			if (lifeCount == 0) { // ��ȸ�� ��� ����ߴٸ�
				cout << endl << life << "�� �����߽��ϴ�." << endl;
				cout << current << endl; // ������ ����ϰ� break
				break;
			}
		}

		cout << endl;
		char answer = getMenu();
		if (answer == 'Y') {
			lifeCount = life; // lifeCount �ʱ�ȭ
			cout << endl;
		}
		if (answer == 'N') break;
	}
}

int main() {
	HangmanGame h;
	h.run();
}