#include <stdio.h>
#include <stdlib.h>

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
	
	printf("������ ���� ����Ʈ : ");
	ListNode* p;
	for (p = list->head; p != NULL; p = p->link) {
		printf("%d->", p->data);
	}
	printf("\n");
}