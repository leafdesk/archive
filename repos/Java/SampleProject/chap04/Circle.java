
public class Circle {
	public int radius;
	public String name;
	
	public Circle() {
		
	}
	
	public double getArea() {
		return 3.14 * radius * radius;
	}
	
	public static void main(String[] args) {
		Circle pizza; // ��ü ���� ������ ����. ���۷��� �����̴�.
		pizza = new Circle();
		pizza.radius = 10;
		pizza.name = "�ڹ�����";
		double area = pizza.getArea();
		System.out.println("������ ������ " + area);
		
		Circle donut = new Circle();
		donut.radius = 2;
		donut.name = "�ڹٵ���";
		area = donut.getArea();
		System.out.println("������ ������ " + area);
	}
}

