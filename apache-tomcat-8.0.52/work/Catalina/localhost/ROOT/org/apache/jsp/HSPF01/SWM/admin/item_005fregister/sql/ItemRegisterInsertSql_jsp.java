/*
 * Generated by the Jasper component of Apache Tomcat
 * Version: Apache Tomcat/8.0.52
 * Generated at: 2021-02-05 01:43:43 UTC
 * Note: The last modified time of this file was set to
 *       the last modified time of the source file after
 *       generation to assist with modification tracking.
 */
package org.apache.jsp.HSPF01.SWM.admin.item_005fregister.sql;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.jsp.*;
import javax.servlet.jsp.tagext.TryCatchFinally;
import java.io.PrintWriter;
import java.net.URLDecoder;
import java.util.HashMap;
import org.json.simple.JSONArray;
import org.json.simple.JSONValue;
import net.sf.json.JSONObject;
import java.sql.*;
import java.util.Enumeration;
import java.util.Map;
import java.util.TreeMap;
import org.apache.commons.lang.StringUtils;
import java.sql.*;
import javax.naming.Context;
import javax.naming.InitialContext;
import javax.naming.NamingException;
import javax.sql.DataSource;

public final class ItemRegisterInsertSql_jsp extends org.apache.jasper.runtime.HttpJspBase
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
    _jspx_imports_classes.add("java.util.Enumeration");
    _jspx_imports_classes.add("java.util.HashMap");
    _jspx_imports_classes.add("javax.naming.NamingException");
    _jspx_imports_classes.add("org.json.simple.JSONArray");
    _jspx_imports_classes.add("java.util.TreeMap");
    _jspx_imports_classes.add("org.json.simple.JSONValue");
    _jspx_imports_classes.add("java.util.Map");
    _jspx_imports_classes.add("javax.sql.DataSource");
    _jspx_imports_classes.add("net.sf.json.JSONObject");
    _jspx_imports_classes.add("javax.naming.Context");
    _jspx_imports_classes.add("javax.servlet.jsp.tagext.TryCatchFinally");
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
	try {
		JSONObject jsonObject = new JSONObject();
		JSONArray jsonArray = new JSONArray();
		JSONObject subObject = null;

		request.setCharacterEncoding("utf-8");

		String[] findList = { "#", "+", "&", "%", " " };
		String[] replList = { "%23", "%2B", "%26", "%25", "%20" };

		String data = request.getParameter("data");
		data = StringUtils.replaceEach(data, findList, replList);
		String jsonData = URLDecoder.decode(data, "UTF-8");

		// 		String V_TYPE = request.getParameter("V_TYPE"); //
		String V_USR_ID = request.getParameter("V_USR_ID");

		if (jsonData.lastIndexOf("},{") > 0) { //배열일경우
			JSONArray jsonAr = (JSONArray) JSONValue.parse(jsonData);
			String NEW_PO_NO = "";
			for (int i = 0; i < jsonAr.size(); i++) {
				HashMap hashMap = (HashMap) jsonAr.get(i);
				String BP_ITEM_CD = hashMap.get("BP_ITEM_CD") == null ? "" : hashMap.get("BP_ITEM_CD").toString();
				String ITEM_CD = hashMap.get("ITEM_CD") == null ? "" : hashMap.get("ITEM_CD").toString();
				String S_BP_CD = hashMap.get("S_BP_CD") == null ? "" : hashMap.get("S_BP_CD").toString();
				String M_BP_CD = hashMap.get("M_BP_CD") == null ? "" : hashMap.get("M_BP_CD").toString();
				String ITEM_NM = hashMap.get("ITEM_NM") == null ? "" : hashMap.get("ITEM_NM").toString();
				String UNIT = hashMap.get("UNIT") == null ? "" : hashMap.get("UNIT").toString();
				String SPEC = hashMap.get("SPEC") == null ? "" : hashMap.get("SPEC").toString();
				String MID_PACK_QTY = hashMap.get("MID_PACK_QTY") == null ? "" : hashMap.get("MID_PACK_QTY").toString();
				String MAX_PACK_QTY = hashMap.get("MAX_PACK_QTY") == null ? "" : hashMap.get("MAX_PACK_QTY").toString();
				String M_PRICE = hashMap.get("M_PRICE") == null ? "" : hashMap.get("M_PRICE").toString();
				String S_PRICE = hashMap.get("S_PRICE") == null ? "" : hashMap.get("S_PRICE").toString();
				String HSCODE = hashMap.get("HSCODE") == null ? "" : hashMap.get("HSCODE").toString();
				String WEIGHT = hashMap.get("WEIGHT") == null ? "" : hashMap.get("WEIGHT").toString();

				cs = conn.prepareCall("{call USP_SWM_ITEM_REGISTER(?,?,?,?,?,?,?,?,?,?,?,?,?,?)}");
				cs.setString(1, BP_ITEM_CD);
				cs.setString(2, ITEM_CD);
				cs.setString(3, S_BP_CD);
				cs.setString(4, M_BP_CD);
				cs.setString(5, ITEM_NM);
				cs.setString(6, UNIT);
				cs.setString(7, SPEC);
				cs.setString(8, MID_PACK_QTY);
				cs.setString(9, MAX_PACK_QTY);
				cs.setString(10, M_PRICE);
				cs.setString(11, S_PRICE);
				cs.setString(12, HSCODE);
				cs.setString(13, "");
				cs.setString(14, V_USR_ID);
				cs.execute();
			}
		} else {
			String NEW_PO_NO = "";

			JSONObject jsondata = JSONObject.fromObject(jsonData);
			String BP_ITEM_CD = jsondata.get("BP_ITEM_CD") == null ? "" : jsondata.get("BP_ITEM_CD").toString();
			String ITEM_CD = jsondata.get("ITEM_CD") == null ? "" : jsondata.get("ITEM_CD").toString();
			String S_BP_CD = jsondata.get("S_BP_CD") == null ? "" : jsondata.get("S_BP_CD").toString();
			String M_BP_CD = jsondata.get("M_BP_CD") == null ? "" : jsondata.get("M_BP_CD").toString();
			String ITEM_NM = jsondata.get("ITEM_NM") == null ? "" : jsondata.get("ITEM_NM").toString();
			String UNIT = jsondata.get("UNIT") == null ? "" : jsondata.get("UNIT").toString();
			String SPEC = jsondata.get("SPEC") == null ? "" : jsondata.get("SPEC").toString();
			String MID_PACK_QTY = jsondata.get("MID_PACK_QTY") == null ? "" : jsondata.get("MID_PACK_QTY").toString();
			String MAX_PACK_QTY = jsondata.get("MAX_PACK_QTY") == null ? "" : jsondata.get("MAX_PACK_QTY").toString();
			String M_PRICE = jsondata.get("M_PRICE") == null ? "" : jsondata.get("M_PRICE").toString();
			String S_PRICE = jsondata.get("S_PRICE") == null ? "" : jsondata.get("S_PRICE").toString();
			String HSCODE = jsondata.get("HSCODE") == null ? "" : jsondata.get("HSCODE").toString();
			String WEIGHT = jsondata.get("WEIGHT") == null ? "" : jsondata.get("WEIGHT").toString();
			
// 			System.out.println("MID_PACK_QTY : " + MID_PACK_QTY);
// 			System.out.println("MAX_PACK_QTY : " + MAX_PACK_QTY);
// 			System.out.println("M_PRICE : " + M_PRICE);
// 			System.out.println("S_PRICE : " + S_PRICE);
// 			System.out.println("WEIGHT : " + WEIGHT);

			cs = conn.prepareCall("{call USP_SWM_ITEM_REGISTER(?,?,?,?,?,?,?,?,?,?,?,?,?,?)}");
			cs.setString(1, BP_ITEM_CD);
			cs.setString(2, ITEM_CD);
			cs.setString(3, S_BP_CD);
			cs.setString(4, M_BP_CD);
			cs.setString(5, ITEM_NM);
			cs.setString(6, UNIT);
			cs.setString(7, SPEC);
			cs.setString(8, MID_PACK_QTY);
			cs.setString(9, MAX_PACK_QTY);
			cs.setString(10, M_PRICE);
			cs.setString(11, S_PRICE);
			cs.setString(12, HSCODE);
			cs.setString(13, "");
			cs.setString(14, V_USR_ID);

			cs.execute();
		}

	} catch (Exception e) {
		e.printStackTrace();
	} finally {
		if (rs != null) try {
			rs.close();
		} catch (SQLException ex) {}
		if (cs != null) try {
			cs.close();
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
      out.write("\r\n");
      out.write("\r\n");
      out.write("\r\n");
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