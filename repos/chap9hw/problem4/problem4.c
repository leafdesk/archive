#include <stdio.h>
#include <stdlib.h>

typedef struct {
    int heap[64];
    int size; // 힙 크기
} Heap;

void init(Heap* h) {
    h->size = 0; // 힙 크기 0으로 초기화
}

void insMaxHeap(Heap* h, int item) {
    int i = ++(h->size);

    // element 타입을 정의하지 않았으므로, ".key" 는 필요 없음

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

    // element 타입을 정의하지 않았으므로, ".key" 는 필요 없음

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

int returnMinK(int arr[], int size, int k) { // k번째로 작은 수를 반환하는 함수
    Heap* h = (Heap*)malloc(sizeof(Heap));
    init(h);
    int i, ret;

    for (i = 0; i < k; i++) {
        insMaxHeap(h, arr[i]); // 배열에서 처음 k개를 힙에 삽입
    }
    ret = delMaxHeap(h); // 여기서 루트 노드를 빼면 k번째로 작은 수의 후보

    for (i = k; i < size; i++) {
        if (ret > arr[i]) { // 후보보다 큰 수는 스킵, 후보보다 작은 수를 만나면
            insMaxHeap(h, arr[i]); // 그 수를 힙에 삽입하고
            ret = delMaxHeap(h); // 힙에서 가장 큰 수를 꺼냄
        }
    }
    free(h);
    return ret; // 끝까지 남은 후보를 반환
}

int main() {
    int arr[] = { 10, 7, 4, 1, 6, 2, 3, 9, 5, 8 }; // 10개의 원소 (정렬 X)

    int k = 3;
    int minK = returnMinK(arr, 10, k); // k번째로 작은 수를 반환

    printf("배열에서 %d번째로 작은 수는 %d입니다.", k, minK);
}