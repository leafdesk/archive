#ifndef _LIST_CIR
#define _LIST_CIR

#include <stdio.h>
#include <stdlib.h>

typedef int element;
typedef struct ListNode {
	element data;
	struct ListNode* next;
} ListNode;

void print_list(ListNode* tail) {
	ListNode* p;
	if (tail == NULL) return;
	p = tail->next;
	while (p != tail) {
		printf("%d->", p->data);
		p = p->next;
	}
	printf("%d->", p->data);
}

ListNode* ins_first(ListNode* tail, element data) {
	ListNode* node = (ListNode*)malloc(sizeof(ListNode));
	node->data = data;
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

ListNode* ins_last(ListNode* tail, element data) {
	ListNode* node = (ListNode*)malloc(sizeof(ListNode));
	node->data = data;
	if (tail == NULL) {
		tail = node;
		node->next = tail;
	}
	else {
		node->next = tail->next;
		tail->next = node;
		tail = node;
	}
	return tail;
}

int get_length(ListNode* tail) {
	ListNode* p;
	if (tail == NULL) { return 0; }

	int count = 1;
	p = tail->next;
	while (p != tail) {
		count++;
		p = p->next;
	}
	return count;
}

#endif // !_LIST_CIR