#include <iostream>
using namespace std;

class Matrix {
	int data[4];
public:
	Matrix(int x = 0, int y = 0, int z = 0, int w = 0);
	void show();
	//Matrix operator+(Matrix op2);
	//Matrix& operator+=(Matrix op2);
	//bool operator==(Matrix op2);
	friend Matrix operator+(Matrix op1, Matrix op2);
	friend Matrix& operator+=(Matrix& op1, Matrix op2); // void 를 return 하면 '+=' 연산자를 연속으로 사용할 수 없으므로 반드시 참조를 return
	friend bool operator==(Matrix op1, Matrix op2);
};

Matrix::Matrix(int x, int y, int z, int w) {
	data[0] = x;
	data[1] = y;
	data[2] = z;
	data[3] = w;
}

void Matrix::show() {
	cout << "Matrix = { ";
	for (int i = 0; i < 4; i++) {
		cout << data[i] << ' ';
	}
	cout <<	"}" << endl;
}

Matrix operator+(Matrix op1, Matrix op2) {
	Matrix tmp;
	for (int i = 0; i < 4; i++) {
		tmp.data[i] = op1.data[i] + op2.data[i];
	}
	return tmp;
}

Matrix& operator+=(Matrix& op1, Matrix op2) { // void 를 return 하면 '+=' 연산자를 연속으로 사용할 수 없으므로 반드시 참조를 return
	for (int i = 0; i < 4; i++) {
		op1.data[i] += op2.data[i];
	}
	return op1;
}

bool operator==(Matrix op1, Matrix op2) {
	for (int i = 0; i < 4; i++) {
		if (op1.data[i] != op2.data[i]) return false;
	}
	return true;
}

//Matrix Matrix::operator+(Matrix op2) {
//	Matrix tmp;
//	for (int i = 0; i < 4; i++) {
//		tmp.data[i] = data[i] + op2.data[i];
//	}
//	return tmp;
//}
//
//Matrix& Matrix::operator+=(Matrix op2) {
//	for (int i = 0; i < 4; i++) {
//		data[i] += op2.data[i];
//	}
//	return *this;
//}
//
//bool Matrix::operator==(Matrix op2) {
//	for (int i = 0; i < 4; i++) {
//		if (data[i] != op2.data[i]) return false;
//	}
//	return true;
//}

int main() {
	Matrix a(1, 2, 3, 4), b(2, 3, 4, 5), c;
	c = a + b;
	a += b;
	a.show(); b.show(); c.show();
	if (a == c) cout << "a and c are the same" << endl;
}