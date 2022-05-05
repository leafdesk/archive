#include <stdio.h>
#include <stdlib.h>
#include "CircularQueue.h"

int main() {
	QueueType* q = (QueueType*)malloc(sizeof(QueueType)); // d_alloc_queue
	init_queue(q);

	srand(time(NULL));
	for (int i = 0; i < 100; i++) {
		if (rand() % 5 == 0) { enqueue(q, rand() % 100); }
		queue_print(q);
		if (rand() % 10 == 0) { int data = dequeue(q); }
		queue_print(q);
	}

	free(q);
}