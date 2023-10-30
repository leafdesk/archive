#include <iostream>
#include <cstdlib>
#include <ctime>

using namespace std;

#include "evenrandom.h"

EvenRandom::EvenRandom() {
	srand((unsigned)time(0));
}

int EvenRandom::next() {
	return (rand() / 2) * 2;
}

int EvenRandom::nextInRange(int low, int high) {
	return ((low + (rand() % (high - low + 1))) / 2) * 2;
}