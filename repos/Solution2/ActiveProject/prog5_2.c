#define _CRT_SECURE_NO_WARNINGS
#include <stdio.h>
#include "CircularQueue.h"

int main() {
	QueueType q;
	int temp;

	init_queue(&q);
	printf("--- DATA ADD ---\n");
	while (!is_full(&q)) {
		printf("Enter a integer: ");
		scanf("%d", &temp);
		enqueue(&q, temp);
		queue_print(&q);
	}
	printf("The queue is full.\n");
	printf("\n");
	printf("--- DATA DEL ---\n");
	while (!is_empty(&q)) {
		temp = dequeue(&q);
		printf("Output: %d\n", temp);
		queue_print(&q);
	}
	printf("The queue is empty.\n");
}