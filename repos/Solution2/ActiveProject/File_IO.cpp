#include <iostream>
#include <fstream>
#include <vector>
#include <string>
using namespace std;

int main() {
	// chap12
}

int func_copy() {
	const char* srcFile = "c:\\Temp\\img.jpg";
	const char* destFile = "c:\\Temp\\back.jpg";

	ifstream fsrc(srcFile, ios::binary);
	if (!fsrc) return 1;

	ofstream fdest(destFile, ios::binary);
	if (!fdest) return 1;

	/*int c;
	while ((c = fsrc.get()) != EOF) {
		fdest.put(c);
	}*/

	char buf[1024];
	while (!fsrc.eof()) {
		fsrc.read(buf, 1024);
		int n = fsrc.gcount();
		fdest.write(buf, n);
	}

	fsrc.close();
	fdest.close();
	return 0;
}

void echo(vector<string>& v) {
	int n = v.size();
	for (int i = 0; i < n; i++) {
		string s = v[i];
		cout << s << endl;
	}
}

void search(vector<string>& v, string word) {
	int n = v.size();
	for (int i = 0; i < n; i++) {
		string s = v[i];
		int index = s.find(word); 
		if (index != -1) { cout << s << endl; }
	}
}

int func_word() {
	vector<string> wordVector;
	ifstream fin("words.txt");
	if (!fin) return 1;

	int count = 0;
	string line;
	while (getline(fin, line)) {
		wordVector.push_back(line);
		count++;
	}

	cout << count << " lines, file read complete" << endl;
	//echo(wordVector);
	
	while (true) {
		cout << "keyword: ";
		string word;
		getline(cin, word);
		if (word == "exit") break;
		search(wordVector, word);
	}

	cout << "program exit" << endl;
	fin.close();
	return 0;
}

int func_getl() {
	ifstream fin("c:\\windows\\system.ini");
	if (!fin) return 1;

	int count = 0;
	char buf[81];
	while (fin.getline(buf, 81)) {
		cout << buf << endl;
		count++;
	}

	cout << endl << count << " lines" << endl;
	fin.close();
	return 0;
}

int func_mode() {
	const char* file = "c:\\windows\\system.ini";
	//ifstream fin;
	//fin.open(file); // fin.open(file, ios::in);

	ifstream fin(file, ios::binary);
	if (!fin) return 1;

	int c, count = 0, line = 0;
	while ((c = fin.get()) != EOF) {
		cout << (char)c;
		if (c == '\r') line++;
		count++;
	}

	cout << endl << count << " bytes" << endl;
	cout << line << " lines" << endl;
	fin.close();
	return 0;
}

int func_open() {
	char name[10];
	int sid;
	char dept[20];
	
	ifstream fin;
	fin.open("c:\\Temp\\student.txt");
	if (!fin) return 1;

	fin >> name;
	fin >> sid;
	fin >> dept;

	cout << name << endl;
	cout << sid << endl;
	cout << dept << endl;

	fin.close();
	return 0;
}

int func_fout() {
	char name[10];
	int sid;
	char dept[20];

	cout << "name: ";
	cin >> name;
	cout << "sid : ";
	cin >> sid;
	cout << "dept: ";
	cin >> dept;

	ofstream fout("c:\\Temp\\student.txt");
	if (!fout) return 1;

	fout << name << endl;
	fout << sid << endl;
	fout << dept << endl;

	fout.close();
	return 0;
}

int func_fin() {
	ifstream fin("c:\\Temp\\song.txt");
	if (!fin) return 1;

	string line;
	fin >> line;
	cout << line << endl;
	fin >> line;
	cout << line << endl;
	fin >> line;
	cout << line << endl;

	fin.close();
	return 0;
}