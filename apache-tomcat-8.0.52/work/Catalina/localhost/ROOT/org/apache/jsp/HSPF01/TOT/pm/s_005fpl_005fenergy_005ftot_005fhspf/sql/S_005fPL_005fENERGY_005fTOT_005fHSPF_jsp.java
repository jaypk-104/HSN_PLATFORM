/*
 * Generated by the Jasper component of Apache Tomcat
 * Version: Apache Tomcat/8.0.52
 * Generated at: 2021-02-01 01:40:50 UTC
 * Note: The last modified time of this file was set to
 *       the last modified time of the source file after
 *       generation to assist with modification tracking.
 */
package org.apache.jsp.HSPF01.TOT.pm.s_005fpl_005fenergy_005ftot_005fhspf.sql;

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
import org.apache.commons.lang.StringUtils;
import java.sql.*;
import javax.naming.Context;
import javax.naming.InitialContext;
import javax.naming.NamingException;
import javax.sql.DataSource;

public final class S_005fPL_005fENERGY_005fTOT_005fHSPF_jsp extends org.apache.jasper.runtime.HttpJspBase
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
    _jspx_imports_classes.add("org.apache.commons.lang.StringUtils");
    _jspx_imports_classes.add("java.net.URLDecoder");
    _jspx_imports_classes.add("org.json.simple.JSONValue");
    _jspx_imports_classes.add("java.io.StringWriter");
    _jspx_imports_classes.add("javax.sql.DataSource");
    _jspx_imports_classes.add("net.sf.json.JSONObject");
    _jspx_imports_classes.add("java.util.HashMap");
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

	request.setCharacterEncoding("utf-8");
	ResultSet rs = null;
	CallableStatement cs = null;
	JSONObject jsonObject = new JSONObject();
	JSONArray jsonArray = new JSONArray();
	JSONObject subObject = null;

	try {
		String V_COMP_ID = request.getParameter("V_COMP_ID") == null ? "" : request.getParameter("V_COMP_ID");
		String V_TYPE = request.getParameter("V_TYPE") == null ? "" : request.getParameter("V_TYPE");
		String V_S_BP_NM = request.getParameter("V_S_BP_NM") == null ? "" : request.getParameter("V_S_BP_NM");
		String V_DATE = request.getParameter("V_DATE") == null ? "" : request.getParameter("V_DATE").replace("-", "").substring(0, 6);
		String V_ITEM_CD = request.getParameter("V_ITEM_CD") == null ? "" : request.getParameter("V_ITEM_CD").toUpperCase();
		String V_ITEM_NM = request.getParameter("V_ITEM_NM") == null ? "" : request.getParameter("V_ITEM_NM").toUpperCase();
		String V_USR_ID = request.getParameter("V_USR_ID") == null ? "" : request.getParameter("V_USR_ID").toUpperCase();

		if (V_TYPE.equals("S")) {
			cs = conn.prepareCall("call USP_003_S_TOTAL_PROFIT_HSPF(?,?,?,?,?,?,?,?,?)");

			cs.setString(1, V_COMP_ID);//V_COMP_ID 		
			cs.setString(2, V_TYPE);//V_TYPE
			cs.setString(3, V_S_BP_NM);//V_S_BP_CD
			cs.setString(4, V_DATE);//V_YYYYMM
			cs.setString(5, V_USR_ID);//V_USR_ID 		
			cs.registerOutParameter(6, com.tmax.tibero.TbTypes.CURSOR);
			cs.setString(7, V_ITEM_CD);//V_ITEM_CD 		
			cs.setString(8, V_ITEM_NM);//V_ITEM_NM 		
			cs.setString(9, "Y");//V_ENERGY_YN
			cs.executeQuery();
			rs = (ResultSet) cs.getObject(6);

			while (rs.next()) {
				subObject = new JSONObject();
				subObject.put("BILL_DT", rs.getString("BILL_DT"));
				subObject.put("S_BP_CD", rs.getString("S_BP_CD"));
				subObject.put("ITEM_CD", rs.getString("ITEM_CD"));
				subObject.put("ITEM_NM", rs.getString("ITEM_NM"));
				subObject.put("DEPT_CD", rs.getString("DEPT_CD"));
				subObject.put("DEPT_NM", rs.getString("DEPT_NM"));
				subObject.put("S_DEPT_CD", rs.getString("S_DEPT_CD"));
				subObject.put("S_DEPT_NM", rs.getString("S_DEPT_NM"));
				subObject.put("M_BP_CD", rs.getString("M_BP_CD"));
				subObject.put("M_BP_NM", rs.getString("M_BP_NM"));
				subObject.put("S_BP_NM", rs.getString("S_BP_NM"));
				subObject.put("COST_CD", rs.getString("COST_CD"));
				subObject.put("COST_NM", rs.getString("COST_NM"));
				subObject.put("LC_DOC_NO", rs.getString("LC_DOC_NO"));
				subObject.put("BL_DOC_NO", rs.getString("BL_DOC_NO"));
				subObject.put("S_KO_QTY", rs.getString("S_KO_QTY"));
				subObject.put("S_KO_AMT", rs.getString("S_KO_AMT"));
				subObject.put("S_LOC_QTY", rs.getString("S_LOC_QTY"));
				subObject.put("S_LOC_AMT", rs.getString("S_LOC_AMT"));
				subObject.put("S_EXP_QTY", rs.getString("S_EXP_QTY"));
				subObject.put("S_EXP_AMT", rs.getString("S_EXP_AMT"));
				subObject.put("S_MID_QTY", rs.getString("S_MID_QTY"));
				subObject.put("S_MID_AMT", rs.getString("S_MID_AMT"));
				subObject.put("S_TOT_QTY", rs.getString("S_TOT_QTY"));
				subObject.put("S_TOT_AMT", rs.getString("S_TOT_AMT"));
				subObject.put("C_KO_QTY", rs.getString("C_KO_QTY"));
				subObject.put("C_KO_AMT", rs.getString("C_KO_AMT"));
				subObject.put("C_LOC_QTY", rs.getString("C_LOC_QTY"));
				subObject.put("C_LOC_AMT", rs.getString("C_LOC_AMT"));
				subObject.put("C_EXP_QTY", rs.getString("C_EXP_QTY"));
				subObject.put("C_EXP_AMT", rs.getString("C_EXP_AMT"));
				subObject.put("C_MID_QTY", rs.getString("C_MID_QTY"));
				subObject.put("C_MID_AMT", rs.getString("C_MID_AMT"));
				subObject.put("C_TOT_QTY", rs.getString("C_TOT_QTY"));
				subObject.put("C_TOT_AMT", rs.getString("C_TOT_AMT"));
				subObject.put("P_KO_QTY", rs.getString("P_KO_QTY"));
				subObject.put("P_KO_AMT", rs.getString("P_KO_AMT"));
				subObject.put("P_LOC_QTY", rs.getString("P_LOC_QTY"));
				subObject.put("P_LOC_AMT", rs.getString("P_LOC_AMT"));
				subObject.put("P_EXP_QTY", rs.getString("P_EXP_QTY"));
				subObject.put("P_EXP_AMT", rs.getString("P_EXP_AMT"));
				subObject.put("P_MID_QTY", rs.getString("P_MID_QTY"));
				subObject.put("P_MID_AMT", rs.getString("P_MID_AMT"));
				subObject.put("P_TOT_QTY", rs.getString("P_TOT_QTY"));
				subObject.put("P_TOT_AMT", rs.getString("P_TOT_AMT"));
				jsonArray.add(subObject);
			}

			jsonObject.put("success", true);
			jsonObject.put("resultList", jsonArray);

			response.setContentType("text/plain; charset=UTF-8");
			PrintWriter pw = response.getWriter();
			pw.print(jsonObject);
			pw.flush();
			pw.close();

		} else if (V_TYPE.equals("C")) {
			cs = conn.prepareCall("call USP_003_S_TOTAL_PROFIT_HSPF(?,?,?,?,?,?,?,?,?)");

			cs.setString(1, V_COMP_ID);//V_COMP_ID 		
			cs.setString(2, V_TYPE);//V_TYPE
			cs.setString(3, "");//V_S_BP_CD
			cs.setString(4, V_DATE);//V_YYYYMM
			cs.setString(5, V_USR_ID);//V_USR_ID 		
			cs.registerOutParameter(6, com.tmax.tibero.TbTypes.CURSOR);
			cs.setString(7, "");//V_ITEM_CD 		
			cs.setString(8, "");//V_ITEM_NM		
			cs.setString(9, "Y");//V_ENERGY_YN
			cs.executeQuery();
		} 

	} catch (Exception e) {
		response.setContentType("text/plain; charset=UTF-8");
		PrintWriter pw = response.getWriter();
		pw.print(e.toString());
		pw.flush();
		pw.close();

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
