#include <iostream>
#include <string>
using namespace std;

class Plane {
	string schedule;
	string seat[8];
public:
	Plane() {
		for (int i = 0; i < 8; i++) {
			seat[i] = "---";
		}
	}
	void setSchedule(string schedule) {
		this->schedule = schedule;
	}
	void reservation() {
		int num;
		string name;
		show();
		cout << "�¼� ��ȣ>> ";
		cin >> num;
		cout << "�̸� �Է�>> ";
		cin >> name;
		seat[num - 1] = name;
		cout << endl;
	}
	void cancel() {
		int num;
		string name;
		show();
		cout << "�¼� ��ȣ>> ";
		cin >> num;
		if (seat[num - 1] == "---") { cout << "�ش� �¼��� ����ֽ��ϴ�." << endl << endl; return; }
		cout << "�̸� �Է�>> ";
		cin >> name;
		if (seat[num - 1] == name) { seat[num - 1] = "---"; cout << endl; }
		else cout << "�̸��� ���� �ʽ��ϴ�." << endl << endl;
	}
	void show() {
		cout << schedule << ":\t";
		for (int i = 0; i < 8; i++) {
			cout << seat[i] << '\t';
		}
		cout << endl;
	}

};

class Hansung {
	Plane p[3];
public:
	Hansung() {
		p[0].setSchedule("07��");
		p[1].setSchedule("12��");
		p[2].setSchedule("17��");
	}
	void run();
};

void Hansung::run() {
	int ans;
	bool done = false, ask = false;
	
	cout << "***** �Ѽ��װ��� ���� ���� ȯ���մϴ� *****" << endl << endl;
	
	while (!done) {
		cout << "����:1, ���:2, ����:3, ������:4>> ";
		cin >> ans;
		switch (ans) {
		case 1:
			ask = true;
			while (ask) {
				cout << "07��:1, 12��:2, 17��:3>> ";
				cin >> ans;
				switch (ans) {
				case 1:
					ask = false;
					p[0].reservation();
					break;
				case 2:
					ask = false;
					p[1].reservation();
					break;
				case 3:
					ask = false;
					p[2].reservation();
					break;
				default:
					ask = true;
					break;
				}
			}
			break;
		case 2:
			ask = true;
			while (ask) {
				cout << "07��:1, 12��:2, 17��:3>> ";
				cin >> ans;
				switch (ans) {
				case 1:
					ask = false;
					p[0].cancel();
					break;
				case 2:
					ask = false;
					p[1].cancel();
					break;
				case 3:
					ask = false;
					p[2].cancel();
					break;
				default:
					ask = true;
					break;
				}
			}
			break;
		case 3:
			p[0].show();
			p[1].show();
			p[2].show();
			cout << endl;
			break;
		case 4:
			done = true;
			cout << "���� �ý����� �����մϴ�." << endl;
			break;
		default:
			done = false;
			break;
		}
	}
}

int main() {
	Hansung h;
	h.run();
}