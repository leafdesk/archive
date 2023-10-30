#include <stdio.h>

void setpointer(char** q);

int main() {
	char* p;
	setpointer(&p);
	printf("%s", p);
}

void setpointer(char** q) {
	*q = "Hello";
}