#include <iostream>
#include <string>
using namespace std;

class UI {
public:
	static int getMainMenu() {
		int menu;
		cout << "예약:1, 취소:2, 보기:3, 끝내기:4 >> ";
		cin >> menu;
		return menu;
	}
	static int getSubMenu() {
		int menu;
		cout << "07시:1, 12시:2, 17시:3 >> ";
		cin >> menu;
		return menu;
	}
	static int getSeatNum() {
		int num;
		cout << "좌석 번호 >> ";
		cin >> num;
		return num;
	}
	static string getUserName() {
		string name;
		cout << "이름 입력 >> ";
		cin >> name;
		return name;
	}
};

class Seat {
	string name;
public:
	Seat() { name = ""; }
	~Seat() {}
	void book(string name) { this->name = name; }
	void cancel() { name = ""; }
	void view() {
		if (name == "") cout << "---";
		else cout << name;
	}
	string getName() { return name; }
	bool isBooked() {
		if (name == "") return false;
		else return true;
	}
	bool isEmpty() {
		if (name == "") return true;
		else return false;
	}
};

class Schedule {
	string time;
	Seat* p = new Seat[8];
public:
	Schedule() { time = ""; }
	~Schedule() { if (p) delete[] p; }
	void book() {
		view();
		int num = UI::getSeatNum();
		if (num < 1 || num > 8) {
			cout << "없는 좌석 번호입니다.";
			cout << endl;
			return;
		}
		if (p[num - 1].isBooked()) {
			cout << "해당 좌석은 이미 예약됐습니다.";
			cout << endl;
			return;
		}
		else {
			string name = UI::getUserName();
			p[num - 1].book(name);
		}
	}
	void cancel() {
		view();
		int num = UI::getSeatNum();
		if (num < 1 || num > 8) {
			cout << "없는 좌석 번호입니다.";
			cout << endl;
			return;
		}
		if (p[num - 1].isEmpty()) {
			cout << "해당 좌석은 비어있습니다.";
			cout << endl;
			return;
		}
		else {
			string name = UI::getUserName();
			if (p[num - 1].getName().compare(name) == 0) {
				p[num - 1].cancel();
			}
			else cout << "이름이 맞지 않습니다." << endl;
		}
	}
	void view() {
		cout << time << ":\t";
		for (int i = 0; i < 8; i++) {
			p[i].view(); cout << '\t';
		}
		cout << endl;
	}
	void setTime(string time) { this->time = time; }
};

class AirlineBook {
	string name;
	Schedule* p = new Schedule[3];
public:
	AirlineBook(string name) {
		this->name = name;
		p[0].setTime("07시");
		p[1].setTime("12시");
		p[2].setTime("17시");
	}
	~AirlineBook() { if (p) delete[] p; }
	void run() {
		bool ask = false;
		cout << "***** " << name << "에 오신 것을 환영합니다. *****";
		cout << endl << endl;

		while (true) {
			int menu = UI::getMainMenu();
			switch (menu) {
			case 1: {
				ask = true;
				while (ask) {
					int sub = UI::getSubMenu();
					if (sub < 1 || sub > 3) ask = true;
					else { ask = false; p[sub - 1].book(); cout << endl; }
				} break;
			}
			case 2: {
				ask = true;
				while (ask) {
					int sub = UI::getSubMenu();
					if (sub < 1 || sub > 3) ask = true;
					else { ask = false; p[sub - 1].cancel(); cout << endl; }
				} break;
			}
			case 3:
				p[0].view();
				p[1].view();
				p[2].view();
				cout << endl; break;
			case 4:
				cout << "예약 시스템을 종료합니다." << endl;
				return;
			default: break;
			}
		}
	}
};

int main() {
	AirlineBook airline("한성항공");
	airline.run();
}