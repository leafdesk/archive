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
    h->heap_size = 0; // 힙 크기는 0으로 초기화
    for (int i = 0; i < MAX_ELEMENT; i++) {
        h->heap[i].key = 0; // 모든 원소의 key는 0으로 초기화
    }
}

void insert_max_heap(HeapType* h, element item) {
    int i = ++(h->heap_size); // 힙 크기 하나 증가, 힙 크기는 곧 처음 인덱스

    while ((i != 1) && (item.key > h->heap[i / 2].key)) {
        h->heap[i] = h->heap[i / 2]; // item이 더 크면 부모를 끌어내림
        i /= 2; // 인덱스는 위로(부모로) 증가
    }
    h->heap[i] = item; // 제자리를 찾으면 해당 위치에 item을 삽입
}

element delete_max_heap(HeapType* h) {
    int parent, child;
    element ret, tmp;

    ret = h->heap[1]; // 최상위 노드를 반환할 예정
    tmp = h->heap[(h->heap_size)--]; // 최하위 노드를 tmp로 지정
    parent = 1; // 부모 포인터 초기값 1
    child = 2; // 자식 포인터 초기값 2

    while (child <= h->heap_size) {

        // [1단계] 왼쪽 자식 vs 오른쪽 자식
        if ((child < h->heap_size) &&
            (h->heap[child].key) < h->heap[child + 1].key) {
            child++; // 오른쪽 자식이 더 크면 오른쪽 자식으로 포인터 이동
        }

        // [2단계] 제자리 확인
        if (tmp.key >= h->heap[child].key) {
            break; // 제자리를 찾았으면 탈출
        }

        // [3단계] 제자리가 아니면 자식을 끌어올림
        h->heap[parent] = h->heap[child];

        // [4단계] 포인터 이동
        parent = child;
        child *= 2;
    }
    h->heap[parent] = tmp; // 제자리에 tmp를 삽입
    return ret; // 아까 저장했던 최상위 노드를 반환
}

void print_heap(HeapType* h) { // 힙 출력 함수
    for (int i = 1; i <= h->heap_size; i++) {
        printf("< %d >", h->heap[i].key);
    }
    printf("\n");
}

void delete_element(HeapType* h, int number) {
    int find = NULL; // 검색 포인터 (NULL로 초기화)

    for (int i = 1; i <= h->heap_size; i++) {
        if (h->heap[i].key == number) { // number를 key로 갖는 원소를 찾으면
            find = i; // 그 원소를 검색 포인터로 가리킴
            break;
        }
    }

    if (!find) { // 검색 포인터가 여전히 NULL이라면
        printf("원소를 찾을 수 없습니다. \n");
        return; // 원소를 찾지 못한 것이므로 리턴
    }

    int parent, child; // 부모, 자식 포인터
    element tmp; // 최하위 노드를 가리킬 임시 포인터

    // [첫번째 경우] 해당 원소의 자식이 있는 경우
    if (h->heap[find * 2].key != 0) {
        parent = find; // 검색 포인터는 부모 포인터가 됨
        child = parent * 2; // 부모 포인터의 왼쪽 자식을 가리킴
        tmp = h->heap[(h->heap_size)--]; // 최하위 노드를 tmp로 지정

        while (child <= h->heap_size) {

            // [1단계] 왼쪽 자식 vs 오른쪽 자식
            if ((child < h->heap_size) &&
                (h->heap[child].key) < h->heap[child + 1].key) {
                child++; // 오른쪽 자식이 더 크면 오른쪽 자식으로 포인터 이동
            }

            // [2단계] 제자리 확인
            if (tmp.key >= h->heap[child].key) {
                break; // 제자리를 찾았으면 탈출
            }

            // [3단계] 제자리가 아니면 자식을 끌어올림
            h->heap[parent] = h->heap[child];

            // [4단계] 포인터 이동
            parent = child;
            child *= 2;
        }
        h->heap[parent] = tmp; // 제자리에 tmp를 삽입
    }

    // [두번째 경우] 해당 원소의 자식이 없는 경우 (해당 원소가 leaf인 경우)
    if (h->heap[find * 2].key == 0) {
        parent = find / 2; // 검색 포인터의 위에 있는 부모 포인터
        child = find; // 검색 포인터는 자식 포인터가 됨
        tmp = h->heap[(h->heap_size)--]; // 최하위 노드를 tmp로 지정

        while (parent > 0) {

            // [1단계] 제자리 확인
            if (tmp.key < h->heap[parent].key) {
                break; // 제자리를 찾았으면 탈출 
            }

            // [2단계] 제자리가 아니면 부모를 끌어내림
            h->heap[child] = h->heap[parent];

            // [3단계] 포인터 이동
            child = parent;
            parent /= 2;
        }
        h->heap[child] = tmp; // 제자리에 tmp를 삽입
    }
    h->heap[h->heap_size + 1].key = 0; // 빠진 자리는 0으로 초기화
}

int main() {
    // key가 0인 원소는 넣지 않았다고 가정 (0은 key의 초기 상태이기 때문)
    element e[9] = { {10}, {40}, {30}, {5}, {12}, {6}, {15}, {9}, {60} };
    HeapType heap1;
    int i;

    init(&heap1);
    for (i = 0; i < 9; i++) {
        insert_max_heap(&heap1, e[i]); // 힙에 원소들을 삽입
    }

    print_heap(&heap1);

    int num = 40;
    delete_element(&heap1, num);
    //40이  삭제되었는지 체크한다
    print_heap(&heap1);
    //max heap인지 체크하는 과정 값이 큰 순서대로 출력되어야 한다

    for (i = 0; i < 8; i++) {
        element a = delete_max_heap(&heap1);
        printf("%d ", a.key);
    }
}
