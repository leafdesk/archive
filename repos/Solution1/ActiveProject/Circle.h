#ifndef CIRCLE_H
#define CIRCLE_H

// �����
class Circle { // Ŭ���� �̸��� �ݵ�� �빮�ڷ� ����
private: // ���� ������; protected, private ���� ����
	int radius; // ��� ������ �ݵ�� �ҹ��ڷ� ����

public:
	// Circle(); // ������
	Circle(int r);
	~Circle(); // �Ҹ���. ���� 1���� �ۼ� ����
	double getArea(); // �Լ� �̸��� �ݵ�� �ҹ��ڷ� ����, '_' ���� ����, ��� �ι�° �ܾ �빮�ڷ� ����
};

#endif