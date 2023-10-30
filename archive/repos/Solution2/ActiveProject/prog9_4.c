#include <stdio.h>
#include "_HEAP_MAX.h"

void heapSort(element arr[], int arrSize) {
	int i;
	HeapType* h;

	h = create();
	init(h);

	for (i = 0; i < arrSize; i++) {
		insertMaxHeap(h, arr[i]);
	}
	for (i = (arrSize - 1); i >= 0; i--) {
		arr[i] = deleteMaxHeap(h);
	}
	free(h);
}

#define SIZE 8

int main() {
	element list[SIZE] = { 23, 56, 11, 9, 56, 99, 27, 34 };
	heapSort(list, SIZE);

	// 정상적으로 정렬되었는지 확인 ▼
	for (int i = 0; i < SIZE; i++) {
		printf("%d ", list[i].key);
	}
	printf("\n");
}