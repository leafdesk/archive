#include <iostream>
#include <cstring>
using namespace std;

int main() {
	cout << "영문 텍스트를 입력하세요. 히스토그램을 그립니다." << endl;
	cout << "텍스트의 끝은 ; 입니다. 10000개까지 가능합니다." << endl;

	char text[10000];
	cin.getline(text, 10000, ';');

	for (int i = 0; i < strlen(text); i++) {
		text[i] = tolower(text[i]);
	}

	int numAll = 0;
	for (int i = 0; i < strlen(text); i++) {
		if (isalpha(text[i]) != 0) {
			numAll++;
		}
	}

	cout << "총 알파벳 수 " << numAll << endl << endl;

	char alpha;
	for (alpha = 'a'; alpha <= 'z'; alpha++) {
		int num = 0;
		for (int i = 0; i < strlen(text); i++) {
			if (text[i] == alpha) {
				num++;
			}
		}
		cout << alpha << " (" << num << ")\t: ";
		for (int i = 0; i < num; i++) {
			cout << '*';
		}
		cout << endl;
	}
}

/*

Wise men say, only fools rush in
But I can't help, falling in love with you

Shall I stay? Would it be a sin?
If I can't help, falling in love with you

Like a river flows, surely to the sea
Darling so it goes, some things aren't meant to be ;

*/