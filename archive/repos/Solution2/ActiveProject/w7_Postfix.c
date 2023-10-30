#include <stdio.h>
#include <stdlib.h>
#include <string.h>

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

int prec(char op) {
	switch (op) {
	case '(': case ')': return 0;
	case '+': case '-': return 1;
	case '*': case '/': return 2;
	}
	return -1;
}

void convert(char infix_exp[], char postfix_exp[]) {
	char ch, top_op;
	int infix_len = strlen(infix_exp);
	int postfix_index = 0;

	StackType* s;
	s = (StackType*)malloc(sizeof(StackType));
	init_stack(s);

	for (int i = 0; i < infix_len; i++) {
		ch = infix_exp[i];
		switch (ch) {
		case '+': case '-': case '*': case '/':
			while (!is_empty(s) && (prec(ch) <= prec(peek(s)))) {
				postfix_exp[postfix_index++] = pop(s);
			}
			push(s, ch);
			break;
		case '(':
			push(s, ch);
			break;
		case ')':
			top_op = pop(s);
			while (top_op != '(') {
				postfix_exp[postfix_index++] = top_op;
				top_op = pop(s);
			}
			break;
		default:
			postfix_exp[postfix_index++] = ch;
			break;
		}
	}
	while (!is_empty(s)) {
		postfix_exp[postfix_index++] = pop(s);
	}

	delete_data(s);
	delete_stack(s);
}

void eval(char exp[], int len, int* result_pointer) {
	int op1, op2, value;
	char ch;
	
	StackType* s;
	s = (StackType*)malloc(sizeof(StackType));
	init_stack(s);

	for (int i = 0; i < len; i++) {
		ch = exp[i];
		if (ch != '+' && ch != '-' && ch != '*' && ch != '/') {
			value = ch - '0';
			push(s, value);
		}
		else {
			op2 = pop(s);
			op1 = pop(s);
			switch (ch) {
			case '+': push(s, op1 + op2); break;
			case '-': push(s, op1 - op2); break;
			case '*': push(s, op1 * op2); break;
			case '/': push(s, op1 / op2); break;
			}
		}
	}
	*result_pointer = pop(s);

	delete_data(s);
	delete_stack(s);
}

int main() {
	char* infix_exp = "4*3+8/2-2*2+((2+4)*6/3)-1"; // test data
	int infix_len = strlen(infix_exp);
	char* postfix_exp;
	postfix_exp = (char*)malloc(infix_len * sizeof(char));

	printf("Infix exp: \t%s\n", infix_exp);
	convert(infix_exp, postfix_exp);
	printf("Postfix exp: \t");
	int postfix_len = 0;
	for (int i = 0; i < infix_len; i++) {
		if (infix_exp[i] != '(' && infix_exp[i] != ')') {
			postfix_len++;
		}
	}
	for (int i = 0; i < postfix_len; i++) {
		printf("%c", postfix_exp[i]);
	}
	printf("\n\n");

	int result;
	eval(postfix_exp, postfix_len, &result);
	printf("The Result: \t%d\n", result);

	free(postfix_exp);
}