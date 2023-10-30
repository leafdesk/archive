#include <iostream>
#include <string>
using namespace std;

void combine(string a, string b, string& combine) {
	combine = a + ' ' + b;
}

int main() {
	string text1("I love you"), text2("very much");
	string text3;
	combine(text1, text2, text3);
	cout << text3 << endl;
}