/*
 * Generated by the Jasper component of Apache Tomcat
 * Version: Apache Tomcat/8.0.52
 * Generated at: 2021-01-29 04:46:53 UTC
 * Note: The last modified time of this file was set to
 *       the last modified time of the source file after
 *       generation to assist with modification tracking.
 */
package org.apache.jsp.HSPF01.SWM.supplier.supdlv.sql;

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

public final class SupDlvMgmSqlSave_jsp extends org.apache.jasper.runtime.HttpJspBase
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
      out.write("\r\n");

	ResultSet rs = null;
	CallableStatement cs = null;
	String V_ERR_PO_NO = "";
	String V_ERR_PO_SEQ = "";
	try {
		// 	 System.out.println("납품예정저장SQL");
		JSONObject jsonObject = new JSONObject();
		JSONArray jsonArray = new JSONArray();
		JSONObject subObject = null;
		
		
		request.setCharacterEncoding("utf-8");

		String[] findList = { "#", "+", "&", "%", " " };
		String[] replList = { "%23", "%2B", "%26", "%25", "%20" };
		
		String data = request.getParameter("data");
		data = StringUtils.replaceEach(data, findList, replList);
		String jsonData = URLDecoder.decode(data, "UTF-8");
		
		String V_TYPE = request.getParameter("V_TYPE");
		String V_USR_ID = request.getParameter("V_USR_ID");
		String NEW_NO = "";
		if(V_TYPE.equals("SYNC")){
			if (jsonData.lastIndexOf("},{") > 0) { //배열일경우
				JSONArray jsonAr = (JSONArray) JSONValue.parse(jsonData);
				String NEW_PO_NO = "";
				for (int i = 0; i < jsonAr.size(); i++) {
					HashMap hashMap = (HashMap) jsonAr.get(i);
					V_TYPE = hashMap.get("V_TYPE") == null ? "" : hashMap.get("V_TYPE").toString(); // V
					
					String V_MAST_PO_NO = hashMap.get("MAST_PO_NO") == null ? "" : hashMap.get("MAST_PO_NO").toString();
					String V_MAST_PO_SEQ = hashMap.get("MAST_PO_SEQ") == null ? "" : hashMap.get("MAST_PO_SEQ").toString();
					V_ERR_PO_NO = V_MAST_PO_NO;
					V_ERR_PO_SEQ = V_MAST_PO_SEQ;
					String V_MAST_PO_SEQ_NO = hashMap.get("MAST_PO_SEQ_NO") == null ? "" : hashMap.get("MAST_PO_SEQ_NO").toString();
// 					String V_ASN_NO = hashMap.get("V_TYPE") == null ? "" : hashMap.get("V_TYPE").toString();
					String V_ASN_STS = hashMap.get("ASN_STS") == null ? "" : hashMap.get("ASN_STS").toString();
					String V_ITEM_CD = hashMap.get("ITEM_CD") == null ? "" : hashMap.get("ITEM_CD").toString();
					String V_DLV_AVL_DT = hashMap.get("DLV_AVL_DT") == null ? "" : hashMap.get("DLV_AVL_DT").toString();
					String V_DLV_AVL_QTY = hashMap.get("DLV_AVL_QTY") == null ? "" : hashMap.get("DLV_AVL_QTY").toString();
					
					
					
// 	 				 System.out.println("V_TYPE : " + V_TYPE);
// 	 				 System.out.println("V_MAST_PO_NO : " + V_MAST_PO_NO);
// 	 				 System.out.println("V_MAST_PO_SEQ : " + V_MAST_PO_SEQ);
// 	 				 System.out.println("V_MAST_PO_SEQ_NO : " + V_MAST_PO_SEQ_NO);
// 	 				 System.out.println("V_ASN_STS : " + V_ASN_STS);
// 	 				 System.out.println("V_ITEM_CD : " + V_ITEM_CD);
// 	 				 System.out.println("V_DLV_AVL_DT : " + V_DLV_AVL_DT);
// 	 				 System.out.println("V_DLV_AVL_QTY : " + V_DLV_AVL_QTY);
// 	 				 System.out.println("V_USR_ID : " + V_USR_ID);
// 	 				 System.out.println("NEW_NO : " + NEW_NO);
// 	 				 System.out.println("----------------------------------");
					if(V_DLV_AVL_DT.length() > 10){
						V_DLV_AVL_DT = V_DLV_AVL_DT.substring(0, 10);
					}
					if(i == 0 ){
						//채번
						cs = conn.prepareCall("{call USP_SUPP_ASN_MST_INSRT(?,?,?,?,?,?,?,?,?,?,?)}");
						cs.setString(1, "NEW");
						cs.setString(2, "");
						cs.setString(3, "");
						cs.setString(4, "");
						cs.setString(5, ""); //V_ASN_NO
						cs.setString(6, "");
						cs.setString(7, "");
						cs.setString(8, "");
						cs.setString(9, "");
						cs.setString(10, V_USR_ID);
						cs.registerOutParameter(11, Types.VARCHAR);
						cs.execute();
						
						NEW_NO = cs.getString(11);
						
					}
						cs = conn.prepareCall("{call USP_SUPP_ASN_MST_INSRT(?,?,?,?,?,?,?,?,?,?,?)}");
						cs.setString(1, V_TYPE);
						cs.setString(2, V_MAST_PO_NO);
						cs.setString(3, V_MAST_PO_SEQ);
						cs.setString(4, V_MAST_PO_SEQ_NO);
						cs.setString(5, NEW_NO); //V_ASN_NO
						cs.setString(6, V_ASN_STS);
						cs.setString(7, V_ITEM_CD);
						cs.setString(8, V_DLV_AVL_DT);
						cs.setString(9, V_DLV_AVL_QTY);
						cs.setString(10, V_USR_ID);
						cs.registerOutParameter(11, Types.VARCHAR);
						cs.execute();
					
				}
			} 
			else {
				String NEW_PO_NO = "";
				
				JSONObject jsondata = JSONObject.fromObject(jsonData);
				V_TYPE = jsondata.get("V_TYPE") == null ? "" : jsondata.get("V_TYPE").toString(); // V
				
				String V_MAST_PO_NO = jsondata.get("MAST_PO_NO") == null ? "" : jsondata.get("MAST_PO_NO").toString();
				String V_MAST_PO_SEQ = jsondata.get("MAST_PO_SEQ") == null ? "" : jsondata.get("MAST_PO_SEQ").toString();
				String V_MAST_PO_SEQ_NO = jsondata.get("MAST_PO_SEQ_NO") == null ? "" : jsondata.get("MAST_PO_SEQ_NO").toString();
				V_ERR_PO_NO = V_MAST_PO_NO;
				V_ERR_PO_SEQ = V_MAST_PO_SEQ;
//					String V_ASN_NO = jsondata.get("V_TYPE") == null ? "" : jsondata.get("V_TYPE").toString();
				String V_ASN_STS = jsondata.get("ASN_STS") == null ? "" : jsondata.get("ASN_STS").toString();
				String V_ITEM_CD = jsondata.get("ITEM_CD") == null ? "" : jsondata.get("ITEM_CD").toString();
				String V_DLV_AVL_DT = jsondata.get("DLV_AVL_DT") == null ? "" : jsondata.get("DLV_AVL_DT").toString();
				String V_DLV_AVL_QTY = jsondata.get("DLV_AVL_QTY") == null ? "" : jsondata.get("DLV_AVL_QTY").toString();

				if(V_DLV_AVL_DT.length() > 10){
					V_DLV_AVL_DT = V_DLV_AVL_DT.substring(0, 10);
				}
				
				
				
				cs = conn.prepareCall("{call USP_SUPP_ASN_MST_INSRT(?,?,?,?,?,?,?,?,?,?,?)}");
				cs.setString(1, V_TYPE);
				cs.setString(2, V_MAST_PO_NO);
				cs.setString(3, V_MAST_PO_SEQ);
				cs.setString(4, V_MAST_PO_SEQ_NO);
				cs.setString(5, "");//V_ASN_NO
				cs.setString(6, V_ASN_STS);
				cs.setString(7, V_ITEM_CD);
				cs.setString(8, V_DLV_AVL_DT);
				cs.setString(9, V_DLV_AVL_QTY);
				cs.setString(10, V_USR_ID);
				cs.registerOutParameter(11, Types.VARCHAR);
				cs.execute();
			}
		}
		
		
		

		//MyViewport
		
// 		System.out.println("V_TYPE : " + V_TYPE);


		
		/*
		if (V_TYPE != null) {
			String V_MAST_PO_NO = request.getParameter("V_MAST_PO_NO");
			String V_MAST_PO_SEQ = request.getParameter("V_MAST_PO_SEQ");
			String V_MAST_PO_SEQ_NO = request.getParameter("V_MAST_PO_SEQ_NO");
			String V_ASN_NO = (request.getParameter("V_ASN_NO") == null ? "" : request.getParameter("V_ASN_NO").toString());
			String V_ASN_STS = (request.getParameter("V_ASN_STS") == null ? "" : request.getParameter("V_ASN_STS").toString());
			String V_ITEM_CD = request.getParameter("V_ITEM_CD");
			String V_DLV_AVL_DT = request.getParameter("V_DLV_AVL_DT");
			String V_DLV_AVL_QTY = request.getParameter("V_DLV_AVL_QTY");
			String V_USR_ID = request.getParameter("V_USR_ID");
			String V_NUM = request.getParameter("V_NUM");

// 				 System.out.println("V_TYPE : " + V_TYPE);
// 				 System.out.println("V_MAST_PO_NO : " + V_MAST_PO_NO);
// 				 System.out.println("V_MAST_PO_SEQ : " + V_MAST_PO_SEQ);
// 				 System.out.println("V_MAST_PO_SEQ_NO : " + V_MAST_PO_SEQ_NO);
// 				 System.out.println("V_ASN_NO : " + V_ASN_NO);
// 				 System.out.println("V_ASN_STS : " + V_ASN_STS);
// 				 System.out.println("V_ITEM_CD : " + V_ITEM_CD);
// 				 System.out.println("V_DLV_AVL_DT : " + V_DLV_AVL_DT);
// 				 System.out.println("V_DLV_AVL_QTY : " + V_DLV_AVL_QTY);
// 				 System.out.println("V_USR_ID : " + V_USR_ID);

			// 	 System.out.println("V_ASN_NO : " + V_ASN_NO);

			cs = conn.prepareCall("{call USP_SUPP_ASN_MST_INSRT(?,?,?,?,?,?,?,?,?,?,?)}");
			cs.setString(1, V_TYPE);
			cs.setString(2, V_MAST_PO_NO);
			cs.setString(3, V_MAST_PO_SEQ);
			cs.setString(4, V_MAST_PO_SEQ_NO);
			cs.setString(5, V_ASN_NO);
			cs.setString(6, V_ASN_STS);
			cs.setString(7, V_ITEM_CD);
			cs.setString(8, (V_DLV_AVL_DT == null ? "" : V_DLV_AVL_DT.substring(0, 10)));
			cs.setString(9, V_DLV_AVL_QTY);
			cs.setString(10, V_USR_ID);
			cs.registerOutParameter(11, Types.VARCHAR);
			cs.execute();

			// 	subObject.put("ASN_NO", cs.getString(11));
			// 	jsonArray.add(subObject);
			// 	jsonObject.put("resultList", cs.getString(11));
			// 	System.out.println(jsonObject);

			PrintWriter pw = response.getWriter();
			pw.print(cs.getString(11));
			pw.flush();
			pw.close();
			
		}
		*/

	} catch (Exception e) {
		System.out.println("V_ERR_PO_NO : " + V_ERR_PO_NO);
		System.out.println("V_ERR_PO_SEQ : " + V_ERR_PO_SEQ);
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

      out.write('\r');
      out.write('\n');
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
