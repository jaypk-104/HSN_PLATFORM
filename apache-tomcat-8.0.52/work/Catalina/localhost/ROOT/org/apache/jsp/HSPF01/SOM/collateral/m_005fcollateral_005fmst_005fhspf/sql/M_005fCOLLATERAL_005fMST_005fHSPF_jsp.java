/*
 * Generated by the Jasper component of Apache Tomcat
 * Version: Apache Tomcat/8.0.52
 * Generated at: 2021-02-01 02:10:52 UTC
 * Note: The last modified time of this file was set to
 *       the last modified time of the source file after
 *       generation to assist with modification tracking.
 */
package org.apache.jsp.HSPF01.SOM.collateral.m_005fcollateral_005fmst_005fhspf.sql;

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

public final class M_005fCOLLATERAL_005fMST_005fHSPF_jsp extends org.apache.jasper.runtime.HttpJspBase
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
		String V_COLLATERAL_NO = request.getParameter("V_COLLATERAL_NO") == null ? "" : request.getParameter("V_COLLATERAL_NO").toUpperCase();
		String V_ASGN_DT_FR = request.getParameter("V_ASGN_DT_FR") == null ? "" : request.getParameter("V_ASGN_DT_FR").substring(0, 10);
		String V_ASGN_DT_TO = request.getParameter("V_ASGN_DT_TO") == null ? "" : request.getParameter("V_ASGN_DT_TO").substring(0, 10);
		String V_USR_ID = request.getParameter("V_USR_ID") == null ? "" : request.getParameter("V_USR_ID").toUpperCase();
		String V_USE_YN = request.getParameter("V_USE_YN") == null ? "" : request.getParameter("V_USE_YN").toUpperCase();
		String V_DB_TYPE = request.getParameter("V_DB_TYPE") == null ? "" : request.getParameter("V_DB_TYPE").toUpperCase();
		
		if (V_TYPE.equals("SH")) {
			cs = conn.prepareCall("call USP_004_M_COLLATERAL_MST_HSPF(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)");

			cs.setString(1, V_COMP_ID);//V_COMP_ID 		
			cs.setString(2, V_TYPE);//V_TYPE
			cs.setString(3, V_COLLATERAL_NO);//V_COLLATERAL_NO 
			cs.setString(4, "");//V_BP_CD 		
			cs.setString(5, "");//V_ASGN_DT 		
			cs.setString(6, "");//V_RENEW_DT 		
			cs.setString(7, "");//V_EFFECTIVE_DT 	
			cs.setString(8, "");//V_EXPIRY_DT 	
			cs.setString(9, "");//V_ASGN_AMT 		
			cs.setString(10, "");//V_WARNT_ORG_NM 	
			cs.setString(11, "");//V_STOCK_NO 		
			cs.setString(12, "");//V_DEL_DT 		
			cs.setString(13, "");//V_REMARK 		
			cs.setString(14, "");//V_USE_YN 		
			cs.setString(15, "");//V_USE_AMT 		
			cs.setString(16, "B");//V_DB_TYPE 		
			cs.setString(17, "");//V_COLLATERAL_AMT
			cs.setString(18, "");//V_SENIOR_AMT 	
			cs.setString(19, "");//V_ACCEPTS 		
			cs.setString(20, "");//V_DEBTOR 		
			cs.setString(21, "");//V_DEBTOR_ADDR 	
			cs.setString(22, "");//V_DB_TYPE2 		
			cs.setString(23, "");//V_DEPT_CD 		
			cs.setString(24, "");//V_TYPE_CD2 		
			cs.setString(25, "");//V_SEQ_D	
			cs.setString(26, V_USR_ID);//V_USR_ID 		
			cs.registerOutParameter(27, com.tmax.tibero.TbTypes.CURSOR);
			cs.executeQuery();
			rs = (ResultSet) cs.getObject(27);

			while (rs.next()) {
				subObject = new JSONObject();
				subObject.put("COLLATERAL_NO", rs.getString("COLLATERAL_NO"));
				subObject.put("BP_CD", rs.getString("BP_CD"));
				subObject.put("BP_NM", rs.getString("BP_NM"));
				subObject.put("ASGN_DT", rs.getString("ASGN_DT"));
				subObject.put("RENEW_DT", rs.getString("RENEW_DT"));
				subObject.put("EFFECTIVE_DT", rs.getString("EFFECTIVE_DT"));
				subObject.put("EXPIRY_DT", rs.getString("EXPIRY_DT"));
				subObject.put("ASGN_AMT", rs.getString("ASGN_AMT"));
				subObject.put("WARNT_ORG_NM", rs.getString("WARNT_ORG_NM"));
				subObject.put("STOCK_NO", rs.getString("STOCK_NO"));
				subObject.put("DEL_DT", rs.getString("DEL_DT"));
				subObject.put("REMARK", rs.getString("REMARK"));
				subObject.put("USE_YN", rs.getString("USE_YN"));
				subObject.put("USE_AMT", rs.getString("USE_AMT"));
				subObject.put("DB_TYPE", rs.getString("DB_TYPE"));
				subObject.put("COLLATERAL_AMT", rs.getString("COLLATERAL_AMT"));
				subObject.put("SENIOR_AMT", rs.getString("SENIOR_AMT"));
				subObject.put("ACCEPTS", rs.getString("ACCEPTS"));
				subObject.put("DEBTOR", rs.getString("DEBTOR"));
				subObject.put("DEBTOR_ADDR", rs.getString("DEBTOR_ADDR"));
				subObject.put("DB_TYPE2", rs.getString("DB_TYPE2"));
				subObject.put("DB_TYPE_NM", rs.getString("DB_TYPE_NM"));
				subObject.put("DEPT_CD", rs.getString("DEPT_CD"));
				subObject.put("DEPT_NM", rs.getString("DEPT_NM"));
				
				jsonArray.add(subObject);
			}

			jsonObject.put("success", true);
			jsonObject.put("resultList", jsonArray);

			response.setContentType("text/plain; charset=UTF-8");
			PrintWriter pw = response.getWriter();
			pw.print(jsonObject);
			pw.flush();
			pw.close();

		} else if (V_TYPE.equals("DS")){
			cs = conn.prepareCall("call USP_004_M_COLLATERAL_MST_HSPF(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)");

			cs.setString(1, V_COMP_ID);//V_COMP_ID 		
			cs.setString(2, V_TYPE);//V_TYPE
			cs.setString(3, V_COLLATERAL_NO);//V_COLLATERAL_NO 
			cs.setString(4, "");//V_BP_CD 		
			cs.setString(5, "");//V_ASGN_DT 		
			cs.setString(6, "");//V_RENEW_DT 		
			cs.setString(7, "");//V_EFFECTIVE_DT 	
			cs.setString(8, "");//V_EXPIRY_DT 	
			cs.setString(9, "");//V_ASGN_AMT 		
			cs.setString(10, "");//V_WARNT_ORG_NM 	
			cs.setString(11, "");//V_STOCK_NO 		
			cs.setString(12, "");//V_DEL_DT 		
			cs.setString(13, "");//V_REMARK 		
			cs.setString(14, "");//V_USE_YN 		
			cs.setString(15, "");//V_USE_AMT 		
			cs.setString(16, "B");//V_DB_TYPE 		
			cs.setString(17, "");//V_COLLATERAL_AMT
			cs.setString(18, "");//V_SENIOR_AMT 	
			cs.setString(19, "");//V_ACCEPTS 		
			cs.setString(20, "");//V_DEBTOR 		
			cs.setString(21, "");//V_DEBTOR_ADDR 	
			cs.setString(22, "");//V_DB_TYPE2 		
			cs.setString(23, "");//V_DEPT_CD 		
			cs.setString(24, "");//V_TYPE_CD2 		
			cs.setString(25, "");//V_SEQ_D	
			cs.setString(26, V_USR_ID);//V_USR_ID 		
			cs.registerOutParameter(27, com.tmax.tibero.TbTypes.CURSOR);
			cs.executeQuery();
			rs = (ResultSet) cs.getObject(27);

			while (rs.next()) {
				subObject = new JSONObject();
				subObject.put("COLLATERAL_NO", rs.getString("COLLATERAL_NO"));
				subObject.put("SEQ", rs.getString("SEQ"));
				subObject.put("S_BP_CD", rs.getString("BP_CD"));
				subObject.put("S_BP_NM", rs.getString("BP_NM"));
				subObject.put("TYPE_CD", rs.getString("TYPE_CD"));
				subObject.put("TYPE_NM", rs.getString("TYPE_NM"));
				
				subObject.put("ASGN_DT", rs.getString("ASGN_DT"));
				subObject.put("RENEW_DT", rs.getString("RENEW_DT"));
				subObject.put("EFFECTIVE_DT", rs.getString("EFFECTIVE_DT"));
				subObject.put("EXPIRY_DT", rs.getString("EXPIRY_DT"));
				
				subObject.put("ASGN_AMT", rs.getString("ASGN_AMT"));
				subObject.put("WARNT_ORG_NM", rs.getString("WARNT_ORG_NM"));
				subObject.put("STOCK_NO", rs.getString("STOCK_NO"));
				subObject.put("DEL_DT", rs.getString("DEL_DT"));
				subObject.put("REMARK", rs.getString("REMARK"));
				
// 				subObject.put("DB_TYPE", rs.getString("DB_TYPE"));
				subObject.put("COLLATERAL_AMT", rs.getString("COLLATERAL_AMT"));
				subObject.put("SENIOR_AMT", rs.getString("SENIOR_AMT"));
				subObject.put("ACCEPTS", rs.getString("ACCEPTS"));
				subObject.put("DEBTOR", rs.getString("DEBTOR"));
				subObject.put("DEBTOR_ADDR", rs.getString("DEBTOR_ADDR"));
				subObject.put("DB_TYPE2", rs.getString("DB_TYPE2"));
				subObject.put("DB_TYPE_NM", rs.getString("DB_TYPE_NM"));
				
				subObject.put("SEQ_D", rs.getString("SEQ"));
				subObject.put("V_TYPE", "V");
				
				jsonArray.add(subObject);
			}

			jsonObject.put("success", true);
			jsonObject.put("resultList", jsonArray);

			response.setContentType("text/plain; charset=UTF-8");
			PrintWriter pw = response.getWriter();
			pw.print(jsonObject);
			pw.flush();
			pw.close();
		}else if (V_TYPE.equals("IH")) {
			String V_DB_TYPE2 = request.getParameter("V_DB_TYPE2") == null ? "" : request.getParameter("V_DB_TYPE2").toUpperCase();
			String V_DEPT_CD = request.getParameter("V_DEPT_CD") == null ? "" : request.getParameter("V_DEPT_CD").toUpperCase();
			String V_STOCK_NO = request.getParameter("V_STOCK_NO") == null ? "" : request.getParameter("V_STOCK_NO").toUpperCase();
			String V_WARNT_ORG_NM = request.getParameter("V_WARNT_ORG_NM") == null ? "" : request.getParameter("V_WARNT_ORG_NM").toUpperCase();
			String V_REMARK = request.getParameter("V_REMARK") == null ? "" : request.getParameter("V_REMARK").toUpperCase();
			String V_BP_CD = request.getParameter("V_BP_CD") == null ? "" : request.getParameter("V_BP_CD").toUpperCase();
			String V_ASGN_AMT = request.getParameter("V_ASGN_AMT") == null ? "" : request.getParameter("V_ASGN_AMT").toUpperCase();
			String V_ASGN_DT = (request.getParameter("V_ASGN_DT") == null || request.getParameter("V_ASGN_DT") == "") ? "" : request.getParameter("V_ASGN_DT").substring(0, 10);
			String V_EFFECTIVE_DT = (request.getParameter("V_EFFECTIVE_DT") == null || request.getParameter("V_EFFECTIVE_DT") == "") ? "" : request.getParameter("V_EFFECTIVE_DT").substring(0, 10);
			String V_EXPIRY_DT = (request.getParameter("V_EXPIRY_DT") == null || request.getParameter("V_EXPIRY_DT") == "") ? "" : request.getParameter("V_EXPIRY_DT").substring(0, 10);
			String V_RENEW_DT = (request.getParameter("V_RENEW_DT") == null || request.getParameter("V_RENEW_DT") == "") ? "" : request.getParameter("V_RENEW_DT").substring(0, 10);
			String V_DEL_DT = (request.getParameter("V_DEL_DT") == null || request.getParameter("V_DEL_DT") == "") ? "" : request.getParameter("V_DEL_DT").substring(0, 10);
			
			cs = conn.prepareCall("call USP_004_M_COLLATERAL_MST_HSPF(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)");
			cs.setString(1, V_COMP_ID);//V_COMP_ID 		
			cs.setString(2, V_TYPE);//V_TYPE
			cs.setString(3, V_COLLATERAL_NO);//V_COLLATERAL_NO 
			cs.setString(4, V_BP_CD);//V_BP_CD 		
			cs.setString(5, V_ASGN_DT);//V_ASGN_DT 		
			cs.setString(6, V_RENEW_DT);//V_RENEW_DT 		
			cs.setString(7, V_EFFECTIVE_DT);//V_EFFECTIVE_DT 	
			cs.setString(8, V_EXPIRY_DT);//V_EXPIRY_DT 	
			cs.setString(9, V_ASGN_AMT);//V_ASGN_AMT 		
			cs.setString(10, V_WARNT_ORG_NM);//V_WARNT_ORG_NM 	
			cs.setString(11, V_STOCK_NO);//V_STOCK_NO 		
			cs.setString(12, V_DEL_DT);//V_DEL_DT 		
			cs.setString(13, V_REMARK);//V_REMARK 		
			cs.setString(14, "");//V_USE_YN 		
			cs.setString(15, "");//V_USE_AMT 		
			cs.setString(16, "B");//V_DB_TYPE 		
			cs.setString(17, "");//V_COLLATERAL_AMT
			cs.setString(18, "");//V_SENIOR_AMT 	
			cs.setString(19, "");//V_ACCEPTS 		
			cs.setString(20, "");//V_DEBTOR 		
			cs.setString(21, "");//V_DEBTOR_ADDR 	
			cs.setString(22, V_DB_TYPE2);//V_DB_TYPE2 		
			cs.setString(23, V_DEPT_CD);//V_DEPT_CD 		
			cs.setString(24, "D");//V_TYPE_CD2 		
			cs.setString(25, "");//V_SEQ_D	
			cs.setString(26, V_USR_ID);//V_USR_ID 		
			cs.registerOutParameter(27, com.tmax.tibero.TbTypes.CURSOR);
			cs.executeQuery();
			rs = (ResultSet) cs.getObject(27);

			while (rs.next()) {
				jsonObject.put("COLLATERAL_NO", rs.getString("COLLATERAL_NO"));
			}

			jsonObject.put("success", true);
			jsonObject.put("resultList", jsonArray);

			response.setContentType("text/plain; charset=UTF-8");
			PrintWriter pw = response.getWriter();
			pw.print(jsonObject);
			pw.flush();
			pw.close();
		} else if (V_TYPE.equals("ID") || V_TYPE.equals("DD")) {

			request.setCharacterEncoding("utf-8");
			String[] findList = { "#", "+", "&", "%", " " };
			String[] replList = { "%23", "%2B", "%26", "%25", "%20" };

			String V_DEPT_CD = request.getParameter("V_DEPT_CD") == null ? "" : request.getParameter("V_DEPT_CD").toUpperCase();
			String data = request.getParameter("data");
			data = StringUtils.replaceEach(data, findList, replList);
			String jsonData = URLDecoder.decode(data, "UTF-8");

				if (jsonData.lastIndexOf("},{") > 0) { //배열일경우
					JSONArray jsonAr = (JSONArray) JSONValue.parse(jsonData);

					for (int i = 0; i < jsonAr.size(); i++) {
						HashMap hashMap = (HashMap) jsonAr.get(i);
						String V_TYPE_CD = hashMap.get("TYPE_CD") == null ? "" : hashMap.get("TYPE_CD").toString();
						String V_DB_TYPE2 = hashMap.get("DB_TYPE2") == null ? "" : hashMap.get("DB_TYPE2").toString();
						String V_STOCK_NO = hashMap.get("STOCK_NO") == null ? "" : hashMap.get("STOCK_NO").toString();
						String V_WARNT_ORG_NM = hashMap.get("WARNT_ORG_NM") == null ? "" : hashMap.get("WARNT_ORG_NM").toString();
						String V_REMARK = hashMap.get("REMARK") == null ? "" : hashMap.get("REMARK").toString();
						String V_BP_CD = hashMap.get("S_BP_CD") == null ? "" : hashMap.get("S_BP_CD").toString();
						String V_SEQ_D = hashMap.get("SEQ_D") == null ? "" : hashMap.get("SEQ_D").toString();
						String V_ASGN_AMT = hashMap.get("ASGN_AMT") == null ? "" : hashMap.get("ASGN_AMT").toString();
						String V_ASGN_DT = hashMap.get("ASGN_DT") == null ? "" : hashMap.get("ASGN_DT").toString().substring(0, 10);
						String V_EFFECTIVE_DT = hashMap.get("EFFECTIVE_DT") == null ? "" : hashMap.get("EFFECTIVE_DT").toString().substring(0, 10);
						String V_EXPIRY_DT = hashMap.get("EXPIRY_DT") == null ? "" : hashMap.get("EXPIRY_DT").toString().substring(0, 10);
						String V_RENEW_DT = hashMap.get("RENEW_DT") == null ? "" : hashMap.get("RENEW_DT").toString().substring(0, 10);
						String V_DEL_DT = hashMap.get("DEL_DT") == null ? "" : hashMap.get("DEL_DT").toString().substring(0, 10);

						cs = conn.prepareCall("call USP_004_M_COLLATERAL_MST_HSPF(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)");
						cs.setString(1, V_COMP_ID);//V_COMP_ID 		
						cs.setString(2, V_TYPE);//V_TYPE
						cs.setString(3, V_COLLATERAL_NO);//V_COLLATERAL_NO 
						cs.setString(4, V_BP_CD);//V_BP_CD 		
						cs.setString(5, V_ASGN_DT);//V_ASGN_DT 		
						cs.setString(6, V_RENEW_DT);//V_RENEW_DT 		
						cs.setString(7, V_EFFECTIVE_DT);//V_EFFECTIVE_DT 	
						cs.setString(8, V_EXPIRY_DT);//V_EXPIRY_DT 	
						cs.setString(9, V_ASGN_AMT);//V_ASGN_AMT 		
						cs.setString(10, V_WARNT_ORG_NM);//V_WARNT_ORG_NM 	
						cs.setString(11, V_STOCK_NO);//V_STOCK_NO 		
						cs.setString(12, V_DEL_DT);//V_DEL_DT 		
						cs.setString(13, V_REMARK);//V_REMARK 		
						cs.setString(14, "");//V_USE_YN 		
						cs.setString(15, "");//V_USE_AMT 		
						cs.setString(16, "B");//V_DB_TYPE 		
						cs.setString(17, "");//V_COLLATERAL_AMT
						cs.setString(18, "");//V_SENIOR_AMT 	
						cs.setString(19, "");//V_ACCEPTS 		
						cs.setString(20, "");//V_DEBTOR 		
						cs.setString(21, "");//V_DEBTOR_ADDR 	
						cs.setString(22, V_DB_TYPE2);//V_DB_TYPE2 		
						cs.setString(23, V_DEPT_CD);//V_DEPT_CD 		
						cs.setString(24, V_TYPE_CD);//V_TYPE_CD2 		
						cs.setString(25, V_SEQ_D);//V_SEQ_D	
						cs.setString(26, V_USR_ID);//V_USR_ID 		
						cs.registerOutParameter(27, com.tmax.tibero.TbTypes.CURSOR);
						cs.executeQuery();

						response.setContentType("text/plain; charset=UTF-8");
						PrintWriter pw = response.getWriter();
						pw.print("success");
						pw.flush();
						pw.close();

					}
				} else {
					JSONObject jsondata = JSONObject.fromObject(jsonData);
					String V_TYPE_CD = jsondata.get("TYPE_CD") == null ? "" : jsondata.get("TYPE_CD").toString();
					String V_DB_TYPE2 = jsondata.get("DB_TYPE2") == null ? "" : jsondata.get("DB_TYPE2").toString();
					String V_STOCK_NO = jsondata.get("STOCK_NO") == null ? "" : jsondata.get("STOCK_NO").toString();
					String V_WARNT_ORG_NM = jsondata.get("WARNT_ORG_NM") == null ? "" : jsondata.get("WARNT_ORG_NM").toString();
					String V_REMARK = jsondata.get("REMARK") == null ? "" : jsondata.get("REMARK").toString();
					String V_BP_CD = jsondata.get("S_BP_CD") == null ? "" : jsondata.get("S_BP_CD").toString();
					String V_SEQ_D = jsondata.get("SEQ_D") == null ? "" : jsondata.get("SEQ_D").toString();
					String V_ASGN_AMT = jsondata.get("ASGN_AMT") == null ? "" : jsondata.get("ASGN_AMT").toString();
					String V_ASGN_DT = jsondata.get("ASGN_DT") == null ? "" : jsondata.get("ASGN_DT").toString().substring(0, 10);
					String V_EFFECTIVE_DT = jsondata.get("EFFECTIVE_DT") == null ? "" : jsondata.get("EFFECTIVE_DT").toString().substring(0, 10);
					String V_EXPIRY_DT = jsondata.get("EXPIRY_DT") == null ? "" : jsondata.get("EXPIRY_DT").toString().substring(0, 10);
					String V_RENEW_DT = jsondata.get("RENEW_DT") == null ? "" : jsondata.get("RENEW_DT").toString().substring(0, 10);
					String V_DEL_DT = jsondata.get("DEL_DT") == null ? "" : jsondata.get("DEL_DT").toString().substring(0, 10);

					cs = conn.prepareCall("call USP_004_M_COLLATERAL_MST_HSPF(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)");
					cs.setString(1, V_COMP_ID);//V_COMP_ID 		
					cs.setString(2, V_TYPE);//V_TYPE
					cs.setString(3, V_COLLATERAL_NO);//V_COLLATERAL_NO 
					cs.setString(4, V_BP_CD);//V_BP_CD 		
					cs.setString(5, V_ASGN_DT);//V_ASGN_DT 		
					cs.setString(6, V_RENEW_DT);//V_RENEW_DT 		
					cs.setString(7, V_EFFECTIVE_DT);//V_EFFECTIVE_DT 	
					cs.setString(8, V_EXPIRY_DT);//V_EXPIRY_DT 	
					cs.setString(9, V_ASGN_AMT);//V_ASGN_AMT 		
					cs.setString(10, V_WARNT_ORG_NM);//V_WARNT_ORG_NM 	
					cs.setString(11, V_STOCK_NO);//V_STOCK_NO 		
					cs.setString(12, V_DEL_DT);//V_DEL_DT 		
					cs.setString(13, V_REMARK);//V_REMARK 		
					cs.setString(14, "");//V_USE_YN 		
					cs.setString(15, "");//V_USE_AMT 		
					cs.setString(16, "B");//V_DB_TYPE 		
					cs.setString(17, "");//V_COLLATERAL_AMT
					cs.setString(18, "");//V_SENIOR_AMT 	
					cs.setString(19, "");//V_ACCEPTS 		
					cs.setString(20, "");//V_DEBTOR 		
					cs.setString(21, "");//V_DEBTOR_ADDR 	
					cs.setString(22, V_DB_TYPE2);//V_DB_TYPE2 		
					cs.setString(23, V_DEPT_CD);//V_DEPT_CD 		
					cs.setString(24, V_TYPE_CD);//V_TYPE_CD2 		
					cs.setString(25, V_SEQ_D);//V_SEQ_D	
					cs.setString(26, V_USR_ID);//V_USR_ID 				
					cs.registerOutParameter(27, com.tmax.tibero.TbTypes.CURSOR);
					cs.executeQuery();

					response.setContentType("text/plain; charset=UTF-8");
					PrintWriter pw = response.getWriter();
					pw.print("success");
					pw.flush();
					pw.close();
			}
		
		}else if (V_TYPE.equals("P")) {
			cs = conn.prepareCall("call USP_004_M_COLLATERAL_POP_HSPF(?,?,?,?,?,?,?,?,?,?,?,?,?)");
			cs.setString(1, V_COMP_ID);//V_COMP_ID 		
			cs.setString(2, V_TYPE);//V_TYPE
			cs.setString(3, "");//V_COLLATERAL_NO 
			cs.setString(4, "");//V_BP_CD 		
			cs.setString(5, V_ASGN_DT_FR);//V_ASGN_DT_FR 		
			cs.setString(6, V_ASGN_DT_TO);//V_ASGN_DT_TO 		
			cs.setString(7, "");//V_DEL_DT 	
			cs.setString(8, V_USE_YN);//V_USE_YN 	
			cs.setString(9, V_DB_TYPE);//V_DB_TYPE 		
			cs.setString(10, "");//V_DB_TYPE2 	
			cs.setString(11, "");//V_DEPT_CD 		
			cs.setString(12, V_USR_ID);//V_USR_ID 		
			cs.registerOutParameter(13, com.tmax.tibero.TbTypes.CURSOR);
			cs.executeQuery();
			rs = (ResultSet) cs.getObject(13);

			while (rs.next()) {
				subObject = new JSONObject();
				subObject.put("COLLATERAL_NO", rs.getString("COLLATERAL_NO"));
				subObject.put("BP_CD", rs.getString("BP_CD"));
				subObject.put("BP_NM", rs.getString("BP_NM"));
				subObject.put("ASGN_DT", rs.getString("ASGN_DT"));
				subObject.put("RENEW_DT", rs.getString("RENEW_DT"));
				subObject.put("EFFECTIVE_DT", rs.getString("EFFECTIVE_DT"));
				subObject.put("EXPIRY_DT", rs.getString("EXPIRY_DT"));
				subObject.put("ASGN_AMT", rs.getString("ASGN_AMT"));
				subObject.put("WARNT_ORG_NM", rs.getString("WARNT_ORG_NM"));
				subObject.put("STOCK_NO", rs.getString("STOCK_NO"));
// 				subObject.put("DEL_DT", rs.getString("DEL_DT"));
				subObject.put("REMARK", rs.getString("REMARK"));
				subObject.put("DB_TYPE2", rs.getString("DB_TYPE2"));
				subObject.put("DB_TYPE2_NM", rs.getString("DB_TYPE2_NM"));
				subObject.put("DEPT_CD", rs.getString("DEPT_CD"));
				subObject.put("DEPT_NM", rs.getString("DEPT_NM"));
				
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
