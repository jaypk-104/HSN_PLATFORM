<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@page import="org.json.simple.JSONArray"%>
<%@page import="org.json.simple.JSONValue"%>
<%@page import="net.sf.json.JSONObject"%>
<%@page import="java.io.PrintWriter"%>
<%@page import="java.io.StringWriter"%>
<%@page import="java.net.URLDecoder"%>
<%@page import="java.util.HashMap"%>
<%@ include file="/HSPF01/common/DB_Connection.jsp"%>
<%@ page import="java.net.*"%>
<%@ page import="java.io.*"%>

<%
	request.setCharacterEncoding("utf-8");
	ResultSet rs = null;
	CallableStatement cs = null;
	JSONObject jsonObject = new JSONObject();
	JSONArray jsonArray = new JSONArray();
	JSONObject subObject = null;

	JSONObject anyObject = new JSONObject();
	JSONArray anyArray = new JSONArray();
	JSONObject anySubObject = new JSONObject();

	try {
		String V_USR_ID = request.getParameter("V_USR_ID") == null ? "" : request.getParameter("V_USR_ID");
		String V_COMP_ID = request.getParameter("V_COMP_ID") == null ? "" : request.getParameter("V_COMP_ID");
		String V_PO_NO = request.getParameter("V_PO_NO") == null ? "" : request.getParameter("V_PO_NO");

		String[] V_PO_NO_arr = V_PO_NO.split(",");

		for (int i = 0; i < V_PO_NO_arr.length; i++) {
			anySubObject.put("PO_NO", V_PO_NO_arr[i]);
		}
		
		URL url1 = new URL("http://123.142.124.155:8088/http/hsn_cmb_po");
		URLConnection con = url1.openConnection();
		con.setRequestProperty("Accept-Language", "ko-kr,ko;q=0.8,en-us;q=0.5,en;q=0.3");
		con.setDoOutput(true);
		
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
		
// 		System.out.println(result);

		response.setContentType("text/plain; charset=UTF-8");
		PrintWriter pw = response.getWriter();
		pw.print(result);
		pw.flush();
		pw.close();

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
	}
%>




