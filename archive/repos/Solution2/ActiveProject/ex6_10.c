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

	printf("���� ����Ʈ ����� ���� : %d\n", get_length(list));
}