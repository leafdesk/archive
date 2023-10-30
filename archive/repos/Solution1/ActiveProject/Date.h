#ifndef DATE_H
#define DATE_H

#include <string>


class Date {
	int year;
	int month;
	int day;
public:
	Date(int y, int m, int d);
	Date(string s);
	void show();
	int getYear();
	int getMonth();
	int getDay();
};

#endif