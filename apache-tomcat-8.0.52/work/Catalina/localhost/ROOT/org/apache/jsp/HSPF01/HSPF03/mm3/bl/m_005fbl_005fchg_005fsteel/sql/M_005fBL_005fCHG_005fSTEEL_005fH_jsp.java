/*
 * Generated by the Jasper component of Apache Tomcat
 * Version: Apache Tomcat/8.0.52
 * Generated at: 2021-02-23 23:30:57 UTC
 * Note: The last modified time of this file was set to
 *       the last modified time of the source file after
 *       generation to assist with modification tracking.
 */
package org.apache.jsp.HSPF01.HSPF03.mm3.bl.m_005fbl_005fchg_005fsteel.sql;

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

public final class M_005fBL_005fCHG_005fSTEEL_005fH_jsp extends org.apache.jasper.runtime.HttpJspBase
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
		String V_TYPE = request.getParameter("V_TYPE") == null ? "" : request.getParameter("V_TYPE");
		String V_BL_NO = request.getParameter("V_BL_NO") == null ? "" : request.getParameter("V_BL_NO").toUpperCase();
		String V_BL_DOC_NO = request.getParameter("V_BL_DOC_NO") == null ? "" : request.getParameter("V_BL_DOC_NO").toUpperCase();
		String V_BAS_DT = request.getParameter("V_BAS_DT") == null ? "" : request.getParameter("V_BAS_DT").toUpperCase();
		String V_APPROV_NO = request.getParameter("V_APPROV_NO") == null ? "" : request.getParameter("V_APPROV_NO").toUpperCase();
		String V_APPROV_NM = request.getParameter("V_APPROV_NM") == null ? "" : request.getParameter("V_APPROV_NM").toUpperCase();
		String V_CHG_TYPE_CD = request.getParameter("V_CHG_TYPE_CD") == null ? "" : request.getParameter("V_CHG_TYPE_CD").toUpperCase();
		String V_CHG_REMARK = request.getParameter("V_CHG_REMARK") == null ? "" : request.getParameter("V_CHG_REMARK").toUpperCase();
		String V_COMP_ID = request.getParameter("V_COMP_ID") == null ? "" : request.getParameter("V_COMP_ID").toUpperCase();
		String V_USR_ID = request.getParameter("V_USR_ID") == null ? "" : request.getParameter("V_USR_ID").toUpperCase();
		
		if (V_TYPE.equals("S")) {
			cs = conn.prepareCall("call USP_001_M_BL_CHG_STEEL(?,?,?,?,?,?,?,?,?,?)");

			cs.setString(1, V_TYPE);//V_TYPE
			cs.setString(2, V_BL_NO);//V_BL_NO
			cs.setString(3, V_BL_DOC_NO);//V_BL_DOC_NO
			cs.setString(4, V_BAS_DT);//V_BAS_DT
			cs.setString(5, V_APPROV_NO);//V_APPROV_NO
			cs.setString(6, V_APPROV_NM);//V_APPROV_NM
			cs.setString(7, V_CHG_TYPE_CD);//V_CHG_TYPE_CD
			cs.setString(8, V_CHG_REMARK);//V_CHG_REMARK
			cs.setString(9, V_USR_ID);//V_USR_ID
			cs.registerOutParameter(10, com.tmax.tibero.TbTypes.CURSOR);
			cs.executeQuery();
			rs = (ResultSet) cs.getObject(10);

			while (rs.next()) {
				subObject = new JSONObject();
				subObject.put("V_TYPE", V_TYPE); // 수정 예정
				subObject.put("BL_NO", rs.getString("BL_NO"));
				subObject.put("BL_DOC_NO", rs.getString("BL_DOC_NO"));
				subObject.put("BAS_DT", rs.getString("BAS_DT"));
				subObject.put("APPROV_NO", rs.getString("APPROV_NO"));
				subObject.put("APPROV_NM", rs.getString("APPROV_NM"));
				subObject.put("CHG_TYPE_CD", rs.getString("CHG_TYPE_CD"));
				subObject.put("CHG_TYPE_NM", rs.getString("CHG_TYPE_NM"));
				subObject.put("CHG_REMARK", rs.getString("CHG_REMARK"));
				
				jsonArray.add(subObject);
			}

			jsonObject.put("success", true);
			jsonObject.put("resultList", jsonArray);

			response.setContentType("text/plain; charset=UTF-8");
			PrintWriter pw = response.getWriter();
			pw.print(jsonObject);
			pw.flush();
			pw.close();

		} else if (V_TYPE.equals("P")){
			cs = conn.prepareCall("call USP_001_M_BL_CHG_STEEL(?,?,?,?,?,?,?,?,?,?)");

			cs.setString(1, V_TYPE);//V_TYPE
			cs.setString(2, V_BL_NO);//V_BL_NO
			cs.setString(3, V_BL_DOC_NO);//V_BL_DOC_NO
			cs.setString(4, V_BAS_DT);//V_BAS_DT
			cs.setString(5, V_APPROV_NO);//V_APPROV_NO
			cs.setString(6, V_APPROV_NM);//V_APPROV_NM
			cs.setString(7, V_CHG_TYPE_CD);//V_CHG_TYPE_CD
			cs.setString(8, V_CHG_REMARK);//V_CHG_REMARK
			cs.setString(9, V_USR_ID);//V_USR_ID
			cs.registerOutParameter(10, com.tmax.tibero.TbTypes.CURSOR);
			cs.executeQuery();
			rs = (ResultSet) cs.getObject(10);

			while (rs.next()) {
				subObject = new JSONObject();
				subObject.put("BL_NO", rs.getString("BL_NO"));
				subObject.put("BL_DOC_NO", rs.getString("BL_DOC_NO"));
				subObject.put("LOADING_DT", rs.getString("LOADING_DT"));
				subObject.put("APPROV_NO", rs.getString("APPROV_NO"));
				subObject.put("APPROV_NM", rs.getString("APPROV_NM"));
				subObject.put("SALE_TYPE_NM", rs.getString("SALE_TYPE_NM"));
				
				jsonArray.add(subObject);
			}

			jsonObject.put("success", true);
			jsonObject.put("resultList", jsonArray);

			response.setContentType("text/plain; charset=UTF-8");
			PrintWriter pw = response.getWriter();
			pw.print(jsonObject);
			pw.flush();
			pw.close();
		
		}else if (V_TYPE.equals("I") || V_TYPE.equals("D")) {
			request.setCharacterEncoding("utf-8");
			String[] findList = { "#", "+", "&", "%", " " };
			String[] replList = { "%23", "%2B", "%26", "%25", "%20" };

			String data = request.getParameter("data");
			data = StringUtils.replaceEach(data, findList, replList);
			String jsonData = URLDecoder.decode(data, "UTF-8");
			
			if (jsonData.lastIndexOf("},{") > 0) { //배열인 경우
				JSONArray jsonAr = (JSONArray) JSONValue.parse(jsonData);
				for (int i = 0; i < jsonAr.size(); i++) {
					HashMap hashMap = (HashMap) jsonAr.get(i);
					
					V_TYPE = hashMap.get("V_TYPE") == null ? "" : hashMap.get("V_TYPE").toString();
					V_BL_NO = hashMap.get("BL_NO") == null ? "" : hashMap.get("BL_NO").toString();
					V_BL_DOC_NO = hashMap.get("BL_DOC_NO") == null ? "" : hashMap.get("BL_DOC_NO").toString();
					V_BAS_DT = hashMap.get("BAS_DT") == null ? "" : hashMap.get("BAS_DT").toString().substring(0, 10);
					V_APPROV_NO = hashMap.get("APPROV_NO") == null ? "" : hashMap.get("APPROV_NO").toString();
					V_APPROV_NM = hashMap.get("APPROV_NM") == null ? "" : hashMap.get("APPROV_NM").toString();
					V_CHG_TYPE_CD = hashMap.get("CHG_TYPE_CD") == null ? "" : hashMap.get("CHG_TYPE_CD").toString();
					V_CHG_REMARK = hashMap.get("CHG_REMARK") == null ? "" : hashMap.get("CHG_REMARK").toString();
					
					cs = conn.prepareCall("call USP_001_M_BL_CHG_STEEL(?,?,?,?,?,?,?,?,?,?)");
					cs.setString(1, V_TYPE);//V_TYPE
					cs.setString(2, V_BL_NO);//V_BL_NO
					cs.setString(3, V_BL_DOC_NO);//V_BL_DOC_NO
					cs.setString(4, V_BAS_DT);//V_BAS_DT
					cs.setString(5, V_APPROV_NO);//V_APPROV_NO
					cs.setString(6, V_APPROV_NM);//V_APPROV_NM
					cs.setString(7, V_CHG_TYPE_CD);//V_CHG_TYPE_CD
					cs.setString(8, V_CHG_REMARK);//V_CHG_REMARK
					cs.setString(9, V_USR_ID);//V_USR_ID
					cs.registerOutParameter(10, com.tmax.tibero.TbTypes.CURSOR);
					cs.executeQuery();
					
					response.setContentType("text/plain; charset=UTF-8");
					PrintWriter pw = response.getWriter();
					pw.print("success");
					pw.flush();
					pw.close();
				}
			} else {
				JSONObject jsonItem = JSONObject.fromObject(jsonData);
				
				V_TYPE = jsonItem.get("V_TYPE") == null ? "" : jsonItem.get("V_TYPE").toString();
				V_BL_NO = jsonItem.get("BL_NO") == null ? "" : jsonItem.get("BL_NO").toString();
				V_BL_DOC_NO = jsonItem.get("BL_DOC_NO") == null ? "" : jsonItem.get("BL_DOC_NO").toString();
				V_BAS_DT = jsonItem.get("BAS_DT") == null ? "" : jsonItem.get("BAS_DT").toString().substring(0, 10);
				V_APPROV_NO = jsonItem.get("APPROV_NO") == null ? "" : jsonItem.get("APPROV_NO").toString();
				V_APPROV_NM = jsonItem.get("APPROV_NM") == null ? "" : jsonItem.get("APPROV_NM").toString();
				V_CHG_TYPE_CD = jsonItem.get("CHG_TYPE_CD") == null ? "" : jsonItem.get("CHG_TYPE_CD").toString();
				V_CHG_REMARK = jsonItem.get("CHG_REMARK") == null ? "" : jsonItem.get("CHG_REMARK").toString();
				
				cs = conn.prepareCall("call USP_001_M_BL_CHG_STEEL(?,?,?,?,?,?,?,?,?,?)");
				cs.setString(1, V_TYPE);//V_TYPE
				cs.setString(2, V_BL_NO);//V_BL_NO
				cs.setString(3, V_BL_DOC_NO);//V_BL_DOC_NO
				cs.setString(4, V_BAS_DT);//V_BAS_DT
				cs.setString(5, V_APPROV_NO);//V_APPROV_NO
				cs.setString(6, V_APPROV_NM);//V_APPROV_NM
				cs.setString(7, V_CHG_TYPE_CD);//V_CHG_TYPE_CD
				cs.setString(8, V_CHG_REMARK);//V_CHG_REMARK
				cs.setString(9, V_USR_ID);//V_USR_ID
				cs.registerOutParameter(10, com.tmax.tibero.TbTypes.CURSOR);
				cs.executeQuery();
				
				response.setContentType("text/plain; charset=UTF-8");
				PrintWriter pw = response.getWriter();
				pw.print("success");
				pw.flush();
				pw.close();
			}

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
