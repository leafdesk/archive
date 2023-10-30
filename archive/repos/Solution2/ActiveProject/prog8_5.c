#include <stdio.h>
#include <stdlib.h>

typedef struct TreeNode {
	int data;
	struct TreeNode* left, * right;
} TreeNode;

#include "_QUEUE_CIR.h" // typedef TreeNode* element;

void level_order(TreeNode* p) {
	QueueType q;
	init_queue(&q);

	if (p == NULL) return;
	enqueue(&q, p);
	while (!is_empty(&q)) {
		p = dequeue(&q);
		printf(" [%d] ", p->data);
		if (p->left) enqueue(&q, p->left);
		if (p->right) enqueue(&q, p->right);
	}
}

TreeNode n1 = { 1, NULL, NULL };
TreeNode n2 = { 4, &n1, NULL };
TreeNode n3 = { 16, NULL, NULL };
TreeNode n4 = { 25, NULL, NULL };
TreeNode n5 = { 20, &n3, &n4 };
TreeNode n6 = { 15, &n2, &n5 };
TreeNode* root = &n6;

int main() {
	printf("레벨 순회: ");
	level_order(root);
	printf("\n");
}