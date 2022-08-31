package kr.bit.controller;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class NewMember
 */
@WebServlet("/new")
public class NewMember extends HttpServlet {
	private static final long serialVersionUID = 1L;

	/**
	 * @see HttpServlet#HttpServlet()
	 */
	public NewMember() {
		super();
		// TODO Auto-generated constructor stub
	}

	/**
	 * @see HttpServlet#service(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	protected void service(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {

		String name = request.getParameter("name");
		String campus = request.getParameter("campus");
		String phoneNumber = request.getParameter("phoneNumber");
		String birthDate = request.getParameter("birthDate");
		String gbsCurriculum = request.getParameter("gbsCurriculum");

		PrintWriter out = response.getWriter();
		out.println(name + campus + phoneNumber + birthDate + gbsCurriculum);
	}

}
