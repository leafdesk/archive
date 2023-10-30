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
	return (HeapType*)malloc(sizeof(HeapType)); // �����Ҵ��� �� �ּҸ� ����
}

void init(HeapType* h) {
	h->heapSize = 0; // ���� ������ = ����� ����
}

void insertMaxHeap(HeapType* h, element item) {
	int i; // heap �迭 �ε���
	i = ++(h->heapSize);

	// ù ���� ��, i �� 1 �̹Ƿ� while �� ��ŵ
	while ((i != 1) && (item.key > h->heap[i / 2].key)) { // item �� i �� �θ��庸�� ũ�ٸ�
		h->heap[i] = h->heap[i / 2]; // i �� �θ��带 i �ڸ��� �����
		i /= 2; // �׸��� i �� �θ����� �ε����� ��
	}
	h->heap[i] = item; // ���������� �ڸ��� ã���� �װ��� item �� ����
}

element deleteMaxHeap(HeapType* h) {
	int parent, child;
	element item, temp;

	item = h->heap[1]; // �������� return �� ��Ʈ��� ���� �̸� ����
	temp = h->heap[(h->heapSize)--]; // temp = ������ ��� (�׸��� ������--)
	parent = 1;
	child = 2;

	while (child <= h->heapSize) { // child ���� �ִ� �ε���(heapSize)�� ���� �� ����

		// 1�ܰ�: �� vs ��
		if ((child < h->heapSize) &&
			(h->heap[child].key) < (h->heap[child + 1].key)) { // ������ �ڽĳ�尡 �� ũ��
			child++; // child ���� ������ �ڽĳ���� �ε����� ����
		}

		// 2�ܰ�: ������ ��忴��, ������ �̵��ϸ� �ڸ��� ã�� temp �� ���ڸ��� ã�Ҵ��� ����
		if (temp.key >= h->heap[child].key) break; // �ڽĺ��� ũ�ų� ������ �ٷ� �� �ڸ���. while �� Ż��

		// 3�ܰ�: �ڽ��� ����ø�
		h->heap[parent] = h->heap[child];

		// 4�ܰ�: parent, child �ε��� �����͸� �Ʒ��� ����
		parent = child; // parent �� �������̵� �����̵� child ��ġ�� ������
		child *= 2; // child �� �� ���� �ڽ����� ������
	}

	h->heap[parent] = temp; // �ٷ� �� �ڸ��� temp �� ����
	return item; // ó���� �����ߴ� item ��ȯ
}

#endif // !_HEAP_MAX