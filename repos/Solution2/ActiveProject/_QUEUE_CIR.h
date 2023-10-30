#ifndef _QUEUE_CIR_H
#define _QUEUE_CIR_H

#include <stdio.h>
#include <stdlib.h>
#define MAX_QUEUE_SIZE 16

typedef int  element;
typedef struct {
	element data[MAX_QUEUE_SIZE];
	int front, rear;
} QueueType;

void error(const char* msg) {
	fprintf(stderr, "%s\n", msg);
	exit(1);
}

void init_queue(QueueType* q) { q->front = q->rear = 0; }
int is_empty(QueueType* q) { return (q->front == q->rear); }
int is_full(QueueType* q) { return ((q->rear + 1) % MAX_QUEUE_SIZE == q->front); }
//int get_count(QueueType* q) { return (q->rear - q->front + MAX_QUEUE_SIZE) % MAX_QUEUE_SIZE; }

void queue_print(QueueType* q) {
	printf("QUEUE(front = %d, rear = %d) : ", q->front, q->rear);
	if (!is_empty(q)) {
		int i = q->front;
		do {
			i = (i + 1) % (MAX_QUEUE_SIZE);
			printf("%5d | ", q->data[i]); // print up to 5 digits
			if (i == q->rear) { break; }
		} while (i != q->front);
	}
	printf("\n");
}

void enqueue(QueueType* q, element item) {
	if (is_full(q)) { error("OVERFLOW"); }
	q->rear = (q->rear + 1) % MAX_QUEUE_SIZE;
	q->data[q->rear] = item;
}

element dequeue(QueueType* q) {
	if (is_empty(q)) { error("UNDERFLOW"); }
	q->front = (q->front + 1) % MAX_QUEUE_SIZE;
	return q->data[q->front];
}

element peek(QueueType* q) {
	if (is_empty(q)) { error("UNDERFLOW"); }
	return q->data[(q->front + 1) % MAX_QUEUE_SIZE];
}

#endif // !_QUEUE_CIR_H