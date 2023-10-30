#include <stdio.h>
#include <stdlib.h>

typedef int element;
typedef struct TreeNode {
	element key;
	struct TreeNode* left, * right;
} TreeNode;

TreeNode* search(TreeNode* node, int key) {
	if (node == NULL) return NULL;
	if (key == node->key) return node;
	else if (key < node->key) return search(node->left, key);
	else return search(node->right, key);
}

TreeNode* search_iter(TreeNode* node, int key) {
	while (node != NULL) {
		if (key == node->key) return node;
		else if (key < node->key) { node = node->left; }
		else node = node->right;
	}
	return NULL;
}

TreeNode* new_node(int item) {
	TreeNode* p = (TreeNode*)malloc(sizeof(TreeNode));
	p->key = item;
	p->left = p->right = NULL;
	return p;
}

TreeNode* ins_node(TreeNode* node, int key) {
	if (node == NULL) return new_node(key);
	if (key < node->key) { node->left = ins_node(node->left, key); }
	else if (key > node->key) { node->right = ins_node(node->right, key); }
	return node;
}

TreeNode* min_value_node(TreeNode* node) {
	TreeNode* curr = node;
	while (curr->left != NULL) { curr = curr->left; }
	return curr;
}

TreeNode* del_node(TreeNode* node, int key) {
	if (node == NULL) return node;
	if (key < node->key) { node->left = del_node(node->left, key); }
	else if (key > node->key) { node->right = del_node(node->right, key); }

	else {
		if (node->left == NULL) {
			TreeNode* p = node->right;
			free(node);
			return p;
		}
		else if (node->right == NULL) {
			TreeNode* p = node->left;
			free(node);
			return p;
		}
		TreeNode* p = min_value_node(node->right);
		node->key = p->key;
		node->right = del_node(node->right, p->key);
	}

	return node;
}

void inorder(TreeNode* node) {
	if (node) {
		inorder(node->left);
		printf("[%d] ", node->key);
		inorder(node->right);
	}
}

int main() {
	TreeNode* root = NULL;
	TreeNode* tmp = NULL;

	root = ins_node(root, 30);
	root = ins_node(root, 20);
	root = ins_node(root, 10);
	root = ins_node(root, 40);
	root = ins_node(root, 50);
	root = ins_node(root, 60);

	printf("이진 탐색 트리 중위 순회 결과 \n");
	inorder(root);
	printf("\n\n");

	if (search(root, 30) != NULL) printf("이진 탐색 트리에서 30을 발견함 \n");
	else printf("이진 탐색 트리에서 30을 발견하지 못함 \n");

	del_node(root, 30);
	printf("\n\n");
	inorder(root);

	del_node(root, 40);
	printf("\n\n");
	inorder(root);
}