#include <iostream>
#include <string>
using namespace std;

int main() {
	string text;
	int i, index;
	char temp[64];

	cout << "아래에 한 줄을 입력하세요. (exit를 입력하면 종료합니다)" << endl;
	while (true) {
		cout << ">> ";
		getline(cin, text, '\n');
		if (text == "exit") {
			cout << "프로그램을 종료합니다." << endl;
			return 0;
		}
		index = text.length() - 1;
		for (i = 0; i < text.length(); i++) {
			temp[i] = text[index--];
		}
		temp[i] = '\0';
		string res(temp);
		cout << res << endl;
	}
}