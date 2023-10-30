#define _CRT_SECURE_NO_WARNINGS
#include <stdio.h>
#define SIZE 5

int main()
{
	char seat[SIZE];
	for (int i = 0; i < SIZE; i++)
		seat[i] = 'o';

	char reservation;
	int num1;
	int num2;

	while (1)
	{
		printf("Reservation? (y or n): ");
		scanf(" %c", &reservation);

		if (reservation != 'y')
			break;

		printf("\nSeat 1\tSeat 2\tSeat 3\tSeat 4\tSeat 5\n");
		for (int i = 0; i < SIZE; i++)
			printf("%c\t", seat[i]);
		printf("\n\n");

		printf("TWO seat? (1-5): ");
		scanf("%d %d", &num1, &num2);

		if ((num1 >= 1 && num1 <= 5) && (num2 >= 1 && num2 <= 5))
		{
			if ((seat[num1 - 1] == 'o') && (seat[num2 - 1] == 'o'))
			{
				seat[num1 - 1] = 'x';
				seat[num2 - 1] = 'x';
				printf("Reservation completed. Thank you.\n\n");
			}
			else
				printf("Already reserved. Choose another one.\n\n");
		}
		else
			printf("Wrong Number.\n\n");
	}

	return 0;
}