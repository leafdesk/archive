
#include <iostream>
using namespace std;

int main()
{
	char coffee[100];
	int num;
	int sales = 0;

	cout << "���������� 2000��, �Ƹ޸�ī�� 2300��, īǪġ�� 2500���Դϴ�." << endl;

	while (sales < 20000)
	{
		cout << "�ֹ�>> ";
		cin >> coffee >> num;

		if (strcmp(coffee, "����������") == 0)
		{
			cout << 2000 * num << "���Դϴ�. ���ְ� �弼��" << endl;
			sales += 2000 * num;
		}
		else if (strcmp(coffee, "�Ƹ޸�ī��") == 0)
		{
			cout << 2300 * num << "���Դϴ�. ���ְ� �弼��" << endl;
			sales += 2300 * num;
		}
		else if (strcmp(coffee, "īǪġ��") == 0)
		{
			cout << 2500 * num << "���Դϴ�. ���ְ� �弼��" << endl;
			sales += 2500 * num;

		}
	}

	cout << "���� " << sales << "���� �Ǹ��Ͽ� ī�並 �ݽ��ϴ�. ���� ����~~~" << endl;

}