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

<%
	request.setCharacterEncoding("utf-8");
	ResultSet rs = null;
	CallableStatement cs = null;
	JSONObject jsonObject = new JSONObject();
	JSONArray jsonArray = new JSONArray();
	JSONObject subObject = null;
	
	try {
		/* 공급사검색 */
		String V_TYPE = "MBP";
		String V_BP_CD = request.getParameter("W_M_BP_CD") == null ? "" : request.getParameter("W_M_BP_CD").toUpperCase();
		String V_BP_NM = request.getParameter("W_M_BP_NM") == null ? "" : request.getParameter("W_M_BP_NM").toUpperCase();
		String V_PARAM1 = request.getParameter("V_PARAM1") == null ? "" : request.getParameter("V_PARAM1").toUpperCase();
		
// 		System.out.println("V_PARAM1: " + V_PARAM1);

		cs = conn.prepareCall("call USP_B_POPUP_HSPF(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)");
		cs.setString(1, V_TYPE);//V_TYPE
		cs.setString(2, "");//V_COMP_ID
		cs.setString(3, V_BP_CD);//V_BP_CD
		cs.setString(4, V_BP_NM);//V_BP_NM
		cs.setString(5, "");//V_ITEM_CD
		cs.setString(6, "");//V_ITEM_NM
		cs.setString(7, "");//V_DEPT_CD
		cs.setString(8, "");//V_DEPT_NM
		cs.setString(9, "");//V_DATE1
		cs.setString(10, "");//V_DATE2
		cs.setString(11, V_PARAM1);//V_PARAM1
		cs.setString(12, "");//V_PARAM2
		cs.setString(13, "");//V_PARAM3
		cs.setString(14, "");//V_PARAM4
		cs.setString(15, "");//V_USR_ID
		cs.registerOutParameter(16, com.tmax.tibero.TbTypes.CURSOR);
		cs.executeQuery();

		rs = (ResultSet) cs.getObject(16);
		while (rs.next()) {
			subObject = new JSONObject();
			subObject.put("M_BP_CD", rs.getString("M_BP_CD"));
			subObject.put("M_BP_NM", rs.getString("M_BP_NM"));
			jsonArray.add(subObject);
		}
		jsonObject.put("success", true);
		jsonObject.put("resultList", jsonArray);

		// 		System.out.println(jsonObject);
		response.setContentType("text/plain; charset=UTF-8");
		PrintWriter pw = response.getWriter();
		pw.print(jsonObject);
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

