#include <iostream>
using namespace std;

class Circle {
	int radius;
public:
	Circle(int radius = 0) { this->radius = radius; }
	void show() { cout << "radius: " << radius << endl; }
	friend Circle& operator++(Circle& c);
	friend Circle operator++(Circle& c, int x);
	friend Circle operator+(int n, Circle c);
};

Circle& operator++(Circle& c) {
	c.radius++;
	return c;
}

Circle operator++(Circle& c, int x) {
	Circle prev;
	prev.radius = c.radius;
	c.radius++;
	return prev;
}

Circle operator+(int n, Circle c) {
	Circle tmp;
	tmp.radius = n + c.radius;
	return tmp;
}

int main() {
	Circle a(5), b(4);
	
	//++a;
	//b = a++;
	//a.show();
	//b.show();

	b = 1 + a;
	a.show();
	b.show();
}