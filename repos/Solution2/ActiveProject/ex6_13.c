#include <stdio.h>
#include "_LIST.h"

int main() {
	int num;
	ListType* list = create();

	ins_last(list, 1);
	ins_last(list, 5);
	ins_last(list, 2);
	ins_last(list, 7);
	ins_last(list, 1);
	ins_last(list, 1);
	ins_last(list, 4);
	ins_last(list, 4);
	ins_last(list, 3);
	ins_last(list, 2);
	ins_last(list, 1);

	print_list(list);
	num = del_data(list, 1);
	printf("%d개의 '1'을 삭제했습니다.\n", num);

	print_list(list);
	num = del_data(list, 2);
	printf("%d개의 '2'를 삭제했습니다.\n", num);

	print_list(list);
	num = del_data(list, 3);
	printf("%d개의 '3'를 삭제했습니다.\n", num);

	print_list(list);
	num = del_data(list, 4);
	printf("%d개의 '4'를 삭제했습니다.\n", num);

	print_list(list);
	num = del_data(list, 5);
	printf("%d개의 '5'을 삭제했습니다.\n", num);

	print_list(list);
}