#include <iostream>
#include <string>
using namespace std;

int main() {
	string text;
	int i, index;
	char temp[64];

	cout << "�Ʒ��� �� ���� �Է��ϼ���. (exit�� �Է��ϸ� �����մϴ�)" << endl;
	while (true) {
		cout << ">> ";
		getline(cin, text, '\n');
		if (text == "exit") {
			cout << "���α׷��� �����մϴ�." << endl;
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