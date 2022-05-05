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

class MyQueue : public BaseArray {
	int front, rear;
public:
	MyQueue(int capacity);
	void error(string msg);
	int capacity();
	int length();
	void enqueue(int val);
	int dequeue();
	
};

MyQueue::MyQueue(int capacity)
	: BaseArray(capacity) {
	front = 0;
	rear = 0;
}

void MyQueue::error(string msg) { cout << msg << endl; return; }
int MyQueue::capacity() { return getCapacity(); }
int MyQueue::length() { return rear - front; }

void MyQueue::enqueue(int val) {
	if (rear == capacity()) { error("�޸� ����"); }
	put(rear++, val); 
}

int MyQueue::dequeue() {
	if (front == rear) { error("�޸� ����"); }
	return get(front++);
}

int main() {
	MyQueue mQ(100);
	int n;
	cout << "ť�� ������ 5���� ������ �Է��϶�>> ";
	for (int i = 0; i < 5; i++) {
		cin >> n;
		mQ.enqueue(n);
	}
	cout << "ť�� �뷮:" << mQ.capacity() << ", ť�� ũ��:" << mQ.length() << endl;
	cout << "ť�� ���Ҹ� ������� �����Ͽ� ����Ѵ�>> ";
	while (mQ.length() != 0) {
		cout << mQ.dequeue() << ' ';
	}
	cout << endl << "ť�� ���� ũ�� : " << mQ.length() << endl;
}