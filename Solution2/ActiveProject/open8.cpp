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
		cout << "--- 상품ID : " << id << endl;
		cout << "상품설명 : " << desc << endl;
		cout << "생산자 : " << pd << endl;
		cout << "가격 : " << price << endl;
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
		cout << "책제목 : " << book << endl;
		cout << "저자 : " << wrtr << endl;
	}
};

class CompactDisc : public Product {
	string album;
	string singer;
public:
	void setAlbumTitle(string title) { album = title; }
	void setSingerName(string name) { singer = name; }
	void showCompactDiscInfo() {
		cout << "앨범제목: " << album << endl;
		cout << "가수: " << singer << endl;
	}
};

class ConversationBook : public Book {
	string lang;
public:
	void setLanguage(string lang) { this->lang = lang; }
	void showConversationBookInfo() {
		cout << "언어: " << lang << endl;
	}
};

class UI {
public:
	static int getMainMenu() {
		int menu;
		cout << "상품 추가(1), 모든 상품 조회(2), 끝내기(3) ? ";
		cin >> menu;
		return menu;
	}
	static int getSubMenu() {
		int menu;
		cout << "상품 종류: 책(1), 음악CD(2), 회화책(3) ? ";
		cin >> menu;
		return menu;
	}
	static string getDesc() {
		string desc;
		cout << "상품설명>> ";
		getline(cin, desc);
		return desc;
	}
	static string getPdName() {
		string name;
		cout << "생산자>> ";
		getline(cin, name);
		return name;
	}
	static int getPrice() {
		int price;
		cout << "가격>> ";
		cin >> price;
		return price;
	}
	static string getAlbumTitle() {
		string title;
		cout << "앨범제목>> ";
		getline(cin, title);
		return title;
	}
	static string getSingerName() {
		string name;
		cout << "가수>> ";
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
		cout << "책제목>> ";
		getline(cin, title);
		return title;
	}
	static string getWriterName() {
		string name;
		cout << "저자>> ";
		getline(cin, name);
		return name;
	}
	static string getLanguage() {
		string lang;
		cout << "언어>> ";
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
		cout << "***** 상품 관리 프로그램을 작동합니다. *****" << endl << endl;
		while (true) {
			do {
				main = UI::getMainMenu();
			} while (1 > main || main > 3);
			switch (main) {
			case 1: // 상품 추가
				if (serial >= 3) {
					cout << "관리할 수 있는 최대 상품 개수를 초과했습니다." << endl << endl;
					break;
				}
				do {
					sub = UI::getSubMenu();
				} while (1 > sub || sub > 3);
				switch (sub) {
				case 1: // 책 추가
				{
					Product* pBK = addBook();
					if (head == NULL) { head = tail = pBK; }
					else {
						tail->setNext(pBK);
						tail = pBK;
					} cout << endl;
					break;
				}
				case 2: // 음악CD 추가
				{
					Product* pCD = addCompactDisc();
					if (head == NULL) { head = tail = pCD; }
					else {
						tail->setNext(pCD);
						tail = pCD;
					} cout << endl;
					break;
				}
				case 3: // 회화책 추가
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
			case 2: // 모든 상품 조회
				if (head == NULL) {
					cout << "상품이 없습니다." << endl << endl;
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
			case 3: // 끝내기
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