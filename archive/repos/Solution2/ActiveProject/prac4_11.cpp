#include <iostream>
using namespace std;

// Container 클래스 선언부

class Container {
	int size;
public:
	Container() { size = 10; }
	void fill();
	void consume();
	int getSize();
};

// CoffeeVendingMachine 클래스 선언부

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

// Container 클래스 구현부

void Container::fill() {
	size = 10;
}

void Container::consume() {
	size -= 1;
}

int Container::getSize() {
	return size;
}

// CoffeeVendingMachine 클래스 구현부

void CoffeeVendingMachine::fill() {
	tong[0].fill();
	tong[1].fill();
	tong[2].fill();
	cout << "커피 " << tong[0].getSize() << ", ";
	cout << "물 " << tong[1].getSize() << ", ";
	cout << "설탕 " << tong[2].getSize() << endl;
}

void CoffeeVendingMachine::selectEspresso() {
	tong[0].consume();
	tong[1].consume();
	cout << "에스프레소 드세요" << endl;
}

void CoffeeVendingMachine::selectAmericano() {
	tong[0].consume();
	tong[1].consume();
	tong[1].consume();
	cout << "아메리카노 드세요" << endl;
}

void CoffeeVendingMachine::selectSugarCoffee() {
	tong[0].consume();
	tong[1].consume();
	tong[1].consume();
	tong[2].consume();
	cout << "설탕커피 드세요" << endl;
}

void CoffeeVendingMachine::show() {
	cout << "커피 " << tong[0].getSize() << ", ";
	cout << "물 " << tong[1].getSize() << ", ";
	cout << "설탕 " << tong[2].getSize() << endl;
}

void CoffeeVendingMachine::run() {
	cout << "***** 커피자판기를 작동합니다. *****" << endl;
	char res;
	while (true) {
		cout << "메뉴를 눌러주세요(1:에스프레소, 2:아메리카노, 3:설탕커피, 4:잔량보기, 5:채우기)>> ";
		cin >> res;
		switch (res) {
		case '1':
			if (tong[0].getSize() >= 1 && tong[1].getSize() >= 1) {
				selectEspresso();
				break;
			}
			else {
				cout << "원료가 부족합니다." << endl;
				break;
			}
		case '2':
			if (tong[0].getSize() >= 1 && tong[1].getSize() >= 2) {
				selectAmericano();
				break;
			}
			else {
				cout << "원료가 부족합니다." << endl;
				break;
			}
		case '3':
			if (tong[0].getSize() >= 1 && tong[1].getSize() >= 2 && tong[2].getSize() >= 1) {
				selectSugarCoffee();
				break;
			}
			else {
				cout << "원료가 부족합니다." << endl;
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

// main 함수

int main() {
	CoffeeVendingMachine barista;
	barista.run();
}