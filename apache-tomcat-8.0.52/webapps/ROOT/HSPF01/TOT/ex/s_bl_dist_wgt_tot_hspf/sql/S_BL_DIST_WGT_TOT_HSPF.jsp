<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@page import="org.json.simple.JSONArray"%>
<%@page import="org.json.simple.JSONValue"%>
<%@page import="org.json.simple.JSONObject"%>
<%@page import="org.json.simple.parser.JSONParser"%>
<%@page import="java.io.PrintWriter"%>
<%@page import="java.io.StringWriter"%>
<%@page import="java.net.URLDecoder"%>
<%@page import="java.util.HashMap"%>
<%@page import="org.apache.commons.lang.StringUtils"%>
<%@ include file="/HSPF01/common/DB_Connection.jsp"%>

<%
	request.setCharacterEncoding("utf-8");
	ResultSet rs = null;
	CallableStatement cs = null;
	JSONObject jsonObject = new JSONObject();
	JSONArray jsonArray = new JSONArray();
	JSONObject subObject = null;

	try {
		String V_COMP_ID = request.getParameter("V_COMP_ID") == null ? "" : request.getParameter("V_COMP_ID");
		String V_TYPE = request.getParameter("V_TYPE") == null ? "" : request.getParameter("V_TYPE");
		String V_INV_DT = request.getParameter("V_INV_DT") == null ? "" : request.getParameter("V_INV_DT").toUpperCase().substring(0, 10);
		String V_INVOICE_NO = request.getParameter("V_INVOICE_NO") == null ? "" : request.getParameter("V_INVOICE_NO").toUpperCase();
		String V_BP_CD = request.getParameter("V_BP_CD") == null ? "" : request.getParameter("V_BP_CD").toUpperCase();
		String V_USR_ID = request.getParameter("V_USR_ID") == null ? "" : request.getParameter("V_USR_ID").toUpperCase();

		if (V_TYPE.equals("S")) {
			cs = conn.prepareCall("call USP_003_S_BL_DIST_WGT_TOT_HSPF(?,?,?,?,?,?,?,?,?,?)");
			cs.setString(1, V_COMP_ID);//V_COMP_ID 		
			cs.setString(2, V_TYPE);//V_TYPE
			cs.setString(3, V_INV_DT);//V_INV_DT
			cs.setString(4, V_INVOICE_NO);//V_INVOICE_NO 
			cs.setString(5, V_BP_CD);//V_BP_CD
			cs.setString(6, "");//V_INV_NO
			cs.setString(7, "");//V_INV_SEQ
			cs.setString(8, "");//V_GROSS_WGT
			cs.setString(9, "");//V_USR_ID
			cs.registerOutParameter(10, com.tmax.tibero.TbTypes.CURSOR);
			cs.executeQuery();
			
			rs = (ResultSet) cs.getObject(10);
			while (rs.next()) {
				subObject = new JSONObject();
				subObject.put("INVOICE_NO", rs.getString("INVOICE_NO"));
				subObject.put("INV_DT", rs.getString("INV_DT"));
				subObject.put("BP_CD", rs.getString("BP_CD"));
				subObject.put("BP_NM", rs.getString("BP_NM"));
				subObject.put("ITEM_CD", rs.getString("ITEM_CD"));
				subObject.put("ITEM_NM", rs.getString("ITEM_NM"));
				subObject.put("QTY", rs.getString("QTY"));
				subObject.put("NET_WGT", rs.getString("NET_WGT"));
				subObject.put("GROSS_WGT", rs.getString("GROSS_WGT"));
				subObject.put("INV_NO", rs.getString("INV_NO"));
				subObject.put("INV_SEQ", rs.getString("INV_SEQ"));
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
					String V_INV_NO = hashMap.get("INV_NO") == null ? "" : hashMap.get("INV_NO").toString();
					String V_INV_SEQ = hashMap.get("INV_SEQ") == null ? "" : hashMap.get("INV_SEQ").toString();
					String V_GROSS_WGT = hashMap.get("GROSS_WGT") == null ? "" : hashMap.get("GROSS_WGT").toString();

					cs = conn.prepareCall("call USP_003_S_BL_DIST_WGT_TOT_HSPF(?,?,?,?,?,?,?,?,?,?)");
					cs.setString(1, V_COMP_ID);//V_COMP_ID 		
					cs.setString(2, V_TYPE);//V_TYPE
					cs.setString(3, "");//V_INV_DT
					cs.setString(4, "");//V_INVOICE_NO 
					cs.setString(5, "");//V_BP_CD
					cs.setString(6, V_INV_NO);//V_INV_NO
					cs.setString(7, V_INV_SEQ);//V_INV_SEQ
					cs.setString(8, V_GROSS_WGT);//V_GROSS_WGT
					cs.setString(9, V_USR_ID);//V_USR_ID
					cs.registerOutParameter(10, com.tmax.tibero.TbTypes.CURSOR);
					cs.executeQuery();
				}
			} else {
				JSONParser parser = new JSONParser();
				Object obj = parser.parse(jsonData);
				JSONObject jsondata = (JSONObject) obj;

				V_TYPE = jsondata.get("V_TYPE") == null ? "" : jsondata.get("V_TYPE").toString();
				String V_INV_NO = jsondata.get("INV_NO") == null ? "" : jsondata.get("INV_NO").toString();
				String V_INV_SEQ = jsondata.get("INV_SEQ") == null ? "" : jsondata.get("INV_SEQ").toString();
				String V_GROSS_WGT = jsondata.get("GROSS_WGT") == null ? "" : jsondata.get("GROSS_WGT").toString();

				cs = conn.prepareCall("call USP_003_S_BL_DIST_WGT_TOT_HSPF(?,?,?,?,?,?,?,?,?,?)");
				cs.setString(1, V_COMP_ID);//V_COMP_ID 		
				cs.setString(2, V_TYPE);//V_TYPE
				cs.setString(3, "");//V_INV_DT
				cs.setString(4, "");//V_INVOICE_NO 
				cs.setString(5, "");//V_BP_CD
				cs.setString(6, V_INV_NO);//V_INV_NO
				cs.setString(7, V_INV_SEQ);//V_INV_SEQ
				cs.setString(8, V_GROSS_WGT);//V_GROSS_WGT
				cs.setString(9, V_USR_ID);//V_USR_ID
				cs.registerOutParameter(10, com.tmax.tibero.TbTypes.CURSOR);
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
%>


