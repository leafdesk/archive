#include <iostream>
#include <string>
using namespace std;

class Morse {
	string alphabet[26];
	string digit[10];
	string slash, question, comma, period, plus, equal;
	string text;
	string morse;
public:
	Morse();
	void text2Morse(string text, string& morse);
	bool morse2Text(string morse, string& text);
};

Morse::Morse() {
	alphabet[0] = "._";		// a == ASCII CODE 97
	alphabet[1] = "_...";	// b
	alphabet[2] = "_._.";	// c
	alphabet[3] = "_..";	// d
	alphabet[4] = ".";		// e
	alphabet[5] = ".._.";	// f
	alphabet[6] = "__.";	// g
	alphabet[7] = "....";	// h
	alphabet[8] = "..";		// i
	alphabet[9] = ".___";	// j
	alphabet[10] = "_._";	// k
	alphabet[11] = "._..";	// l
	alphabet[12] = "__";	// m
	alphabet[13] = "_.";	// n
	alphabet[14] = "___";	// o
	alphabet[15] = ".__.";	// p
	alphabet[16] = "__._";	// q
	alphabet[17] = "._.";	// r
	alphabet[18] = "...";	// s
	alphabet[19] = "_";		// t
	alphabet[20] = ".._";	// u
	alphabet[21] = "..._";	// v
	alphabet[22] = ".__";	// w
	alphabet[23] = "_.._";	// x
	alphabet[24] = "_.__";	// y
	alphabet[25] = "__..";	// z

	digit[0] = "_____";		// 0 == ASCII CODE 48
	digit[1] = ".____";		// 1
	digit[2] = "..___";		// 2
	digit[3] = "...__";		// 3
	digit[4] = "...._";		// 4
	digit[5] = ".....";		// 5
	digit[6] = "_....";		// 6
	digit[7] = "__...";		// 7
	digit[8] = "___..";		// 8
	digit[9] = "____.";		// 9

	slash = "_.._.";		// /
	question = "..__..";	// ?
	comma = "__..__";		// ,
	period = "._._._";		// .
	plus = "._._.";			// +
	equal = "_..._";		// =
}

void Morse::text2Morse(string text, string& morse) {
	int len = text.length();

	for (int i = 0; i < len; i++) {
		if (isalpha(text[i])) { morse.append(alphabet[text[i] - 97]).append(" "); }
		else if (isdigit(text[i])) { morse.append(digit[text[i] - 48]).append(" "); }
		else if (text[i] == ' ') { morse.append("  "); }
		else if (text[i] == '/') { morse.append(slash).append(" "); }
		else if (text[i] == '?') { morse.append(question).append(" "); }
		else if (text[i] == ',') { morse.append(comma).append(" "); }
		else if (text[i] == '.') { morse.append(period).append(" "); }
		else if (text[i] == '+') { morse.append(plus).append(" "); }
		else if (text[i] == '=') { morse.append(equal).append(" "); }
		else { cout << "ERROR" << endl; return; }
	}
}

string str(char c) {
	char tmp[] = { c, '\0' };
	return string(tmp);
}

bool Morse::morse2Text(string morse, string& text) {
	if (morse != "") {
		int len = morse.length();
		int pos = 0;
		string character;

		text.clear();

		for (int i = 0; i < len; i++) {
			if (morse[i] == ' ') {
				character = morse.substr(pos, i - pos);
				for (int j = 0; j < 25; j++) { if (character == alphabet[j]) { text.append(str(j + 97)); } }
				for (int j = 0; j < 10; j++) { if (character == digit[j]) { text.append(str(j + 48)); } }
				if (character == "_.._.") { text.append("/"); }
				else if (character == "..__..") { text.append("?"); }
				else if (character == "__..__") { text.append(","); }
				else if (character == "._._._") { text.append("."); }
				else if (character == "._._.") { text.append("+"); }
				else if (character == "_..._") { text.append("="); }
				
				pos = i + 1;
				if (morse[pos] == ' ') {
					text.append(" ");
					i += 2;
					pos += 2;
				}
			}
		}
		return true;
	}
	else return false;
}

int main() {
	Morse converter;
	string text, morse;

	cout << "English text :\t";
	getline(cin, text);
	converter.text2Morse(text, morse);
	cout << "       Morse :\t" << morse << endl << endl;

	bool value = converter.morse2Text(morse, text);
	if (value) { cout << "English text :\t" << text << " (Automatic)" << endl; }
	else cout << "ERROR" << endl;
}