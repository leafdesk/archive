#include <iostream>
#include <string>
using namespace std;

class Histogram {
	string text;
	int num, len, alphaNum;
public:
	Histogram(string text);
	Histogram& operator<<(string text);
	Histogram& operator<<(char c);
	void operator!();
	int getAlphaNum(char c);
};

Histogram::Histogram(string text) {
	this->text = text;
	num = 0;
	len = text.length();
	alphaNum = 0;
}

Histogram& Histogram::operator<<(string text) {
	this->text += text;
	len = this->text.length();
	return *this;
}

Histogram& Histogram::operator<<(char c) {
	char tmp[] = { c, '\0' };
	string text(tmp);
	this->text += text;
	return *this;
}

void Histogram::operator!() {
	cout << text << endl << endl;
	
	len = text.length();
	for (int i = 0; i < len; i++) {
		if (isalpha(text[i])) num++;
	}
	cout << "ÃÑ ¾ËÆÄºª ¼ö " << num << endl;

	for (char c = 'a'; c <= 'z'; c++) {
		cout << c << ":";
		alphaNum = getAlphaNum(c);
		for (int i = 0; i < alphaNum; i++) {
			cout << '*';
		}
		cout << endl;
		alphaNum = 0;
	}
}

int Histogram::getAlphaNum(char c) {
	for (int i = 0; i < len; i++) {
		if (tolower(text[i]) == c) alphaNum++;
	}
	return alphaNum;
}

int main() {
	Histogram song("Wise men say, \nonly fools rush in But I can't help, \n");
	song << "falling" << " in love with you." << "- by ";
	song << 'k' << 'i' << 't';
	!song;
}