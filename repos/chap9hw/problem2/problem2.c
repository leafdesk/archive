#include <stdio.h>
#define MAX_ELEMENT 100

typedef struct {
    int key;
} element;

typedef struct {
    element heap[MAX_ELEMENT];
    int heap_size;
} HeapType;

void init(HeapType* h) {
    h->heap_size = 0; // �� ũ��� 0���� �ʱ�ȭ
    for (int i = 0; i < MAX_ELEMENT; i++) {
        h->heap[i].key = 0; // ��� ������ key�� 0���� �ʱ�ȭ
    }
}

void insert_max_heap(HeapType* h, element item) {
    int i = ++(h->heap_size); // �� ũ�� �ϳ� ����, �� ũ��� �� ó�� �ε���

    while ((i != 1) && (item.key > h->heap[i / 2].key)) {
        h->heap[i] = h->heap[i / 2]; // item�� �� ũ�� �θ� �����
        i /= 2; // �ε����� ����(�θ��) ����
    }
    h->heap[i] = item; // ���ڸ��� ã���� �ش� ��ġ�� item�� ����
}

element delete_max_heap(HeapType* h) {
    int parent, child;
    element ret, tmp;

    ret = h->heap[1]; // �ֻ��� ��带 ��ȯ�� ����
    tmp = h->heap[(h->heap_size)--]; // ������ ��带 tmp�� ����
    parent = 1; // �θ� ������ �ʱⰪ 1
    child = 2; // �ڽ� ������ �ʱⰪ 2

    while (child <= h->heap_size) {

        // [1�ܰ�] ���� �ڽ� vs ������ �ڽ�
        if ((child < h->heap_size) &&
            (h->heap[child].key) < h->heap[child + 1].key) {
            child++; // ������ �ڽ��� �� ũ�� ������ �ڽ����� ������ �̵�
        }

        // [2�ܰ�] ���ڸ� Ȯ��
        if (tmp.key >= h->heap[child].key) {
            break; // ���ڸ��� ã������ Ż��
        }

        // [3�ܰ�] ���ڸ��� �ƴϸ� �ڽ��� ����ø�
        h->heap[parent] = h->heap[child];

        // [4�ܰ�] ������ �̵�
        parent = child;
        child *= 2;
    }
    h->heap[parent] = tmp; // ���ڸ��� tmp�� ����
    return ret; // �Ʊ� �����ߴ� �ֻ��� ��带 ��ȯ
}

void print_heap(HeapType* h) { // �� ��� �Լ�
    for (int i = 1; i <= h->heap_size; i++) {
        printf("< %d >", h->heap[i].key);
    }
    printf("\n");
}

void delete_element(HeapType* h, int number) {
    int find = NULL; // �˻� ������ (NULL�� �ʱ�ȭ)

    for (int i = 1; i <= h->heap_size; i++) {
        if (h->heap[i].key == number) { // number�� key�� ���� ���Ҹ� ã����
            find = i; // �� ���Ҹ� �˻� �����ͷ� ����Ŵ
            break;
        }
    }

    if (!find) { // �˻� �����Ͱ� ������ NULL�̶��
        printf("���Ҹ� ã�� �� �����ϴ�. \n");
        return; // ���Ҹ� ã�� ���� ���̹Ƿ� ����
    }

    int parent, child; // �θ�, �ڽ� ������
    element tmp; // ������ ��带 ����ų �ӽ� ������

    // [ù��° ���] �ش� ������ �ڽ��� �ִ� ���
    if (h->heap[find * 2].key != 0) {
        parent = find; // �˻� �����ʹ� �θ� �����Ͱ� ��
        child = parent * 2; // �θ� �������� ���� �ڽ��� ����Ŵ
        tmp = h->heap[(h->heap_size)--]; // ������ ��带 tmp�� ����

        while (child <= h->heap_size) {

            // [1�ܰ�] ���� �ڽ� vs ������ �ڽ�
            if ((child < h->heap_size) &&
                (h->heap[child].key) < h->heap[child + 1].key) {
                child++; // ������ �ڽ��� �� ũ�� ������ �ڽ����� ������ �̵�
            }

            // [2�ܰ�] ���ڸ� Ȯ��
            if (tmp.key >= h->heap[child].key) {
                break; // ���ڸ��� ã������ Ż��
            }

            // [3�ܰ�] ���ڸ��� �ƴϸ� �ڽ��� ����ø�
            h->heap[parent] = h->heap[child];

            // [4�ܰ�] ������ �̵�
            parent = child;
            child *= 2;
        }
        h->heap[parent] = tmp; // ���ڸ��� tmp�� ����
    }

    // [�ι�° ���] �ش� ������ �ڽ��� ���� ��� (�ش� ���Ұ� leaf�� ���)
    if (h->heap[find * 2].key == 0) {
        parent = find / 2; // �˻� �������� ���� �ִ� �θ� ������
        child = find; // �˻� �����ʹ� �ڽ� �����Ͱ� ��
        tmp = h->heap[(h->heap_size)--]; // ������ ��带 tmp�� ����

        while (parent > 0) {

            // [1�ܰ�] ���ڸ� Ȯ��
            if (tmp.key < h->heap[parent].key) {
                break; // ���ڸ��� ã������ Ż�� 
            }

            // [2�ܰ�] ���ڸ��� �ƴϸ� �θ� �����
            h->heap[child] = h->heap[parent];

            // [3�ܰ�] ������ �̵�
            child = parent;
            parent /= 2;
        }
        h->heap[child] = tmp; // ���ڸ��� tmp�� ����
    }
    h->heap[h->heap_size + 1].key = 0; // ���� �ڸ��� 0���� �ʱ�ȭ
}

int main() {
    // key�� 0�� ���Ҵ� ���� �ʾҴٰ� ���� (0�� key�� �ʱ� �����̱� ����)
    element e[9] = { {10}, {40}, {30}, {5}, {12}, {6}, {15}, {9}, {60} };
    HeapType heap1;
    int i;

    init(&heap1);
    for (i = 0; i < 9; i++) {
        insert_max_heap(&heap1, e[i]); // ���� ���ҵ��� ����
    }

    print_heap(&heap1);

    int num = 40;
    delete_element(&heap1, num);
    //40��  �����Ǿ����� üũ�Ѵ�
    print_heap(&heap1);
    //max heap���� üũ�ϴ� ���� ���� ū ������� ��µǾ�� �Ѵ�

    for (i = 0; i < 8; i++) {
        element a = delete_max_heap(&heap1);
        printf("%d ", a.key);
    }
}
