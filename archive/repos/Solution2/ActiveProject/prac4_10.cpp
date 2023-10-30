#include <iostream>
#include <string>
using namespace std;

class Person {
	string name;
public:
	Person() { name = "NONE"; }
	Person(string name) { this->name = name; } 
	string getName() { return name; }
	void setPersonName(string name) { this->name = name; } 
};

class Family {
	Person *p;
	string name; 
	int size;
public:
	Family(string name, int size) { 
		this->name = name;
		this->size = size;
		p = new Person[size]; // 생성자가 끝나고 포인터 주소는 여전히 멤버 변수로 남아있다.
	}
	void setName(int index, string name) {
		p[index].setPersonName(name);
	}
	int getSize() { return size; }
	void show() {
		cout << name << "가족은 다음과 같이 " << size << "명 입니다." << endl; 
		for (int i = 0; i < size; i++) {
			cout << p[i].getName() << "\t";
		}
		cout << endl;
	}
	~Family() { delete[] p; } // 그러나 Family 객체가 사라질 때는 반드시 p를 반환해야 한다.
};

int main() {
	Family *simpson = new Family("Simpson", 3);
	simpson->setName(0, "Mr. Simpson");
	simpson->setName(1, "Mrs. Simpson");
	simpson->setName(2, "Bart Simpson");
	simpson->show();
	delete simpson;
}