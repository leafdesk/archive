#include <cstdlib>
#include <ctime>

#include "Random.h"

Random::Random() {
	srand((unsigned)time(0)); // ������ seed�� �����Ͽ� �� ������ �ٸ� ���� ���� ������ �Ѵ�.
}

int Random::next() {
	return rand();
}

int Random::nextInRange(int low, int high) {
	return low + (rand() % (high - low + 1));
}