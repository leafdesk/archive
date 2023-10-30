#include <stdio.h>
#include <stdlib.h>

typedef struct TreeNode {
	int data;
	struct TreeNode* left, * right;
} TreeNode;

void inorder(TreeNode* root) {
	if (root != NULL) {
		inorder(root->left);
		printf("[%d] ", root->data);
		inorder(root->right);
	}
}

void preorder(TreeNode* root) {
	if (root != NULL) {
		printf("[%d] ", root->data);
		preorder(root->left);
		preorder(root->right);
	}
}

void postorder(TreeNode* root) {
	if (root != NULL) {
		postorder(root->left);
		postorder(root->right);
		printf("[%d] ", root->data);
	}
}

#define SIZE 100
int top = -1;
TreeNode* stack[SIZE];

void push(TreeNode* p) {
	if (top < SIZE - 1) { stack[++top] = p; }
}

TreeNode* pop() {
	TreeNode* p = NULL;
	if (top > -1) { p = stack[top--]; }
	return p;
}

void inorder_iter(TreeNode* root) {
	while (1) {
		for (; root; root = root->left) { push(root); }
		root = pop();
		if (!root) break;
		printf("[%d] ", root->data);
		root = root->right;
	}
}

void preorder_iter(TreeNode* root) {
	while (1) {
		for (; root; root = root->left) {
			push(root);
			printf("[%d] ", root->data);
		}
		root = pop();
		if (!root) break;
		root = root->right;
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
	printf("순환적 중위 순회: ");
	inorder(root); printf("\n");
	printf("순환적 전위 순회: ");
	preorder(root); printf("\n");
	printf("순환적 후위 순회: ");
	postorder(root); printf("\n");

	printf("\n");

	printf("반복적 중위 순회: ");
	inorder_iter(root); printf("\n");
	printf("반복적 전위 순회: ");
	preorder_iter(root); printf("\n");
	// 반복적 후위 순회는 구현 포기함
}