#include <iostream>
#include <string>
using namespace std;

class WordGame {
	int num; 
	string word = "�ƹ���";
	string word2;
public:
	int startGame();
};

class Player {
public:
	string name;
};

int WordGame::startGame() {
	cout << "�����ձ� ������ �����մϴ�." << endl;
	cout << "���ӿ� �����ϴ� �ο��� �� ���Դϱ�? ";
	cin >> num;
	Player *p = new Player[num];
	if (!p) {
		cout << "�޸𸮰� �����մϴ�.\n";
		return 0;
	}
	for (int i = 0; i < num; i++) {
		cout << "�������� �̸��� �Է��ϼ���.  ��ĭ ����>>";
		cin >> p[i].name;
	}
	cout << "�����ϴ� �ܾ�� �ƹ����Դϴ�." << endl;

	int done = 0, index = 0;
	while (!done) {
		if (index == num) { index = 0; }
		cout << p[index++].name << ">>";
		cin >> word2;
		if (word.at(word.size() - 2) == word2.at(0) &&
			word.at(word.size() - 1) == word2.at(1)) {
			word = word2;
		}
		else {
			cout << "Ʋ�Ƚ��ϴ�." << endl;
			done = 1;
		}
	}
	delete[] p;
}

int main() {
	WordGame g;
	g.startGame();
}