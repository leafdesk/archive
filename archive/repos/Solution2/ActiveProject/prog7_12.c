#include <stdio.h>
#include <stdlib.h>

typedef int element;
typedef struct QueueNode {
	element data;
	struct QueueNode* next;
} QueueNode;

typedef struct {
	QueueNode* head, * tail;
} LinkedQueueType;

void init(LinkedQueueType* q) { q->head = q->tail = 0; }
int is_empty(LinkedQueueType* q) { return (q->head == NULL); }
int is_full(LinkedQueueType* q) { return 0; }

void enqueue(LinkedQueueType* q, element data) {
	QueueNode* p = (QueueNode*)malloc(sizeof(QueueNode));
	p->data = data;
	p->next = NULL;
	if (is_empty(q)) {
		q->head = p;
		q->tail = p;
	}
	else {
		q->tail->next = p;
		q->tail = p;
	}
}

element dequeue(LinkedQueueType* q) {
	element data;
	if (is_empty(q)) {
		fprintf(stderr, "THE QUEUE IS EMPTY");
		exit(1);
	}
	else {
		data = q->head->data;
		q->head = q->head->next;
		if (q->head == NULL) { q->tail = NULL; }
		return data;
	}
}

void print_queue(LinkedQueueType* q) {
	QueueNode* p;
	for (p = q->head; p != NULL; p = p->next) {
		printf("%d->", p->data);
	} printf("NULL\n");
}

int main() {
	LinkedQueueType queue;
	
	init(&queue);

	enqueue(&queue, 1); print_queue(&queue);
	enqueue(&queue, 2); print_queue(&queue);
	enqueue(&queue, 3); print_queue(&queue);
	dequeue(&queue);	print_queue(&queue);
	dequeue(&queue);	print_queue(&queue);
	dequeue(&queue);	print_queue(&queue);
}