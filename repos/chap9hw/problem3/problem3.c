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
    int i = ++(h->heap_size); // 힙 크기 하나 증가

    while ((i != 1) &&
        (item.key > h->heap[(i + k - 2) / k].key)) { // item이 부모보다 더 크다면
        h->heap[i] = h->heap[(i + k - 2) / k]; // 부모를 끌어내림
        i = (i + k - 2) / k; // 부모 인덱스로 올라감
    }
    h->heap[i] = item; // item을 제자리에 삽입
}

element delete_max_heap(HeapType* h, int k) {
    int parent, child;
    element ret, tmp;

    ret = h->heap[1]; // 최상위 루트 노드를 반환 예정
    tmp = h->heap[h->heap_size]; // 최하위 노드를 tmp에 저장
    h->heap_size--; // 힙 크기 하나 감소

    parent = 1; // 부모 포인터 초기값 1
    child = 2; // 자식 포인터 초기값 2

    while (child <= h->heap_size) {

        // [1단계] 가장 큰 자식 노드를 찾기
        int max = child; // 자식 인덱스는 고정되어 있는 상태, max에 복사
        for (int i = 1; i < k; i++) {
            if ((child + i <= h->heap_size) &&
                (h->heap[max].key < h->heap[child + i].key)) {
                max = child + i; // for문을 돌면서 max 인덱스를 변경
            }
        }
        child = max; // 자식 포인터를 max 인덱스로 변경

        // [2단계] 제자리 확인
        if (tmp.key >= h->heap[child].key) {
            break; // 가장 큰 자식보다 크다면 제자리이므로 탈출
        }

        // [3단계] 제자리가 아니라면 자식을 끌어올림
        h->heap[parent] = h->heap[child];

        // [4단계] 포인터 이동
        parent = child; // 부모 포인터를 가장 큰 자식 위치로 이동
        child = child * k - (k - 2); // 자식 포인터는 그 왼쪽 자식으로 이동
    }
    h->heap[parent] = tmp; // 제자리에 tmp를 삽입
    return ret; // 위에서 저장했던 최상위 루트 노드를 반환
}

// left_child of i=i*k-(k-2)
// parent index of l=(l+k-2)/k

void heap_sort(element a[], int n, int k) {
    //k-max-heap을 이용하여 정렬한다.
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
    {3}, {2}, {1}, {3}, {6}, {7}, {8} }; // 13개의 원소

    for (int i = 0; i < 13; i++) {
        insert_max_heap(h, arr[i], 3); // 3진 최대히프에 삽입
    }
    for (int i = 0; i < 13; i++) { // 하나씩 꺼내면서 출력
        delete_max_heap(h, 3);
        print_heap(h);
    }
    // max heap을 유지하며 삭제 연산 정상 작동 확인

    element arr2[] = { {10}, {9}, {2}, {3}, {8},
    {4}, {5}, {7}, {6}, {1}, {11} }; // 11개의 원소
    heap_sort(arr2, 11, 3); // 3진 최대히프로 정렬
    for (int i = 0; i < 11; i++) {
        printf("%d ", arr2[i].key);
    }
    printf("\n");

    element arr3[] = { {12}, {13}, {10}, {9}, {2}, {3}, {8},
    {4}, {5}, {7}, {6}, {1}, {11} }; // 13개의 원소
    heap_sort(arr3, 13, 4); // 4진 최대히프로 정렬
    for (int i = 0; i < 13; i++) {
        printf("%d ", arr3[i].key);
    }
    printf("\n");
    // heap_sort를 이용한 정렬 정상 작동 확인 (k = 3, 4)

    free(h);
}