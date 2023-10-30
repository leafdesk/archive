// 포인터와 동적 할당 :: 예제 1

#define _CRT_SECURE_NO_WARNINGS

#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <malloc.h>

typedef struct studentTag {
	char name[10];  // 문자배열로 된 이름
	int age;   // 나이를 나타내는 정수값
	double gpa; // 평균평점을 나타내는 실수값
} student;

void print_student(student *s)
{
	printf("name=%s\n", s->name);
	printf("age=%d\n", s->age);
	printf("gpa=%lf\n", s->gpa);
}

int main(void)
{
	student *s;
	s = (student *)malloc(sizeof(student) * 2);
	if (s == NULL) {
		fprintf(stderr, "메모리가 부족해서 할당할 수 없습니다.\n");
		exit(1);
	}
	strcpy(s->name, "Park");
	s->age = 20;
	s->gpa = 4.0;
	print_student(s);
	// s++;
	strcpy((s + 1)->name, "Kim");
	s[1].age = 30;
	(*(s + 1)).gpa = 3.0;
	print_student(s + 1);
	free(s);
	return 0;
}

// 포인터와 동적 할당 :: 예제 2

#include <stdio.h>
#include <malloc.h>

typedef struct example {
	int num;
	char name[10];
} Example;

void main(void)
{
	int *a, i, *ap;
	Example *ep;
	int b[10];


	printf("sizeof Example = %d, *Example = %d\n", sizeof(Example), sizeof(ep));

	ap = a = (int *)malloc(10 * sizeof(int));
	for (i = 0; i < 10; i++) {
		*(a + i) = i;
		b[i] = i;
	}

	for (i = 0; i < 10; i++, a++)
		printf("%p %d %p %d \n", a, *a, b + i, *(b + i));

	free((int *)ap);
}
