#include <iostream>
#include <fstream>
#include <vector>
#include <string>
#include <cstdlib>
#include <ctime>
using namespace std;

class HiddenChar {
	int index; // 원본에서 가려진 문자의 인덱스
	char character; // 원본에서 가려진 문자
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
	int wordNum; // 총 단어 개수
	int wordLen; // 현재 선택된 단어 길이
	int level; // 게임의 레벨
	int life; // 도전할 수 있는 횟수 (목숨)
	int lifeCount;
	string current, veiled; // 선택된 현재 단어의 원본, 일부 가려서 출력될 모습
	HiddenChar* hidden; // 가려진 문자
public:
	HangmanGame();
	~HangmanGame();
	bool readFile(int& wordNum); // words.txt 파일을 읽어오기
	void selectWord(int& wordLen); // 랜덤 단어 선택
	void veilWord(); // 선택된 단어를 일부 가리기
	char getAnswer(); // 사용자로부터 답을 입력받음
	char getMenu(); // 사용자로부터 반복 여부에 대한 답을 입력받음
	bool isCorrect(char answer); // 사용자의 답이 맞는지 확인
	bool isDone(); // 사용자가 단어를 모두 완성했는지 확인
	void run(); // 게임 시작
};

HangmanGame::HangmanGame() {
	wordNum = wordLen = 0;
	level = 2; // level 만큼 가려짐, 난이도 변경을 원하면 level 을 수정
	life = lifeCount = 5; // life 만큼 도전 가능, 목숨의 양 변경을 원하면 life 를 수정
	hidden = new HiddenChar[level]; // level 만큼 가려진 문자를 저장할 공간 할당
}

HangmanGame::~HangmanGame() {
	delete[] hidden;
}

bool HangmanGame::readFile(int& wordNum) {
	ifstream file("words.txt");
	if (!file) {
		cout << "파일 열기에 실패했습니다." << endl;
		return false;
	}

	string line;
	while (getline(file, line)) {
		words.push_back(line);
		wordNum++; // 파일에서 읽은 라인의 개수는 곧 단어의 개수
	}
	file.close();
	return true; // 파일 열기 성공
}

void HangmanGame::selectWord(int& wordLen) {
	while (true) {
		srand((unsigned)time(0));
		int randomNum = rand() * rand() % wordNum; // 단어의 개수 안에서 랜덤 숫자 얻기
		current = veiled = words[randomNum]; // current 는 원본, veiled 는 가릴 예정
		wordLen = current.length();
		if (level < wordLen) break; // 가릴 문자의 개수보다 단어가 더 길어야 함
	}
}

void HangmanGame::veilWord() {
	int i = 0;
	while (true) {
		srand((unsigned)time(0));
		int randomNum = rand() % wordLen; // 단어의 길이 안에서 랜덤 숫자 얻기

		if (veiled[randomNum] != '-') { // 이미 가려진 문자가 아닐 경우
			hidden[i].setIndex(randomNum); // 랜덤 선택된 그 문자의 인덱스 저장
			hidden[i].setChar(veiled[randomNum]); // 랜덤 선택된 그 문자 저장
			veiled[randomNum] = '-'; // 그리고 그 문자를 가림
			i++;
		}

		if (i == level) break; // level 만큼 문자를 가렸다면 break
	}
}

char HangmanGame::getAnswer() {
	char answer;
	while (true) {
		cout << ">> ";
		cin >> answer;
		if (isalpha(answer)) break; // 알파벳을 입력했을 경우에만 break
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
			break; // 위 4개의 문자를 입력했을 경우에만 break
		}
	}
	return toupper(menu); // 소문자 y, n 을 입력해도 대문자로 변경
}

bool HangmanGame::isCorrect(char answer) {
	bool correct = false;
	for (int i = 0; i < level; i++) { 
		if (answer == hidden[i].getChar()) { // hidden 을 순회하다가 사용자의 답과 맞는 문자를 발견하면 
			veiled[hidden[i].getIndex()] = hidden[i].getChar(); // 가려진 부분의 위치에 가려진 문자를 공개
			hidden[i].setChar(NULL); // hidden 은 비운다
			correct = true; // 하나라도 맞았다면 correct
		}
	}
	return correct; // 하나도 맞지 않았다면 false 반환
}

bool HangmanGame::isDone() {
	for (int i = 0; i < wordLen; i++) {
		if (veiled[i] == '-') return false; // 하나라도 가려진 것이 있다면 아직 끝나지 않음
	}
	return true; // 가려진 것이 하나도 없다면 단어를 완성한 것임
}

void HangmanGame::run() {
	bool read = readFile(wordNum);
	if (!read) return; // 읽기 실패했다면 게임 종료

	cout << "--------------------------------" << endl;
	cout << "지금부터 행맨 게임을 시작합니다." << endl;
	cout << "--------------------------------" << endl << endl;

	while (true) {
		selectWord(wordLen); // 랜덤 단어 선택
		veilWord(); // 선택된 단어를 가림

		while (true) {
			cout << veiled << endl;
			char answer = getAnswer();
			bool correct = isCorrect(answer);
			if (!correct) lifeCount--; // 틀렸다면 lifeCount 를 하나 깎음

			bool done = isDone();
			if (done) { // 단어를 완성했다면 
				cout << veiled << endl; // 완성한 단어를 출력하고 break
				break;
			}

			if (lifeCount == 0) { // 기회를 모두 사용했다면
				cout << endl << life << "번 실패했습니다." << endl;
				cout << current << endl; // 정답을 출력하고 break
				break;
			}
		}

		cout << endl;
		char answer = getMenu();
		if (answer == 'Y') {
			lifeCount = life; // lifeCount 초기화
			cout << endl;
		}
		if (answer == 'N') break;
	}
}

int main() {
	HangmanGame h;
	h.run();
}