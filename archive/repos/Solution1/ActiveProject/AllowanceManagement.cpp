#include <iostream>
using namespace std;

int main() {
	int balance;
	int safebox;
	int period;
	int portion;

	cout << "Balance: ";
	cin >> balance;
	cout << "Safebox: ";
	cin >> safebox;
	cout << "Period: ";
	cin >> period;
	cout << endl;

	portion = (balance - safebox) / period;

	for (; period > 0; period--)
	{
		balance -= portion;
		cout << balance << endl;
	}
}