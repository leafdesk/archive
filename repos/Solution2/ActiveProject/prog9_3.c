#include <stdio.h>
#include <stdlib.h>

#include "_HEAP_MAX.h"

int main() {
	element e1 = { 10 }, e2 = { 5 }, e3 = { 30 };
	element e4, e5, e6;
	HeapType* heap; // heap �� ������ ����

	heap = create(); // heap �� �ּҸ� ����
	init(heap);

	insertMaxHeap(heap, e1);
	insertMaxHeap(heap, e2);
	insertMaxHeap(heap, e3);

	e4 = deleteMaxHeap(heap);
	printf("< %d > ", e4.key);
	e5 = deleteMaxHeap(heap);
	printf("< %d > ", e5.key);
	e6 = deleteMaxHeap(heap);
	printf("< %d > ", e6.key);

	free(heap); // heap �� ����Ű�� ���� �޸� ����
}