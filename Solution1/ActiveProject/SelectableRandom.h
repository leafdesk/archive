#ifndef SELECTABLERANDOM_H
#define SELECTABLERANDOM_H

class SelectableRandom {
	int res;
public:
	SelectableRandom(int r);
	int next();
	int nextInRange(int low, int high);
};

#endif