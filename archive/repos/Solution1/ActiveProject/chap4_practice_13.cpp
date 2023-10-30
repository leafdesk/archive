#include <iostream>
#include <string>
#include <locale>
using namespace std;

class Histogram {
	string text;
public:
	Histogram(string text) { this->text.append(text).append("\n"); }
	void put(string text) { this->text.append(text); }
	void putc(char ch);
	void print();
};

void Histogram::putc(char ch) {
	char buf[] = { ch, '\0' };
	this->text.append(buf);
}

void Histogram::print() {
	int i, count = 0;
	char alpha;
	int count2[26] = { 0 };
	int index = 0;
	
	cout << text << endl << endl;
	for (i = 0; i < text.length(); i++) {
		if (isalpha(text[i])) {
			count++;
		}
	}
	cout << "ÃÑ ¾ËÆÄºª ¼ö " << count << endl << endl;

	for (alpha = 'a'; alpha <= 'z'; alpha++) {
		for (i = 0; i < text.length(); i++) {
			if (alpha == tolower(text[i])) {
				count2[index] += 1;
			}
		}
		cout << alpha << " (" << count2[index] << ")\t: ";
		for (i = 0; i < count2[index]; i++) {
			cout << "*";
		}
		index++;
		cout << endl;
	}
}

int main() {
	Histogram elvisHisto("Wise men say, only fools rush in But I can't help, ");
	elvisHisto.put("falling in love with you");
	elvisHisto.putc('-');
	elvisHisto.put("Elvis Presley");
	elvisHisto.print();
}