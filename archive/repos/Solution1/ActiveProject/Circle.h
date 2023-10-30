#ifndef CIRCLE_H
#define CIRCLE_H

// 선언부
class Circle { // 클래스 이름은 반드시 대문자로 시작
private: // 접근 지정자; protected, private 등이 있음
	int radius; // 멤버 변수는 반드시 소문자로 시작

public:
	// Circle(); // 생성자
	Circle(int r);
	~Circle(); // 소멸자. 오직 1개만 작성 가능
	double getArea(); // 함수 이름은 반드시 소문자로 시작, '_' 쓰지 않음, 대신 두번째 단어를 대문자로 시작
};

#endif