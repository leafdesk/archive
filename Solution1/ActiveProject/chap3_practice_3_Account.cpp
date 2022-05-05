#include <iostream>
using namespace std;

#include "Account.h"

Account::Account(string n, int i, int b) {
	name = n;
	id = i;
	balance = b;
}

string Account::getOwner() {
	return name;
}

int Account::deposit(int d) {
	balance += d;
	return d;
}

int Account::withdraw(int w) {
	balance -= w;
	return w;
}

int Account::inquiry() {
	return balance;
}