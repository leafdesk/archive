#include "Exp.h"

Exp::Exp(int b, int e) {
	base = b;
	exp = e;

	int res = 1;
	// base를 exp번 곱하기
	for (int i = 0; i < exp; i++) {
		res *= base; // res = res * base
	}

	value = res;
}

Exp::Exp(int b) : Exp(b, 1) {

}

Exp::Exp() : Exp(1, 1) {

}

bool Exp::equals(Exp b) {
	if (value == b.value)
		return true;
	else
		return false;
}