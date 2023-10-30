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

	printf("탐색할 값을 입력하시오 : ");
	scanf("%d", &num);
	printf("%d는 연결 리스트에서 %d번 나타납니다.\n", num, get_data_num(list, num));
}