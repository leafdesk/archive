#include <iostream>
#include <string>
using namespace std;

class Printer {
protected:
	string model, manufacturer;
	int printedCount, availableCount;

	Printer(string model,
		string manufacturer,
		int availableCount) {
		this->model = model;
		this->manufacturer = manufacturer;
		this->printedCount = 0;
		this->availableCount = availableCount;
	}
	virtual bool print(int pages) = 0;
	virtual void show() = 0;
};

class InkJetPrinter : public Printer {
	int availableInk;
public:
	InkJetPrinter(string model,
		string manufacturer,
		int availableCount,
		int availableInk)
		: Printer(model,
			manufacturer,
			availableCount) {
		this->availableInk = availableInk;
	}
	bool print(int pages) {
		if (availableCount >= pages) {
			availableCount -= pages;
			availableInk -= pages;
			cout << "프린트하였습니다." << endl;
			return true;
		}
		else {
			cout << "용지가 부족하여 프린트할 수 없습니다." << endl;
			return false;
		}
	}
	void show() {
		cout << "  잉크젯 : "
			<< model << ", "
			<< manufacturer << ", 남은 종이 "
			<< availableCount << "장, 남은 잉크 "
			<< availableInk << endl;
	}
};

class LasorPrinter : public Printer {
	double availableToner;
public:
	LasorPrinter(string model,
		string manufacturer,
		int availableCount,
		double availableToner)
		: Printer(model,
			manufacturer,
			availableCount) {
		this->availableToner = availableToner;
	}
	bool print(int pages) {
		if (availableCount >= pages) {
			availableCount -= pages;
			availableToner -= pages / 2.;
			cout << "프린트하였습니다." << endl;
			return true;
		}
		else {
			cout << "용지가 부족하여 프린트할 수 없습니다." << endl;
			return false;
		}
	}
	void show() {
		cout << "  레이저 : "
			<< model << ", "
			<< manufacturer << ", 남은 종이 "
			<< availableCount << "장, 남은 토너 "
			<< availableToner << endl;
	}
};

void menu1(int& menu, int& pages) {
	int m, p;
	cout << "프린터(1:잉크젯, 2:레이저)와 매수 입력 >> ";
	cin >> m >> p;
	menu = m, pages = p;
}

char menu2() {
	char menu;
	cout << "계속 프린트하시겠습니까? (Y/N) >> ";
	cin >> menu;
	menu = toupper(menu);
	return menu;
}

int main() {
	int menu, pages; char ans; bool ask = false;
	InkJetPrinter* a = new InkJetPrinter("Officejet V40", "HP", 5, 10);
	LasorPrinter* b = new LasorPrinter("SCX-6x45", "SAMSUNG ELEC.", 3, 20);

	cout << "현재 작동중인 2대의 프린터는 아래와 같다." << endl << endl;
	a->show();
	b->show();
	cout << endl;

	while (true) {
		ask = true;
		while (ask) {
			menu1(menu, pages);
			if (1 <= menu && menu <= 2) {
				ask = false;
				switch (menu) {
				case 1: a->print(pages); break;
				case 2: b->print(pages); break;
				} cout << endl;
				a->show();
				b->show();
				cout << endl;
			}
			else ask = true;
		}
		ask = true;
		while (ask) {
			ans = menu2();
			switch (ans) {
			case 'Y': ask = false; cout << endl; break;
			case 'N': return 0; cout << endl; break;
			default: ask = true; break;
			}
		}
	}
}