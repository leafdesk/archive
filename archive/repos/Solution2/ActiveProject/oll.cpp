#include <iostream>
#include <fstream>
#include <vector>
#include <string>
using namespace std;

void readFile(vector<string>& v) {
	ifstream fin("words.txt");
	if (!fin) { cout << "파일 없음"; return; }
	string line;
	while (true) {
		getline(fin, line);
		if (fin.eof()) break;
		v.push_back(line);
	}
	fin.close();
}

int main() {
	vector<string> v;
	readFile(v);
	for (int i = 0; i < v.size(); i++) {
		if (v[i][0] == 't') {
			cout << v[i] << endl;
		}
	}
}