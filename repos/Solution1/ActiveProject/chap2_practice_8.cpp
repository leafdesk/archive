#define _CRT_SECURE_NO_WARNINGS
#include <iostream>
#include <cstring>
using namespace std;

int main() {
	char input[128], max[128];
	int len = 0;

	cout << "5명의 이름을 ';'으로 구분하여 입력하세요." << endl << ">> ";

	for (int i = 0; i < 5; i++) {
		cin.getline(input, 128, ';');
		cout << i + 1 << " : " << input << endl;
		if (strlen(input) > len) {
			len = strlen(input);
			strcpy(max, input);
		}
	}
	cout << "가장 긴 이름은 " << max << endl;
}

// Mozart;Elvis Presley;Jim Carry;Schubert;Dominggo;