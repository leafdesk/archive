#include <stdio.h>
#include <stdlib.h>

#define MAX_ELEMENT 200

typedef struct {
	int id;
	int avail;
} element;

typedef struct {
	element heap[MAX_ELEMENT];
	int heapSize;
} HeapType;

HeapType* create() {
	return (HeapType*)malloc(sizeof(HeapType));
}

void init(HeapType* h) {
	h->heapSize = 0;
}

void insertMinHeap(HeapType* h, element item) {
	int i;
	i = ++(h->heapSize);

	while ((i != 1) && (item.avail < h->heap[i / 2].avail)) {
		h->heap[i] = h->heap[i / 2];
		i /= 2;
	}
	h->heap[i] = item;
}

element deleteMinHeap(HeapType* h) {
	int parent, child;
	element item, temp;

	item = h->heap[1];
	temp = h->heap[(h->heapSize)--];
	parent = 1;
	child = 2;

	while (child <= h->heapSize) {
		if ((child < h->heapSize) &&
			(h->heap[child].avail) > h->heap[child + 1].avail) {
			child++;
		}
		if (temp.avail < h->heap[child].avail) break;

		h->heap[parent] = h->heap[child];
		parent = child;
		child *= 2;
	}
	h->heap[parent] = temp;
	return item;
}

#define JOBS 7
#define MACHINES 3

int main() {
	int jobs[JOBS] = { 8, 7, 6, 5, 3, 2, 1 };
	element m = { 0, 0 };
	HeapType* h;
	h = create();
	init(h);

	for (int i = 0; i < MACHINES; i++) {
		m.id = i + 1;
		m.avail = 0;
		insertMinHeap(h, m);

		for (int i = 0; i < JOBS; i++) {
			m = deleteMinHeap(h);
			printf("JOB %d 을 시간 %2d ~ %2d 으로 기계 %d 번에 할당한다. \n",
				i, m.avail, m.avail + jobs[i] - 1, m.id);
			m.avail += jobs[i];
			insertMinHeap(h, m);
		}
	}
}