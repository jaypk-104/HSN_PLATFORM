/*
 * Generated by the Jasper component of Apache Tomcat
 * Version: Apache Tomcat/8.0.52
 * Generated at: 2021-01-29 04:26:59 UTC
 * Note: The last modified time of this file was set to
 *       the last modified time of the source file after
 *       generation to assist with modification tracking.
 */
package org.apache.jsp.HSPF01.common.frame.sql;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.jsp.*;
import java.io.PrintWriter;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import java.sql.*;
import javax.naming.Context;
import javax.naming.InitialContext;
import javax.naming.NamingException;
import javax.sql.DataSource;

public final class Global_jsp extends org.apache.jasper.runtime.HttpJspBase
    implements org.apache.jasper.runtime.JspSourceDependent,
                 org.apache.jasper.runtime.JspSourceImports {

  private static final javax.servlet.jsp.JspFactory _jspxFactory =
          javax.servlet.jsp.JspFactory.getDefaultFactory();

  private static java.util.Map<java.lang.String,java.lang.Long> _jspx_dependants;

  static {
    _jspx_dependants = new java.util.HashMap<java.lang.String,java.lang.Long>(1);
    _jspx_dependants.put("/HSPF01/common/DB_Connection.jsp", Long.valueOf(1551915626000L));
  }

  private static final java.util.Set<java.lang.String> _jspx_imports_packages;

  private static final java.util.Set<java.lang.String> _jspx_imports_classes;

  static {
    _jspx_imports_packages = new java.util.HashSet<>();
    _jspx_imports_packages.add("java.sql");
    _jspx_imports_packages.add("javax.servlet");
    _jspx_imports_packages.add("javax.servlet.http");
    _jspx_imports_packages.add("javax.servlet.jsp");
    _jspx_imports_classes = new java.util.HashSet<>();
    _jspx_imports_classes.add("java.io.PrintWriter");
    _jspx_imports_classes.add("javax.naming.InitialContext");
    _jspx_imports_classes.add("org.json.simple.JSONObject");
    _jspx_imports_classes.add("javax.sql.DataSource");
    _jspx_imports_classes.add("javax.naming.Context");
    _jspx_imports_classes.add("javax.naming.NamingException");
    _jspx_imports_classes.add("org.json.simple.JSONArray");
  }

  private volatile javax.el.ExpressionFactory _el_expressionfactory;
  private volatile org.apache.tomcat.InstanceManager _jsp_instancemanager;

  public java.util.Map<java.lang.String,java.lang.Long> getDependants() {
    return _jspx_dependants;
  }

  public java.util.Set<java.lang.String> getPackageImports() {
    return _jspx_imports_packages;
  }

  public java.util.Set<java.lang.String> getClassImports() {
    return _jspx_imports_classes;
  }

  public javax.el.ExpressionFactory _jsp_getExpressionFactory() {
    if (_el_expressionfactory == null) {
      synchronized (this) {
        if (_el_expressionfactory == null) {
          _el_expressionfactory = _jspxFactory.getJspApplicationContext(getServletConfig().getServletContext()).getExpressionFactory();
        }
      }
    }
    return _el_expressionfactory;
  }

  public org.apache.tomcat.InstanceManager _jsp_getInstanceManager() {
    if (_jsp_instancemanager == null) {
      synchronized (this) {
        if (_jsp_instancemanager == null) {
          _jsp_instancemanager = org.apache.jasper.runtime.InstanceManagerFactory.getInstanceManager(getServletConfig());
        }
      }
    }
    return _jsp_instancemanager;
  }

  public void _jspInit() {
  }

  public void _jspDestroy() {
  }

  public void _jspService(final javax.servlet.http.HttpServletRequest request, final javax.servlet.http.HttpServletResponse response)
        throws java.io.IOException, javax.servlet.ServletException {

final java.lang.String _jspx_method = request.getMethod();
if (!"GET".equals(_jspx_method) && !"POST".equals(_jspx_method) && !"HEAD".equals(_jspx_method) && !javax.servlet.DispatcherType.ERROR.equals(request.getDispatcherType())) {
response.sendError(HttpServletResponse.SC_METHOD_NOT_ALLOWED, "JSPs only permit GET POST or HEAD");
return;
}

    final javax.servlet.jsp.PageContext pageContext;
    javax.servlet.http.HttpSession session = null;
    final javax.servlet.ServletContext application;
    final javax.servlet.ServletConfig config;
    javax.servlet.jsp.JspWriter out = null;
    final java.lang.Object page = this;
    javax.servlet.jsp.JspWriter _jspx_out = null;
    javax.servlet.jsp.PageContext _jspx_page_context = null;


    try {
      response.setContentType("text/html; charset=UTF-8");
      pageContext = _jspxFactory.getPageContext(this, request, response,
      			null, true, 8192, true);
      _jspx_page_context = pageContext;
      application = pageContext.getServletContext();
      config = pageContext.getServletConfig();
      session = pageContext.getSession();
      out = pageContext.getOut();
      _jspx_out = out;

      out.write("\r\n");
      out.write("\r\n");
      out.write("\r\n");
      out.write("\r\n");
      out.write("\r\n");
      out.write("\r\n");
      out.write("\r\n");
      out.write("\r\n");
      out.write("\r\n");
      out.write("\r\n");
      out.write("\r\n");
      out.write("\r\n");

	Connection conn = null;
	PreparedStatement pstmt = null;
	Statement stmt = null;

	try {
		Context initCtx = new InitialContext();
		Context envCtx = (Context) initCtx.lookup("java:comp/env");
		DataSource dataSource = (DataSource) envCtx.lookup("jdbc/Tibero");
		conn = dataSource.getConnection();
		stmt = conn.createStatement();

	} catch (NamingException e) {

	}

      out.write("\r\n");
      out.write("\r\n");

	String strCompId = (String) session.getAttribute("comp_id");
	String strId = (String) session.getAttribute("user_id");

	if (strId == "" || strId == null || strId == "null") {
		response.sendRedirect("../../../index.jsp");
	}

	else {
		ResultSet rs = null;
		try {
			request.setCharacterEncoding("utf-8");
			JSONObject jsonObject = new JSONObject();
			JSONArray jsonArray = new JSONArray();
			JSONObject subObject = null;

			// 		jsonArray = dbcon.globalVariation(strId, strCompId);
			String strSql = "SELECT A.COMP_ID,D.COMP_NM,       A.USR_ID, A.ROLE_CD, ";
			strSql += " A.USR_NM,  A.DEPT_CD,  B.DEPT_NM, ";
			strSql += " C.DTL_NM POSIT_NM ,A.BP_CD, E.BP_NM, A.TEL_NO, A.HAND_TEL, A.FAX_NO, A.ADDRESS, A.EMAIL, A.EMAIL_YN, A.EMP_NO ";
			strSql += " FROM   Z_USR_INFO_HSPF A ";
			strSql += " LEFT OUTER JOIN B_DEPT_HSPF B ";
			strSql += " ON     A.DEPT_CD = B.DEPT_CD ";
			strSql += " AND    A.COMP_ID =B.COMP_ID ";
			strSql += " LEFT OUTER JOIN B_DTL_INFO C ";
			strSql += " ON     A.POSIT_CD=C.DTL_CD ";
			strSql += "AND    A.COMP_ID =C.COMP_ID ";
			strSql += " LEFT OUTER JOIN B_COMP_HSPF D ";
			strSql += " ON     A.COMP_ID=D.COMP_ID";
			strSql += " LEFT OUTER JOIN B_BIZ_HSPF E ";
			strSql += " ON     A.BP_CD=E.BP_CD";
			strSql += " WHERE UPPER(A.USR_ID)='" + strId.toUpperCase() + "'";
			strSql += "AND UPPER(A.COMP_ID)='" + strCompId.toUpperCase() + "'";

			rs = stmt.executeQuery(strSql);
			while (rs.next()) {
				subObject = new JSONObject();
				subObject.put("comp_id", rs.getString("COMP_ID"));
				subObject.put("comp_nm", rs.getString("COMP_NM"));
				subObject.put("usr_id", rs.getString("USR_ID"));
				subObject.put("usr_nm", rs.getString("USR_NM"));
				subObject.put("dept_cd", rs.getString("DEPT_CD"));
				subObject.put("dept_nm", rs.getString("DEPT_NM"));
				subObject.put("posit_nm", rs.getString("POSIT_NM"));
				subObject.put("bp_cd", rs.getString("BP_CD"));
				subObject.put("bp_nm", rs.getString("BP_NM"));
				subObject.put("tel_no", rs.getString("TEL_NO"));
				subObject.put("hand_tel", rs.getString("HAND_TEL"));
				subObject.put("fax_no", rs.getString("FAX_NO"));
				subObject.put("address", rs.getString("ADDRESS"));
				subObject.put("email", rs.getString("EMAIL"));
				subObject.put("email_yn", rs.getString("EMAIL_YN"));
				subObject.put("role_cd", rs.getString("ROLE_CD"));
				subObject.put("emp_no", rs.getString("EMP_NO"));
				jsonArray.add(subObject);
			}
			jsonObject.put("success", true);
			jsonObject.put("resultList", jsonArray);
			
// 			System.out.println(jsonObject);
			
			response.setContentType("text/plain; charset=UTF-8");
			PrintWriter pw = response.getWriter();
			pw.print(jsonObject);
			pw.flush();
			pw.close();

		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			if (rs != null) try {
				rs.close();
			} catch (SQLException ex) {}
			if (stmt != null) try {
				stmt.close();
			} catch (SQLException ex) {}
			if (conn != null) try {
				conn.close();
			} catch (SQLException ex) {}
		}
	}

    } catch (java.lang.Throwable t) {
      if (!(t instanceof javax.servlet.jsp.SkipPageException)){
        out = _jspx_out;
        if (out != null && out.getBufferSize() != 0)
          try {
            if (response.isCommitted()) {
              out.flush();
            } else {
              out.clearBuffer();
            }
          } catch (java.io.IOException e) {}
        if (_jspx_page_context != null) _jspx_page_context.handlePageException(t);
        else throw new ServletException(t);
      }
    } finally {
      _jspxFactory.releasePageContext(_jspx_page_context);
    }
  }
}
