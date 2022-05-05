#include <iostream>
#include <string>
using namespace std;

class Circle {
	int radius;
public:
	Circle(int radius = 0) { this->radius = radius; }
	int getRadius() { return radius; }
	void setRadius(int radius) { this->radius = radius; }
	double getArea() { return 3.14 * radius * radius; }
};

class NamedCircle : public Circle {
	string name;
public:
	NamedCircle() : Circle() {};
	void setNamedCircle(int radius, string name);
	string getName();
};

void NamedCircle::setNamedCircle(int radius, string name) {
	setRadius(radius);
	this->name = name;
}

string NamedCircle::getName() {
	return name;
}

int main() {
	int radius, big;
	string name;
	NamedCircle pizza[5];

	cout << "5개의 정수 반지름과 원의 이름을 입력하세요." << endl;
	for (int i = 0; i < 5; i++) {
		cout << i + 1 << ">> ";
		cin >> radius >> name;
		pizza[i].setNamedCircle(radius, name);
	}

	big = 0; //index
	for (int i = 1; i < 5; i++) {
		if (pizza[big].getArea() < pizza[i].getArea()) {
			big = i;
		}
	}
	cout << "가장 면적이 큰 피자는 " << pizza[big].getName() << "입니다." << endl;
}