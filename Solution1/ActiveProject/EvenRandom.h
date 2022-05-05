#ifndef EVENRANDOM_H
#define EVENRANDOM_H

class EvenRandom {
public:
	EvenRandom();
	int next();
	int nextInRange(int low, int high);
};

#endif