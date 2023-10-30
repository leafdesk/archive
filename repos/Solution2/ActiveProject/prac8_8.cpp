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
		cout << model << ", " << manufacturer << ", " << "���� ���� " << availableCount << "��, ";
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
		cout << "���� ��ũ " << availableInk << endl;
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
		cout << "���� ��� " << availableToner << endl;
	}
};

class UserInterface {
public:
	int getPrinter() {
		int ans;
		cout << "������ ���� (1:��ũ��, 2:������) >> ";
		cin >> ans;
		return ans;
	}
	int getPages() {
		int ans;
		cout << "�ż� �Է� >> ";
		cin >> ans;
		return ans;
	}
};

int main() {
	bool done = false, ask = false; int num = 2; UserInterface ui;
	InkJetPrinter* p = new InkJetPrinter("Officejet V40", "HP", 5, 10);
	LaserPrinter* q = new LaserPrinter("SCX-6x45", "�Ｚ����", 3, 20);

	cout << "���� �۵����� " << num << "���� �����ʹ� �Ʒ��� ����." << endl;
	cout << "��ũ�� : "; p->show();
	cout << "������ : "; q->show();
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
					cout << "������ �����Ͽ� ����Ʈ�� �� �����ϴ�." << endl;
					p->show(); q->show();
				}
				else {
					cout << "����Ʈ�Ͽ����ϴ�." << endl;
					p->printInkJet(pages); p->show(); q->show();
				}
				break;
			}
			case 2:
			{
				int pages = ui.getPages();
				if (pages > q->getAvailableCount()) {
					cout << "������ �����Ͽ� ����Ʈ�� �� �����ϴ�." << endl;
					p->show(); q->show();
				}
				else {
					cout << "����Ʈ�Ͽ����ϴ�." << endl;
					q->printLaser(pages); p->show(); q->show();
				}
				break;
			}
			default: ask = true; break;
			}
		}
		ask = true;
		while (ask) {
			cout << "��� ����Ʈ �Ͻðڽ��ϱ�? (Y/N) : ";
			char ans; cin >> ans; ans = toupper(ans);
			switch (ans) {
			case 'Y': ask = false; cout << endl; break;
			case 'N': ask = false; done = true; break;
			default: ask = true; break;
			}
		}
	}
}