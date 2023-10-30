#include <stdio.h>
#include <stdlib.h>

typedef struct {
    int heap[64];
    int size; // �� ũ��
} Heap;

void init(Heap* h) {
    h->size = 0; // �� ũ�� 0���� �ʱ�ȭ
}

void insMaxHeap(Heap* h, int item) {
    int i = ++(h->size);

    // element Ÿ���� �������� �ʾ����Ƿ�, ".key" �� �ʿ� ����

    while ((i != 1) && (item > h->heap[i / 2])) {
        h->heap[i] = h->heap[i / 2];
        i /= 2;
    }
    h->heap[i] = item;
}

int delMaxHeap(Heap* h) {
    int parent, child;
    int ret, tmp;

    ret = h->heap[1];
    tmp = h->heap[h->size];
    h->size--;

    parent = 1;
    child = 2;

    // element Ÿ���� �������� �ʾ����Ƿ�, ".key" �� �ʿ� ����

    while (child <= h->size) {

        if ((child < h->size) &&
            (h->heap[child] < h->heap[child + 1])) {
            child++;
        }

        if (tmp >= h->heap[child]) {
            break;
        }

        h->heap[parent] = h->heap[child];

        parent = child;
        child *= 2;
    }
    h->heap[parent] = tmp;
    return ret;
}

int returnMinK(int arr[], int size, int k) { // k��°�� ���� ���� ��ȯ�ϴ� �Լ�
    Heap* h = (Heap*)malloc(sizeof(Heap));
    init(h);
    int i, ret;

    for (i = 0; i < k; i++) {
        insMaxHeap(h, arr[i]); // �迭���� ó�� k���� ���� ����
    }
    ret = delMaxHeap(h); // ���⼭ ��Ʈ ��带 ���� k��°�� ���� ���� �ĺ�

    for (i = k; i < size; i++) {
        if (ret > arr[i]) { // �ĺ����� ū ���� ��ŵ, �ĺ����� ���� ���� ������
            insMaxHeap(h, arr[i]); // �� ���� ���� �����ϰ�
            ret = delMaxHeap(h); // ������ ���� ū ���� ����
        }
    }
    free(h);
    return ret; // ������ ���� �ĺ��� ��ȯ
}

int main() {
    int arr[] = { 10, 7, 4, 1, 6, 2, 3, 9, 5, 8 }; // 10���� ���� (���� X)

    int k = 3;
    int minK = returnMinK(arr, 10, k); // k��°�� ���� ���� ��ȯ

    printf("�迭���� %d��°�� ���� ���� %d�Դϴ�.", k, minK);
}