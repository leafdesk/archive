#include <stdio.h>
#include "Deque.h"

int main() {
	DequeType* q = (DequeType*)malloc(sizeof(DequeType));
	init_deque(q);

	for (int i = 0; i < 3; i++) {
		add_front(q, i);
		deque_print(q);
	}
	for (int i = 0; i < 3; i++) {
		delete_rear(q);
		deque_print(q);
	}

	free(q);
}