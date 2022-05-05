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
	if (rear == capacity()) { error("메모리 부족"); }
	put(rear++, val); 
}

int MyQueue::dequeue() {
	if (front == rear) { error("메모리 공백"); }
	return get(front++);
}

int main() {
	MyQueue mQ(100);
	int n;
	cout << "큐에 삽입할 5개의 정수를 입력하라>> ";
	for (int i = 0; i < 5; i++) {
		cin >> n;
		mQ.enqueue(n);
	}
	cout << "큐의 용량:" << mQ.capacity() << ", 큐의 크기:" << mQ.length() << endl;
	cout << "큐의 원소를 순서대로 제거하여 출력한다>> ";
	while (mQ.length() != 0) {
		cout << mQ.dequeue() << ' ';
	}
	cout << endl << "큐의 현재 크기 : " << mQ.length() << endl;
}