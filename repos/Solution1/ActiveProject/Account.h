#ifndef ACCOUNT_H
#define ACCOUNT_H

#include <string>

class Account {
	string name;
	int id;
	int balance;
public:
	Account(string n, int i, int b);
	string getOwner();
	int deposit(int d);
	int withdraw(int w);
	int inquiry();
};

#endif