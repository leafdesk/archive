#define _CRT_SECURE_NO_WARNINGS
#include <stdio.h>
#include <stdlib.h>		// malloc, _msize
#include <ctype.h>		// toupper

typedef struct {
	int row;
	int col;
	int value;
} element;

typedef struct {
	int rows;
	int cols;
	int terms;
	element* data;
} SparseMatrix;

int main() {
	int done = 0, ask = 0;
	char res;
	int rows, cols;

	printf("Matrix Program\n\n");
	while (!done) {
		printf("Type the number of rows: ");
		scanf("%d", &rows);
		printf("Type the number of cols: ");
		scanf("%d", &cols);

		int sum = 0;
		int** a = malloc(rows * sizeof(int*));
		for (int r = 0; r < rows; r++) {
			a[r] = malloc(cols * sizeof(int));
			sum += _msize(a[r]);
		}

		for (int r = 0; r < rows; r++) {
			printf("Type the %d elements of %d-th row : ", cols, r);
			for (int c = 0; c < cols; c++) {
				scanf("%d", &a[r][c]);
			}
		}

		SparseMatrix b;
		b.rows = rows;
		b.cols = cols; 
		b.terms = 0;

		for (int r = 0; r < rows; r++) {
			for (int c = 0; c < cols; c++) {
				if (a[r][c] != 0) {
					b.terms++;
				}
			}
		}

		b.data = (element*)malloc(b.terms * sizeof(element));

		int index = 0;
		for (int r = 0; r < rows; r++) {
			for (int c = 0; c < cols; c++) {
				if (a[r][c] != 0) {
					b.data[index].row = r;
					b.data[index].col = c;
					b.data[index].value = a[r][c];
					index++;
				}
			}
		}

		printf("\nMatrix\n");
		for (int r = 0; r < rows; r++) {
			for (int c = 0; c < cols; c++) {
				printf("%d ", a[r][c]);
			}
			printf("\n");
		}

		printf("\nMemory comparison\n");
		printf("1) Matrix itself representation : %d bytes\n", sum);
		printf("2) Non-zero term representation : %d bytes\n\n", sizeof(b) + _msize(b.data));

		int count = 0;
		for (int r = 0; r < rows; r++) {
			for (int c = 0; c < cols; c++) {
				printf("mat[%d][%d]: %d (%p)\n", r, c, a[r][c], &a[r][c]);
				count++;
				if (count == 6) {
					goto OUT;
				}
			}
		}
	OUT:
		printf("\n");
		
		for (int i = 0; i < rows; i++) { free(a[i]); } 
		free(a); free(b.data);

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
}