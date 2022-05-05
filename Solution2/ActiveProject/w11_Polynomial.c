#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <ctype.h>
#define MAX_CHAR_SIZE 256
#define MAX_TERMS_NUM 16

typedef struct ListNode {
	int coef;
	int expon;
	struct ListNode* next;
} ListNode;

typedef struct ListType {
	int size;
	ListNode* head;
	ListNode* tail;
} ListType;

void error(char* msg) {
	fprintf(stderr, "%s\n", msg);
	exit(1);
}

ListType* create() {
	ListType* list = (ListType*)malloc(sizeof(ListType));
	if (list == NULL) { error("MEMORY ALLOCATION ERROR"); }
	list->size = 0;
	list->head = list->tail = NULL;
	return list;
}

void ins_last(ListType* list, int coef, int expon) {
	if (coef == 0) return;

	ListNode* p = (ListNode*)malloc(sizeof(ListNode));
	if (p == NULL) { error("MEMORY ALLOCATION ERROR"); }
	p->coef = coef;
	p->expon = expon;
	p->next = NULL;

	if (list->tail == NULL) {
		list->head = list->tail = p;
	}
	else {
		list->tail->next = p;
		list->tail = p;
	}
	list->size++;
}

void term_separate(ListType* list, int negative, char* term) {
	int coef, expon, len = strlen(term);
	char* token, sep[] = "^";

	for (int i = 0; i < len; i++) {
		if (term[i] == 'x') {
			if (i == 0) { 
				if (term[i + 1] == '^') { // (x^E)
					strtok(term, sep);
					token = strtok(NULL, sep);
					sscanf(token, "%d", &expon);
					if (negative == 1) ins_last(list, -1, expon);
					else ins_last(list, 1, expon); return;
				}
				else { // (x)
					if (negative == 1) ins_last(list, -1, 1);
					else ins_last(list, 1, 1); return;
				}
			}
			else {
				if (term[i + 1] == '^') { // (Cx^E)
					token = strtok(term, sep);
					sscanf(token, "%d", &coef);
					token = strtok(NULL, sep);
					sscanf(token, "%d", &expon);
					if (negative == 1) ins_last(list, 0 - coef, expon);
					else ins_last(list, coef, expon); return;
				}
				else { // (Cx)
					sscanf(term, "%d", &coef);
					if (negative == 1) ins_last(list, 0 - coef, 1);
					else ins_last(list, coef, 1); return;
				}
			}
		}
	}

	// (N)
	sscanf(term, "%d", &coef);
	if (negative == 1) ins_last(list, 0 - coef, 0);
	else ins_last(list, coef, 0); return;
}

void poly_scan(ListType* list) {
	int i = 0, num = 0, pos = 0, negative = 0;
	char input[MAX_CHAR_SIZE], copy[MAX_CHAR_SIZE];
	char* term[MAX_TERMS_NUM], op[] = "+-";
	
	scanf("%s", &input);
	strcpy(copy, input);

	char* token;
	token = strtok(copy, op);
	term[i++] = strcat(token, "\0");
	while (token != NULL) {
		token = strtok(NULL, op);
		if (token != NULL) {
			term[i++] = strcat(token, "\0");
		}
	}
	num = i; i = 0;

	int len = strlen(term[i]);
	if (input[pos] == '-') { negative = 1; pos = len + 1; }
	else pos = len; // negative = 0
	term_separate(list, negative, term[i]);

	i++;
	while (i < num) {
		len = strlen(term[i]);
		if (input[pos] == '-') negative = 1;
		else negative = 0;
		term_separate(list, negative, term[i]);
		pos += len; pos++; i++;
	}
}

void poly_add(ListType* list1, ListType* list2, ListType* list3) {
	ListNode* a = list1->head;
	ListNode* b = list2->head;
	int sum;

	while (a && b) {
		if (a->expon == b->expon) {
			sum = a->coef + b->coef;
			if (sum != 0) ins_last(list3, sum, a->expon);
			a = a->next; b = b->next;
		}
		else if (a->expon > b->expon) {
			ins_last(list3, a->coef, a->expon);
			a = a->next;
		}
		else {
			ins_last(list3, b->coef, b->expon);
			b = b->next;
		}
	}

	for (; a != NULL; a = a->next) ins_last(list3, a->coef, a->expon);
	for (; b != NULL; b = b->next) ins_last(list3, b->coef, b->expon);
}

void poly_sub(ListType* list1, ListType* list2, ListType* list3) {
	ListNode* a = list1->head;
	ListNode* b = list2->head;
	int sub;

	while (a && b) {
		if (a->expon == b->expon) {
			sub = a->coef - b->coef;
			if (sub != 0) ins_last(list3, sub, a->expon);
			a = a->next; b = b->next;
		}
		else if (a->expon > b->expon) {
			ins_last(list3, a->coef, a->expon);
			a = a->next;
		}
		else {
			sub = 0 - b->coef;
			ins_last(list3, 0 - b->coef, b->expon);
			b = b->next;
		}
	}

	for (; a != NULL; a = a->next) ins_last(list3, a->coef, a->expon);
	for (; b != NULL; b = b->next) ins_last(list3, 0 - b->coef, b->expon);
}

void poly_print(ListType* list) {
	int negative = 0;
	ListNode* p = list->head;

	if (!p) { printf("0\n"); return; }
	if (p->coef < 0) { printf("- "); negative = 1; }
	for (; p; p = p->next) {
		if (negative == 0) {
			if (p->expon == 0) { printf("%d", p->coef); }
			else if (p->coef == 1 && p->expon == 1) { printf("x"); }
			else if (p->coef == 1) { printf("x^%d", p->expon); }
			else if (p->expon == 1) { printf("%dx", p->coef); }
			else printf("%dx^%d", p->coef, p->expon);
		}
		else { // negative == 1
			if (p->expon == 0) { printf("%d", 0 - p->coef); }
			else if (p->coef == -1 && p->expon == 1) { printf("x"); }
			else if (p->coef == -1) { printf("x^%d", p->expon); }
			else if (p->expon == 1) { printf("%dx", 0 - p->coef); }
			else printf("%dx^%d", 0 - p->coef, p->expon);
		}
		
		if (p->next != NULL) {
			if (p->next->coef > 0) { printf(" + "); negative = 0; }
			else { printf(" - "); negative = 1; }
		}
	}
	printf("\n");
}

int main() {
	int done = 0, ask = 0;
	char ans;
	
	while (!done) {
		ask = 1;
		while (ask) {
			printf("Select one of following programs:\n");
			printf("  1. Polynomial Add\n");
			printf("  2. Polynomial Sub\n");
			printf("Which number do you want to select? (1-2) : ");
			scanf(" %c", &ans);
			printf("\n");

			if ('1' <= ans && ans <= '2') {
				ask = 0;
				ListType* list1 = create();
				ListType* list2 = create();
				ListType* list3 = create();
				switch (ans) {
				case '1':
					printf("[주의] 계수 또는 차수가 1이면 반드시 생략합니다. (예: x^2, 2x, x 등)\n\n");
					printf("Enter 1st polynomial: ");
					poly_scan(list1);
					printf("Enter 2nd polynomial: ");
					poly_scan(list2);
					printf("\n");
					poly_add(list1, list2, list3);
					printf("ADD Result: ");
					poly_print(list3);
					printf("\n");
					free(list1); free(list2); free(list3);
					break;
				case '2':
					printf("[주의] 계수 또는 차수가 1이면 반드시 생략합니다. (예: x^2, 2x, x 등)\n\n");
					printf("Enter 1st polynomial: ");
					poly_scan(list1);
					printf("Enter 2nd polynomial: ");
					poly_scan(list2);
					printf("\n");
					poly_sub(list1, list2, list3);
					printf("SUB Result: ");
					poly_print(list3);
					printf("\n");
					free(list1); free(list2); free(list3);
					break;
				}
			}
			else ask = 1;
		}
		ask = 1;
		while (ask) {
			printf("Do you want to try again? (Y/N) : ");
			scanf(" %c", &ans);
			ans = toupper(ans);
			if (ans == 'Y') { done = 0; printf("\n"); ask = 0; }
			else if (ans == 'N') { done = 1; ask = 0; }
			else ask = 1;
		}
	}
}