#include <iostream>
using namespace std;

int main() {
	int input;
	int serving;

	cout << "***** �¸��忡 ���� ���� ȯ���մϴ�. *****" << endl;

	while (true) {
		cout << "«��:1, ¥��:2, ������:3, ����:4>> ";
		cin >> input;
		if (input > 0 && input < 4) {
			cout << "���κ�?";
			cin >> serving;
			switch (input) {
			case 1:
				cout << "«�� " << serving << "�κ� ���Խ��ϴ�" << endl;
				break;
			case 2:
				cout << "¥�� " << serving << "�κ� ���Խ��ϴ�" << endl;
				break;
			case 3:
				cout << "������ " << serving << "�κ� ���Խ��ϴ�" << endl;
				break;
			}
		}
		else if (input == 4) {
			cout << "���� ������ �������ϴ�." << endl;
			break;
		}
		else
			cout << "�ٽ� �ֹ��ϼ���!!" << endl;
	}
}