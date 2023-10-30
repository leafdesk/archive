#include <iostream>
#include <string>
using namespace std;

int main() {
	int a;
	int b;
	char op;

	while (true) {
		cout << "? ";
		cin >> a >> op >> b;
		switch (op) {
		case '+':
			cout << a << " + " << b << " = " << a + b << endl;
			break;
		case '-':
			cout << a << " - " << b << " = " << a - b << endl;
			break;
		case '*':
			cout << a << " * " << b << " = " << a * b << endl;
			break;
		case '/':
			cout << a << " / " << b << " = " << a / b << endl;
			break;
		case '%':
			cout << a << " % " << b << " = " << a % b << endl;
			break;
		}
	}
}