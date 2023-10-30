#ifndef EXP_H
#define EXP_H

class Exp {
	//private:
	int value; // ��
	int base; // ���̽��� �����ϴ� ��� ����
	int exp; // ������ �����ϴ� ��� ����
public:
	Exp(int b, int e); // b�� ���ؼ� ���̽��� ����, e�� ���ؼ� ������ ����
	Exp(int b); // �������� ���޹��� ����
	Exp(); // �ƹ����� ���޹��� ����
	~Exp() {}

	int getValue() { return value; } // ���� �� ����(����)
	int getBase() { return base; } // ���̽��� ����
	int getExp() { return exp; } // ������ ����
	bool equals(Exp b); // ��, ���� ����
};

#endif