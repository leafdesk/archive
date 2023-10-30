#include <iostream>
using namespace std;

class Shape {
	Shape* next;
	char type;
public:
	Shape() { next = NULL; type = NULL; }
	void setNext(Shape* link) { next = link; }
	Shape* getNext() { return next; }
	void setType(char type) { this->type = type; }
	char getType() { return type; }
	virtual void show() = 0;
};

class Circle : public Shape {
public:
	void show() { cout << "Circle" << endl; }
};

class Line : public Shape {
public:
	void show() { cout << "Line" << endl; }
};

class Rect : public Shape {
public:
	void show() { cout << "Rectangle" << endl; }
};

class UI {
public:
	static void getMainMenu(int& menu) {
		while (true) {
			cout << "����:1, ����:2, ��κ���:3, ����:4 >> ";
			cin >> menu;
			if (1 <= menu && menu <= 4) break;
		}
	}
	static void getSubMenu(int& sub) {
		while (true) {
			cout << "��:1, ��:2, �簢��:3 >> ";
			cin >> sub;
			if (1 <= sub && sub <= 3) break;
		}
	}
	static void getIndexNum(int& index, int size) {
		while (true) {
			cout << "�����ϰ��� �ϴ� ������ �ε��� >> ";
			cin >> index;
			if (0 <= index && index < size) break;
		}
	}
};

class GraphicEditor {
	int size;
	Shape* head, * tail;
public:
	GraphicEditor() { size = 0; head = tail = NULL; }
	void run() {
		int menu, sub, index;
		cout << "�׷��� �������Դϴ�." << endl << endl;
		while (true) {
			UI::getMainMenu(menu);
			switch (menu) {
			case 1:
				UI::getSubMenu(sub);
				switch (sub) {
				case 1: addLine(); break;
				case 2: addCircle(); break;
				case 3: addRect(); break;
				}
				break;
			case 2: {
				UI::getIndexNum(index, size);
				if (index == 0) {
					Shape* p = head;
					head = p->getNext();
					delete p;
				}
				else {
					Shape* p = head;
					for (int i = 0; i < index - 1; i++) {
						p = p->getNext();
					}
					Shape* q = p->getNext()->getNext();
					delete p->getNext();
					p->setNext(q);
				}
				size--;
				break;
			}
			case 3: {
				cout << endl;
				if (head == NULL) {
					cout << "����" << endl;
					break;
				}

				int i = 0;
				Shape* p = head;
				while (p) {
					cout << i++ << ": ";
					switch (p->getType()) {
					case 'L': {
						p = (Line*)p;
						p->show();
						break;
					}
					case 'C': {
						p = (Circle*)p;
						p->show();
						break;
					}
					case 'R': {
						p = (Rect*)p;
						p->show();
						break;
					}
					}
					p = p->getNext();
				}
				break;
			}
			case 4:
				return;
			}
			cout << endl;
		}
	}
	void addLine() {
		Shape* p = new Line;
		p->setType('L');
		if (head == NULL) {
			head = tail = p;
			size++;
		}
		else {
			tail->setNext(p);
			tail = p;
			size++;
		}
	}
	void addCircle() {
		Shape* p = new Circle;
		p->setType('C');
		if (head == NULL) {
			head = tail = p;
			size++;
		}
		else {
			tail->setNext(p);
			tail = p;
			size++;
		}
	}
	void addRect() {
		Shape* p = new Rect;
		p->setType('R');
		if (head == NULL) {
			head = tail = p;
			size++;
		}
		else {
			tail->setNext(p);
			tail = p;
			size++;
		}
	}
};

int main() {
	GraphicEditor g;
	g.run();
}