/*
 * Generated by the Jasper component of Apache Tomcat
 * Version: Apache Tomcat/8.0.52
 * Generated at: 2021-02-01 01:41:02 UTC
 * Note: The last modified time of this file was set to
 *       the last modified time of the source file after
 *       generation to assist with modification tracking.
 */
package org.apache.jsp.HSPF01.ACT.nfund.a_005ffnote_005fhspf.sql;

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

public final class A_005fFNOTE_005fHSPF_jsp extends org.apache.jasper.runtime.HttpJspBase
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
		String V_DT_FR = request.getParameter("V_BANK_DT_FR") == null ? "" : request.getParameter("V_BANK_DT_FR").toUpperCase().substring(0, 10);
		String V_DT_TO = request.getParameter("V_BANK_DT_TO") == null ? "" : request.getParameter("V_BANK_DT_TO").toUpperCase().substring(0, 10);
		String V_BP_CD = request.getParameter("V_BP_CD") == null ? "" : request.getParameter("V_BP_CD").toUpperCase();
// 		String V_BANK_CD = request.getParameter("V_BANK_CD") == null ? "" : request.getParameter("V_BANK_CD").toUpperCase();
		String V_USR_ID = request.getParameter("V_USR_ID") == null ? "" : request.getParameter("V_USR_ID").toUpperCase();

		if (V_TYPE.equals("S")) {
			cs = conn.prepareCall("call USP_A_NOTE_STAT_HSPF(?,?,?,?,?,?,?,?)");
			cs.setString(1, V_COMP_ID);//V_COMP_ID
			cs.setString(2, V_TYPE);//V_TYPE
			cs.setString(3, V_DT_FR);//V_DT_FR
			cs.setString(4, V_DT_TO);//V_DT_TO
			cs.setString(5, "");//V_DEPT_CD
			cs.registerOutParameter(6, com.tmax.tibero.TbTypes.CURSOR);
			cs.setString(7, V_BP_CD);//V_BP_CD
			cs.setString(8, "");//V_REMARK
			cs.executeQuery();

			rs = (ResultSet) cs.getObject(6);
			while (rs.next()) {
				subObject = new JSONObject();
				subObject.put("NOTE_NO", rs.getString("NOTE_NO"));
				subObject.put("ISSUE_DT", rs.getString("ISSUE_DT"));
				subObject.put("DUE_DT", rs.getString("DUE_DT"));
				subObject.put("BAE_DT", rs.getString("BAE_DT"));
				subObject.put("DEPT_CD", rs.getString("DEPT_CD"));
				subObject.put("DEPT_NM", rs.getString("DEPT_NM"));
				subObject.put("BP_CD", rs.getString("BP_CD"));
				subObject.put("BP_NM", rs.getString("BP_NM"));
				subObject.put("BANK_CD", rs.getString("BANK_CD"));
				subObject.put("BANK_NM", rs.getString("BANK_NM"));
				subObject.put("BP_REG_NO", rs.getString("BP_REG_NO"));
				subObject.put("BANK_ACCT_NO", rs.getString("BANK_ACCT_NO"));
				subObject.put("CUR", rs.getString("CUR"));
				subObject.put("NOTE_AMT", rs.getString("NOTE_AMT"));
				subObject.put("BAE_AMT", rs.getString("BAE_AMT"));
				subObject.put("REMAIN_AMT", rs.getString("REMAIN_AMT"));
				subObject.put("TEMP_GL_YN", rs.getString("TEMP_GL_YN"));
				subObject.put("FNOTE_YN", rs.getString("FNOTE_YN"));
				subObject.put("PAPER_YN", rs.getString("PAPER_YN"));
				subObject.put("REMARK", rs.getString("REMARK"));
				jsonArray.add(subObject);
			}

			jsonObject.put("success", true);
			jsonObject.put("resultList", jsonArray);

			response.setContentType("text/plain; charset=UTF-8");
			PrintWriter pw = response.getWriter();
			pw.print(jsonObject);
			pw.flush();
			pw.close();

		} else if (V_TYPE.equals("SYNC")) {
			request.setCharacterEncoding("utf-8");
			String[] findList = { "#", "+", "&", "%", " " };
			String[] replList = { "%23", "%2B", "%26", "%25", "%20" };

			String data = request.getParameter("data");
			data = StringUtils.replaceEach(data, findList, replList);
			String jsonData = URLDecoder.decode(data, "UTF-8");

			if (jsonData.lastIndexOf("},{") > 0) { //배열일경우
				JSONArray jsonAr = (JSONArray) JSONValue.parse(jsonData);

				for (int i = 0; i < jsonAr.size(); i++) {
					HashMap hashMap = (HashMap) jsonAr.get(i);
					V_TYPE = hashMap.get("V_TYPE") == null ? "" : hashMap.get("V_TYPE").toString();
					V_BP_CD = hashMap.get("BP_CD") == null ? "" : hashMap.get("BP_CD").toString();
					String V_NOTE_NO = hashMap.get("NOTE_NO") == null ? "" : hashMap.get("NOTE_NO").toString();
					String V_PAPER_YN = hashMap.get("PAPER_YN") == null ? "" : hashMap.get("PAPER_YN").toString();
					String V_NOTE_AMT = hashMap.get("NOTE_AMT") == null ? "" : hashMap.get("NOTE_AMT").toString();
					String V_BAE_AMT = hashMap.get("BAE_AMT") == null ? "" : hashMap.get("BAE_AMT").toString();
					String V_BP_NM = hashMap.get("BP_NM") == null ? "" : hashMap.get("BP_NM").toString();
					String V_BANK_CD = hashMap.get("BANK_CD") == null ? "" : hashMap.get("BANK_CD").toString();
					String V_BANK_NM = hashMap.get("BANK_NM") == null ? "" : hashMap.get("BANK_NM").toString();
					String V_DEPT_CD = hashMap.get("DEPT_CD") == null ? "" : hashMap.get("DEPT_CD").toString();
					String V_DEPT_NM = hashMap.get("DEPT_NM") == null ? "" : hashMap.get("DEPT_NM").toString();
					String V_BANK_ACCT_NO = hashMap.get("BANK_ACCT_NO") == null ? "" : hashMap.get("BANK_ACCT_NO").toString();
					String V_REMARK = hashMap.get("REMARK") == null ? "" : hashMap.get("REMARK").toString();
					
					String V_ISSUE_DT = hashMap.get("ISSUE_DT") == null ? "" : hashMap.get("ISSUE_DT").toString();
					String V_BAE_DT = hashMap.get("BAE_DT") == null ? "" : hashMap.get("BAE_DT").toString();
					String V_DUE_DT = hashMap.get("DUE_DT") == null ? "" : hashMap.get("DUE_DT").toString();

					if(V_ISSUE_DT.length() > 10 ){
						V_ISSUE_DT = V_ISSUE_DT.substring(0,10);
					}
					else {
						V_ISSUE_DT = "";
					}
					if(V_BAE_DT.length() > 10 ){
						V_BAE_DT = V_BAE_DT.substring(0,10);
					}
					else {
						V_BAE_DT = "";
					}
					if(V_DUE_DT.length() > 10 ){
						V_DUE_DT = V_DUE_DT.substring(0,10);
					}
					else {
						V_DUE_DT = "";
					}
					
					cs = conn.prepareCall("call USP_A_FNOTE_HSPF(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)");
					cs.setString(1, V_COMP_ID);//V_COMP_ID 		
					cs.setString(2, V_TYPE);//V_TYPE
					cs.setString(3, V_NOTE_NO);//V_NOTE_NO 
					cs.setString(4, V_PAPER_YN);//V_PAPER_YN
					cs.setString(5, V_NOTE_AMT);//V_NOTE_AMT
					cs.setString(6, V_BAE_AMT);//V_BAE_AMT
					cs.setString(7, V_ISSUE_DT);//V_ISSUE_DT
					cs.setString(8, V_BAE_DT);//V_BAE_DT
					cs.setString(9, V_DUE_DT);//V_DUE_DT
					cs.setString(10, V_BP_CD);//V_BP_CD
					cs.setString(11, V_BP_NM);//V_BP_NM
					cs.setString(12, V_BANK_CD);//V_BANK_CD
					cs.setString(13, V_BANK_NM);//V_BANK_NM
					cs.setString(14, V_BANK_ACCT_NO);//V_BANK_ACCT_NO
					cs.setString(15, V_DEPT_CD);//V_DEPT_CD
					cs.setString(16, V_DEPT_NM);//V_DEPT_NM
					cs.setString(17, V_REMARK);//V_REMARK
					cs.setString(18, V_USR_ID);//V_USR_ID
					cs.executeQuery();

				}
			} else {

				JSONObject jsondata = JSONObject.fromObject(jsonData);
				V_TYPE = jsondata.get("V_TYPE") == null ? "" : jsondata.get("V_TYPE").toString();
				V_BP_CD = jsondata.get("BP_CD") == null ? "" : jsondata.get("BP_CD").toString();
				String V_NOTE_NO = jsondata.get("NOTE_NO") == null ? "" : jsondata.get("NOTE_NO").toString();
				String V_PAPER_YN = jsondata.get("PAPER_YN") == null ? "" : jsondata.get("PAPER_YN").toString();
				String V_NOTE_AMT = jsondata.get("NOTE_AMT") == null ? "" : jsondata.get("NOTE_AMT").toString();
				String V_BAE_AMT = jsondata.get("BAE_AMT") == null ? "" : jsondata.get("BAE_AMT").toString();
				String V_BP_NM = jsondata.get("BP_NM") == null ? "" : jsondata.get("BP_NM").toString();
				String V_BANK_CD = jsondata.get("BANK_CD") == null ? "" : jsondata.get("BANK_CD").toString();
				String V_BANK_NM = jsondata.get("BANK_NM") == null ? "" : jsondata.get("BANK_NM").toString();
				String V_DEPT_CD = jsondata.get("DEPT_CD") == null ? "" : jsondata.get("DEPT_CD").toString();
				String V_DEPT_NM = jsondata.get("DEPT_NM") == null ? "" : jsondata.get("DEPT_NM").toString();
				String V_BANK_ACCT_NO = jsondata.get("BANK_ACCT_NO") == null ? "" : jsondata.get("BANK_ACCT_NO").toString();
				String V_REMARK = jsondata.get("REMARK") == null ? "" : jsondata.get("REMARK").toString();
				
				String V_ISSUE_DT = jsondata.get("ISSUE_DT") == null ? "" : jsondata.get("ISSUE_DT").toString();
				String V_BAE_DT = jsondata.get("BAE_DT") == null ? "" : jsondata.get("BAE_DT").toString();
				String V_DUE_DT = jsondata.get("DUE_DT") == null ? "" : jsondata.get("DUE_DT").toString();

				if(V_ISSUE_DT.length() > 10 ){
					V_ISSUE_DT = V_ISSUE_DT.substring(0,10);
				}
				else {
					V_ISSUE_DT = "";
				}
				if(V_BAE_DT.length() > 10 ){
					V_BAE_DT = V_BAE_DT.substring(0,10);
				}
				else {
					V_BAE_DT = "";
				}
				if(V_DUE_DT.length() > 10 ){
					V_DUE_DT = V_DUE_DT.substring(0,10);
				}
				else {
					V_DUE_DT = "";
				}
				
				cs = conn.prepareCall("call USP_A_FNOTE_HSPF(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)");
				cs.setString(1, V_COMP_ID);//V_COMP_ID 		
				cs.setString(2, V_TYPE);//V_TYPE
				cs.setString(3, V_NOTE_NO);//V_NOTE_NO 
				cs.setString(4, V_PAPER_YN);//V_PAPER_YN
				cs.setString(5, V_NOTE_AMT);//V_NOTE_AMT
				cs.setString(6, V_BAE_AMT);//V_BAE_AMT
				cs.setString(7, V_ISSUE_DT);//V_ISSUE_DT
				cs.setString(8, V_BAE_DT);//V_BAE_DT
				cs.setString(9, V_DUE_DT);//V_DUE_DT
				cs.setString(10, V_BP_CD);//V_BP_CD
				cs.setString(11, V_BP_NM);//V_BP_NM
				cs.setString(12, V_BANK_CD);//V_BANK_CD
				cs.setString(13, V_BANK_NM);//V_BANK_NM
				cs.setString(14, V_BANK_ACCT_NO);//V_BANK_ACCT_NO
				cs.setString(15, V_DEPT_CD);//V_DEPT_CD
				cs.setString(16, V_DEPT_NM);//V_DEPT_NM
				cs.setString(17, V_REMARK);//V_REMARK
				cs.setString(18, V_USR_ID);//V_USR_ID
				cs.executeQuery();
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