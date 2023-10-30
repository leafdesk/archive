#include <stdio.h>
#include <stdlib.h>
#include <string.h>

typedef char element[100];
typedef struct ListNode {
	element data;
	struct ListNode* next;
} ListNode;

ListNode* ins_first(ListNode* tail, element data) {
	ListNode* node = (ListNode*)malloc(sizeof(ListNode));
	strcpy(node->data, data);
	if (tail == NULL) {
		tail = node;
		node->next = tail;
	}
	else {
		node->next = tail->next;
		tail->next = node;
	}
	return tail;
}

int main() {
	ListNode* list = NULL;

	list = ins_first(list, "KIM");
	list = ins_first(list, "PARK");
	list = ins_first(list, "CHOI");

	ListNode* p = list;
	for (int i = 0; i < 10; i++) {
		printf("ÇöÀç Â÷·Ê: %s\n", p->data);
		p = p->next;
	}
}