#ifndef EXP_H
#define EXP_H

class Exp {
	//private:
	int value; // 값
	int base; // 베이스를 저장하는 멤버 변수
	int exp; // 지수를 저장하는 멤버 변수
public:
	Exp(int b, int e); // b를 통해서 베이스값 전달, e를 통해서 지수값 전달
	Exp(int b); // 지수값을 전달받지 않음
	Exp(); // 아무값도 전달받지 않음
	~Exp() {}

	int getValue() { return value; } // 계산된 값 리턴(정수)
	int getBase() { return base; } // 베이스값 리턴
	int getExp() { return exp; } // 지수값 리턴
	bool equals(Exp b); // 참, 거짓 리턴
};

#endif