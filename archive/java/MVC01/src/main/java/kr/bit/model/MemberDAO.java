package kr.bit.model;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

public class MemberDAO {

	private Connection conn;
	private PreparedStatement ps;
	private ResultSet rs;

	public void getConnect() {
		String URL = "jdbc:mysql://localhost:3306/test?characterEncoding=UTF-8&serverTimezone=UTC";
		String user = "root";
		String password = "root";

		// MySQL Driver Loading
		try {
			Class.forName("com.mysql.jdbc.Driver"); // 동적 로딩: 실행 시점에서 객체를 실행
			conn = DriverManager.getConnection(URL, user, password);
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	public int memberInsert(MemberVO vo) {
		String SQL = "insert into member(id, pass, name, age, email, phone) values (?,?,?,?,?,?)";
		getConnect();

		// SQL 문장을 전송하는 객체 생성
		int cnt = 1;
		try {
			ps = conn.prepareStatement(SQL); // 미리 컴파일을 시킨다.

			ps.setString(1, vo.getId());
			ps.setString(2, vo.getPass());
			ps.setString(3, vo.getName());
			ps.setInt(4, vo.getAge());
			ps.setString(5, vo.getEmail());
			ps.setString(6, vo.getPhone());

			cnt = ps.executeUpdate(); // 전송(실행)
		} catch (Exception e) {
			e.printStackTrace();
		}

		return cnt;
	}
}
