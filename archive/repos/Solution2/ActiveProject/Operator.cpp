#include <iostream>
using namespace std;

class Power {
	int kick;
	int punch;
public:
	Power(int kick = 0, int punch = 0) {
		this->kick = kick;
		this->punch = punch;
	}
	void show();
	//Power operator+(Power op2);
	Power operator+(int op2);
	bool operator==(Power op2);
	Power& operator+=(Power op2);
	//Power& operator++();
	bool operator!();
	//Power operator++(int x);
	friend Power operator+(int op1, Power op2);
	friend Power operator+(Power op1, Power op2);
	friend Power operator++(Power& op1);
	friend Power operator++(Power& op1, int op2);

	Power& operator<<(int op2);
};

Power& Power::operator<<(int op2) {
	kick += op2;
	punch += op2;

	return *this;
}

Power operator+(Power op1, Power op2) {
	Power tmp;

	tmp.kick = op1.kick + op2.kick;
	tmp.punch = op1.punch + op2.punch;

	return tmp;
}

//Power Power::operator++(int x) {
//	Power tmp = *this;
//	
//	kick++;
//	punch++;
//
//	return tmp;
//}

bool Power::operator!() {
	if (kick == 0 && punch == 0) return true;
	else return false;
}

//Power& Power::operator++() {
//	kick++;
//	punch++;
//
//	return *this;
//}

Power Power::operator+(int op2) {
	Power tmp;

	tmp.kick = kick + op2;
	tmp.punch = punch + op2;

	return tmp;
}

Power& Power::operator+=(Power op2) {
	kick += op2.kick;
	punch += op2.punch;

	return *this;
}

bool Power::operator==(Power op2) {
	if (kick == op2.kick && punch == op2.punch) return true;
	else return false;
}

//Power Power::operator+(Power op2) {
//	Power tmp;
//
//	tmp.kick = kick + op2.kick;
//	tmp.punch = punch + op2.punch;
//
//	return tmp;
//}

void Power::show() {
	cout << "kick: " << kick << ", punch: " << punch << endl;
}

Power operator+(int op1, Power op2) {
	Power tmp;

	tmp.kick = op1 + op2.kick;
	tmp.punch = op1 + op2.punch;

	return tmp;
}

Power operator++(Power& op1) {
	op1.kick++;
	op1.punch++;

	return op1;
}

Power operator++(Power& op1, int op2) {
	Power tmp = op1;
	
	op1.kick++;
	op1.punch++;

	return tmp;
}

int main() {
	Power a(4, 6), b(-4, -6), c(1, 1);

	a << 3 << 5 << 6;
	a.show();

	//cout << 3 << 4 << 6;

	//b = ++a;
	//a.show();
	//b.show();

	//b = a++; // ++(a, 0)
	//a.show();
	//b.show();

	//b = 2 + a; // +(2, a);

	//c = a + b;
	//a.show();
	//b.show();
	//c.show();

	//c = a++; // postfix; a.++(0);
	//a.show();
	//c.show();

	//c = ++++a; // a.++();
	//a.show();
	//c.show();

	//if (!(a+b)) cout << "OFF" << endl; // a.!();
	//else cout << "ON" << endl;

	//b = a + 2; // a.+(2);
	//c = a + b; //a.+(b);

	/*if (a == b) cout << "SAME" << endl;
	else cout << "DIFFERENT" << endl;*/
	//c.show();

	//c = (a += b);
	//(a += b) += c;
	//c = a += b; 
	//a.show();
	//b.show();
	//c.show();
}