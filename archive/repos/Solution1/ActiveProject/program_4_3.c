#include <stdio.h>
#include <stdlib.h>

#define MAX_STACK_SIZE 100

typedef int element;
typedef struct {
	element data[MAX_STACK_SIZE];
	int top;
} StackType;

void init_stack(StackType* s) {
	s->top = -1;
}

int is_empty(StackType* s) {
	return (s->top == -1);
}

int is_full(StackType* s) {
	return (s->top == (MAX_STACK_SIZE - 1));
}

void push(StackType* s, element item) {
	if (is_full(s)) {
		fprintf(stderr, "OVERFLOW");
		return;
	}
	else s->data[++(s->top)] = item;
}

element pop(StackType* s) {
	if (is_empty(s)) {
		fprintf(stderr, "UNDERFLOW");
		exit(1);
	}
	else return s->data[(s->top)--];
}

element peek(StackType* s) {
	if (is_empty(s)) {
		fprintf(stderr, "UNDERFLOW");
		exit(1);
	}
	else return s->data[s->top];
}

int main() {
	StackType stack, stack2;
	init_stack(&stack);
	init_stack(&stack2);
	push(&stack, 1);
	push(&stack, 2);
	push(&stack, 3);
	push(&stack2, pop(&stack));
	push(&stack2, pop(&stack));
	push(&stack2, pop(&stack));
	printf("%d\n", pop(&stack2));
	printf("%d\n", pop(&stack2));
	printf("%d\n", pop(&stack2));
}