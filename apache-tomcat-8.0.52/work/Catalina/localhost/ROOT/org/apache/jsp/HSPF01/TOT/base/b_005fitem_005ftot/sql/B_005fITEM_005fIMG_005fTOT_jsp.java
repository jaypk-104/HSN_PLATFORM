/*
 * Generated by the Jasper component of Apache Tomcat
 * Version: Apache Tomcat/8.0.52
 * Generated at: 2021-02-09 02:16:25 UTC
 * Note: The last modified time of this file was set to
 *       the last modified time of the source file after
 *       generation to assist with modification tracking.
 */
package org.apache.jsp.HSPF01.TOT.base.b_005fitem_005ftot.sql;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.jsp.*;
import org.json.simple.JSONArray;
import org.json.simple.JSONValue;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import java.io.PrintWriter;
import java.io.StringWriter;
import java.net.URLDecoder;
import java.util.HashMap;
import java.net.*;
import java.io.*;
import org.apache.commons.lang.StringUtils;
import java.sql.*;
import javax.naming.Context;
import javax.naming.InitialContext;
import javax.naming.NamingException;
import javax.sql.DataSource;
import java.text.*;
import java.lang.*;
import java.util.*;
import java.io.File;
import java.util.Iterator;
import java.util.List;
import org.apache.commons.fileupload.FileItem;
import org.apache.commons.lang.StringUtils;
import org.apache.commons.fileupload.DiskFileUpload;
import org.apache.commons.fileupload.FileUpload;

public final class B_005fITEM_005fIMG_005fTOT_jsp extends org.apache.jasper.runtime.HttpJspBase
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
    _jspx_imports_packages.add("java.text");
    _jspx_imports_packages.add("java.lang");
    _jspx_imports_packages.add("java.util");
    _jspx_imports_packages.add("java.net");
    _jspx_imports_packages.add("javax.servlet.http");
    _jspx_imports_packages.add("java.io");
    _jspx_imports_packages.add("javax.servlet.jsp");
    _jspx_imports_classes = new java.util.HashSet<>();
    _jspx_imports_classes.add("java.io.PrintWriter");
    _jspx_imports_classes.add("javax.naming.InitialContext");
    _jspx_imports_classes.add("org.apache.commons.lang.StringUtils");
    _jspx_imports_classes.add("java.net.URLDecoder");
    _jspx_imports_classes.add("java.util.Iterator");
    _jspx_imports_classes.add("org.apache.commons.fileupload.DiskFileUpload");
    _jspx_imports_classes.add("org.json.simple.parser.JSONParser");
    _jspx_imports_classes.add("java.io.StringWriter");
    _jspx_imports_classes.add("org.apache.commons.fileupload.FileItem");
    _jspx_imports_classes.add("java.util.HashMap");
    _jspx_imports_classes.add("javax.naming.NamingException");
    _jspx_imports_classes.add("org.json.simple.JSONArray");
    _jspx_imports_classes.add("java.io.File");
    _jspx_imports_classes.add("org.apache.commons.fileupload.FileUpload");
    _jspx_imports_classes.add("java.util.List");
    _jspx_imports_classes.add("org.json.simple.JSONObject");
    _jspx_imports_classes.add("org.json.simple.JSONValue");
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
      out.write("\r\n");
      out.write("\r\n");
      out.write("\r\n");
      out.write("\r\n");

	request.setCharacterEncoding("utf-8");
	ResultSet rs = null;
	CallableStatement cs = null;
	JSONObject jsonObject = new JSONObject();
	JSONArray jsonArray = new JSONArray();
	JSONObject subObject = null;

	final String IMG_URL = "http://123.142.124.146/data/B_ITEM_TOT/";
// 	final String IMG_EXT = ".jpg";
	
	try {
		String V_TYPE = request.getParameter("V_TYPE") == null ? "^" : request.getParameter("V_TYPE");
		String V_COMP_ID = request.getParameter("V_COMP_ID") == null ? "^" : request.getParameter("V_COMP_ID").toUpperCase();
		String V_ITEM_CD = request.getParameter("V_ITEM_CD") == null ? "^" : request.getParameter("V_ITEM_CD").toUpperCase();
		String V_USR_ID = request.getParameter("V_USR_ID") == null ? "" : request.getParameter("V_USR_ID").toUpperCase();
		
		//조회
		if (V_TYPE.equals("S")) {
			cs = conn.prepareCall("call USP_003_B_ITEM_IMG_TOT(?,?,?,?,?,?,?)");
			cs.setString(1, V_TYPE);//V_TYPE
			cs.setString(2, V_COMP_ID);//V_COMP_ID
			cs.setString(3, V_ITEM_CD.trim());//V_ITEM_CD
			cs.setString(4, V_USR_ID);//V_USR_ID
			cs.registerOutParameter(5, com.tmax.tibero.TbTypes.CURSOR);
			cs.setString(6, "");//V_SEQ
			cs.setString(7, "");//V_IMG_NM
			cs.executeQuery();

			rs = (ResultSet) cs.getObject(5);
			while (rs.next()) {
				subObject = new JSONObject();
				subObject.put("ITEM_CD", rs.getString("ITEM_CD"));
				subObject.put("SEQ", rs.getString("SEQ"));
				subObject.put("IMG_NM", rs.getString("IMG_NM"));
				subObject.put("IMAGE", IMG_URL+rs.getString("IMG_NM"));
				jsonArray.add(subObject);
			}

			jsonObject.put("success", true);
			jsonObject.put("resultList", jsonArray);

			response.setContentType("text/plain; charset=UTF-8");
			PrintWriter pw = response.getWriter();
			pw.print(jsonObject);
			pw.flush();
			pw.close();

		} else if (V_TYPE.equals("I")) {
			String V_FILE_NM = "";
			
			if (FileUpload.isMultipartContent(request)) {
				DiskFileUpload fileUpload = new DiskFileUpload();
				fileUpload.setRepositoryPath("/");
				fileUpload.setSizeMax(100 * 1024 * 1024);
				fileUpload.setSizeThreshold(1024 * 50);
				List items = fileUpload.parseRequest(request);
				Iterator iterator = items.iterator();

				while (iterator.hasNext()) {
					FileItem item = (FileItem) iterator.next();
					if (!item.isFormField() && item.getSize() > 0) {

// 						int pos = item.getName().lastIndexOf(".");
// 						String ext = item.getName().substring(pos);

						V_FILE_NM = item.getName();
						File file = new File("/data/B_ITEM_TOT/" + V_FILE_NM);
// 						File file = new File("D:\\\\TEST\\" + V_FILE_NM);
						
						request.setAttribute("file", file);
						item.write(file);
						item.delete();
 									
						cs = conn.prepareCall("call USP_003_B_ITEM_IMG_TOT(?,?,?,?,?,?,?)");
						cs.setString(1, V_TYPE);//V_TYPE
						cs.setString(2, V_COMP_ID);//V_COMP_ID
						cs.setString(3, V_ITEM_CD.trim());//V_ITEM_CD
						cs.setString(4, V_USR_ID);//V_USR_ID
						cs.registerOutParameter(5, com.tmax.tibero.TbTypes.CURSOR);
						cs.setString(6, "");//V_SEQ
						cs.setString(7, V_FILE_NM);//V_IMG_NM
						cs.executeQuery();
					}
				}
			}
			response.setContentType("text/html");
			
			PrintWriter pw = response.getWriter();
			pw.print("success");
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
					V_ITEM_CD = hashMap.get("ITEM_CD") == null ? "" : hashMap.get("ITEM_CD").toString();
					String V_SEQ = hashMap.get("SEQ") == null ? "" : hashMap.get("SEQ").toString();
					String V_IMG_NM = hashMap.get("IMG_NM") == null ? "" : hashMap.get("IMG_NM").toString();

					cs = conn.prepareCall("call USP_003_B_ITEM_IMG_TOT(?,?,?,?,?,?,?)");
					cs.setString(1, V_TYPE);//V_TYPE
					cs.setString(2, V_COMP_ID);//V_COMP_ID
					cs.setString(3, V_ITEM_CD.trim());//V_ITEM_CD
					cs.setString(4, V_USR_ID);//V_USR_ID
					cs.registerOutParameter(5, com.tmax.tibero.TbTypes.CURSOR);
					cs.setString(6, V_SEQ);//V_SEQ
					cs.setString(7, V_IMG_NM);//V_IMG_NM
					cs.executeQuery();
				}
			} else {
				JSONParser parser = new JSONParser();
				Object obj = parser.parse(jsonData);
				JSONObject jsondata = (JSONObject) obj;
				
				V_TYPE = jsondata.get("V_TYPE") == null ? "" : jsondata.get("V_TYPE").toString();
				V_ITEM_CD = jsondata.get("ITEM_CD") == null ? "" : jsondata.get("ITEM_CD").toString();
				String V_SEQ = jsondata.get("SEQ") == null ? "" : jsondata.get("SEQ").toString();
				String V_IMG_NM = jsondata.get("IMG_NM") == null ? "" : jsondata.get("IMG_NM").toString();
				
				cs = conn.prepareCall("call USP_003_B_ITEM_IMG_TOT(?,?,?,?,?,?,?)");
				cs.setString(1, V_TYPE);//V_TYPE
				cs.setString(2, V_COMP_ID);//V_COMP_ID
				cs.setString(3, V_ITEM_CD.trim());//V_ITEM_CD
				cs.setString(4, V_USR_ID);//V_USR_ID
				cs.registerOutParameter(5, com.tmax.tibero.TbTypes.CURSOR);
				cs.setString(6, V_SEQ);//V_SEQ
				cs.setString(7, V_IMG_NM);//V_IMG_NM
				cs.executeQuery();
			}
			
			response.setContentType("text/plain; charset=UTF-8");
			PrintWriter pw = response.getWriter();
			pw.print("success");
			pw.flush();
			pw.close();
		}

	} catch (Exception e) {
		e.printStackTrace();
	} finally {
		if (cs != null)
			try {
				cs.close();
			} catch (SQLException ex) {
			}
		if (rs != null)
			try {
				rs.close();
			} catch (SQLException ex) {
			}
		if (stmt != null)
			try {
				stmt.close();
			} catch (SQLException ex) {
			}
		if (conn != null)
			try {
				conn.close();
			} catch (SQLException ex) {
			}
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
