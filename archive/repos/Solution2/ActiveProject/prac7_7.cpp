#include <iostream>
using namespace std;

class Matrix {
	int arr[4];
public:
	Matrix() : Matrix(0, 0, 0, 0) {}
	Matrix(int x, int y, int z, int w);
	void show();
	//void operator>>(int arr[]);
	//void operator<<(int arr[]);
	friend void operator>>(Matrix m, int arr[]);
	friend void operator<<(Matrix& m, int arr[]);
};

Matrix::Matrix(int x, int y, int z, int w) {
	arr[0] = x;
	arr[1] = y;
	arr[2] = z;
	arr[3] = w;
}

void Matrix::show() {
	cout << "Matrix = { ";
	for (int i = 0; i < 4; i++) {
		cout << arr[i] << ' ';
	}
	cout << "}" << endl;
}

void operator>>(Matrix m, int arr[]) {
	for (int i = 0; i < 4; i++) {
		arr[i] = m.arr[i];
	}
}

void operator<<(Matrix& m, int arr[]) {
	for (int i = 0; i < 4; i++) {
		m.arr[i] = arr[i];
	}
}

//void Matrix::operator>>(int arr[]) {
//	for (int i = 0; i < 4; i++) {
//		arr[i] = this->arr[i];
//	}
//}
//
//void Matrix::operator<<(int arr[]) {
//	for (int i = 0; i < 4; i++) {
//		this->arr[i] = arr[i];
//	}
//}

int main() {
	Matrix a(4, 3, 2, 1), b;
	int x[4], y[4] = { 1, 2, 3, 4 };
	a >> x;
	b << y;

	for (int i = 0; i < 4; i++) cout << x[i] << ' ';
	cout << endl;
	b.show();
}