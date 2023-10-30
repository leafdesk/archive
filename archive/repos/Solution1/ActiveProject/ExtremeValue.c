#define _CRT_SECURE_NO_WARNINGS

#include <stdio.h>
#include <stdlib.h>
#include <malloc.h>
#include <ctype.h>
#include <time.h>


int getMax(const int *listPtr, int listSize);
int getMin(const int *listPtr, int listSize);

int main() {
	clock_t start, stop;
	double duration, resDbl;
	int *list = NULL;
	int size;
	int done = 0, ask = 0;
	char res;

	while (!done) {
		ask = 1;
		while (ask) {
			printf("Number of integers to input (1-100) : ");
			scanf("%d", &size);
			if (1 <= size && size <= 100) {
				ask = 0;
				list = (int *)malloc(size * sizeof(int));
				if (list == NULL) {
					fprintf(stderr, "DYNAMIC MEMORY ALLOCATION ERROR\n");
					exit(1);
				}
			}
			else { ask = 1; }
		}
		
		printf("Input %d integers : ", size);
		for (int i = 0; i < size; i++)
			scanf("%d", &list[i]);
		printf("\n");
		for (int i = 0; i < size; i++)
			printf("%d ", list[i]);
		printf("\n\n");

		ask = 1;
		while (ask) {
			printf("Select one of following programs for calculating its execution time:\n");
			printf("  1. Maximum program\n");
			printf("  2. Minimum program\n");
			printf("Which number do you want to select? (1-2) : ");
			scanf(" %c", &res);
			if ('1' <= res && res <= '2') {
				ask = 0;
				switch (res) {
				case '1':
					start = clock();
					resDbl = getMax(list, size);
					stop = clock();
					duration = (double)(stop - start) / CLOCKS_PER_SEC;
					printf("getMax: %f 초 입니다.\n", duration);
					printf("Maximum Value is %lf\n", resDbl);
					break;
				case '2':
					start = clock();
					resDbl = getMin(list, size);
					stop = clock();
					duration = (double)(stop - start) / CLOCKS_PER_SEC;
					printf("getMin: %f 초 입니다.\n", duration);
					printf("Minimum Value is %lf\n", resDbl);
					break;
				}
			}
			else { ask = 1; printf("\n"); }
		}
		ask = 1;
		while (ask) {
			printf("Do you want to try other program? (Y/N) : ");
			scanf(" %c", &res);
			res = toupper(res);
			if (res == 'Y') { done = 0; printf("\n"); ask = 0; }
			else if (res == 'N') { done = 1; printf("\n"); ask = 0; }
			else ask = 1;
		}
	}
	free(list);
	return 0;
}

int getMax(const int *listPtr, int i) {
	if (i == 0)
		return *listPtr;
	int max = getMax(listPtr, i - 1);
	max = (max < listPtr[i - 1]) ? listPtr[i - 1] : max;
	return max;
}

int getMin(const int *listPtr, int i) {
	if (i == 0)
		return *listPtr;
	int min = getMin(listPtr, i - 1);
	min = (min > listPtr[i - 1]) ? listPtr[i - 1] : min;
	return min;
}