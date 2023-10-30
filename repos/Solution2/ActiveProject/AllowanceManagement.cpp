#include <iostream>
using namespace std;

int main() {
	int balance;
	int safebox;
	int period;
	int portion;

	cout << "Balance: ";
	cin >> balance;
	cout << "Safebox: ";
	cin >> safebox;
	cout << "Period: ";
	cin >> period;
	cout << endl;

	portion = (balance - safebox) / period;

	for (; period > 0; period--) {
		balance -= portion;
		cout << balance << endl;
	}
}

/*

	Date		Balance		Note
	2020-05-07	106,701 원	
	2020-05-08	104,605 원
	2020-05-09	102,509 원
	2020-05-10	100,413 원	4,192 원 사용 가능

	1) 위와 같이 cmd에 출력
	2) 일주일 모아서 주일에 사용 가능한 금액을 출력

*/