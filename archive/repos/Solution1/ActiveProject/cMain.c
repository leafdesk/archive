// 이중 포인터 연습

#include <stdio.h>

void setPointer(char **q);

int main() {
	char *p;
	setPointer(&p);
	printf("오늘의 격언 %s \n", p);
	return 0;
}

void setPointer(char **q) {
	*q = "All that glisters is not gold.";
}