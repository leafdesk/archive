package kr.web.controller;

import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.annotation.WebServlet;
import kr.web.util.*;

@WebServlet("/hs.do")
public class HelloServlet extends HttpServlet {
	
	public void service(
			HttpServletRequest req, HttpServletResponse res
	) throws ServletException, IOException {
		
		MyUtil my = new MyUtil();
		int sum = my.sum();
		
		PrintWriter out = res.getWriter();
		out.println("<html>");
		out.println("<body>");
		out.println(sum);
		out.println("</body>");
		out.println("</html>");
	}
}
