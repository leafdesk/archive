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
	2020-05-07	106,701 ��	
	2020-05-08	104,605 ��
	2020-05-09	102,509 ��
	2020-05-10	100,413 ��	4,192 �� ��� ����

	1) ���� ���� cmd�� ���
	2) ������ ��Ƽ� ���Ͽ� ��� ������ �ݾ��� ���

*/