#define _CRT_SECURE_NO_WARNINGS
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include "dAllocStack.h"

int delnum(char* p) {
	int i, n, len;
	len = strlen(p);

	StackType* s = (StackType*)malloc(sizeof(StackType));
	init_stack(s);

	for (i = 0; i < len + 1; i++) {
		n = p[i] - 48;
		if (is_empty(s)) { push(s, n); }
		else if (peek(s) == n) { push(s, n); }
		else if (peek(s) != n) {
			printf("%d", peek(s));
			while (!is_empty(s)) { pop(s); }
			push(s, n);
		}
	}

	delete_data(s);
	delete_stack(s);
}

int main() {
	char input[32];
	printf("Enter an integer: ");
	scanf("%s", input);
	printf("Result: ");
	delnum(input);
}