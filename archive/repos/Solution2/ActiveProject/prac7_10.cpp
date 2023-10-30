#include <iostream>
using namespace std;

class Statistics {
	int* data;
	int capacity;
	int index;
public:
	Statistics();
	~Statistics();
	bool isFull();
	bool operator!();
	Statistics& operator<<(int element);
	void operator~();
	void operator>>(int& avg);
};

Statistics::Statistics() {
	index = 0;
	capacity = 1;
	data = new int[capacity];
	if (!data) {
		cout << "OUT OF MEMORY" << endl;
		return;
	}
}

Statistics::~Statistics() {
	delete[] data;
}

bool Statistics::isFull() {
	if (index == capacity) return true;
	else return false;
}

bool Statistics::operator!() {
	if (index == 0) return true;
	else return false;
}

Statistics& Statistics::operator<<(int element) {
	if (this->isFull()) {
		capacity *= 2;
		int* tmp = new int[capacity];
		if (!tmp) {
			cout << "OUT OF MEMORY" << endl;
			exit(1);
		}
		for (int i = 0; i < index; i++) {
			tmp[i] = data[i];
		}
		delete[] data;
		data = tmp;
	}

	data[index++] = element;
	return *this;
}

void Statistics::operator~() {
	for (int i = 0; i < index; i++) {
		cout << data[i] << ' ';
	}
	cout << endl;
}

void Statistics::operator>>(int& avg) {
	int sum = 0;
	for (int i = 0; i < index; i++) {
		sum += data[i];
	}
	avg = sum / index;
}

int main() {
	Statistics stat;
	if (!stat) cout << "현재 통계 데이터가 없습니다." << endl;

	int x[5];
	cout << "5개의 정수를 입력: ";
	for (int i = 0; i < 5; i++) cin >> x[i];

	for (int i = 0; i < 5; i++) stat << x[i];
	stat << 100 << 200;
	~stat;

	int avg;
	stat >> avg;
	cout << "평균: " << avg << endl;
}