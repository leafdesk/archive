#include <iostream>
#include <string>
using namespace std;

class Printer {
	string model;
	string manufacturer;
	int printedCount;
	int availableCount;
public:
	Printer(string model, string manufacturer, int availableCount) {
		this->model = model;
		this->manufacturer = manufacturer;
		printedCount = 0;
		this->availableCount = availableCount;
	}
	~Printer() {}
	void print(int pages) {
		printedCount = pages;
		availableCount -= printedCount;
	}
	void show() {
		cout << model << ", " << manufacturer << ", " << "남은 종이 " << availableCount << "장, ";
	}
	int getAvailableCount() { return availableCount; }
};

class InkJetPrinter : public Printer {
	int availableInk;
public:
	InkJetPrinter(string model, string manufacturer, int availableCount, int availableInk)
		: Printer(model, manufacturer, availableCount) {
		this->availableInk = availableInk;
	}
	~InkJetPrinter() {}
	void printInkJet(int pages) { print(pages); availableInk -= pages; }
	void show() {
		Printer::show();
		cout << "남은 잉크 " << availableInk << endl;
	}
};

class LaserPrinter : public Printer {
	double availableToner;
public:
	LaserPrinter(string model, string manufacturer, int availableCount, double availableToner)
		: Printer(model, manufacturer, availableCount) {
		this->availableToner = availableToner;
	}
	~LaserPrinter() {}
	void printLaser(int pages) { print(pages); availableToner -= pages / 2.; }
	void show() {
		Printer::show();
		cout << "남은 토너 " << availableToner << endl;
	}
};

class UserInterface {
public:
	int getPrinter() {
		int ans;
		cout << "프린터 선택 (1:잉크젯, 2:레이저) >> ";
		cin >> ans;
		return ans;
	}
	int getPages() {
		int ans;
		cout << "매수 입력 >> ";
		cin >> ans;
		return ans;
	}
};

int main() {
	bool done = false, ask = false; int num = 2; UserInterface ui;
	InkJetPrinter* p = new InkJetPrinter("Officejet V40", "HP", 5, 10);
	LaserPrinter* q = new LaserPrinter("SCX-6x45", "삼성전자", 3, 20);

	cout << "현재 작동중인 " << num << "대의 프린터는 아래와 같다." << endl;
	cout << "잉크젯 : "; p->show();
	cout << "레이저 : "; q->show();
	cout << endl;

	while (!done) {
		ask = true;
		while (ask) {
			int printer = ui.getPrinter();
			if (1 <= printer && printer <= 2) ask = false;
			switch (printer) {
			case 1:
			{
				int pages = ui.getPages();
				if (pages > p->getAvailableCount()) {
					cout << "용지가 부족하여 프린트할 수 없습니다." << endl;
					p->show(); q->show();
				}
				else {
					cout << "프린트하였습니다." << endl;
					p->printInkJet(pages); p->show(); q->show();
				}
				break;
			}
			case 2:
			{
				int pages = ui.getPages();
				if (pages > q->getAvailableCount()) {
					cout << "용지가 부족하여 프린트할 수 없습니다." << endl;
					p->show(); q->show();
				}
				else {
					cout << "프린트하였습니다." << endl;
					q->printLaser(pages); p->show(); q->show();
				}
				break;
			}
			default: ask = true; break;
			}
		}
		ask = true;
		while (ask) {
			cout << "계속 프린트 하시겠습니까? (Y/N) : ";
			char ans; cin >> ans; ans = toupper(ans);
			switch (ans) {
			case 'Y': ask = false; cout << endl; break;
			case 'N': ask = false; done = true; break;
			default: ask = true; break;
			}
		}
	}
}