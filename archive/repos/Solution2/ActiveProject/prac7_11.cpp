#include <iostream>
using namespace std;

#define STACK_SIZE 10

class Stack {
	int data[STACK_SIZE];
	int index;
public:
	Stack();
	Stack& operator<<(int element); // push();
	bool operator!(); // is_empty();
	void operator>>(int& element); // pop();
};

Stack::Stack() { index = 0; }

Stack& Stack::operator<<(int element) {
	data[index++] = element;
	return *this;
}

bool Stack::operator!() {
	if (index == 0) return true;
	else return false;
}

void Stack::operator>>(int& element) {
	element = data[--index];
}

int main() {
	Stack stack;
	stack << 3 << 5 << 10;
	while (true) {
		if (!stack) break;
		int x;
		stack >> x;
		cout << x << ' ';
	}
	cout << endl;
}