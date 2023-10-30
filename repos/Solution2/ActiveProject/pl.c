#include <stdio.h>

typedef struct {
	int mid;
	int fin;
	double avg;
} Scores;

int readData(Scores stu[]) {
	FILE* ifile;
	int n, i = 0;

	ifile = fopen("points.txt", "r");
	while (1) {
		n = fscanf(ifile, "%d%d", &stu[i].mid, &stu[i].fin);
		if (n != 2) break;
		i++;
	}

	fclose(ifile);
	return i + 1;
}

void calcData(Scores stu[], int num) {
	int i = 0;

	while (i < num) {
		stu[i].avg = (stu[i].mid + stu[i].fin) / 2.;
		i++;
	}
}

void outputData(Scores stu[], int num) {
	FILE* ofile;
	int i = 0;

	ofile = fopen("grades.txt", "w");
	while (i < num) {
		fprintf(ofile, "%d\t%d\t%.1lf\n", stu[i].mid, stu[i].fin, stu[i].avg);
		printf("%d\t%d\t%.1lf\n", stu[i].mid, stu[i].fin, stu[i].avg);
		i++;
	}

	fclose(ofile);
}

int main() {
	int num;
	Scores stu[16];

	num = readData(stu);
	calcData(stu, num);
	outputData(stu, num);
}