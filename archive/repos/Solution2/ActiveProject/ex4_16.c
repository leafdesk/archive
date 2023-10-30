#define _CRT_SECURE_NO_WARNINGS
#include <stdio.h>
#include <string.h>
#include <ctype.h>
#include "dAllocStack.h"
#define TRUE 1
#define FALSE 0

int check_pali(char str[]) {
	int i, result = -1, index = 0, len = strlen(str);
	StackType* s = (StackType*)malloc(sizeof(StackType));
	init_stack(s);

	for (i = 0; i < len; i++) {
		if (isalpha(str[i])) {
			push(s, tolower(str[i]));
		}
	}

	i = 0;
	int size = s->top + 1; // the number of alphabet of the string
	char* cmp = (char*)malloc(size * sizeof(char));
	while (index <= s->top) {
		if (isalpha(str[i])) {
			cmp[index] = tolower(str[i]);
			index++;
		}
		i++;
	}
	for (i = 0; i < size; i++) {
		if (cmp[i] != pop(s)) { result = FALSE; break; }
		else result = TRUE;
	}

	free(cmp);
	delete_data(s);
	delete_stack(s);

	return result;
}

int main() {
	char str[128];
	printf("Enter a string: ");
	scanf("%[^\n]s", str);
	if (check_pali(str) == 1) { printf("The string is palindrome.\n"); }
	else if (check_pali(str) == 0) { printf("The string is NOT palindrome.\n"); }
	else printf("PROGRAM ERROR.");
}