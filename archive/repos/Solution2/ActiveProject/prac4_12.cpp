#include <iostream>
#include <string>
using namespace std;

class Circle {
	int radius;
	string name;
public:
	void setCircle(string name, int radius) { this->name = name; this->radius = radius; }
	double getArea() { return 3.14 * radius * radius; }
	string getName() { return name; }
};

class CircleManager {
	Circle *p;
	int size;
public:
	CircleManager(int size) {
		this->size = size;
		p = new Circle[size];
	}
	~CircleManager() { delete[] p; }
	void setCircle(int index, string name, int radius) { p[index].setCircle(name, radius); }
	void searchByName(string name) {
		for (int i = 0; i < size; i++) {
			if (p[i].getName() == name) {
				cout << p[i].getName() << "�� ������ " << p[i].getArea() << endl;
			}
		}
	}
	void searchByArea(int area) {
		cout << area << "���� ū ���� �˻��մϴ�." << endl;
		for (int i = 0; i < size; i++) {
			if (p[i].getArea() > area) {
				cout << p[i].getName() << "�� ������ " << p[i].getArea() << ", ";
			}
		}
		cout << endl;
	}
};

int main() {
	int i, input;
	string temp; int temp2;

	cout << "���� ���� >> ";
	cin >> input;
	CircleManager songahdol(input);
	for (i = 0; i < input; i++) {
		cout << "�� " << i + 1 << "�� �̸��� ������ >> ";
		cin >> temp >> temp2;
		songahdol.setCircle(i, temp, temp2);
	}
	cout << "�˻��ϰ��� �ϴ� ���� �̸� >> ";
	cin >> temp;
	songahdol.searchByName(temp);
	cout << "�ּ� ������ ������ �Է��ϼ��� >> ";
	cin >> temp2;
	songahdol.searchByArea(temp2);
}