#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#define MAX_ELEMENT 256

typedef struct {
    char key[20]; // 키는 문자열
    int id;
} element;

typedef struct {
    element heap[MAX_ELEMENT];
    int size; // 힙의 크기
} Heap;

Heap* newHeap() {
    return (Heap*)malloc(sizeof(Heap)); // 힙을 동적 할당
}

void initHeap(Heap* h) {
    h->size = 0; // 힙의 크기를 0으로 초기화
}

void insMaxHeap(Heap* h, element e) {
    h->size++; // 힙의 크기를 하나 증가
    int i = h->size; // 힙의 크기는 곧 처음 인덱스

    while ((i != 1) &&
        strcmp(e.key, h->heap[i / 2].key) > 0) { // e가 더 크면
        h->heap[i] = h->heap[i / 2]; // 부모를 끌어내림
        i /= 2; // 인덱스는 위로(부모로) 올라감
    }
    h->heap[i] = e; // 제자리를 찾으면 해당 위치에 e를 삽입
}

element delMaxHeap(Heap* h) {
    int parent, child; // 부모, 자식 포인터
    element ret, tmp; // 반환값(최상위 노드), 이동할 값

    ret = h->heap[1]; // 최상위 노드(가장 큰 값)를 반환
    tmp = h->heap[(h->size)]; // 최하위 노드를 tmp로 지정
    h->size--; // 최상위 노드가 빠졌으므로, 힙의 크기를 하나 감소

    parent = 1; // 부모 포인터 초기값
    child = 2; // 자식 포인터 초기값

    while (child <= h->size) {

        // [1단계] 왼쪽 자식 vs 오른쪽 자식
        if ((child < h->size) &&
            strcmp(h->heap[child].key, h->heap[child + 1].key) < 0) {
            child++; // 오른쪽 자식이 크면 오른쪽으로 포인터 이동
        }

        // [2단계] 제자리 점검
        if (strcmp(tmp.key, h->heap[child].key) >= 0) {
            break; // 제자리를 찾았다면 탈출
            // 최대 힙에서 최하위 노드였던 tmp는 작은 값 중 하나
            // 계속 내려가다가 자식보다 큰 지점을 찾으면 제자리
        }

        // [3단계] 제자리가 아니면 자식을 끌어올림
        h->heap[parent] = h->heap[child];

        // [4단계] 포인터 이동
        parent = child; // 부모가 자식 자리로
        child *= 2; // 자식은 그 왼쪽 자식으로
    }
    h->heap[parent] = tmp; // 제자리에 tmp를 삽입
    return ret; // 처음에 저장했던 최상위 노드를 반환
}

void printHeap(Heap* h) {
    printf("[ ");
    for (int i = 1; i <= h->size; i++) {
        printf("%s ", h->heap[i].key);
    }
    printf("] \n");
}

int main() {
    Heap* h = newHeap(); // 새 힙을 동적 할당
    initHeap(h);

    // 다섯 개의 원소를 생성
    element e1 = { "egg", 1 },
        e2 = { "structure", 2 },
        e3 = { "computer", 3 },
        e4 = { "program", 4 },
        e5 = { "visual", 5 };

    // 생성한 원소들을 최대 힙에 삽입
    insMaxHeap(h, e1);
    printf("힙에 %s 를 저장. \n", e1.key);
    printHeap(h); printf("\n");

    insMaxHeap(h, e2);
    printf("힙에 %s 를 저장. \n", e2.key);
    printHeap(h); printf("\n");

    insMaxHeap(h, e3);
    printf("힙에 %s 를 저장. \n", e3.key);
    printHeap(h); printf("\n");

    insMaxHeap(h, e4);
    printf("힙에 %s 를 저장. \n", e4.key);
    printHeap(h); printf("\n");

    insMaxHeap(h, e5);
    printf("힙에 %s 를 저장. \n", e5.key);
    printHeap(h); printf("\n");

    // 힙에서 원소들을 삭제
    element tmp;
    tmp = delMaxHeap(h);
    printf("힙에서 %s 를 삭제. \n", tmp.key);
    printHeap(h); printf("\n");

    tmp = delMaxHeap(h);
    printf("힙에서 %s 를 삭제. \n", tmp.key);
    printHeap(h); printf("\n");

    tmp = delMaxHeap(h);
    printf("힙에서 %s 를 삭제. \n", tmp.key);
    printHeap(h); printf("\n");
}
