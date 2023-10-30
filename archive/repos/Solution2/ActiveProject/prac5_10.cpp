#include <iostream>
#include <string>
using namespace std;

// Buffer Ŭ���� �����

class Buffer {
	string text;
public:
	Buffer(string text);
	void add(string next);
	void print();
};

// Buffer Ŭ���� ������

Buffer::Buffer(string text) {
	this->text = text;
}

void Buffer::add(string next) {
	text += next;
}

void Buffer::print() {
	cout << text << endl;
}

// append, main �Լ�

Buffer& append(Buffer& b, string str) { // Buffer& b = buf;
	b.add(str);
	return b;
}

int main() {
	Buffer buf("Hello");
	Buffer& temp = append(buf, "Guys");
	temp.print();
	buf.print();
}