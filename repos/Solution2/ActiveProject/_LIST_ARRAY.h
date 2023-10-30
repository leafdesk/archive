#ifndef _LIST_ARRAY_H
#define _LIST_ARRAY_H

#include <stdio.h>
#include <stdlib.h>
#define MAX_LIST_SIZE 100

typedef int element;
typedef struct {
	element array[MAX_LIST_SIZE];
	int size; // The number of elements (last_index + 1)
} ArrayListType;

void error(const char* msg) { fprintf(stderr, "%s\n", msg); exit(1); }
void init(ArrayListType* L) { L->size = 0; }
int is_empty(ArrayListType* L) { return L->size == 0; }
int is_full(ArrayListType* L) { return L->size == MAX_LIST_SIZE; }

element get_entry(ArrayListType* L, int pos) {
	if (pos < 0 || pos >= L->size) { error("POSITION ERROR"); }
	return L->array[pos];
}

void print_list(ArrayListType* L) {
	int i;
	for (i = 0; i < L->size; i++) {
		printf("%d, ", L->array[i]);
	}
	printf("\n");
}

void insert_last(ArrayListType* L, element item) {
	if (L->size >= MAX_LIST_SIZE) { error("LIST OVERFLOW"); } // if (is_full(L))
	L->array[L->size++] = item;
}

void insert(ArrayListType* L, int pos, element item) {
	if (!is_full(L) && (0 <= pos) && (pos <= L->size)) {
		for (int i = (L->size - 1); i >= pos; i--) {
			L->array[i + 1] = L->array[i];
		}
		L->array[pos] = item;
		L->size++;
	}
}

element del(ArrayListType* L, int pos) {
	element item;

	if (pos < 0 || pos >= L->size) { error("POSITION ERROR"); }
	item = L->array[pos];
	for (int i = pos; i < (L->size - 1); i++) {
		L->array[i] = L->array[i + 1];
	}
	L->size--;
	return item;
}

#endif // !_LIST_ARRAY_H