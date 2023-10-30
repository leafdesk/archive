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
		cout << "좌석 번호>> ";
		cin >> num;
		if (num < 1 || num > 8) { cout << "없는 좌석 번호입니다." << endl << endl; return; }
		if (seat[num - 1].getName() != "---") { cout << "해당 좌석은 이미 예약됐습니다." << endl << endl; return; }
		cout << "이름 입력>> ";
		cin >> name;
		seat[num - 1].reservation(name);
		cout << endl;
	}
	void cancel() {
		int num;
		string name;
		show();
		cout << "좌석 번호>> ";
		cin >> num;
		if (num < 1 || num > 8) { cout << "없는 좌석 번호입니다." << endl << endl; return; }
		if (seat[num - 1].getName() == "---") { cout << "해당 좌석은 비어있습니다." << endl << endl; return; }
		cout << "이름 입력>> ";
		cin >> name;
		if (seat[num - 1].getName() == name) { seat[num - 1].cancel(); cout << endl; }
		else cout << "이름이 맞지 않습니다." << endl << endl;
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
			cout << "예약:1, 취소:2, 보기:3, 끝내기:4>> ";
			cin >> ans;
			switch (ans) {
			case 1:
				while (true) {
					cout << "07시:1, 12시:2, 17시:3>> ";
					cin >> ans;
					switch (ans) {
					case 1: return 11;
					case 2: return 12;
					case 3: return 13;
					}
				}
			case 2:
				while (true) {
					cout << "07시:1, 12시:2, 17시:3>> ";
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
		sche[0].setSchedule("07시");
		sche[1].setSchedule("12시");
		sche[2].setSchedule("17시");
	}
	void consoleRun() {
		cout << "***** 한성항공에 오신 것을 환영합니다 *****" << endl << endl;

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
				cout << "예약 시스템을 종료합니다." << endl;
				return;
			}
		}
	}
};

int main() {
	AirlineBook hansung;
	hansung.consoleRun();
}