#define _CRT_SECURE_NO_WARNINGS

#include <stdio.h>
#include <stdlib.h>
#include <time.h>
#include <conio.h>
#include <ctype.h>

double power(double b, int e);
double it_power(double b, int e);
// int factorial(int f);
// int it_factorial(int f);
double factorial(int f);
double it_factorial(int f);
int fibo(int f);
int it_fibo(int f);

void main(int argc, char *argv[])
{
	clock_t start, finish;
	double duration, resDbl;
	int done = 0, ask = 0;
	char res, res2;
	int bb, ee, ff, fin, resInt;

	while (!done) {
		ask = 1;
		while (ask) {
			printf("Select one of following programs for calculating its execution time:\n");
			printf("  1. Power program\n");
			printf("  2. Factorial program\n");
			printf("  3. Fibonacci program\n");
			printf("Which do you want to select a number? (1-3) : ");
			//		res = _getwche();	// in VS2017, otherwise getche(); and getche();
			res = _getche(); res2 = _getche();	// 두번째 문자는 포기
			printf("\n\n");
			if ('1' <= res && res <= '3') {
				ask = 0;
				switch (res) {
				case '1': printf("Type the base and exponent numbers : ");
					scanf("%d %d", &bb, &ee);
					start = clock();
					resDbl = power(bb, ee);
					finish = clock();
					duration = (double)(finish - start) / CLOCKS_PER_SEC;
					printf("recursion: %f 초 입니다.\n", duration);
					printf("Result is %lf\n", resDbl);
					start = clock();
					resDbl = it_power(bb, ee);
					finish = clock();
					duration = (double)(finish - start) / CLOCKS_PER_SEC;
					printf("it_power: %f 초 입니다.\n", duration);
					printf("itResult is %lf\n", resDbl);
					break;
				case '2': printf("Type the factorial number : ");
					scanf("%d", &ff);
					start = clock();
					resDbl = factorial(ff);
					finish = clock();
					duration = (double)(finish - start) / CLOCKS_PER_SEC;
					printf("recursion: %f 초 입니다.\n", duration);
					printf("Result is %lf\n", resDbl);
					start = clock();
					resDbl = it_factorial(ff);
					finish = clock();
					duration = (double)(finish - start) / CLOCKS_PER_SEC;
					printf("it_factorial: %f 초 입니다.\n", duration);
					printf("itResult is %lf\n", resDbl);
					break;
				case '3': printf("Type the n-th Fibonacci sequence : ");
					scanf("%d", &fin);
					start = clock();
					resInt = fibo(fin);
					finish = clock();
					duration = (double)(finish - start) / CLOCKS_PER_SEC;
					printf("recursion: %f 초 입니다.\n", duration);
					printf("Result is %ld\n", resInt);
					start = clock();
					resInt = it_fibo(fin);
					finish = clock();
					duration = (double)(finish - start) / CLOCKS_PER_SEC;
					printf("it_fibo: %f 초 입니다.\n", duration);
					printf("itResult is %ld\n", resInt);
					break;
				}
			}
			else ask = 1;
		}
		ask = 1;
		while (ask) {
			printf("Do you want to try other program? (Y/N) : ");
			//		res = _getwche();	// in VS2017, otherwise getche(); and getche();
			res = _getche(); _getche();	// 두번째 문자는 포기
			res = toupper(res);
			if (res == 'Y') { done = 0; printf("\n"); ask = 0; }
			else if (res == 'N') { done = 1; printf("\n"); ask = 0; }
			else ask = 1;
		}
	}
}

double power(double b, int e)
{
	if (e == 0) return 1.;
	else if ((e % 2) == 0)
		return power(b*b, e / 2);
	else return b * power(b*b, (e - 1) / 2);
}

double it_power(double b, int e)
{
	int i = 0;
	double r = 1.0;

	for (i = 0; i < e; i++)
		r = r * b;
	return (r);
}

double factorial(int f)
{
	if (f <= 1) return 1.;
	else return f * factorial(f - 1);
}

double it_factorial(int f)
{
	int i;
	double r = 1.;
	for (i = f; i > 0; i--)
		r = r * i;
	return r;
}

int fibo(int f)
{
	if (f == 0) return 0;
	else if (f == 1) return 1;
	return fibo(f - 1) + fibo(f - 2);
}

int it_fibo(int f)
{
	if (f == 0) return 0;
	if (f == 1) return 1;

	int pp = 0;
	int p = 1;
	int result = 0;

	for (int i = 2; i <= f; i++) {
		result = p + pp;
		pp = p;
		p = result;
	}
	return result;
}

