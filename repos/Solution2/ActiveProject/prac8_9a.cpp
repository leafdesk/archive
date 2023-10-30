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
		cout << "좌석 번호>> ";
		cin >> num;
		cout << "이름 입력>> ";
		cin >> name;
		seat[num - 1] = name;
		cout << endl;
	}
	void cancel() {
		int num;
		string name;
		show();
		cout << "좌석 번호>> ";
		cin >> num;
		if (seat[num - 1] == "---") { cout << "해당 좌석은 비어있습니다." << endl << endl; return; }
		cout << "이름 입력>> ";
		cin >> name;
		if (seat[num - 1] == name) { seat[num - 1] = "---"; cout << endl; }
		else cout << "이름이 맞지 않습니다." << endl << endl;
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
		p[0].setSchedule("07시");
		p[1].setSchedule("12시");
		p[2].setSchedule("17시");
	}
	void run();
};

void Hansung::run() {
	int ans;
	bool done = false, ask = false;
	
	cout << "***** 한성항공에 오신 것을 환영합니다 *****" << endl << endl;
	
	while (!done) {
		cout << "예약:1, 취소:2, 보기:3, 끝내기:4>> ";
		cin >> ans;
		switch (ans) {
		case 1:
			ask = true;
			while (ask) {
				cout << "07시:1, 12시:2, 17시:3>> ";
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
				cout << "07시:1, 12시:2, 17시:3>> ";
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
			cout << "예약 시스템을 종료합니다." << endl;
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