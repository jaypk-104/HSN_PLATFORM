/*
 * Generated by the Jasper component of Apache Tomcat
 * Version: Apache Tomcat/8.0.52
 * Generated at: 2021-01-29 13:05:14 UTC
 * Note: The last modified time of this file was set to
 *       the last modified time of the source file after
 *       generation to assist with modification tracking.
 */
package org.apache.jsp.HSPF01.bill.charge_005fout_005fdistr.sql;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.jsp.*;
import org.json.simple.JSONArray;
import org.json.simple.JSONValue;
import net.sf.json.JSONObject;
import java.io.PrintWriter;
import java.io.StringWriter;
import java.net.URLDecoder;
import java.util.HashMap;
import java.text.SimpleDateFormat;
import java.sql.*;
import javax.naming.Context;
import javax.naming.InitialContext;
import javax.naming.NamingException;
import javax.sql.DataSource;
import java.sql.*;
import javax.naming.Context;
import javax.naming.InitialContext;
import javax.naming.NamingException;
import javax.sql.DataSource;
import org.apache.commons.lang.StringUtils;

public final class charge_005fout_005fdistr_005fwindow_jsp extends org.apache.jasper.runtime.HttpJspBase
    implements org.apache.jasper.runtime.JspSourceDependent,
                 org.apache.jasper.runtime.JspSourceImports {

  private static final javax.servlet.jsp.JspFactory _jspxFactory =
          javax.servlet.jsp.JspFactory.getDefaultFactory();

  private static java.util.Map<java.lang.String,java.lang.Long> _jspx_dependants;

  static {
    _jspx_dependants = new java.util.HashMap<java.lang.String,java.lang.Long>(2);
    _jspx_dependants.put("/HSPF01/common/DB_Connection.jsp", Long.valueOf(1551915626000L));
    _jspx_dependants.put("/HSPF01/common/DB_Connection_ERP_TEMP.jsp", Long.valueOf(1559553653000L));
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
    _jspx_imports_classes.add("org.apache.commons.lang.StringUtils");
    _jspx_imports_classes.add("java.net.URLDecoder");
    _jspx_imports_classes.add("java.io.StringWriter");
    _jspx_imports_classes.add("java.text.SimpleDateFormat");
    _jspx_imports_classes.add("java.util.HashMap");
    _jspx_imports_classes.add("javax.naming.NamingException");
    _jspx_imports_classes.add("org.json.simple.JSONArray");
    _jspx_imports_classes.add("org.json.simple.JSONValue");
    _jspx_imports_classes.add("javax.sql.DataSource");
    _jspx_imports_classes.add("net.sf.json.JSONObject");
    _jspx_imports_classes.add("javax.naming.Context");
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

      out.write('\r');
      out.write('\n');
      out.write("\n");
      out.write("\n");
      out.write("\n");
      out.write("\n");
      out.write("\n");
      out.write("\n");
      out.write("\n");
      out.write("\n");

/*
 String driver = "com.microsoft.sqlserver.jdbc.SQLServerDriver";
 String url = "jdbc:sqlserver://123.142.124.141:1433";
 String user = "sa";
 String password = "hsnadmin";

 String connectionString = "jdbc:sqlserver://123.142.124.141:1433;" + "databaseName=UNIERP_HSN;user=sa;password=hsnadmin";

 Class.forName(driver);
 Connection e_conn = DriverManager.getConnection(connectionString);
 Statement e_stmt = null;
 e_stmt = e_conn.createStatement();
 ResultSet e_rs = null;
 CallableStatement e_cs = null;
*/

	Connection e_conn = null;
	Statement e_stmt = null;
	ResultSet e_rs = null;
	CallableStatement e_cs = null;

	try {
		Context initCtx = new InitialContext();
		Context envCtx = (Context) initCtx.lookup("java:comp/env");
		DataSource dataSource2 = (DataSource) envCtx.lookup("jdbc/UNIERP_HSN");
		e_conn = dataSource2.getConnection();
		e_stmt = e_conn.createStatement();

	} catch (NamingException e) {

	}

	

      out.write("\r\n");
      out.write("\r\n");
      out.write("\r\n");

	request.setCharacterEncoding("utf-8");
	ResultSet rs = null;
	CallableStatement cs = null;
	JSONObject jsonObject = new JSONObject();
	JSONArray jsonArray = new JSONArray();
	JSONObject subObject = null;

	try {
		String V_TYPE = request.getParameter("V_TYPE") == null ? "" : request.getParameter("V_TYPE");
		String V_COMP_ID = request.getParameter("V_COMP_ID") == null ? "" : request.getParameter("V_COMP_ID").toUpperCase();
		String V_USR_ID = request.getParameter("V_USR_ID") == null ? "" : request.getParameter("V_USR_ID").toUpperCase();
		String V_GBP_CD = request.getParameter("V_GBP_CD") == null ? "" : request.getParameter("V_GBP_CD").toUpperCase();
		
		
		if (V_TYPE.equals("WS")) {
			String V_M_CHARGE_NO = request.getParameter("V_M_CHARGE_NO") == null ? "" : request.getParameter("V_M_CHARGE_NO").toUpperCase();
			String V_BASE_DT = request.getParameter("V_BASE_DT") == null ? "" : request.getParameter("V_BASE_DT");
			String V_BL_DOC_NO = request.getParameter("V_BL_DOC_NO") == null ? "" : request.getParameter("V_BL_DOC_NO").toUpperCase();
			if(V_BASE_DT.length() > 10){
				V_BASE_DT = V_BASE_DT.substring(0,10);
			}

			
// 			System.out.println(V_TYPE);
// 			System.out.println("V_M_CHARGE_NO : " + V_M_CHARGE_NO);
// 			System.out.println("V_BL_DOC_NO : " + V_BL_DOC_NO);
// 			System.out.println("V_ITEM_NM : " + V_ITEM_NM);
// 			System.out.println("V_BP_CD : " + V_BP_CD);
// 			System.out.println("V_VESSEL_NM : " + V_VESSEL_NM);
// 			System.out.println("V_SHIP_NM : " + V_SHIP_NM);
// 			System.out.println("V_TAX_DT : " + V_TAX_DT);
// 			System.out.println("V_IN_DT : " + V_IN_DT);
			
			cs = conn.prepareCall("{call USP_M_BP_CHARGE_H_MGM(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)}");
			cs.setString(1, V_TYPE); //
			cs.setString(2, V_M_CHARGE_NO); //
			cs.setString(3, V_BASE_DT); //
			cs.setString(4, "00132"); //어짜피 조광만 쓰는거니까 조광 BP_CD 고정으로 넣음.
			cs.setString(5, ""); //
			cs.setString(6, ""); //
			cs.setString(7, ""); //
			cs.setString(8, ""); //
			cs.setInt(9, 0); //
			cs.setString(10,""); //
			cs.setString(11,V_BL_DOC_NO ); //
			cs.setInt(12, 0); // 
			cs.setString(13,""  ); // 
			cs.setString(14,"" ); //
			cs.setInt(15,0); //  
			cs.setString(16,""  ); // 
			cs.setString(17,""  ); // 
			cs.setInt(18,0); // 
			cs.setInt(19,0); // 
			cs.setInt(20,0); // 
			cs.setString(21,""  ); // 
			cs.setInt(22,0); //
			cs.setInt(23,0); // 
			cs.setInt(24,0); //
			cs.setInt(25,0); // 
			cs.setString(26,"" ); //
			cs.setString(27, "" ); // 
			cs.setString(28, V_USR_ID ); // 
			cs.registerOutParameter(29, com.tmax.tibero.TbTypes.CURSOR);
			
			cs.executeQuery();
			rs = (ResultSet) cs.getObject(29);
			
			while (rs.next()) {
				subObject = new JSONObject();
				subObject.put("M_CHARGE_NO", rs.getString("M_CHARGE_NO"));
				subObject.put("BASE_DT", rs.getString("BASE_DT"));
				subObject.put("BL_DOC_NO", rs.getString("BL_DOC_NO"));
				subObject.put("AV_NM", rs.getString("AV_NM"));
				subObject.put("RK_AMT", rs.getString("RK_AMT"));
				subObject.put("ERP_YN", rs.getString("ERP_YN"));
				subObject.put("PAY_YN", rs.getString("PAY_YN"));
				
				
				jsonArray.add(subObject);
			}
			jsonObject.put("success", true);
			jsonObject.put("resultList", jsonArray);

			response.setContentType("text/plain; charset=UTF-8");
			PrintWriter pw = response.getWriter();
			pw.print(jsonObject);
			pw.flush();
			pw.close();
			
		}
		else if (V_TYPE.equals("BPS")) {
			
			String sql = "select A.BP_CD, A.BP_NM, A.BP_RGST_NO REG_NO, replace(A.BP_RGST_NO, '-', '') REG_NO2 from B_BIZ_PARTNER A ";
				sql += " where len(REPLACE(A.BP_RGST_NO, '-', '')) = 10 ";
// 					sql += " UNION ALL ";
// 					sql += " select ' ' BP_CD, null BP_NM, '&nbsp' BP_RGST_NO ";
// 					sql += " order by BP_CD ";
				   //sql += " LEFT OUTER JOIN M_BP_CHARGE_PARTNER B ON A.BP_CD = B.SELECT_BP_CD ";
				   //sql += " where B.MAST_BP_CD = '"  + G_BP_CD +   "'  order by A.BP_NM";
			e_cs = e_conn.prepareCall("{call dbo.getData(?)}");
			e_cs.setString(1, sql); 
			
			rs = e_cs.executeQuery();
			
			while (rs.next()) {
				subObject = new JSONObject();
				subObject.put("DTL_CD", rs.getString("BP_CD"));
				subObject.put("DTL_NM", rs.getString("BP_NM"));
				subObject.put("REG_NO", rs.getString("REG_NO"));
				subObject.put("REG_NO2", rs.getString("REG_NO2"));
				
				jsonArray.add(subObject);
			}
			jsonObject.put("success", true);
			jsonObject.put("resultList", jsonArray);

			response.setContentType("text/plain; charset=UTF-8");
			PrintWriter pw = response.getWriter();
			pw.print(jsonObject);
			pw.flush();
			pw.close();
		}
		else if (V_TYPE.equals("W_D_S")) {
			String V_CHARGE_NM = request.getParameter("V_CHARGE_NM") == null ? "" : request.getParameter("V_CHARGE_NM").toUpperCase();
			
			
			String sql = "select A.JNL_CD CHARGE_TYPE, A.JNL_NM CHARGE_NAME  from A_JNL_ITEM A ";
				   sql += " where A.JNL_NM LIKE '%" + V_CHARGE_NM + "%' and JNL_TYPE = 'EC' ";
			e_cs = e_conn.prepareCall("{call dbo.getData(?)}");
			e_cs.setString(1, sql); 
			
			rs = e_cs.executeQuery();
			
			while (rs.next()) {
				subObject = new JSONObject();
				subObject.put("CHARGE_TYPE", rs.getString("CHARGE_TYPE"));
				subObject.put("CHARGE_NAME", rs.getString("CHARGE_NAME"));
				
				jsonArray.add(subObject);
			}
			jsonObject.put("success", true);
			jsonObject.put("resultList", jsonArray);

			response.setContentType("text/plain; charset=UTF-8");
			PrintWriter pw = response.getWriter();
			pw.print(jsonObject);
			pw.flush();
			pw.close();
		}
		else if (V_TYPE.equals("CHANGE")) {
			String V_M_CHARGE_NO = request.getParameter("V_M_CHARGE_NO") == null ? "" : request.getParameter("V_M_CHARGE_NO").toUpperCase();
			String V_OLD_CHARGE_TYPE = request.getParameter("V_OLD_CHARGE_TYPE") == null ? "" : request.getParameter("V_OLD_CHARGE_TYPE").toUpperCase();
			String V_NEW_CHARGE_TYPE = request.getParameter("V_NEW_CHARGE_TYPE") == null ? "" : request.getParameter("V_NEW_CHARGE_TYPE").toUpperCase();
			
			cs = conn.prepareCall("{call USP_M_BP_CHARGE_D_CHANGE(?,?,?,?,?)}");
			cs.setString(1, V_TYPE); //
			cs.setString(2, V_M_CHARGE_NO); //
			cs.setString(3, V_OLD_CHARGE_TYPE); //
			cs.setString(4, V_NEW_CHARGE_TYPE); //
			cs.setString(5, V_USR_ID); //
			
			cs.executeQuery();
			
			
		}
		
	} catch (Exception e) {

		e.printStackTrace();
	} finally {
		if (cs != null) try {
			cs.close();
		} catch (SQLException ex) {}
		if (rs != null) try {
			rs.close();
		} catch (SQLException ex) {}
		if (stmt != null) try {
			stmt.close();
		} catch (SQLException ex) {}
		if (conn != null) try {
			conn.close();
		} catch (SQLException ex) {}
		
		//MSSQL
		if (e_cs != null) try {
			e_cs.close();
		} catch (SQLException ex) {}
		if (e_rs != null) try {
			e_rs.close();
		} catch (SQLException ex) {}
		if (e_stmt != null) try {
			e_stmt.close();
		} catch (SQLException ex) {}
		if (e_conn != null) try {
			e_conn.close();
		} catch (SQLException ex) {}
	}

      out.write("\r\n");
      out.write("\r\n");
      out.write("\r\n");
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
