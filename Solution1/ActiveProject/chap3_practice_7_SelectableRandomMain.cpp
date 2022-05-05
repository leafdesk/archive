#include <iostream>
#include <cstdlib>
using namespace std;

#include "SelectableRandom.h"

int main() {
	SelectableRandom odd(1);
	SelectableRandom even(0);

	cout << "-- 0에서 " << RAND_MAX << "까지의 짝수 랜덤 정수 10 개--" << endl;
	for (int i = 0; i < 10; i++) {
		int n = even.next();
		cout << n << ' ';
	}
	
	cout << endl << endl << "-- 2에서 9 까지의 랜덤 홀수 정수 10 개--" << endl;
	for (int i = 0; i < 10; i++) {
		int n = odd.nextInRange(2, 9);
		cout << n << ' ';
	}
}