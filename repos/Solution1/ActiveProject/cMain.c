// ���� ������ ����

#include <stdio.h>

void setPointer(char **q);

int main() {
	char *p;
	setPointer(&p);
	printf("������ �ݾ� %s \n", p);
	return 0;
}

void setPointer(char **q) {
	*q = "All that glisters is not gold.";
}