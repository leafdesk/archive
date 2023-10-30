#include <iostream>
using namespace std;

class BaseMemory {
	char* mem;
	int size;
protected:
	BaseMemory(int size) {
		mem = new char[size];
		this->size = size;
	}
	void write(int index, char val) { mem[index] = val; }
	char read(int index) { return mem[index]; }
	int getSize() { return size; }

};

class ROM : public BaseMemory {
public:
	ROM(int size, char arr[], int len)
		: BaseMemory(size) {
		if (size < len) {
			cout << "out of memory" << endl;
			return;
		}
		for (int i = 0; i < len; i++) {
			write(i, arr[i]);
		}
	}
	char read(int index) {
		return BaseMemory::read(index);
	}
};

class RAM : public BaseMemory {
public:
	RAM(int size) : BaseMemory(size) {}
	void write(int index, char val) {
		BaseMemory::write(index, val);
	}
	char read(int index) {
		return BaseMemory::read(index);
	}
};

int main() {
	char x[5] = { 'h', 'e', 'l', 'l', 'o' };
	ROM biosROM(1024 * 10, x, 5);
	RAM mainMemory(1024 * 1024);

	for (int i = 0; i < 5; i++) {
		mainMemory.write(i, biosROM.read(i));
	}
	for (int i = 0; i < 5; i++) {
		cout << mainMemory.read(i);
	}
}