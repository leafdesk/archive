#ifndef _LIST_NODE_H
#define _LIST_NODE_H

#include <stdio.h>
#include <stdlib.h>

typedef int element;
typedef struct ListNode {
	element data;
	struct ListNode* link;
} ListNode;

void error(char* msg) {
	fprintf(stderr, "%s\n", msg);
	exit(1);
}

ListNode* ins_first(ListNode* head, element value) {
	ListNode* p = (ListNode*)malloc(sizeof(ListNode));
	p->data = value;
	p->link = head;
	head = p;
	return head;
}

ListNode* ins(ListNode* head, ListNode* pre, element value) {
	ListNode* p = (ListNode*)malloc(sizeof(ListNode));
	p->data = value;
	p->link = pre->link;
	pre->link = p;
	return head;
}

ListNode* del_first(ListNode* head) {
	ListNode* removed;
	if (head == NULL) return NULL;
	removed = head;
	head = removed->link;
	free(removed);
	return head;
}

ListNode* del(ListNode* head, ListNode* pre) {
	ListNode* removed;
	removed = pre->link;
	pre->link = removed->link;
	free(removed);
	return head;
}

void print_list(ListNode* head) {
	for (ListNode* p = head; p != NULL; p = p->link) { printf("%d->", p->data); }
	printf("NULL\n");
}

element get_entry(ListNode* head, int index) {
	ListNode* p = head;
	for (int i = 0; i < index; i++) { p = p->link; }
	return p->data;
}

int get_length(ListNode* head) {
	int count = 0;
	for (ListNode* p = head; p != NULL; p = p->link) { count++; }
	return count;
}

ListNode* search_list(ListNode* head, element value) {
	ListNode* p = head;
	while (p != NULL) {
		if (p->data == value) return p;
		p = p->link;
	}
	return NULL;
}

ListNode* cat_list(ListNode* head1, ListNode* head2) {
	if (head1 == NULL) return head2;
	else if (head2 == NULL) return head1;
	else {
		ListNode* p;
		p = head1;
		while (p->link != NULL) { p = p->link; }
		p->link = head2;
		return head1;
	}
}

ListNode* reverse(ListNode* head) {
	ListNode* p, * q, * r;
	
	p = head;
	q = NULL;
	while (p != NULL) {
		r = q;
		q = p;
		p = p->link;

		q->link = r;
	}
	return q;
}

#endif // !_LIST_NODE_H