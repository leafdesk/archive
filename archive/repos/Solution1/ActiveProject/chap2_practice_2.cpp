#include <iostream>
using namespace std;

int main()
{
	int a;
	int b;

	for (b = 1; b < 10; b++)
	{
		for (a = 1; a < 10; a++)
		{
			cout << a << 'x' << b << '=' << a * b;
			cout << "\t";
		}
		cout << endl;
	}

	return 0;
}