#include <cstdlib>
#include <ctime>

#include "Random.h"

Random::Random() {
	srand((unsigned)time(0)); // 임의의 seed를 설정하여 할 때마다 다른 랜덤 수가 나오게 한다.
}

int Random::next() {
	return rand();
}

int Random::nextInRange(int low, int high) {
	return low + (rand() % (high - low + 1));
}