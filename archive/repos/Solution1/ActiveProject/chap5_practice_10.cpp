#include <iostream>
#include <string>
using namespace std;

// Buffer 클래스 선언부

class Buffer {
	string text;
public:
	Buffer(string text);
	void add(string next);
	void print();
};

// Buffer 클래스 구현부

Buffer::Buffer(string text) {
	this->text = text;
}

void Buffer::add(string next) {
	text += next;
}

void Buffer::print() {
	cout << text << endl;
}

// append, main 함수

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