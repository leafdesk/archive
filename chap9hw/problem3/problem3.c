#include <stdio.h>
#include <stdlib.h>
#define MAX_ELEMENT 200

typedef struct {
    int key;
} element;

typedef struct {
    element heap[MAX_ELEMENT];
    int heap_size;
} HeapType;

void init(HeapType* h) {
    h->heap_size = 0;
}

void insert_max_heap(HeapType* h, element item, int k) {
    int i = ++(h->heap_size); // �� ũ�� �ϳ� ����

    while ((i != 1) &&
        (item.key > h->heap[(i + k - 2) / k].key)) { // item�� �θ𺸴� �� ũ�ٸ�
        h->heap[i] = h->heap[(i + k - 2) / k]; // �θ� �����
        i = (i + k - 2) / k; // �θ� �ε����� �ö�
    }
    h->heap[i] = item; // item�� ���ڸ��� ����
}

element delete_max_heap(HeapType* h, int k) {
    int parent, child;
    element ret, tmp;

    ret = h->heap[1]; // �ֻ��� ��Ʈ ��带 ��ȯ ����
    tmp = h->heap[h->heap_size]; // ������ ��带 tmp�� ����
    h->heap_size--; // �� ũ�� �ϳ� ����

    parent = 1; // �θ� ������ �ʱⰪ 1
    child = 2; // �ڽ� ������ �ʱⰪ 2

    while (child <= h->heap_size) {

        // [1�ܰ�] ���� ū �ڽ� ��带 ã��
        int max = child; // �ڽ� �ε����� �����Ǿ� �ִ� ����, max�� ����
        for (int i = 1; i < k; i++) {
            if ((child + i <= h->heap_size) &&
                (h->heap[max].key < h->heap[child + i].key)) {
                max = child + i; // for���� ���鼭 max �ε����� ����
            }
        }
        child = max; // �ڽ� �����͸� max �ε����� ����

        // [2�ܰ�] ���ڸ� Ȯ��
        if (tmp.key >= h->heap[child].key) {
            break; // ���� ū �ڽĺ��� ũ�ٸ� ���ڸ��̹Ƿ� Ż��
        }

        // [3�ܰ�] ���ڸ��� �ƴ϶�� �ڽ��� ����ø�
        h->heap[parent] = h->heap[child];

        // [4�ܰ�] ������ �̵�
        parent = child; // �θ� �����͸� ���� ū �ڽ� ��ġ�� �̵�
        child = child * k - (k - 2); // �ڽ� �����ʹ� �� ���� �ڽ����� �̵�
    }
    h->heap[parent] = tmp; // ���ڸ��� tmp�� ����
    return ret; // ������ �����ߴ� �ֻ��� ��Ʈ ��带 ��ȯ
}

// left_child of i=i*k-(k-2)
// parent index of l=(l+k-2)/k

void heap_sort(element a[], int n, int k) {
    //k-max-heap�� �̿��Ͽ� �����Ѵ�.
    int i;
    HeapType h;
    init(&h);

    for (i = 0; i < n; i++) {
        insert_max_heap(&h, a[i], k);
    }
    for (i = n - 1; i >= 0; i--) {
        a[i] = delete_max_heap(&h, k);
    }
}

void print_heap(HeapType* h) {
    for (int i = 1; i <= h->heap_size; i++)
        printf("< %d > ", h->heap[i].key);
    printf("\n");
}

int main() {
    HeapType* h = (HeapType*)malloc(sizeof(HeapType));
    init(h);

    element arr[] = { {10}, {8}, {8}, {9}, {5}, {4},
    {3}, {2}, {1}, {3}, {6}, {7}, {8} }; // 13���� ����

    for (int i = 0; i < 13; i++) {
        insert_max_heap(h, arr[i], 3); // 3�� �ִ������� ����
    }
    for (int i = 0; i < 13; i++) { // �ϳ��� �����鼭 ���
        delete_max_heap(h, 3);
        print_heap(h);
    }
    // max heap�� �����ϸ� ���� ���� ���� �۵� Ȯ��

    element arr2[] = { {10}, {9}, {2}, {3}, {8},
    {4}, {5}, {7}, {6}, {1}, {11} }; // 11���� ����
    heap_sort(arr2, 11, 3); // 3�� �ִ������� ����
    for (int i = 0; i < 11; i++) {
        printf("%d ", arr2[i].key);
    }
    printf("\n");

    element arr3[] = { {12}, {13}, {10}, {9}, {2}, {3}, {8},
    {4}, {5}, {7}, {6}, {1}, {11} }; // 13���� ����
    heap_sort(arr3, 13, 4); // 4�� �ִ������� ����
    for (int i = 0; i < 13; i++) {
        printf("%d ", arr3[i].key);
    }
    printf("\n");
    // heap_sort�� �̿��� ���� ���� �۵� Ȯ�� (k = 3, 4)

    free(h);
}