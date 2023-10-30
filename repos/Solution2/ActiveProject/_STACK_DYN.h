#ifndef _STACK_DYN_H
#define _STACK_DYN_H

#include <stdio.h>
#include <stdlib.h>

typedef char element;
typedef struct {
	element* data;
	int capacity;
	int top;
} StackType;

void init_stack(StackType* s) {
	s->top = -1;
	s->capacity = 1;
	s->data = (element*)malloc(s->capacity * sizeof(element));
}

void delete_data(StackType* s) { free(s->data); }
void delete_stack(StackType* s) { free(s); }
int is_empty(StackType* s) { return (s->top == -1); }
int is_full(StackType* s) { return (s->top == (s->capacity - 1)); }

void push(StackType* s, element item) {
	if (is_full(s)) {
		s->capacity *= 2;
		s->data = (element*)realloc(s->data, s->capacity * sizeof(element));
	}
	s->data[++(s->top)] = item;
}

element pop(StackType* s) {
	if (is_empty(s)) {
		fprintf(stderr, "UNDERFLOW\n");
		exit(1);
	}
	else return s->data[(s->top)--];
}

element peek(StackType* s) {
	if (is_empty(s)) {
		fprintf(stderr, "UNDERFLOW\n");
		exit(1);
	}
	else return s->data[s->top];
}

#endif // !_STACK_DYN_H