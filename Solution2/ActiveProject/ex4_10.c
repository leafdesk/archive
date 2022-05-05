#define _CRT_SECURE_NO_WARNINGS
#include <stdio.h>
#include <stdlib.h>
// #define MAX_STACK_SIZE 6

typedef int element;
typedef struct {
	element* data;
	int capacity;
	int top;
} Stack;

void init_stack(Stack* s, int size) {
	s->top = -1;
	s->capacity = size;
	s->data = (element*)malloc(size * sizeof(element));
}
int is_empty(Stack* s) { return (s->top == -1); }
int is_full(Stack* s) { return (s->top == s->capacity - 1); }

void push(Stack* s, element item) {
	if (is_full(s)) {
		fprintf(stderr, "OVERFLOW");
		return;
	}
	else s->data[++(s->top)] = item;
}

element pop(Stack* s) {
	if (is_empty(s)) {
		fprintf(stderr, "UNDERFLOW");
		exit(1);
	}
	else return s->data[(s->top)--];
}

element peek(Stack* s) {
	if (is_empty(s)) {
		fprintf(stderr, "UNDERFLOW");
		exit(1);
	}
	else return s->data[(s->top)];
}

int main() {
	Stack s;
	int size;

	printf("Stack size: ");
	scanf("%d", &size);

	init_stack(&s, size);

	printf("Enter %d integers: ", size);
	for (int i = 0; i < size; i++) {
		element tmp;
		scanf("%d", &tmp);
		push(&s, tmp);
	}
	
	printf("Reverse Array: ");
	for (int i = 0; i < size; i++) {
		printf("%d ", pop(&s));
	}
}