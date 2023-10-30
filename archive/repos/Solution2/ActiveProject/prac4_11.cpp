#include <iostream>
using namespace std;

// Container Ŭ���� �����

class Container {
	int size;
public:
	Container() { size = 10; }
	void fill();
	void consume();
	int getSize();
};

// CoffeeVendingMachine Ŭ���� �����

class CoffeeVendingMachine {
	Container tong[3];
	void fill();
	void selectEspresso();
	void selectAmericano();
	void selectSugarCoffee();
	void show();
public:
	void run();
};

// Container Ŭ���� ������

void Container::fill() {
	size = 10;
}

void Container::consume() {
	size -= 1;
}

int Container::getSize() {
	return size;
}

// CoffeeVendingMachine Ŭ���� ������

void CoffeeVendingMachine::fill() {
	tong[0].fill();
	tong[1].fill();
	tong[2].fill();
	cout << "Ŀ�� " << tong[0].getSize() << ", ";
	cout << "�� " << tong[1].getSize() << ", ";
	cout << "���� " << tong[2].getSize() << endl;
}

void CoffeeVendingMachine::selectEspresso() {
	tong[0].consume();
	tong[1].consume();
	cout << "���������� �弼��" << endl;
}

void CoffeeVendingMachine::selectAmericano() {
	tong[0].consume();
	tong[1].consume();
	tong[1].consume();
	cout << "�Ƹ޸�ī�� �弼��" << endl;
}

void CoffeeVendingMachine::selectSugarCoffee() {
	tong[0].consume();
	tong[1].consume();
	tong[1].consume();
	tong[2].consume();
	cout << "����Ŀ�� �弼��" << endl;
}

void CoffeeVendingMachine::show() {
	cout << "Ŀ�� " << tong[0].getSize() << ", ";
	cout << "�� " << tong[1].getSize() << ", ";
	cout << "���� " << tong[2].getSize() << endl;
}

void CoffeeVendingMachine::run() {
	cout << "***** Ŀ�����Ǳ⸦ �۵��մϴ�. *****" << endl;
	char res;
	while (true) {
		cout << "�޴��� �����ּ���(1:����������, 2:�Ƹ޸�ī��, 3:����Ŀ��, 4:�ܷ�����, 5:ä���)>> ";
		cin >> res;
		switch (res) {
		case '1':
			if (tong[0].getSize() >= 1 && tong[1].getSize() >= 1) {
				selectEspresso();
				break;
			}
			else {
				cout << "���ᰡ �����մϴ�." << endl;
				break;
			}
		case '2':
			if (tong[0].getSize() >= 1 && tong[1].getSize() >= 2) {
				selectAmericano();
				break;
			}
			else {
				cout << "���ᰡ �����մϴ�." << endl;
				break;
			}
		case '3':
			if (tong[0].getSize() >= 1 && tong[1].getSize() >= 2 && tong[2].getSize() >= 1) {
				selectSugarCoffee();
				break;
			}
			else {
				cout << "���ᰡ �����մϴ�." << endl;
				break;
			}
		case '4':
			show();
			break;
		case '5':
			fill();
			break;
		}
	}
}

// main �Լ�

int main() {
	CoffeeVendingMachine barista;
	barista.run();
}