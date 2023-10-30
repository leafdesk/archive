#include <iostream>
#include <cstdlib>
using namespace std;

#include "SelectableRandom.h"

int main() {
	SelectableRandom odd(1);
	SelectableRandom even(0);

	cout << "-- 0���� " << RAND_MAX << "������ ¦�� ���� ���� 10 ��--" << endl;
	for (int i = 0; i < 10; i++) {
		int n = even.next();
		cout << n << ' ';
	}
	
	cout << endl << endl << "-- 2���� 9 ������ ���� Ȧ�� ���� 10 ��--" << endl;
	for (int i = 0; i < 10; i++) {
		int n = odd.nextInRange(2, 9);
		cout << n << ' ';
	}
}