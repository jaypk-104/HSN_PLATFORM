/*
 * Generated by the Jasper component of Apache Tomcat
 * Version: Apache Tomcat/8.0.52
 * Generated at: 2021-01-31 06:39:14 UTC
 * Note: The last modified time of this file was set to
 *       the last modified time of the source file after
 *       generation to assist with modification tracking.
 */
package org.apache.jsp.HSPF01.bill.logis_005fbill.sql;

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
import java.io.FileInputStream;
import java.io.FileOutputStream;
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

public final class logis_005fbill_jsp extends org.apache.jasper.runtime.HttpJspBase
    implements org.apache.jasper.runtime.JspSourceDependent,
                 org.apache.jasper.runtime.JspSourceImports {

  private static final javax.servlet.jsp.JspFactory _jspxFactory =
          javax.servlet.jsp.JspFactory.getDefaultFactory();

  private static java.util.Map<java.lang.String,java.lang.Long> _jspx_dependants;

  static {
    _jspx_dependants = new java.util.HashMap<java.lang.String,java.lang.Long>(2);
    _jspx_dependants.put("/HSPF01/common/DB_Connection.jsp", Long.valueOf(1551915626000L));
    _jspx_dependants.put("/HSPF01/common/DB_Connection_ERP_KLNET.jsp", Long.valueOf(1548838758000L));
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
    _jspx_imports_classes.add("java.io.FileOutputStream");
    _jspx_imports_classes.add("java.util.HashMap");
    _jspx_imports_classes.add("java.io.FileInputStream");
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
      out.write("\r\n");
      out.write("\r\n");
      out.write("\r\n");

// 	String driver = "com.microsoft.sqlserver.jdbc.SQLServerDriver";
// 	String url = "jdbc:sqlserver://123.142.124.141:1433";
// 	String user = "sa";
// 	String password = "hsnadmin";

// 	String connectionString = "jdbc:sqlserver://123.142.124.141:1433;" + "databaseName=KLNET_IF;user=sa;password=hsnadmin";

// 	Class.forName(driver);
// 	Connection e_conn = DriverManager.getConnection(connectionString);
// 	Statement e_stmt = null;
// 	e_stmt = e_conn.createStatement();
// 	ResultSet e_rs = null;
// 	CallableStatement e_cs = null;

	Connection e_conn = null;
	Statement e_stmt = null;
	ResultSet e_rs = null;
	CallableStatement e_cs = null;

	try {
		Context initCtx = new InitialContext();
		Context envCtx = (Context) initCtx.lookup("java:comp/env");
		DataSource dataSource = (DataSource) envCtx.lookup("jdbc/KLNET_IF");
		e_conn = dataSource.getConnection();
		e_stmt = e_conn.createStatement();

	} catch (NamingException e) {

	}

      out.write('\r');
      out.write('\n');
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
		
		// 조회
		if (V_TYPE.equals("S")) {
			String V_DTM_2380_FROM = request.getParameter("V_DTM_2380_FROM") == null ? "" : request.getParameter("V_DTM_2380_FROM").substring(0,10);
			String V_DTM_2380_TO = request.getParameter("V_DTM_2380_TO") == null ? "" : request.getParameter("V_DTM_2380_TO").substring(0,10);
			String V_BGM_1004 = request.getParameter("V_BGM_1004") == null ? "" : request.getParameter("V_BGM_1004").toUpperCase();
			String V_NADII3036A = request.getParameter("V_NADII3036A") == null ? "" : request.getParameter("V_NADII3036A").toUpperCase();
			String V_RFF_VA = request.getParameter("V_RFF_VA") == null ? "" : request.getParameter("V_RFF_VA").toUpperCase();
			String V_RFF_VA_A = request.getParameter("V_RFF_VA_A") == null ? "" : request.getParameter("V_RFF_VA_A").toUpperCase();
			String V_RFF_VA_B = request.getParameter("V_RFF_VA_B") == null ? "" : request.getParameter("V_RFF_VA_B").toUpperCase();
			String V_RFF_VA_C = request.getParameter("V_RFF_VA_C") == null ? "" : request.getParameter("V_RFF_VA_C").toUpperCase();
			String V_RFF_CNO = request.getParameter("V_RFF_CNO") == null ? "" : request.getParameter("V_RFF_CNO").toUpperCase();
			String V_RFF_CNO_A = request.getParameter("V_RFF_CNO_A") == null ? "" : request.getParameter("V_RFF_CNO_A").toUpperCase();
			String V_RFF_CNO_B = request.getParameter("V_RFF_CNO_B") == null ? "" : request.getParameter("V_RFF_CNO_B").toUpperCase();
			
			String V_BL_NO = request.getParameter("V_BL_NO") == null ? "" : request.getParameter("V_BL_NO").toUpperCase();
			String V_LC_NO = request.getParameter("V_LC_NO") == null ? "" : request.getParameter("V_LC_NO").toUpperCase();
			String V_HIDE_ERP = request.getParameter("V_HIDE_ERP") == null ? "" : request.getParameter("V_HIDE_ERP").toUpperCase();
			String V_REC_NM = request.getParameter("V_REC_NM") == null ? "" : request.getParameter("V_REC_NM").toUpperCase();
			
			if(V_RFF_VA.equals("T")){
				V_RFF_VA_A = "1";
				V_RFF_VA_B = "2";
				V_RFF_VA_C = "3";
			}
			if(V_RFF_CNO.equals("T")){
				V_RFF_CNO_A = "1";
				V_RFF_CNO_B = "2";
			}
			if(V_HIDE_ERP.equals("TRUE")){
				V_HIDE_ERP = "Y";
			}
			else{
				V_HIDE_ERP = "N";
			}
			
			
			e_cs = e_conn.prepareCall("{call dbo.HSPF_LOGIS_BILL_SELECT2(?,?,?,?,?,?,?,?,?,?,?,?,?)}");
			e_cs.setString(1, V_DTM_2380_FROM); //발행일
			e_cs.setString(2, V_DTM_2380_TO); // 발행일
			e_cs.setString(3, V_BGM_1004); // 문서고유번호
			e_cs.setString(4, V_NADII3036A); // 거래처명
			e_cs.setString(5, V_RFF_VA_A); // 과세(1)/영세(2)/면세(3)
			e_cs.setString(6, V_RFF_VA_B); // 과세(1)/영세(2)/면세(3)
			e_cs.setString(7, V_RFF_VA_C); // 과세(1)/영세(2)/면세(3)
			e_cs.setString(8, V_RFF_CNO_A); // 영수(1)/청구(2)
			e_cs.setString(9, V_RFF_CNO_B); // 영수(1)/청구(2)
			e_cs.setString(10, V_BL_NO); // 
			e_cs.setString(11, V_LC_NO); // 
			e_cs.setString(12, V_HIDE_ERP); // ERP완료 숨김 여부
			e_cs.setString(13, V_REC_NM); // 수신자
			
			rs = e_cs.executeQuery();
			
			while (rs.next()) {
				subObject = new JSONObject();
				subObject.put("XML_MSG_ID", rs.getString("XML_MSG_ID"));
				subObject.put("NTS_SEND_STATUS", rs.getString("RFF_SZ"));
				subObject.put("PUBLISHING_LOCATION", "웹");
				subObject.put("BP_NM", rs.getString("NADII3036A"));
				subObject.put("SERIAL_NUMBER", rs.getString("BGM_1004"));
				subObject.put("ISSUE_CLASSIFICATION", rs.getString("RFF_APG"));
				
				SimpleDateFormat beforeFormat = new SimpleDateFormat("yyyymmdd");
				SimpleDateFormat afterFormat = new SimpleDateFormat("yyyy-mm-dd");
				java.util.Date tempDate = null;
				tempDate = beforeFormat.parse(rs.getString("DTM_2380"));
				String transDate = afterFormat.format(tempDate);

				subObject.put("ISSUE_DATE", transDate);
				
				subObject.put("LINKED_YN", rs.getString("BGM_1060"));
				subObject.put("SUPPLY_AMOUNT", rs.getString("MOA5_23"));
				subObject.put("SEND_YN", rs.getString("SEND_YN"));
				subObject.put("REF_NO", rs.getString("REF_NO"));
				subObject.put("REF_NO2", rs.getString("REF_NO2"));
				
				
				subObject.put("GUK_NO", rs.getString("GUK_NO"));
				subObject.put("REC_USR", rs.getString("REC_USR"));
				subObject.put("VAT_AMOUNT", rs.getString("VAT_AMOUNT"));
				subObject.put("BL_YN", rs.getString("BL_YN"));
				subObject.put("BL_SEQ", rs.getString("BL_SEQ"));
				
				subObject.put("BL_NO2", rs.getString("BL_NO2"));
				subObject.put("LC_NO2", rs.getString("LC_NO2"));

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
		else if (V_TYPE.equals("POP")) {
			String V_XML_MSG_ID = request.getParameter("V_XML_MSG_ID") == null ? "" : request.getParameter("V_XML_MSG_ID").toUpperCase();
// 			String sql = " select A.XML_MSG_ID, A.BGM_1004, A.RFF_II_XA, A.NADII3036A, A.NADII3036B, A.NADII3036C, A.NADII3036D, A.NADII3124, A.CTAII_BJ_2, ";
// 					sql += " A.CTAII_AK_2, A.CTAII_MD_2, A.COMII_TE, A.COMII_AL, A.COMII_EM, A.RFFIIXA_40, A.RFF_IV_XA, A.NADIV3036A, A.NADIV3036B, A.NADIV3036C, ";
// 					sql += " A.NADIV3036D, A.NADIV3124, A.CTAIV_BJ_2, A.CTAIV_AK_2, A.CTAIV_MD_2, A.COMIV_TE, A.COMIV_AL, A.COMIV_EM, A.RFFIVXA_40, ";
// 					sql += " A.CTAIVAL_2, A.CTAIVBF_2, A.COMIV2_TE, A.COMIV2_AL, A.COMIV2_EM, A.DTM_2380, A.MOA5_23, A.MOA5_124,   ";
// 					sql += " B.LIN_7140, ISNULL(B.NAD7_3124B, 0) NAD7_3124B, ISNULL(A.MOA5_22, 0) MOA5_22, ISNULL(A.MOA5_212, 0) MOA5_212, ISNULL(A.MOA5_308, 0) MOA5_308, ISNULL(A.MOA5_9, 0) MOA5_9,  ";
// 					sql += " A.RFF_VA, A.RFF_CNO  ";
// 					sql += " from [KLNET_IF].[dbo].[TAX_HD] A (nolock)  ";
// 					sql += " LEFT OUTER JOIN [KLNET_IF].[dbo].[TAX_DTL] B (nolock) ON A.XML_MSG_ID = B.XML_MSG_ID and A.XMLDOC_SEQ = B.XMLDOC_SEQ  ";
// 					sql += " where A.BGM_1004 = '" +  V_BGM_1004  +"' ";

			e_cs = e_conn.prepareCall("{call dbo.HSPF_LOGIS_BILL_POP_INFO(?,?)}");
			e_cs.setString(1, V_TYPE); 
			e_cs.setString(2, V_XML_MSG_ID); //문서관리번호

// 			e_cs = e_conn.prepareCall("{call dbo.getData(?)}");
// 			e_cs.setString(1, sql); 
			
			rs = e_cs.executeQuery();
			
			SimpleDateFormat beforeFormat = new SimpleDateFormat("yyyymmdd");
			SimpleDateFormat afterFormat = new SimpleDateFormat("yyyy-mm-dd");
			java.util.Date tempDate = null;
			
			while (rs.next()) {
				subObject = new JSONObject();
				
				subObject.put("RFF_VA", rs.getString("RFF_VA")); // 과세/영세/면세

				
				
				subObject.put("MGM_NUMBER", rs.getString("XML_MSG_ID")); // 승인번호
				subObject.put("SERIAL_NUMBER", rs.getString("BGM_1004")); // 문서고유번호
				
				//공급자
				subObject.put("SUPP_BUSINESS_LICENSE_NUMBER", rs.getString("RFF_II_XA")); // 사업자등록번호
				subObject.put("SUPP_BUSINESS_NAME", rs.getString("NADII3036A")); // 법인명
				subObject.put("SUPP_IND_TYPE", rs.getString("NADII3036B")); // 업태
				subObject.put("SUPP_IND_CLASS", rs.getString("NADII3036C")); // 업종
				subObject.put("SUPP_REPRESENTATIVE_NAME", rs.getString("NADII3036D")); // 대표자명
				subObject.put("SUPP_BUSINESS_ADDRESS", rs.getString("NADII3124")); // 사업장주소
				subObject.put("SUPP_CODE", rs.getString("CTAII_BJ_2")); // 종사업장코드
				
				subObject.put("SUPP_CHARGE_NAME", rs.getString("CTAII_AK_2")); // 담당자
				subObject.put("SUPP_CHARGE_DEPT", rs.getString("CTAII_MD_2")); // 부서
				subObject.put("SUPP_CHARGE_TEL", rs.getString("COMII_TE")); // 전화
				subObject.put("SUPP_CHARGE_PHONE", rs.getString("COMII_AL")); // 핸드폰
				subObject.put("SUPP_CHARGE_MAIL", rs.getString("COMII_EM")); // 이메일
				subObject.put("SUPP_CHARGE_ID", rs.getString("RFFIIXA_40")); // ID
				
				//공급받는자
				subObject.put("CUST_BUSINESS_LICENSE_NUMBER", rs.getString("RFF_IV_XA")); // 사업자등록번호
				subObject.put("CUST_BUSINESS_NAME", rs.getString("NADIV3036A")); // 법인명
				subObject.put("CUST_IND_TYPE", rs.getString("NADIV3036B")); // 업태
				subObject.put("CUST_IND_CLASS", rs.getString("NADIV3036C")); // 업종
				subObject.put("CUST_REPRESENTATIVE_NAME", rs.getString("NADIV3036D")); // 대표자명
				subObject.put("CUST_BUSINESS_ADDRESS", rs.getString("NADIV3124")); // 사업장주소
				subObject.put("CUST_CODE", rs.getString("CTAIV_BJ_2")); // 종사업장코드
				
				subObject.put("CUST_CHARGE_NAME1", rs.getString("CTAIV_AK_2")); // 담당자
				subObject.put("CUST_CHARGE_DEPT1", rs.getString("CTAIV_MD_2")); // 부서
				subObject.put("CUST_CHARGE_TEL1", rs.getString("COMIV_TE")); // 전화
				subObject.put("CUST_CHARGE_PHONE1", rs.getString("COMIV_AL")); // 핸드폰
				subObject.put("CUST_CHARGE_MAIL1", rs.getString("COMIV_EM")); // 이메일
				subObject.put("CUST_CHARGE_ID1", rs.getString("RFFIVXA_40")); // ID
				
				subObject.put("CUST_CHARGE_NAME2", rs.getString("CTAIVAL_2")); // 담당자
				subObject.put("CUST_CHARGE_DEPT2", rs.getString("CTAIVBF_2")); // 부서
				subObject.put("CUST_CHARGE_TEL2", rs.getString("COMIV2_TE")); // 전화
				subObject.put("CUST_CHARGE_PHONE2", rs.getString("COMIV2_AL")); // 핸드폰
				subObject.put("CUST_CHARGE_MAIL2", rs.getString("COMIV2_EM")); // 이메일
				subObject.put("CUST_CHARGE_ID2", rs.getString("RFFIVXA_40")); // ID
				
				
				tempDate = beforeFormat.parse(rs.getString("DTM_2380"));
				String transDate = afterFormat.format(tempDate);

				subObject.put("ISSUE_DATE", transDate); // 발행일자
				subObject.put("SUPPLY_AMOUNT", rs.getString("MOA5_23")); // 공급가액
				subObject.put("TAX_AMOUNT", rs.getString("MOA5_124")); // 세액
				
				subObject.put("TRANSACTION_REFERENCE_NUMBER", rs.getString("LIN_7140")); // 거래참조번호
				subObject.put("PAY_COSTS", rs.getString("NAD7_3124B")); // 대납비용
				subObject.put("READY_MONEY", rs.getString("MOA5_22")); // 현금
				subObject.put("CHECK", rs.getString("MOA5_212")); // 수표
				subObject.put("BILL", rs.getString("MOA5_308")); // 어음
				subObject.put("UNPAID_BALANCE", rs.getString("MOA5_9")); // 외상미수금
				
				subObject.put("RFF_CNO", rs.getString("RFF_CNO")); // 영수/청구
				
				subObject.put("REMARK", rs.getString("REMARK")); // 비고
				
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
		else if (V_TYPE.equals("POP_GRID")) {
			String V_XML_MSG_ID = request.getParameter("V_XML_MSG_ID") == null ? "" : request.getParameter("V_XML_MSG_ID").toUpperCase();
			
			e_cs = e_conn.prepareCall("{call dbo.HSPF_LOGIS_BILL_POP_INFO(?,?)}");
			e_cs.setString(1, V_TYPE); 
			e_cs.setString(2, V_XML_MSG_ID); //문서고유번호
			
// 			String sql = " select B.MOA9_5004, B.ARD_5006, B.ARD_5007, B.DMS_1056, B.MEA10_6314, B.MOA10_146, B.MOA10_23, B.MOA10_124, B.DMS_1000 ";
// 				sql += " from [KLNET_IF].[dbo].[TAX_HD] A (nolock)  ";
// 				sql += " LEFT OUTER JOIN [KLNET_IF].[dbo].[TAX_ITEM] B (nolock) ON A.XML_MSG_ID = B.XML_MSG_ID and A.XMLDOC_SEQ = B.XMLDOC_SEQ  ";
// 				sql += " where A.BGM_1004 = '" + V_BGM_1004 + "'  ";


// 			e_cs = e_conn.prepareCall("{call dbo.getData(?)}");
// 			e_cs.setString(1, sql); 
			
			rs = e_cs.executeQuery();
			
			while (rs.next()) {
				subObject = new JSONObject();
				
				subObject.put("XML_MSG_ID", rs.getString("XML_MSG_ID")); // 관리번호
				subObject.put("ITEM_SEQ", rs.getString("ITEM_SEQ")); // 순번
				subObject.put("PUR_DATE", rs.getString("MOA9_5004")); // 구입일자
				subObject.put("ITEM_NAME", rs.getString("ARD_5006")); // 품목명
				subObject.put("CODE", rs.getString("ARD_5007")); // 품목명
				subObject.put("SPEC", rs.getString("DMS_1056")); // 규격
				subObject.put("QTY", rs.getFloat("MEA10_6314")); // 수량
				subObject.put("PRICE", rs.getFloat("MOA10_146")); // 단가
				subObject.put("SUPPLY_AMOUNT", rs.getFloat("MOA10_23")); // 공급가액
				subObject.put("TAX", rs.getFloat("MOA10_124")); // 세액
				subObject.put("REMARK", rs.getString("DMS_1000")); // 비고
				
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
		
		else if (V_TYPE.equals("FILE_GRID")) {
			String V_XML_MSG_ID = request.getParameter("V_XML_MSG_ID") == null ? "" : request.getParameter("V_XML_MSG_ID").toUpperCase();
			
			e_cs = e_conn.prepareCall("{call dbo.HSPF_LOGIS_BILL_POP_INFO(?,?)}");
			e_cs.setString(1, V_TYPE); 
			e_cs.setString(2, V_XML_MSG_ID); //문서고유번호
			
			
			rs = e_cs.executeQuery();
			
			while (rs.next()) {
				subObject = new JSONObject();
				
				subObject.put("XML_MSG_ID", rs.getString("XML_MSG_ID")); // 관리번호
				subObject.put("FILE_NAME", rs.getString("FILE_NAME")); // 비고
				subObject.put("FILE_IN_SYSTEM_NAME", rs.getString("FILE_IN_SYSTEM_NAME")); // 비고
				
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
		
		
		else if (V_TYPE.equals("SYNC")) {
			request.setCharacterEncoding("utf-8");
			String data = request.getParameter("data");
			String jsonData = URLDecoder.decode(data, "UTF-8");
			String errorMsg = "";
			if (jsonData.lastIndexOf("},{") > 0) { //배열일경우
				JSONArray jsonAr = (JSONArray) JSONValue.parse(jsonData);
				for (int i = 0; i < jsonAr.size(); i++) {
					HashMap hashMap = (HashMap) jsonAr.get(i);
					V_TYPE = hashMap.get("V_TYPE") == null ? "" : hashMap.get("V_TYPE").toString();
					String SERIAL_NUMBER = hashMap.get("SERIAL_NUMBER") == null ? "" : hashMap.get("SERIAL_NUMBER").toString();
					String XML_MSG_ID = hashMap.get("XML_MSG_ID") == null ? "" : hashMap.get("XML_MSG_ID").toString();
					
					
					
					//플랫폼 전송
					cs = conn.prepareCall("call USP_003_TAX_SEND(?,?,?,?)");
					cs.setString(1, V_TYPE); //
					cs.setString(2, SERIAL_NUMBER); //문서고유번호
					cs.setString(3, V_USR_ID); //
					cs.registerOutParameter(4, com.tmax.tibero.TbTypes.CURSOR);
					cs.executeQuery();
					rs = (ResultSet) cs.getObject(4);
					
					while (rs.next()) {
						subObject = new JSONObject();
						
						subObject.put("MSG", rs.getString("MSG")); // 결과 메시지
						jsonArray.add(subObject);
						errorMsg += (SERIAL_NUMBER + " : " + rs.getString("MSG") + "<BR>");
						
					}
					
					
					if(V_TYPE.equals("ERP")){
						//첨부파일 전송
						e_cs = e_conn.prepareCall("{call dbo.USP_TAX_FILE_MGM(?,?)}");
						e_cs.setString(1, "FILE_LIST"); 
						e_cs.setString(2, XML_MSG_ID); //문서관리번호
						
						rs = e_cs.executeQuery();
						
						while (rs.next()) {
							if(rs.getInt("FILE_FLAG") == 1){
								String inFile = "/data/TAX_FILE/" + rs.getString("FILE_IN_SYSTEM_NAME");
//	 							String outFile = "/data/TAX_FILE_146/" + rs.getString("FILE_NAME"); //옛날 ERP용으로 쓰던거 주석처리
								String outFile2 = "/data/M_BP_CHARGE/" + rs.getString("FILE_IN_SYSTEM_NAME");
								FileInputStream inStream = new FileInputStream(inFile); //원본파일
//	 							FileOutputStream  outStream = new FileOutputStream(outFile); //이동시킬 위치
								FileOutputStream  outStream2 = new FileOutputStream(outFile2); //이동시킬 위치
								
								int dataIndex = 0;
								
								while((dataIndex=inStream.read())!=-1) {
									//outStream.write(dataIndex);
									outStream2.write(dataIndex);
						        }
								
								inStream.close();
//	 							outStream.close();
								outStream2.close();
							}
						}
					}
					
					/*
					//ERP 전송
					e_cs = e_conn.prepareCall("{call dbo.USP_TAX_ERP_SEND(?,?,?)}");
					e_cs.setString(1, V_TYPE); //
					e_cs.setString(2, SERIAL_NUMBER); //문서고유번호
					e_cs.setString(3, V_USR_ID); //
					
					rs = e_cs.executeQuery();
					*/
					
					
					
					
					
					
					
					
					
						
					
					
				}
// 				jsonObject.put("success", true);
// 				jsonObject.put("resultList", jsonArray);
// 				System.out.println(jsonArray);
// 				System.out.println(jsonObject);

				response.setContentType("text/plain; charset=UTF-8");
				PrintWriter pw = response.getWriter();
				pw.print(errorMsg);
				pw.flush();
				pw.close();
				
				
			} else {
				JSONObject jsondata = JSONObject.fromObject(jsonData);
				V_TYPE = jsondata.get("V_TYPE") == null ? "" : jsondata.get("V_TYPE").toString();
				String SERIAL_NUMBER = jsondata.get("SERIAL_NUMBER") == null ? "" : jsondata.get("SERIAL_NUMBER").toString();
				String XML_MSG_ID = jsondata.get("XML_MSG_ID") == null ? "" : jsondata.get("XML_MSG_ID").toString();
				
				
				//플랫폼 전송
				cs = conn.prepareCall("call USP_003_TAX_SEND(?,?,?,?)");
				cs.setString(1, V_TYPE); //
				cs.setString(2, SERIAL_NUMBER); //문서고유번호
				cs.setString(3, V_USR_ID); //
				cs.registerOutParameter(4, com.tmax.tibero.TbTypes.CURSOR);
				cs.executeQuery();
				
				rs = (ResultSet) cs.getObject(4);
				
				
				while (rs.next()) {
					subObject = new JSONObject();
					
					subObject.put("MSG", rs.getString("MSG")); // 결과 메시지
					jsonArray.add(subObject);
					errorMsg += (SERIAL_NUMBER + " : " + rs.getString("MSG") + "<BR>");
				}
				
				
				if(V_TYPE.equals("ERP")){
					//첨부파일 전송
					e_cs = e_conn.prepareCall("{call dbo.USP_TAX_FILE_MGM(?,?)}");
					e_cs.setString(1, "FILE_LIST"); 
					e_cs.setString(2, XML_MSG_ID); //문서관리번호
					
					rs = e_cs.executeQuery();
					
					while (rs.next()) {
						if(rs.getInt("FILE_FLAG") == 1){
							String inFile = "/data/TAX_FILE/" + rs.getString("FILE_IN_SYSTEM_NAME");
// 							String outFile = "/data/TAX_FILE_146/" + rs.getString("FILE_NAME"); //옛날 ERP용으로 쓰던거 주석처리
							String outFile2 = "/data/M_BP_CHARGE/" + rs.getString("FILE_IN_SYSTEM_NAME");
							FileInputStream inStream = new FileInputStream(inFile); //원본파일
// 							FileOutputStream  outStream = new FileOutputStream(outFile); //이동시킬 위치
							FileOutputStream  outStream2 = new FileOutputStream(outFile2); //이동시킬 위치
							
							int dataIndex = 0;
							
							while((dataIndex=inStream.read())!=-1) {
								//outStream.write(dataIndex);
								outStream2.write(dataIndex);
					        }
							
							inStream.close();
// 							outStream.close();
							outStream2.close();
						}
					}
				}
				
				/*
				//ERP 전송
				e_cs = e_conn.prepareCall("{call dbo.USP_TAX_ERP_SEND(?,?,?)}");
				e_cs.setString(1, V_TYPE); //
				e_cs.setString(2, SERIAL_NUMBER); //문서고유번호
				e_cs.setString(3, V_USR_ID); //
				
				rs = e_cs.executeQuery();
				*/
				
				
				
// 				jsonObject.put("success", true);
// 				jsonObject.put("resultList", jsonArray);
// 				System.out.println(jsonArray);
// 				System.out.println(jsonObject);

				response.setContentType("text/plain; charset=UTF-8");
				PrintWriter pw = response.getWriter();
				pw.println(errorMsg);
				pw.flush();
				pw.close();
				
			}
			
		}

		else if(V_TYPE.equals("CODE_SAVE")){
			request.setCharacterEncoding("utf-8");
			String data = request.getParameter("data");
			String jsonData = URLDecoder.decode(data, "UTF-8");
			String errorMsg = "";
			if (jsonData.lastIndexOf("},{") > 0) { //배열일경우
				JSONArray jsonAr = (JSONArray) JSONValue.parse(jsonData);
				for (int i = 0; i < jsonAr.size(); i++) {
					HashMap hashMap = (HashMap) jsonAr.get(i);
					String XML_MSG_ID = hashMap.get("XML_MSG_ID") == null ? "" : hashMap.get("XML_MSG_ID").toString();
					String ITEM_SEQ = hashMap.get("ITEM_SEQ") == null ? "" : hashMap.get("ITEM_SEQ").toString();
					String CODE = hashMap.get("CODE") == null ? "" : hashMap.get("CODE").toString();
					
					e_cs = e_conn.prepareCall("{call dbo.USP_TAX_CODE_MGM(?,?,?)}");
					e_cs.setString(1, XML_MSG_ID); //
					e_cs.setString(2, ITEM_SEQ); //문서고유번호
					e_cs.setString(3, CODE); //
					
					e_cs.executeUpdate(); 
					
				}

				
			} else {
				JSONObject jsondata = JSONObject.fromObject(jsonData);
				String XML_MSG_ID = jsondata.get("XML_MSG_ID") == null ? "" : jsondata.get("XML_MSG_ID").toString();
				String ITEM_SEQ = jsondata.get("ITEM_SEQ") == null ? "" : jsondata.get("ITEM_SEQ").toString();
				String CODE = jsondata.get("CODE") == null ? "" : jsondata.get("CODE").toString();
				
				e_cs = e_conn.prepareCall("{call dbo.USP_TAX_CODE_MGM(?,?,?)}");
				e_cs.setString(1, XML_MSG_ID); //
				e_cs.setString(2, ITEM_SEQ); //문서고유번호
				e_cs.setString(3, CODE); //
				
				e_cs.executeUpdate(); 
				
			}
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
