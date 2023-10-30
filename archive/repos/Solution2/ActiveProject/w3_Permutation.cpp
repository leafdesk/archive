#define _CRT_SECURE_NO_WARNINGS

#include <stdio.h>
#include <string.h>
#include <conio.h>
#include <ctype.h> // for toupper();

#define MAX_LETTERS	26
#define SWAP(x, y, t) ((t)=(x), (x)=(y), (y)=(t))

int cnt = 0;

void perm(char *, int, int);
// void SWAP(char *, char *, int);

int main(int argc, char *argv[])
{
	char list[MAX_LETTERS], res;
	int rep = 1, conti = 1;

	while (conti) {
		while (rep) {
			cnt = 0;
			printf("Type the letters to be permuted less than 27 characters: ");
			scanf("%s", list);
			if (strlen(list) > 26) rep = 1;
			else {
				rep = 0;
				perm(list, 0, strlen(list) - 1);
				printf("\nNumber of permutations: %d\n", cnt);
			}
		}
		printf("Do you want to try again? (Y/N): ");
		res = _getche();
		res = toupper(res);
		if (res == 'Y') conti = 1;
		else if (res == 'N') conti = 0;
		else conti = 1;
		if (conti) rep = 1;
		printf("\n");
	}

}

void perm(char *list, int i, int n)   // all the permutations of list[i] to list[n]
{
	int j, temp;

	if (i == n) {
		cnt++;
		for (j = 0; j <= n; j++)
			printf("%c", list[j]);
		printf("   ");
	}
	else {
		for (j = i; j <= n; j++) {
			SWAP(list[i], list[j], temp);
			perm(list, i + 1, n);
			SWAP(list[i], list[j], temp);
		}
	}
}

/*
void SWAP(char *a, char *b, int tmp)
{
	tmp = *a;
	*a = *b;
	*b = tmp;
}
*/