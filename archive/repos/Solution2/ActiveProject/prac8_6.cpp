#include <iostream>
#include <string>
using namespace std;

class BaseArray {
private:
	int capacity;
	int* mem;
protected:
	BaseArray(int capacity);
	~BaseArray();
	void put(int index, int val);
	int get(int index);
	int getCapacity();
};

BaseArray::BaseArray(int capacity = 100) {
	this->capacity = capacity;
	mem = new int[capacity];
}

BaseArray::~BaseArray() { delete[] mem; }
void BaseArray::put(int index, int val) { mem[index] = val; }
int BaseArray::get(int index) { return mem[index]; }
int BaseArray::getCapacity() { return capacity; }

class MyStack : public BaseArray {
	int top;
public:
	MyStack(int capacity);
	void error(string msg);
	int capacity();
	int length();
	void push(int val);
	int pop();
};

MyStack::MyStack(int capacity)
	: BaseArray(capacity) {
	top = 0;
}

void MyStack::error(string msg) { cout << msg << endl; return; }
int MyStack::capacity() { return getCapacity(); }
int MyStack::length() { return top; }

void MyStack::push(int val) {
	if (top == capacity()) { error("�޸� ����"); }
	put(top++, val);
}

int MyStack::pop() {
	if (top == 0) { error("�޸� ����"); }
	return get(--top);
}

int main() {
	MyStack mStack(100);
	int n;
	cout << "���ÿ� ������ 5���� ������ �Է��϶�>> ";
	for (int i = 0; i < 5; i++) {
		cin >> n;
		mStack.push(n);
	}
	cout << "���ÿ뷮:" << mStack.capacity() << ", ����ũ��:" << mStack.length() << endl;
	cout << "������ ��� ���Ҹ� ���Ͽ� ����Ѵ�>> ";
	while (mStack.length() != 0) {
		cout << mStack.pop() << ' ';
	}
	cout << endl << "������ ���� ũ�� : " << mStack.length() << endl;
}