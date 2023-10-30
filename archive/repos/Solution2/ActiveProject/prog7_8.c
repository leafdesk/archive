#include <stdio.h>
#include <stdlib.h>
#include <string.h>

typedef char element[100];
typedef struct dListNode {
	element data;
	struct dListNode* prev;
	struct dListNode* next;
} dListNode;

dListNode* cur;

void init(dListNode* head) {
	head->prev = head;
	head->next = head;
}

void print_dlist(dListNode* head) {
	dListNode* p;
	for (p = head->next; p != head; p = p->next) {
		if (p == cur) printf("%s #\n", p->data);
		else printf("%s\n", p->data);
	} printf("\n");
}

void dins(dListNode* bef, element data) {
	dListNode* p = (dListNode*)malloc(sizeof(dListNode));
	strcpy(p->data, data);
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
	char ch;
	dListNode* head = (dListNode*)malloc(sizeof(dListNode));
	init(head);

	dins(head, "Mamamia");
	dins(head, "Dancing Queen");
	dins(head, "Fernando");

	cur = head->next;
	print_dlist(head);

	do {
		printf("명령어 입력(<, >, q): ");
		ch = getchar();
		if (ch == '<') {
			cur = cur->prev;
			if (cur == head) { cur = cur->prev; }
		}
		else if (ch == '>') {
			cur = cur->next;
			if (cur == head) { cur = cur->next; }
		}
		print_dlist(head);
		getchar();
	} while (ch != 'q');
}