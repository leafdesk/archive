#include <stdio.h>
#include "_LIST.h"

int main() {
	int num, data;
	ListType* list = create();

	printf("노드의 개수 : ");
	scanf("%d", &num);

	for (int i = 0; i < num; i++) {
		printf("노드 #%d 데이터 : ", i + 1);
		scanf("%d", &data);
		ins_last(list, data);
	}

	printf("연결 리스트 노드의 개수 : %d\n", get_length(list));
}