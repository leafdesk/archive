#include <iostream>
#include <string>
using namespace std;

class Seat {
	string name;
public:
	Seat() { name = "---"; }
	string getName() { return name; }
	void reservation(string name) { this->name = name; }
	void cancel() { name = "---"; }
};

class Schedule {
	string schedule;
	Seat seat[8];
public:
	void setSchedule(string schedule) {
		this->schedule = schedule;
	}
	void reservation() {
		int num;
		string name;
		show();
		cout << "�¼� ��ȣ>> ";
		cin >> num;
		if (num < 1 || num > 8) { cout << "���� �¼� ��ȣ�Դϴ�." << endl << endl; return; }
		if (seat[num - 1].getName() != "---") { cout << "�ش� �¼��� �̹� ����ƽ��ϴ�." << endl << endl; return; }
		cout << "�̸� �Է�>> ";
		cin >> name;
		seat[num - 1].reservation(name);
		cout << endl;
	}
	void cancel() {
		int num;
		string name;
		show();
		cout << "�¼� ��ȣ>> ";
		cin >> num;
		if (num < 1 || num > 8) { cout << "���� �¼� ��ȣ�Դϴ�." << endl << endl; return; }
		if (seat[num - 1].getName() == "---") { cout << "�ش� �¼��� ����ֽ��ϴ�." << endl << endl; return; }
		cout << "�̸� �Է�>> ";
		cin >> name;
		if (seat[num - 1].getName() == name) { seat[num - 1].cancel(); cout << endl; }
		else cout << "�̸��� ���� �ʽ��ϴ�." << endl << endl;
	}
	void show() {
		cout << schedule << ":\t";
		for (int i = 0; i < 8; i++) { cout << seat[i].getName() << '\t'; }
		cout << endl;
	}
};

class Console {
	int ans = 0;
public:
	Console() {}
	int selectMenu() {
		while (true) {
			cout << "����:1, ���:2, ����:3, ������:4>> ";
			cin >> ans;
			switch (ans) {
			case 1:
				while (true) {
					cout << "07��:1, 12��:2, 17��:3>> ";
					cin >> ans;
					switch (ans) {
					case 1: return 11;
					case 2: return 12;
					case 3: return 13;
					}
				}
			case 2:
				while (true) {
					cout << "07��:1, 12��:2, 17��:3>> ";
					cin >> ans;
					switch (ans) {
					case 1: return 21;
					case 2: return 22;
					case 3: return 23;
					}
				}
			case 3: return 30;
			case 4: return 40;
			}
		}
	}
};

class AirlineBook {
	Schedule sche[3];
	Console c;
public:
	AirlineBook() {
		sche[0].setSchedule("07��");
		sche[1].setSchedule("12��");
		sche[2].setSchedule("17��");
	}
	void consoleRun() {
		cout << "***** �Ѽ��װ��� ���� ���� ȯ���մϴ� *****" << endl << endl;

		while (true) {
			switch (c.selectMenu()) {
			case 11: sche[0].reservation(); break;
			case 12: sche[1].reservation(); break;
			case 13: sche[2].reservation(); break;
			case 21: sche[0].cancel(); break;
			case 22: sche[1].cancel(); break;
			case 23: sche[2].cancel(); break;
			case 30:
				sche[0].show();
				sche[1].show();
				sche[2].show();
				cout << endl;
				break;
			case 40: 
				cout << "���� �ý����� �����մϴ�." << endl;
				return;
			}
		}
	}
};

int main() {
	AirlineBook hansung;
	hansung.consoleRun();
}