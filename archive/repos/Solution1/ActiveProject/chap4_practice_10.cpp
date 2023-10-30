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
		p = new Person[size]; // �����ڰ� ������ ������ �ּҴ� ������ ��� ������ �����ִ�.
	}
	void setName(int index, string name) {
		p[index].setPersonName(name);
	}
	int getSize() { return size; }
	void show() {
		cout << name << "������ ������ ���� " << size << "�� �Դϴ�." << endl; 
		for (int i = 0; i < size; i++) {
			cout << p[i].getName() << "\t";
		}
		cout << endl;
	}
	~Family() { delete[] p; } // �׷��� Family ��ü�� ����� ���� �ݵ�� p�� ��ȯ�ؾ� �Ѵ�.
};

int main() {
	Family *simpson = new Family("Simpson", 3);
	simpson->setName(0, "Mr. Simpson");
	simpson->setName(1, "Mrs. Simpson");
	simpson->setName(2, "Bart Simpson");
	simpson->show();
	delete simpson;
}