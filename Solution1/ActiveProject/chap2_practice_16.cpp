#include <iostream>
#include <cstring>
using namespace std;

int main() {
	cout << "���� �ؽ�Ʈ�� �Է��ϼ���. ������׷��� �׸��ϴ�." << endl;
	cout << "�ؽ�Ʈ�� ���� ; �Դϴ�. 10000������ �����մϴ�." << endl;

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

	cout << "�� ���ĺ� �� " << numAll << endl << endl;

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