#ifndef _HEAP_MAX
#define _HEAP_MAX

#include <stdlib.h>
#define MAX_ELEMENT 200

typedef struct {
	int key;
} element;

typedef struct {
	element heap[MAX_ELEMENT];
	int heapSize;
} HeapType;

HeapType* create() {
	return (HeapType*)malloc(sizeof(HeapType)); // 동적할당한 그 주소를 리턴
}

void init(HeapType* h) {
	h->heapSize = 0; // 힙의 사이즈 = 요소의 개수
}

void insertMaxHeap(HeapType* h, element item) {
	int i; // heap 배열 인덱스
	i = ++(h->heapSize);

	// 첫 삽입 시, i 는 1 이므로 while 문 스킵
	while ((i != 1) && (item.key > h->heap[i / 2].key)) { // item 이 i 의 부모노드보다 크다면
		h->heap[i] = h->heap[i / 2]; // i 의 부모노드를 i 자리로 끌어내림
		i /= 2; // 그리고 i 는 부모노드의 인덱스가 됨
	}
	h->heap[i] = item; // 최종적으로 자리를 찾으면 그곳에 item 을 삽입
}

element deleteMaxHeap(HeapType* h) {
	int parent, child;
	element item, temp;

	item = h->heap[1]; // 마지막에 return 할 루트노드 값을 미리 저장
	temp = h->heap[(h->heapSize)--]; // temp = 마지막 노드 (그리고 사이즈--)
	parent = 1;
	child = 2;

	while (child <= h->heapSize) { // child 값이 최대 인덱스(heapSize)를 넘을 수 없음

		// 1단계: 왼 vs 오
		if ((child < h->heapSize) &&
			(h->heap[child].key) < (h->heap[child + 1].key)) { // 오른쪽 자식노드가 더 크면
			child++; // child 값을 오른쪽 자식노드의 인덱스로 변경
		}

		// 2단계: 마지막 노드였던, 지금은 이동하며 자리를 찾는 temp 가 제자리를 찾았는지 점검
		if (temp.key >= h->heap[child].key) break; // 자식보다 크거나 같으면 바로 그 자리다. while 문 탈출

		// 3단계: 자식을 끌어올림
		h->heap[parent] = h->heap[child];

		// 4단계: parent, child 인덱스 포인터를 아래로 내림
		parent = child; // parent 는 오른쪽이든 왼쪽이든 child 위치로 내려감
		child *= 2; // child 는 그 왼쪽 자식으로 내려감
	}

	h->heap[parent] = temp; // 바로 그 자리에 temp 를 고정
	return item; // 처음에 저장했던 item 반환
}

#endif // !_HEAP_MAX