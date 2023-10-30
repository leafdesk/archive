#include <stdio.h>
#include <stdlib.h>
#define MAX_ELEMENT 128

typedef struct {
	int key;
} element;

typedef struct {
	element heap[MAX_ELEMENT];
	int size;
} HeapType;

HeapType* mkDynHeap() {
	HeapType* ret = 
		(HeapType*)malloc(sizeof(HeapType));
	return ret;
}

void initHeap(HeapType* h) {
	h->size = 0; // num of elements
}

void insMaxHeap(HeapType* h, element e) {
	int pos = ++(h->size); // position of 'e'

	while ((pos != 1) && 
		(e.key > h->heap[pos / 2].key)) {
		h->heap[pos] = h->heap[pos / 2];
		pos /= 2;
	}
	h->heap[pos] = e;
}

element delMaxHeap(HeapType* h) {
	element ret = h->heap[1];
	element e = h->heap[(h->size)--];
	int pos = 1; // position of 'e'

	while (pos * 2 <= h->size) {
		if (pos * 2 < h->size &&
			h->heap[pos * 2].key <
			h->heap[pos * 2 + 1].key) {
			
		}
	}

	return ret;
}

int main() {
	HeapType* h = mkDynHeap();
	if (!h) {
		printf("DYNALLOC ERROR \n");
		return 1;
	}
	initHeap(h);

	return 0;
}