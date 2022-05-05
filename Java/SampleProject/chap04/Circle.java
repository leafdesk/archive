
public class Circle {
	public int radius;
	public String name;
	
	public Circle() {
		
	}
	
	public double getArea() {
		return 3.14 * radius * radius;
	}
	
	public static void main(String[] args) {
		Circle pizza; // 객체 아직 생기지 않음. 레퍼런스 변수이다.
		pizza = new Circle();
		pizza.radius = 10;
		pizza.name = "자바피자";
		double area = pizza.getArea();
		System.out.println("피자의 면적은 " + area);
		
		Circle donut = new Circle();
		donut.radius = 2;
		donut.name = "자바도넛";
		area = donut.getArea();
		System.out.println("도넛의 면적은 " + area);
	}
}

