#include <stdio.h>
#include <stdlib.h>

typedef int element;
typedef struct StackNode {
	element data;
	struct StackNode* next;
} StackNode;

typedef struct {
	StackNode* top;
} LinkedStackType;

void init(LinkedStackType* s) { s->top = NULL; }
int is_empty(LinkedStackType* s) { return (s->top == NULL); }
int is_full(LinkedStackType* s) { return 0; }

void push(LinkedStackType* s, element data) {
	StackNode* tmp = (StackNode*)malloc(sizeof(StackNode));
	tmp->data = data;
	tmp->next = s->top;
	s->top = tmp;
}

element pop(LinkedStackType* s) {
	if (is_empty(s)) {
		fprintf(stderr, "THE STACK IS EMPTY\n");
		exit(1);
	}
	else {
		StackNode* tmp = s->top;
		element data = tmp->data;
		s->top = s->top->next;
		free(tmp);
		return data;
	}
}

element peek(LinkedStackType* s) {
	if (is_empty(s)) {
		fprintf(stderr, "THE STACK IS EMPTY\n");
		exit(1);
	}
	else return s->top->data;
}

void print_stack(LinkedStackType* s) {
	for (StackNode* p = s->top; p != NULL; p = p->next) {
		printf("%d->", p->data);
	} printf("NULL \n");
}

int main() {
	LinkedStackType s;
	init(&s);
	push(&s, 1); print_stack(&s);
	push(&s, 2); print_stack(&s);
	push(&s, 3); print_stack(&s);
	pop(&s); print_stack(&s);
	pop(&s); print_stack(&s);
	pop(&s); print_stack(&s);
}