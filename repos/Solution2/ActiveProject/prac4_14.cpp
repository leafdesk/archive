#include <iostream>
#include <cstdlib>
#include <ctime>
#include <string>
using namespace std;

class Player {
	string name;
public:
	void setName(string name) { this->name = name; }
	string getName() { return name; }
};

class GamblingGame {
public:
	void start();
};

void GamblingGame::start() {
	Player players[2];
	string playerName, enter;
	int num = 0, done = 0, ask = 0;
	int arr[3];

	cout << "***** 갬블링 게임을 시작합니다. *****" << endl;
	cout << "첫번째 선수 이름>>";
	getline(cin, playerName, '\n');
	players[0].setName(playerName);
	cout << "두번째 선수 이름>>";
	getline(cin, playerName, '\n');
	players[1].setName(playerName);
	
	while (!done) {
		if (num == 2) { num = 0; }
		ask = 1;
		while (ask) {
			cout << players[num].getName() << ":";
			getline(cin, enter);
			if (enter != "") {
				ask = 1;
				cout << "<Enter> 키를 입력하세요" << endl;
			}
			else break;
		}
		
		cout << '\t';
		srand((unsigned)time(0));
		for (int i = 0; i < 3; i++) {
			arr[i] = rand() % 3;
			cout << arr[i] << '\t';
		}
		if (arr[0] == arr[1] && arr[1] == arr[2]) {
			cout << players[num].getName() << "님 승리!!" << endl;
			done = 1;
			break;
		}
		else {
			cout << "아쉽군요!" << endl;
			num++;
		}
	}
}

int main() {
	GamblingGame b;
	b.start();
}

/*

황기태 교수님의 코딩 (나와 다른 점) :

void Player::getEnterKey() {
	char tmp[10];
	cin.getline(tmp, 10);
}

Game::Game() {
	srand((unsigned)time(0));
}

bool Game::match() {
	for (int i = 0; i < 3; i++) {
		if (num[i] != num[0]) {
			return false;
		}
	}
	return true;
}

int i = 0;
while (true) {
	cout << player[i].getName() << ":<Enter>";
	player[i].getEnterKey();

	for (int i = 0; i < 3; i++) {
		num[i] = rand() % 3;
		cout << num[i] << '\t';
	}
	cout << endl;

	if (match()) { // player[i] 승리
		cout << player[i].getName() << "님의 승리입니다!!" << endl;
		break;
	}

	i++;
	i = i % 2;
}

*/