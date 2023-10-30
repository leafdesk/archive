#include <iostream>
#include <string>
using namespace std;

class Point {
protected:
	int x, y;
public:
	Point(int x, int y) {
		this->x = x;
		this->y = y;
		cout << "Point 持失切(" << x << ", " << y << ")" << endl;
	}
	void showPoint() { cout << "(" << x << ", " << y << ")" << endl; }
};

class ColorPoint : public Point {
	string color;
public:
	ColorPoint(string color, int x, int y) : Point(x, y) {
		this->color = color;
		cout << "ColorPoint 持失切" << endl;
	}
	void showColorPoint();
};

void ColorPoint::showColorPoint() {
	//showPoint();
	cout << color << " (" << x << ", " << y << ")" << endl;
}

int main() {
	ColorPoint cp("red", 5, 6);
	cp.showColorPoint();
}