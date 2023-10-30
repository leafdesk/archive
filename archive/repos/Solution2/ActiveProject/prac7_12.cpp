#include <iostream>
using namespace std;

class SortedArray {
	int size;
	int* p;
	void sort();
public:
	SortedArray();
	SortedArray(SortedArray& src);
	SortedArray(int p[], int size);
	~SortedArray();
	SortedArray operator+(SortedArray& op2);
	SortedArray& operator=(const SortedArray& op2);
	void show();
};

SortedArray::SortedArray() { p = NULL; size = 0; }
SortedArray::~SortedArray() { delete[] p; }

SortedArray::SortedArray(SortedArray& src) {
	size = src.size;
	p = new int[size];
	for (int i = 0; i < size; i++) { p[i] = src.p[i]; }
}

SortedArray::SortedArray(int p[], int size) {
	this->size = size;
	this->p = new int[size];
	for (int i = 0; i < size; i++) { this->p[i] = p[i]; }
	sort();
}

void SortedArray::sort() {
	int min = 0, tmp;

	for (min = 0; min < size; min++) {
		for (int i = min + 1; i < size; i++) {
			if (p[min] > p[i]) {
				tmp = p[min];
				p[min] = p[i];
				p[i] = tmp;
			}
		}
	}
}

SortedArray SortedArray::operator+(SortedArray& op2) {
	SortedArray tmp;
	tmp.size = this->size + op2.size;
	tmp.p = new int[tmp.size];
	for (int i = 0; i < this->size; i++) { tmp.p[i] = this->p[i]; }
	for (int i = 0; i < op2.size; i++) { tmp.p[i + this->size] = op2.p[i]; }
	tmp.sort();
	return tmp;
}

SortedArray& SortedArray::operator=(const SortedArray& op2) {
	size = op2.size;
	delete[] p;
	p = new int[size];
	for (int i = 0; i < size; i++) { p[i] = op2.p[i]; }
	sort();
	return *this;
}

void SortedArray::show() {
	cout << "배열 출력 : ";
	for (int i = 0; i < size; i++) {
		cout << p[i] << ' ';
	}
	cout << endl;
}

int main() {
	int n[] = { 2, 20, 6 };
	int m[] = { 10, 7, 8, 30 };
	SortedArray a(n, 3), b(m, 4), c;

	c = a + b;

	a.show();
	b.show();
	c.show();
}