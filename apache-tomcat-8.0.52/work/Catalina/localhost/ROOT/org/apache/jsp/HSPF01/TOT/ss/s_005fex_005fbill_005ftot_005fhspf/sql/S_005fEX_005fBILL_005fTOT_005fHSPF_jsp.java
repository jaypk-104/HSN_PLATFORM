/*
 * Generated by the Jasper component of Apache Tomcat
 * Version: Apache Tomcat/8.0.52
 * Generated at: 2021-02-09 00:57:22 UTC
 * Note: The last modified time of this file was set to
 *       the last modified time of the source file after
 *       generation to assist with modification tracking.
 */
package org.apache.jsp.HSPF01.TOT.ss.s_005fex_005fbill_005ftot_005fhspf.sql;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.jsp.*;
import org.json.simple.JSONArray;
import org.json.simple.JSONValue;
import org.json.simple.parser.JSONParser;
import org.json.simple.JSONObject;
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
import java.net.*;
import java.io.*;
import java.lang.reflect.InvocationTargetException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;
import org.apache.commons.beanutils.BeanUtils;

public final class S_005fEX_005fBILL_005fTOT_005fHSPF_jsp extends org.apache.jasper.runtime.HttpJspBase
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
    _jspx_imports_packages.add("java.net");
    _jspx_imports_packages.add("javax.servlet.http");
    _jspx_imports_packages.add("java.io");
    _jspx_imports_packages.add("javax.servlet.jsp");
    _jspx_imports_classes = new java.util.HashSet<>();
    _jspx_imports_classes.add("java.io.PrintWriter");
    _jspx_imports_classes.add("javax.naming.InitialContext");
    _jspx_imports_classes.add("org.apache.commons.lang.StringUtils");
    _jspx_imports_classes.add("java.net.URLDecoder");
    _jspx_imports_classes.add("org.json.simple.parser.JSONParser");
    _jspx_imports_classes.add("org.apache.commons.beanutils.BeanUtils");
    _jspx_imports_classes.add("java.io.StringWriter");
    _jspx_imports_classes.add("java.util.HashMap");
    _jspx_imports_classes.add("javax.naming.NamingException");
    _jspx_imports_classes.add("org.json.simple.JSONArray");
    _jspx_imports_classes.add("java.lang.reflect.InvocationTargetException");
    _jspx_imports_classes.add("java.util.ArrayList");
    _jspx_imports_classes.add("org.json.simple.JSONObject");
    _jspx_imports_classes.add("org.json.simple.JSONValue");
    _jspx_imports_classes.add("java.util.Map");
    _jspx_imports_classes.add("javax.sql.DataSource");
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
      out.write("\r\n");
      out.write("\r\n");
      out.write("\r\n");
      out.write("\r\n");
      out.write("\r\n");
      out.write("\r\n");
      out.write("\r\n");

	request.setCharacterEncoding("utf-8");
	ResultSet rs = null;
	CallableStatement cs = null;
	CallableStatement cs2 = null;
	JSONObject jsonObject = new JSONObject();
	JSONArray jsonArray = new JSONArray();
	JSONObject subObject = null;

	try {
		String V_TYPE = request.getParameter("V_TYPE") == null ? "" : request.getParameter("V_TYPE");
		String V_COMP_ID = request.getParameter("V_COMP_ID") == null ? "" : request.getParameter("V_COMP_ID").toUpperCase();
		String V_USR_ID = request.getParameter("V_USR_ID") == null ? "" : request.getParameter("V_USR_ID").toUpperCase();
		String V_DN_DT_FR = request.getParameter("V_DN_DT_FR") == null ? "" : request.getParameter("V_DN_DT_FR").toUpperCase().substring(0, 10);
		String V_DN_DT_TO = request.getParameter("V_DN_DT_TO") == null ? "" : request.getParameter("V_DN_DT_TO").toUpperCase().substring(0, 10);
		String V_S_BP_CD = request.getParameter("V_S_BP_CD") == null ? "" : request.getParameter("V_S_BP_CD").toUpperCase();
		String V_S_BP_NM = request.getParameter("V_S_BP_NM") == null ? "" : request.getParameter("V_S_BP_NM").toUpperCase();
		String V_BILL_NO = request.getParameter("V_BILL_NO") == null ? "" : request.getParameter("V_BILL_NO").toUpperCase();

		//상단
		if (V_TYPE.equals("R")) {

			cs = conn.prepareCall("call USP_003_S_EX_BILL_H_TOT_HSPF(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)");
			cs.setString(1, V_COMP_ID);//V_COMP_ID
			cs.setString(2, V_TYPE);//V_TYPE
			cs.setString(3, V_BILL_NO);//V_BILL_NO
			cs.setString(4, "");//V_BILL_DT
			cs.setString(5, V_DN_DT_FR);//V_DN_DT_FR
			cs.setString(6, V_DN_DT_TO);//V_DN_DT_TO
			cs.setString(7, V_S_BP_NM);//V_S_BP_CD
			cs.setString(8, "");//V_R_BP_CD
			cs.setString(9, "");//V_IN_TERMS
			cs.setString(10, "");//V_PAY_METH
			cs.setString(11, "");//V_SALE_TYPE
			cs.setString(12, "");//V_CUR
			cs.setString(13, "");//V_XCHG_RT
			cs.setString(14, "");//V_VAT_INC
			cs.setString(15, "");//V_DN_ISSUE_DT
			cs.setString(16, "");//V_TAX_CD
			cs.setString(17, "");//V_CFM_YN
			cs.setString(18, "");//V_REF_BILL_NO
			cs.setString(19, "");//V_TEMP_GL_NO
			cs.setString(20, V_USR_ID);//V_USR_ID
			cs.registerOutParameter(21, com.tmax.tibero.TbTypes.CURSOR);
			cs.setString(22, "");//V_TO_SALES_GRP
			cs.executeQuery();

			rs = (ResultSet) cs.getObject(21);

			while (rs.next()) {
				subObject = new JSONObject();
				subObject.put("DN_NO", rs.getString("DN_NO"));
				subObject.put("DN_SEQ", rs.getString("DN_SEQ"));
				subObject.put("BILL_NO", rs.getString("BILL_NO"));
				subObject.put("BILL_SEQ", rs.getString("BILL_SEQ"));
				subObject.put("BILL_DT", rs.getString("BILL_DT"));
				subObject.put("S_BP_CD", rs.getString("S_BP_CD"));
				subObject.put("S_BP_NM", rs.getString("S_BP_NM"));
				subObject.put("ITEM_CD", rs.getString("ITEM_CD"));
				subObject.put("ITEM_NM", rs.getString("ITEM_NM"));
				subObject.put("BRAND", rs.getString("BRAND"));
				subObject.put("BILL_QTY", rs.getString("BILL_QTY"));
				subObject.put("BILL_PRC", rs.getString("BILL_PRC"));
				subObject.put("BILL_AMT", rs.getString("BILL_AMT"));
				
				subObject.put("VAT_TYPE", rs.getString("VAT_TYPE"));
				subObject.put("VAT_TYPE_NM", rs.getString("VAT_TYPE_NM"));
				subObject.put("VAT_AMT", rs.getString("VAT_AMT"));
				subObject.put("VAT_RATE", rs.getString("VAT_RATE"));
				subObject.put("COST_CD", rs.getString("COST_CD"));
				subObject.put("BL_DOC_NO", rs.getString("BL_DOC_NO"));
				
				subObject.put("TO_SALES_GRP", rs.getString("TO_SALES_GRP"));
				subObject.put("XCHG_RT", rs.getString("XCHG_RT"));
				
				jsonArray.add(subObject);
			}

			jsonObject.put("success", true);
			jsonObject.put("resultList", jsonArray);

			response.setContentType("text/plain; charset=UTF-8");
			PrintWriter pw = response.getWriter();
			pw.print(jsonObject);
			pw.flush();
			pw.close();

			//하단헤더조회
		} else if (V_TYPE.equals("S")) {

			cs = conn.prepareCall("call USP_003_S_EX_BILL_H_TOT_HSPF(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)");
			cs.setString(1, V_COMP_ID);//V_COMP_ID
			cs.setString(2, V_TYPE);//V_TYPE
			cs.setString(3, V_BILL_NO);//V_BILL_NO
			cs.setString(4, "");//V_BILL_DT
			cs.setString(5, V_DN_DT_FR);//V_DN_DT_FR
			cs.setString(6, V_DN_DT_TO);//V_DN_DT_TO
			cs.setString(7, V_S_BP_CD);//V_S_BP_CD
			cs.setString(8, "");//V_R_BP_CD
			cs.setString(9, "");//V_IN_TERMS
			cs.setString(10, "");//V_PAY_METH
			cs.setString(11, "");//V_SALE_TYPE
			cs.setString(12, "");//V_CUR
			cs.setString(13, "");//V_XCHG_RT
			cs.setString(14, "");//V_VAT_INC
			cs.setString(15, "");//V_DN_ISSUE_DT
			cs.setString(16, "");//V_TAX_CD
			cs.setString(17, "");//V_CFM_YN
			cs.setString(18, "");//V_REF_BILL_NO
			cs.setString(19, "");//V_TEMP_GL_NO
			cs.setString(20, V_USR_ID);//V_USR_ID
			cs.registerOutParameter(21, com.tmax.tibero.TbTypes.CURSOR);
			cs.setString(22, "");//V_TO_SALES_GRP

			cs.executeQuery();
			rs = (ResultSet) cs.getObject(21);

			while (rs.next()) {
				subObject = new JSONObject();
				subObject.put("BILL_NO", rs.getString("BILL_NO"));
				subObject.put("BILL_DT", rs.getString("BILL_DT"));
				subObject.put("S_BP_CD", rs.getString("S_BP_CD"));
				subObject.put("S_BP_NM", rs.getString("S_BP_NM"));
				subObject.put("R_BP_CD", rs.getString("R_BP_CD"));
				subObject.put("R_BP_NM", rs.getString("R_BP_NM"));
				subObject.put("IN_TERMS", rs.getString("IN_TERMS"));
				subObject.put("IN_TERMS_NM", rs.getString("IN_TERMS_NM"));
				subObject.put("PAY_METH", rs.getString("PAY_METH"));
				subObject.put("PAY_METH_NM", rs.getString("PAY_METH_NM"));
				subObject.put("SALE_TYPE", rs.getString("SALE_TYPE"));
				subObject.put("SALE_TYPE_NM", rs.getString("SALE_TYPE_NM"));
				subObject.put("CUR", rs.getString("CUR"));
				subObject.put("XCHG_RT", rs.getString("XCHG_RT"));
				subObject.put("VAT_INC", rs.getString("VAT_INC"));
				subObject.put("DN_ISSUE_DT", rs.getString("DN_ISSUE_DT").substring(0, 10));
				subObject.put("TAX_CD", rs.getString("TAX_CD"));
				subObject.put("TAX_NM", rs.getString("TAX_NM"));
				subObject.put("CFM_YN", rs.getString("CFM_YN"));
				subObject.put("TEMP_GL_NO", rs.getString("TEMP_GL_NO"));
				subObject.put("REF_BILL_NO", rs.getString("REF_BILL_NO"));
				subObject.put("VAT_TYPE", rs.getString("VAT_TYPE"));
				subObject.put("TO_SALES_GRP", rs.getString("TO_SALES_GRP"));
				jsonArray.add(subObject);
			}

			jsonObject.put("success", true);
			jsonObject.put("resultList", jsonArray);

			response.setContentType("text/plain; charset=UTF-8");
			PrintWriter pw = response.getWriter();
			pw.print(jsonObject);
			pw.flush();
			pw.close();

		} else if (V_TYPE.equals("P")) {

			cs = conn.prepareCall("call USP_003_S_EX_BILL_H_TOT_HSPF(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)");
			cs.setString(1, V_COMP_ID);//V_COMP_ID
			cs.setString(2, V_TYPE);//V_TYPE
			cs.setString(3, V_BILL_NO);//V_BILL_NO
			cs.setString(4, "");//V_BILL_DT
			cs.setString(5, V_DN_DT_FR);//V_DN_DT_FR
			cs.setString(6, V_DN_DT_TO);//V_DN_DT_TO
			cs.setString(7, V_S_BP_CD);//V_S_BP_CD
			cs.setString(8, "");//V_R_BP_CD
			cs.setString(9, "");//V_IN_TERMS
			cs.setString(10, "");//V_PAY_METH
			cs.setString(11, "");//V_SALE_TYPE
			cs.setString(12, "");//V_CUR
			cs.setString(13, "");//V_XCHG_RT
			cs.setString(14, "");//V_VAT_INC
			cs.setString(15, "");//V_DN_ISSUE_DT
			cs.setString(16, "");//V_TAX_CD
			cs.setString(17, "");//V_CFM_YN
			cs.setString(18, "");//V_REF_BILL_NO
			cs.setString(19, "");//V_TEMP_GL_NO
			cs.setString(20, V_USR_ID);//V_USR_ID
			cs.registerOutParameter(21, com.tmax.tibero.TbTypes.CURSOR);
			cs.setString(22, "");//V_TO_SALES_GRP

			cs.executeQuery();
			rs = (ResultSet) cs.getObject(21);

			while (rs.next()) {
				subObject = new JSONObject();
				subObject.put("BILL_NO", rs.getString("BILL_NO"));
				subObject.put("BILL_DT", rs.getString("BILL_DT"));
				subObject.put("S_BP_CD", rs.getString("S_BP_CD"));
				subObject.put("S_BP_NM", rs.getString("S_BP_NM"));
				subObject.put("R_BP_CD", rs.getString("R_BP_CD"));
				subObject.put("SALE_TYPE", rs.getString("SALE_TYPE"));
				subObject.put("SALE_TYPE_NM", rs.getString("SALE_TYPE_NM"));
				subObject.put("CUR", rs.getString("CUR"));
				subObject.put("VAT_INC", rs.getString("VAT_INC"));
				subObject.put("DN_ISSUE_DT", rs.getString("DN_ISSUE_DT").substring(0, 10));
				subObject.put("CFM_YN", rs.getString("CFM_YN"));
				subObject.put("TEMP_GL_NO", rs.getString("TEMP_GL_NO"));
				subObject.put("BILL_LOC_AMT", rs.getString("BILL_LOC_AMT"));
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

// 			String V_BILL_NO = request.getParameter("V_BILL_NO") == null ? "" : request.getParameter("V_BILL_NO").toUpperCase();

			if (jsonData.lastIndexOf("},{") > 0) { //배열일경우
				JSONArray jsonAr = (JSONArray) JSONValue.parse(jsonData);

				for (int i = 0; i < jsonAr.size(); i++) {
					HashMap hashMap = (HashMap) jsonAr.get(i);

					V_TYPE = hashMap.get("V_TYPE") == null ? "" : hashMap.get("V_TYPE").toString();
// 					V_BILL_NO = hashMap.get("BILL_NO") == null ? "" : hashMap.get("BILL_NO").toString();
					String V_BILL_SEQ = hashMap.get("BILL_SEQ") == null ? "" : hashMap.get("BILL_SEQ").toString();
					String V_ITEM_CD = hashMap.get("ITEM_CD") == null ? "" : hashMap.get("ITEM_CD").toString();
					String V_COST_CD = hashMap.get("COST_CD") == null ? "" : hashMap.get("COST_CD").toString();
					String V_VAT_TYPE = hashMap.get("VAT_TYPE") == null ? "" : hashMap.get("VAT_TYPE").toString();
					String V_VAT_RATE = hashMap.get("VAT_RATE") == null ? "" : hashMap.get("VAT_RATE").toString();
					String V_DN_NO = hashMap.get("DN_NO") == null ? "" : hashMap.get("DN_NO").toString();
					String V_DN_SEQ = hashMap.get("DN_SEQ") == null ? "" : hashMap.get("DN_SEQ").toString();
					String V_VAT_AMT = hashMap.get("VAT_AMT") == null ? "" : hashMap.get("VAT_AMT").toString();
					String V_BILL_QTY = hashMap.get("BILL_QTY") == null ? "" : hashMap.get("BILL_QTY").toString();
					String V_BILL_AMT = hashMap.get("BILL_LOC_AMT") == null ? "" : hashMap.get("BILL_LOC_AMT").toString();
					String V_BILL_LOC_AMT = hashMap.get("BILL_LOC_AMT") == null ? "" : hashMap.get("BILL_LOC_AMT").toString();
					String V_BILL_PRC = hashMap.get("BILL_PRC") == null ? "" : hashMap.get("BILL_PRC").toString();

					// [20200211 HDH] PRC 등록시 수량이 0 이면 0, 수량이 0이상이면 ROUND(금액/수량,2)
// 					Double billPrc = 0.0d;
// 					Double billAmt = Double.parseDouble(V_BILL_AMT);
// 					Double billQty = Double.parseDouble(V_BILL_QTY);
// 					if(billQty != 0){
// 						billPrc = Math.round((billAmt/billQty)*100)/100.0;
// 					} 
// 					V_BILL_PRC = billPrc.toString();
					
					cs = conn.prepareCall("call USP_003_S_BILL_D_TOT_HSPF(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)");
					cs.setString(1, V_COMP_ID);//V_COMP_ID
					cs.setString(2, V_TYPE);//V_TYPE
					cs.setString(3, V_BILL_NO);//V_BILL_NO
					cs.setString(4, V_BILL_SEQ);//V_BILL_SEQ
					cs.setString(5, V_ITEM_CD);//V_ITEM_CD
					cs.setString(6, V_BILL_QTY);//V_BILL_QTY
					cs.setString(7, V_BILL_PRC);//V_BILL_PRC
					cs.setString(8, V_BILL_AMT);//V_BILL_AMT
					cs.setString(9, V_BILL_LOC_AMT);//V_BILL_LOC_AMT
					cs.setString(10, V_COST_CD);//V_COST_CD
					cs.setString(11, V_VAT_TYPE);//V_VAT_TYPE
					cs.setString(12, V_VAT_AMT);//V_VAT_AMT
					cs.setString(13, V_DN_NO);//V_DN_NO
					cs.setString(14, V_DN_SEQ);//V_DN_SEQ
					cs.setString(15, V_USR_ID);//V_USR_ID
					cs.registerOutParameter(16, com.tmax.tibero.TbTypes.CURSOR);
					cs.executeQuery();

					response.setContentType("text/plain; charset=UTF-8");
					PrintWriter pw = response.getWriter();
					pw.print("success");
					pw.flush();
					pw.close();

				}
			} else {

// 				JSONObject jsondata = JSONObject.fromObject(jsonData);
				//큰수에 소수점이 있는경우 숫자계산이 이상해서 수정함. 20200108 김장운

				JSONParser parser = new JSONParser();
				Object obj = parser.parse(jsonData);					
				JSONObject jsondata = (JSONObject) obj;
				
				V_TYPE = jsondata.get("V_TYPE") == null ? "" : jsondata.get("V_TYPE").toString();
// 				V_BILL_NO = jsondata.get("BILL_NO") == null ? "" : jsondata.get("BILL_NO").toString();
				String V_BILL_SEQ = jsondata.get("BILL_SEQ") == null ? "" : jsondata.get("BILL_SEQ").toString();
				String V_ITEM_CD = jsondata.get("ITEM_CD") == null ? "" : jsondata.get("ITEM_CD").toString();
				String V_BILL_QTY = jsondata.get("BILL_QTY") == null ? "" : jsondata.get("BILL_QTY").toString();
				String V_BILL_AMT = jsondata.get("BILL_LOC_AMT") == null ? "" : jsondata.get("BILL_LOC_AMT").toString();
				String V_BILL_LOC_AMT = jsondata.get("BILL_LOC_AMT") == null ? "" : jsondata.get("BILL_LOC_AMT").toString();
				String V_BILL_PRC = jsondata.get("BILL_PRC") == null ? "" : jsondata.get("BILL_PRC").toString();
				String V_COST_CD = jsondata.get("COST_CD") == null ? "" : jsondata.get("COST_CD").toString();
				String V_VAT_TYPE = jsondata.get("VAT_TYPE") == null ? "" : jsondata.get("VAT_TYPE").toString();
				String V_VAT_RATE = jsondata.get("VAT_RATE") == null ? "" : jsondata.get("VAT_RATE").toString();
				String V_VAT_AMT = jsondata.get("VAT_AMT") == null ? "" : jsondata.get("VAT_AMT").toString();
				String V_DN_NO = jsondata.get("DN_NO") == null ? "" : jsondata.get("DN_NO").toString();
				String V_DN_SEQ = jsondata.get("DN_SEQ") == null ? "" : jsondata.get("DN_SEQ").toString();
				
				// [20200211 HDH] PRC등록시 수량이 0 이면 0, 수량이 0이상이면 ROUND(금액/수량,2)
// 				Double billPrc = 0.0d;
// 				Double billAmt = Double.parseDouble(V_BILL_AMT);
// 				Double billQty = Double.parseDouble(V_BILL_QTY);
// 				if(billQty != 0){
// 					billPrc = Math.round((billAmt/billQty)*100)/100.0;
// 				} 
// 				V_BILL_PRC = billPrc.toString();
				
				cs = conn.prepareCall("call USP_003_S_BILL_D_TOT_HSPF(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)");
				cs.setString(1, V_COMP_ID);//V_COMP_ID
				cs.setString(2, V_TYPE);//V_TYPE
				cs.setString(3, V_BILL_NO);//V_BILL_NO
				cs.setString(4, V_BILL_SEQ);//V_BILL_SEQ
				cs.setString(5, V_ITEM_CD);//V_ITEM_CD
				cs.setString(6, V_BILL_QTY);//V_BILL_QTY
				cs.setString(7, V_BILL_PRC);//V_BILL_PRC
				cs.setString(8, V_BILL_AMT);//V_BILL_AMT
				cs.setString(9, V_BILL_LOC_AMT);//V_BILL_LOC_AMT
				cs.setString(10, V_COST_CD);//V_COST_CD
				cs.setString(11, V_VAT_TYPE);//V_VAT_TYPE
				cs.setString(12, V_VAT_AMT);//V_VAT_AMT
				cs.setString(13, V_DN_NO);//V_DN_NO
				cs.setString(14, V_DN_SEQ);//V_DN_SEQ
				cs.setString(15, V_USR_ID);//V_USR_ID
				cs.registerOutParameter(16, com.tmax.tibero.TbTypes.CURSOR);
				cs.executeQuery();

				response.setContentType("text/plain; charset=UTF-8");
				PrintWriter pw = response.getWriter();
				pw.print("success");
				pw.flush();
				pw.close();

			}

// 			/*하단 헤더 I / U*/
		} else if (V_TYPE.equals("IH") || V_TYPE.equals("UH")) {

// 			String V_BILL_NO = request.getParameter("V_BILL_NO") == null ? "" : request.getParameter("V_BILL_NO").toUpperCase();
			String V_BILL_DT = request.getParameter("V_BILL_DT") == null ? "" : request.getParameter("V_BILL_DT").toUpperCase().substring(0, 10);
			String V_S_BP_CD2 = request.getParameter("V_S_BP_CD2") == null ? "" : request.getParameter("V_S_BP_CD2").toUpperCase();
			String V_R_BP_CD = request.getParameter("V_R_BP_CD") == null ? "" : request.getParameter("V_R_BP_CD").toUpperCase();
			String V_IN_TERMS = request.getParameter("V_IN_TERMS") == null ? "" : request.getParameter("V_IN_TERMS").toUpperCase();
			String V_PAY_METH = request.getParameter("V_PAY_METH") == null ? "" : request.getParameter("V_PAY_METH").toUpperCase();
			String V_SALE_TYPE = request.getParameter("V_SALE_TYPE") == null ? "" : request.getParameter("V_SALE_TYPE").toUpperCase();
			String V_CUR = request.getParameter("V_CUR") == null ? "" : request.getParameter("V_CUR").toUpperCase();
			String V_XCHG_RT = request.getParameter("V_XCHG_RT") == null ? "" : request.getParameter("V_XCHG_RT").toUpperCase();
			String V_VAT_INC = request.getParameter("V_VAT_INC") == null ? "" : request.getParameter("V_VAT_INC").toUpperCase();
			String V_DN_ISSUE_DT = request.getParameter("V_DN_ISSUE_DT") == null ? "" : request.getParameter("V_DN_ISSUE_DT").toUpperCase().substring(0, 10);
			String V_TAX_CD = request.getParameter("V_TAX_CD") == null ? "" : request.getParameter("V_TAX_CD").toUpperCase();
			String V_CFM_YN = request.getParameter("V_CFM_YN") == null ? "" : request.getParameter("V_CFM_YN").toUpperCase();
			String V_REF_BILL_NO = request.getParameter("V_REF_BILL_NO") == null ? "" : request.getParameter("V_REF_BILL_NO").toUpperCase();
			String V_TEMP_GL_NO = request.getParameter("V_TEMP_GL_NO") == null ? "" : request.getParameter("V_TEMP_GL_NO").toUpperCase();
			String V_TO_SALES_GRP = request.getParameter("V_TO_SALES_GRP") == null ? "" : request.getParameter("V_TO_SALES_GRP").toUpperCase();

			cs = conn.prepareCall("call USP_003_S_EX_BILL_H_TOT_HSPF(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)");
			cs.setString(1, V_COMP_ID);//V_COMP_ID
			cs.setString(2, V_TYPE);//V_TYPE
			cs.setString(3, V_BILL_NO);//V_BILL_NO
			cs.setString(4, V_BILL_DT);//V_BILL_DT
			cs.setString(5, V_DN_DT_FR);//V_DN_DT_FR
			cs.setString(6, V_DN_DT_TO);//V_DN_DT_TO
			cs.setString(7, V_S_BP_CD2);//V_S_BP_CD
			cs.setString(8, V_R_BP_CD);//V_R_BP_CD
			cs.setString(9, V_IN_TERMS);//V_IN_TERMS
			cs.setString(10, V_PAY_METH);//V_PAY_METH
			cs.setString(11, V_SALE_TYPE);//V_SALE_TYPE
			cs.setString(12, V_CUR);//V_CUR
			cs.setString(13, V_XCHG_RT);//V_XCHG_RT
			cs.setString(14, V_VAT_INC);//V_VAT_INC
			cs.setString(15, V_DN_ISSUE_DT);//V_DN_ISSUE_DT
			cs.setString(16, V_TAX_CD);//V_TAX_CD
			cs.setString(17, V_CFM_YN);//V_CFM_YN
			cs.setString(18, V_REF_BILL_NO);//V_REF_BILL_NO
			cs.setString(19, V_TEMP_GL_NO);//V_TEMP_GL_NO
			cs.setString(20, V_USR_ID);//V_USR_ID
			cs.registerOutParameter(21, com.tmax.tibero.TbTypes.CURSOR);
			cs.setString(22, V_TO_SALES_GRP);//V_TO_SALES_GRP
			
			cs.executeQuery();

			if (V_TYPE.equals("IH")) {
				rs = (ResultSet) cs.getObject(21);
				String BILL_NO = "";

				while (rs.next()) {
					BILL_NO = rs.getString("BILL_NO");
				}

				response.setContentType("text/plain; charset=UTF-8");
				PrintWriter pw = response.getWriter();
				pw.print(BILL_NO);
				pw.flush();
				pw.close();
			}
		
		} else if (V_TYPE.equals("I") || V_TYPE.equals("D")) {

 			cs = conn.prepareCall("call USP_003_A_TEMP_BN_FR_TOT(?,?,?,?,?)");
			cs.setString(1, V_COMP_ID);//V_COMP_ID
			cs.setString(2, V_TYPE);//V_TYPE
			cs.setString(3, V_BILL_NO);//V_BILL_NO
			cs.setString(4, V_USR_ID);//V_BL_SEQ
			cs.registerOutParameter(5, com.tmax.tibero.TbTypes.CURSOR);
			cs.executeQuery();

			rs = (ResultSet) cs.getObject(5);

			String V_TEMP_GL_NO = "";
			if (rs.next()) {
				V_TEMP_GL_NO = rs.getString("V_TEMP_GL_NO");
			}

			if (V_TEMP_GL_NO.contains("TG")) {
				/*애니링크 시작*/
 				JSONObject anyObject = new JSONObject();
 				JSONArray anyArray = new JSONArray();
 				JSONObject anySubObject = new JSONObject();

 				URL url = null;

 				if (V_TYPE.equals("I")) { //확정
 					url = new URL("http://123.142.124.155:8088/http/hspf_erp_temp_gl_insert");
 				} else if (V_TYPE.equals("D")) { //확정취소
 					url = new URL("http://123.142.124.155:8088/http/hspf_erp_temp_gl_cancel");
 				}
 				URLConnection con = url.openConnection();
 				con.setRequestProperty("Accept-Language", "ko-kr,ko;q=0.8,en-us;q=0.5,en;q=0.3");
 				con.setDoOutput(true);

 				anySubObject.put("V_TEMP_GL_NO", V_TEMP_GL_NO);
 				anySubObject.put("V_USR_ID", V_USR_ID);
 				anySubObject.put("V_DB_ID", "sa");
 				anySubObject.put("V_DB_PW", "hsnadmin");

 				anyArray.add(anySubObject);
 				anyObject.put("data", anyArray);
 				String parameter = anyObject + "";

 				OutputStreamWriter wr = new OutputStreamWriter(con.getOutputStream());
 				wr.write(parameter);
 				wr.flush();

 				BufferedReader rd = null;

 				rd = new BufferedReader(new InputStreamReader(con.getInputStream(), "UTF-8"));
 				String line = null;
 				String result = null;
 				while ((line = rd.readLine()) != null) {
 					result = URLDecoder.decode(line, "UTF-8");
 				}

 				response.setContentType("text/plain; charset=UTF-8");
 				PrintWriter pw = response.getWriter();
 				pw.print(result);
 				pw.flush();
 				pw.close();
			}
			
		} else if (V_TYPE.equals("SD")) {

			cs = conn.prepareCall("call USP_003_S_BILL_D_TOT_HSPF(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)");
			cs.setString(1, V_COMP_ID);//V_COMP_ID
			cs.setString(2, V_TYPE);//V_TYPE
			cs.setString(3, V_BILL_NO);//V_BILL_NO
			cs.setString(4, "");//V_BILL_SEQ
			cs.setString(5, "");//V_ITEM_CD
			cs.setString(6, "");//V_BILL_QTY
			cs.setString(7, "");//V_BILL_PRC
			cs.setString(8, "");//V_BILL_AMT
			cs.setString(9, "");//V_BILL_LOC_AMT
			cs.setString(10, "");//V_COST_CD
			cs.setString(11, "");//V_VAT_TYPE
			cs.setString(12, "");//V_VAT_AMT
			cs.setString(13, "");//V_DN_NO
			cs.setString(14, "");//V_DN_SEQ
			cs.setString(15, V_USR_ID);//V_USR_ID
			cs.registerOutParameter(16, com.tmax.tibero.TbTypes.CURSOR);

			cs.executeQuery();
			rs = (ResultSet) cs.getObject(16);

			while (rs.next()) {
				subObject = new JSONObject();
				subObject.put("BILL_NO", rs.getString("BILL_NO"));
				subObject.put("BILL_SEQ", rs.getString("BILL_SEQ"));
				subObject.put("ITEM_CD", rs.getString("ITEM_CD"));
				subObject.put("ITEM_NM", rs.getString("ITEM_NM"));
				subObject.put("BILL_AMT", rs.getString("BILL_AMT"));
				subObject.put("BILL_QTY", rs.getString("BILL_QTY"));
				subObject.put("BILL_PRC", rs.getString("BILL_PRC"));
				subObject.put("BILL_AMT", rs.getString("BILL_AMT"));
				subObject.put("BILL_LOC_AMT", rs.getString("BILL_LOC_AMT"));
				subObject.put("VAT_TYPE", rs.getString("VAT_TYPE"));
				subObject.put("VAT_TYPE_NM", rs.getString("VAT_TYPE_NM"));
				subObject.put("VAT_AMT", rs.getString("VAT_AMT"));
				subObject.put("VAT_RATE", rs.getString("VAT_RATE"));
				subObject.put("DN_NO", rs.getString("DN_NO"));
				subObject.put("DN_SEQ", rs.getString("DN_SEQ"));
				subObject.put("COST_CD", rs.getString("COST_CD"));
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
		if (cs2 != null) try {
			cs2.close();
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
