#include <iostream>
#include <fstream>
#include <string>
using namespace std;

int main() {
	const char* file = "AllowanceManagement.cpp";

	ifstream fin(file/*, ios::binary*/);
	if (!fin) { cout << "error"; return 1; }

	string line;
	while (true) {
		getline(fin, line);
		if (fin.eof()) break;
		int index = line.find("//");
		if (index != -1) {
			line.erase(index, line.length() - index);
		}
		cout << line << endl;
	}
}