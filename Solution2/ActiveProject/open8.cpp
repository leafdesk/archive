#include <iostream>
#include <string>
using namespace std;

class Product {
	int id;
	string desc;
	string pd;
	int price;
	Product* next;
	string type;
public:
	Product() { id = 0; price = 0; next = NULL; }
	void setId(int serial) { id = serial; }
	void setDesc(string desc) { this->desc = desc; }
	void setPdName(string name) { pd = name; }
	void setPrice(int price) { this->price = price; }
	void setNext(Product* link) { next = link; }
	void setType(string type) { this->type = type; }
	Product* getNext() { return next; }
	string getType() { return type; }
	void showProductInfo() {
		cout << "--- ��ǰID : " << id << endl;
		cout << "��ǰ���� : " << desc << endl;
		cout << "������ : " << pd << endl;
		cout << "���� : " << price << endl;
	}
};

class Book : public Product {
	int isbn;
	string book;
	string wrtr;
public:
	Book() { isbn = 0; }
	void setIsbnNum(int num) { isbn = num; }
	void setBookTitle(string title) { book = title; }
	void setWriterName(string name) { wrtr = name; }
	void showBookInfo() {
		cout << "ISBN : " << isbn << endl;
		cout << "å���� : " << book << endl;
		cout << "���� : " << wrtr << endl;
	}
};

class CompactDisc : public Product {
	string album;
	string singer;
public:
	void setAlbumTitle(string title) { album = title; }
	void setSingerName(string name) { singer = name; }
	void showCompactDiscInfo() {
		cout << "�ٹ�����: " << album << endl;
		cout << "����: " << singer << endl;
	}
};

class ConversationBook : public Book {
	string lang;
public:
	void setLanguage(string lang) { this->lang = lang; }
	void showConversationBookInfo() {
		cout << "���: " << lang << endl;
	}
};

class UI {
public:
	static int getMainMenu() {
		int menu;
		cout << "��ǰ �߰�(1), ��� ��ǰ ��ȸ(2), ������(3) ? ";
		cin >> menu;
		return menu;
	}
	static int getSubMenu() {
		int menu;
		cout << "��ǰ ����: å(1), ����CD(2), ȸȭå(3) ? ";
		cin >> menu;
		return menu;
	}
	static string getDesc() {
		string desc;
		cout << "��ǰ����>> ";
		getline(cin, desc);
		return desc;
	}
	static string getPdName() {
		string name;
		cout << "������>> ";
		getline(cin, name);
		return name;
	}
	static int getPrice() {
		int price;
		cout << "����>> ";
		cin >> price;
		return price;
	}
	static string getAlbumTitle() {
		string title;
		cout << "�ٹ�����>> ";
		getline(cin, title);
		return title;
	}
	static string getSingerName() {
		string name;
		cout << "����>> ";
		getline(cin, name);
		return name;
	}
	static int getIsbnNum() {
		int num;
		cout << "ISBN>> ";
		cin >> num;
		return num;
	}
	static string getBookTitle() {
		string title;
		cout << "å����>> ";
		getline(cin, title);
		return title;
	}
	static string getWriterName() {
		string name;
		cout << "����>> ";
		getline(cin, name);
		return name;
	}
	static string getLanguage() {
		string lang;
		cout << "���>> ";
		getline(cin, lang);
		return lang;
	}
};

class Program {
	int serial;
	Product* head;
	Product* tail;
public:
	Program() { serial = 0; head = tail = NULL; }
	void run() {
		int main, sub;
		cout << "***** ��ǰ ���� ���α׷��� �۵��մϴ�. *****" << endl << endl;
		while (true) {
			do {
				main = UI::getMainMenu();
			} while (1 > main || main > 3);
			switch (main) {
			case 1: // ��ǰ �߰�
				if (serial >= 3) {
					cout << "������ �� �ִ� �ִ� ��ǰ ������ �ʰ��߽��ϴ�." << endl << endl;
					break;
				}
				do {
					sub = UI::getSubMenu();
				} while (1 > sub || sub > 3);
				switch (sub) {
				case 1: // å �߰�
				{
					Product* pBK = addBook();
					if (head == NULL) { head = tail = pBK; }
					else {
						tail->setNext(pBK);
						tail = pBK;
					} cout << endl;
					break;
				}
				case 2: // ����CD �߰�
				{
					Product* pCD = addCompactDisc();
					if (head == NULL) { head = tail = pCD; }
					else {
						tail->setNext(pCD);
						tail = pCD;
					} cout << endl;
					break;
				}
				case 3: // ȸȭå �߰�
				{
					Product* pCB = addConversationBook();
					if (head == NULL) { head = tail = pCB; }
					else {
						tail->setNext(pCB);
						tail = pCB;
					} cout << endl;
					break;
				}
				}
				break;
			case 2: // ��� ��ǰ ��ȸ
				if (head == NULL) {
					cout << "��ǰ�� �����ϴ�." << endl << endl;
					break;
				} cout << endl;
				for (Product* p = head; p != NULL; p = p->getNext()) {
					p->showProductInfo();
					string type = p->getType();
					if (type == "CompactDisc") {
						CompactDisc* pCD = (CompactDisc*)p;
						pCD->showCompactDiscInfo();
					}
					else {
						Book* pBK = (Book*)p;
						pBK->showBookInfo();
						if (type == "ConversationBook") {
							ConversationBook* pCB = (ConversationBook*)p;
							pCB->showConversationBookInfo();
						}
					} cout << endl;
				}
				break;
			case 3: // ������
				return; 
			}
		}
	}
	Product* addBook() {
		cin.ignore();
		string desc = UI::getDesc();
		string pd = UI::getPdName();
		int price = UI::getPrice();
		cin.ignore();
		string book = UI::getBookTitle();
		string wrtr = UI::getWriterName();
		int isbn = UI::getIsbnNum();

		Book* p = new Book();
		p->setId(serial++);
		p->setType("Book");

		p->setDesc(desc);
		p->setPdName(pd);
		p->setPrice(price);
		p->setIsbnNum(isbn);
		p->setBookTitle(book);
		p->setWriterName(wrtr);

		return p;
	}
	Product* addCompactDisc() {
		cin.ignore();
		string desc = UI::getDesc();
		string pd = UI::getPdName();
		int price = UI::getPrice();
		cin.ignore();
		string album = UI::getAlbumTitle();
		string singer = UI::getSingerName();

		CompactDisc* p = new CompactDisc();
		p->setId(serial++);
		p->setType("CompactDisc");

		p->setDesc(desc);
		p->setPdName(pd);
		p->setPrice(price);
		p->setAlbumTitle(album);
		p->setSingerName(singer);

		return p;
	}
	Product* addConversationBook() {
		cin.ignore();
		string desc = UI::getDesc();
		string pd = UI::getPdName();
		int price = UI::getPrice();
		cin.ignore();
		string book = UI::getBookTitle();
		string wrtr = UI::getWriterName();
		string lang = UI::getLanguage();
		int isbn = UI::getIsbnNum();

		ConversationBook* p = new ConversationBook();
		p->setId(serial++);
		p->setType("ConversationBook");

		p->setDesc(desc);
		p->setPdName(pd);
		p->setPrice(price);
		p->setIsbnNum(isbn);
		p->setBookTitle(book);
		p->setWriterName(wrtr);
		p->setLanguage(lang);

		return p;
	}
};

int main() {
	Program prog;
	prog.run();
}