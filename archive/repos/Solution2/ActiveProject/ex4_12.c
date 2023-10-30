#define _CRT_SECURE_NO_WARNINGS
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <ctype.h>

#include "dAllocStack.h"

void run_length(char* pStr) {
    char ch;
    int i, len, num;
    len = strlen(pStr);

    StackType* s = (StackType*)malloc(sizeof(StackType));
    init_stack(s);

    for (i = 0; i < len + 1; i++) {
        ch = tolower(pStr[i]);
        if (is_empty(s)) { push(s, ch); }
        else if (peek(s) == ch) { push(s, ch); }
        else if (peek(s) != ch) {
            num = s->top + 1;
            printf("%d%c", num, peek(s));
            while (!is_empty(s)) { pop(s); }
            push(s, ch);
        }
    }

    delete_data(s);
    delete_stack(s);
}

int main() {
    char str[32];
    printf("문자열을 입력: ");
    scanf("%s", str);

    printf("압축된 문자열: ");
    run_length(str);
}