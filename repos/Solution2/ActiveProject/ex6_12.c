#include <stdio.h>
#include "_LIST.h"

int main() {
	int num, data;
	ListType* list = create();

	printf("����� ���� : ");
	scanf("%d", &num);

	for (int i = 0; i < num; i++) {
		printf("��� #%d ������ : ", i + 1);
		scanf("%d", &data);
		ins_last(list, data);
	}

	printf("Ž���� ���� �Է��Ͻÿ� : ");
	scanf("%d", &num);
	printf("%d�� ���� ����Ʈ���� %d�� ��Ÿ���ϴ�.\n", num, get_data_num(list, num));
}