#include <cstdlib>
#include <ctime>
#include "SelectableRandom.h"

SelectableRandom::SelectableRandom(int r) {
	srand((unsigned)time(0));
	if (0 <= r && r <= 1) { res = r; }
	else { res = -1; }
}

int SelectableRandom::next() {
	if (res == 1) { return (rand() / 2) * 2 + 1; }
	else if (res == 0) { return (rand() / 2) * 2; }
	else { return rand(); }
}

int SelectableRandom::nextInRange(int low, int high) {
	int range = low + (rand() % (high - low + 1));
	if (res == 1) { return (range / 2) * 2 + 1; }
	else if (res == 0) { return (range / 2) * 2; }
	else { return range; }
}