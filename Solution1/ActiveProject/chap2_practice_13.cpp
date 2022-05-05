#include <iostream>
using namespace std;

int main() {
	int input;
	int serving;

	cout << "***** 승리장에 오신 것을 환영합니다. *****" << endl;

	while (true) {
		cout << "짬뽕:1, 짜장:2, 군만두:3, 종료:4>> ";
		cin >> input;
		if (input > 0 && input < 4) {
			cout << "몇인분?";
			cin >> serving;
			switch (input) {
			case 1:
				cout << "짬뽕 " << serving << "인분 나왔습니다" << endl;
				break;
			case 2:
				cout << "짜장 " << serving << "인분 나왔습니다" << endl;
				break;
			case 3:
				cout << "군만두 " << serving << "인분 나왔습니다" << endl;
				break;
			}
		}
		else if (input == 4) {
			cout << "오늘 영업은 끝났습니다." << endl;
			break;
		}
		else
			cout << "다시 주문하세요!!" << endl;
	}
}