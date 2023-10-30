#include <stdio.h>
#include <stdlib.h>

typedef int element;
typedef struct dListNode {
	element data;
	struct dListNode* prev;
	struct dListNode* next;
} dListNode;

void init(dListNode* head) {
	head->prev = head;
	head->next = head;
}

void print_dlist(dListNode* head) {
	dListNode* p;
	for (p = head->next; p != head; p = p->next) {
		printf("%d ", p->data);
	}
	printf("\n");
}

void dins(dListNode* bef, element data) {
	dListNode* p = (dListNode*)malloc(sizeof(dListNode));
	p->data = data;
	p->prev = bef;
	p->next = bef->next;
	bef->next->prev = p;
	bef->next = p;
}

void ddel(dListNode* head, dListNode* rm) {
	if (rm == head) return;
	rm->prev->next = rm->next;
	rm->next->prev = rm->prev;
	free(rm);
}

int main() {
	dListNode* head = (dListNode*)malloc(sizeof(dListNode));
	init(head);
	printf("추가 단계:\n");
	for (int i = 0; i < 5; i++) {
		dins(head, i);
		print_dlist(head);
	}
	printf("삭제 단계:\n");
	for (int i = 0; i < 5; i++) {
		print_dlist(head);
		ddel(head, head->next);
	}
	free(head);
}