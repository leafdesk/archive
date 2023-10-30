#include <iostream>
#include <string>
using namespace std;

class WordGame {
	int num; 
	string word = "아버지";
	string word2;
public:
	int startGame();
};

class Player {
public:
	string name;
};

int WordGame::startGame() {
	cout << "끝말잇기 게임을 시작합니다." << endl;
	cout << "게임에 참가하는 인원은 몇 명입니까? ";
	cin >> num;
	Player *p = new Player[num];
	if (!p) {
		cout << "메모리가 부족합니다.\n";
		return 0;
	}
	for (int i = 0; i < num; i++) {
		cout << "참가자의 이름을 입력하세요.  빈칸 없이>>";
		cin >> p[i].name;
	}
	cout << "시작하는 단어는 아버지입니다." << endl;

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
			cout << "틀렸습니다." << endl;
			done = 1;
		}
	}
	delete[] p;
}

int main() {
	WordGame g;
	g.startGame();
}