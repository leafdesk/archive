#include <stdio.h>
#include <stdlib.h>
#define MAX_STACK_SIZE 100
#define MAX_STRING 100

typedef struct {
	int student_no;
	char name[MAX_STRING];
	char address[MAX_STRING];
} element;

element stack[MAX_STACK_SIZE];
int top = -1;

int is_empty() {
	return (top == -1);
}

int is_full() {
	return (top == (MAX_STACK_SIZE - 1));
}

void push(element item) {
	if (is_full()) {
		fprintf(stderr, "OVERFLOW");
		return;
	}
	else stack[++top] = item;
}

element pop() {
	if (is_empty()) {
		fprintf(stderr, "UNDERFLOW");
		exit(1);
	}
	else return stack[top--];
}

element peek() {
	if (is_empty()) {
		fprintf(stderr, "UNDERFLOW");
		exit(1);
	}
	else return stack[top];
}

int main() {
	element ie = {
		20190001,
		"Hong",
		"Seoul"
	};
	element oe;

	push(ie);
	oe = pop();

	printf("�й�: %d\n", oe.student_no);
	printf("�̸�: %s\n", oe.name);
	printf("�ּ�: %s\n", oe.address);
}