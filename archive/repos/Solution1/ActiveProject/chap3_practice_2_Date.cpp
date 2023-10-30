#include <iostream>
using namespace std;

#include "Date.h"

Date::Date(int y, int m, int d) {
	year = y;
	month = m;
	day = d;
}

Date::Date(string s) {
	int slash[2];
	int j = 0;

	for (int i = 0; i < s.size(); i++) {
		if (s[i] == '/') {
			slash[j] = i;
			j++;
		}
	}
	year = stoi(s.substr(0, slash[0]));
	month = stoi(s.substr(slash[0] + 1, slash[1] - slash[0] - 1));
	day = stoi(s.substr(slash[1] + 1, s.size() - 1 - slash[1]));
}

void Date::show() {
	cout << year << "³â" << month << "¿ù" << day << "ÀÏ" << endl;
}

int Date::getYear() {
	return year;
}

int Date::getMonth() {
	return month;
}

int Date::getDay() {
	return day;
}