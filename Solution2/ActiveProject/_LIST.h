#ifndef _LIST_H
#define _LIST_H

#include <stdio.h>
#include <stdlib.h>

typedef int element;
typedef struct ListNode {
	element data;
	struct ListNode* next;
} ListNode;

typedef struct ListType {
	int size;
	ListNode* head;
	ListNode* tail;
} ListType;

void error(const char* msg) {
	fprintf(stderr, "%s\n", msg);
	exit(1);
}

ListType* create() {
	ListType* list = (ListType*)malloc(sizeof(ListType));
	if (list == NULL) { error("MEMORY ALLOCATION ERROR"); }
	list->size = 0;
	list->head = list->tail = NULL;
	return list;
}

void ins_first(ListType* list, element val) {
	ListNode* tmp = (ListNode*)malloc(sizeof(ListNode));
	if (tmp == NULL) { error("MEMORY ALLOCATION ERROR"); }
	tmp->data = val;

	if (list->head == NULL) {
		list->head = list->tail = tmp;
		tmp->next = NULL;
	}
	else {
		tmp->next = list->head;
		list->head = tmp;
	}
	list->size++;
}

void ins_last(ListType* list, element val) {
	ListNode* tmp = (ListNode*)malloc(sizeof(ListNode));
	if (tmp == NULL) { error("MEMORY ALLOCATION ERROR"); }
	tmp->data = val;
	tmp->next = NULL;

	if (list->tail == NULL) {
		list->head = list->tail = tmp;
	}
	else {
		list->tail->next = tmp;
		list->tail = tmp;
	}
	list->size++;
}

void del_first(ListType* list) {
	ListNode* removed;
	if (list->head == NULL) { error("EMPTY LIST"); }
	removed = list->head;
	list->head = removed->next;
	free(removed);
	list->size--;
}

int del_data(ListType* list, element val) {
	if (list->head == NULL) { error("EMPTY LIST"); }

	int count = 0;
	int length = get_length(list);
	ListNode* prev = NULL;
	ListNode* cur = list->head;
	
	while (cur != NULL) {
		if (cur->data == val) {
			count++;
			if (length == 1) {
				list->head = list->tail = NULL;
				free(cur); length--;
				cur = NULL;
			}
			else if (cur == list->head) {
				list->head = list->head->next;
				free(cur); length--;
				cur = list->head;
			}
			else if (cur == list->tail) {
				list->tail = prev;
				prev->next = NULL;
				free(cur); length--;
				cur = NULL;
			}
			else {
				prev->next = cur->next;
				free(cur); length--;
				cur = prev->next;
			}
		}
		else {
			prev = cur;
			cur = cur->next;
		}
	}
	list->size -= count;
	return count;
}

void print_list(ListType* list) {
	for (ListNode* tmp = list->head; tmp != NULL; tmp = tmp->next) {
		printf("%d->", tmp->data);
	}
	printf("NULL\n");
}

int get_length(ListType* list) {
	return list->size;
	/*
	int count = 0;
	if (list->head == NULL) { error("EMPTY LIST"); }
	for (ListNode* tmp = list->head; tmp != NULL; tmp = tmp->next) { count++; }
	return count;
	*/
}

int get_sum(ListType* list) {
	int sum = 0;
	for (ListNode* tmp = list->head; tmp != NULL; tmp = tmp->next) {
		sum += tmp->data;
	}
	return sum;
}

int get_data_num(ListType* list, element val) {
	int count = 0;
	ListNode* tmp = list->head;
	while (tmp != NULL) {
		if (tmp->data == val) count++;
		tmp = tmp->next;
	}
	return count;
}

#endif // !_LIST_H