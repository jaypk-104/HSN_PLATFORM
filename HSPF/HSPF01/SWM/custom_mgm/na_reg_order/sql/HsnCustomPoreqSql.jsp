<%@page import="java.io.PrintWriter"%>
<%@page import="org.json.simple.JSONArray"%>
<%@page import="org.json.simple.JSONObject"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ page import="java.sql.*"%>
<%@ include file="/HSPF01/common/DB_SWM.jsp"%>

<%
	ResultSet rs = null;
	try {

		JSONObject jsonObject = new JSONObject();
		JSONArray jsonArray = new JSONArray();
		JSONObject subObject = null;
		String u_na_dt_to = request.getParameter("u_na_dt_to").substring(0, 10);
		String u_na_dt_from = request.getParameter("u_na_dt_from").substring(0, 10);
		String u_dt_to = request.getParameter("u_dt_to").substring(0, 10);
		String u_dt_from = request.getParameter("u_dt_from").substring(0, 10);
		String u_po_no = request.getParameter("u_po_no");
		String poradio = request.getParameter("poradio");

		String V_chk_AA = request.getParameter("V_chk_AA");
		String V_chk_AU = request.getParameter("V_chk_AU");
		String V_chk_AM = request.getParameter("V_chk_AM");

		String V_PLANT_CD = "";

		if (poradio.equals("Y")) {
			poradio = " ='" + poradio + "'";
		} else if (poradio.equals("N")) {
			poradio = " ='" + poradio + "'";
		} else if (poradio.equals("ALL")) {
			poradio = " in('Y','N')";
		}

		String sql = "SELECT A.PO_NO, TO_NUMBER(A.PO_SEQ) PO_SEQ, A.PO_DT, A.PLANT_CD, ";
		sql += " CASE A.PLANT_CD WHEN '03' THEN 'HSAM' WHEN '01' THEN 'HSAA' ELSE 'HSAU' END PLANT_NM, A.ITEM_CD, ";
		sql += " B.BP_ITEM_CD, D.ITEM_NM,D.SPEC,A.SL_QTY,A.SL_PRC,A.SL_AMT,B.S_PRICE BASE_SL_PRC,A.DLV_DT, ";
		sql += " A.PO_YN,A.REMARK, EX.BP_CD M_BP_CD,F.BP_NM M_BP_NM,EX.M_PRICE M_PRC ";
		sql += " FROM M_PO_REC_HSNA A LEFT OUTER JOIN S_BP_ITEM_PRICE_SWM B ON  A.ITEM_CD=B.ITEM_CD ";
		sql += " AND B.VALID_FR_DT=(SELECT MAX(C.VALID_FR_DT) FROM S_BP_ITEM_PRICE_SWM C  WHERE B.ITEM_CD=C.ITEM_CD AND B.BP_CD=C.BP_CD) ";
		sql += " LEFT OUTER JOIN m_bp_item_price_swm EX ON A.ITEM_CD = EX.ITEM_CD ";
		sql += " AND EX.VALID_FR_DT = (SELECT MAX(EXX.VALID_FR_DT) FROM m_bp_item_price_swm EXX WHERE EXX.ITEM_CD = A.ITEM_CD AND EXX.BP_CD=EX.BP_CD) ";
		sql += " LEFT OUTER JOIN B_ITEM_SWM D ON A.ITEM_CD=D.ITEM_CD ";
		sql += "LEFT OUTER JOIN B_BIZ_INFO F ON EX.BP_CD=F.BP_CD  ";
		sql += " WHERE PO_DT <='" + u_na_dt_to + "' AND PO_DT >='" + u_na_dt_from + "'";
		sql += " AND PO_YN" + poradio + " AND DLV_DT>= '" + u_dt_from + "' AND DLV_DT<='" + u_dt_to + "' ";
		sql += " AND (B.BP_CD IS NULL OR B.BP_CD = CASE A.PLANT_CD WHEN '03' THEN '04529' ELSE '00296' END  )";
		sql += " AND PO_NO LIKE '%" + u_po_no + "%' ";

		if (V_chk_AA.equals("false")) {
			sql += "AND A.PLANT_CD <> '01'";
		}
		if (V_chk_AU.equals("false")) {
			sql += "AND A.PLANT_CD <> '02'";
		}
		if (V_chk_AM.equals("false")) {
			sql += "AND A.PLANT_CD <> '03'";
		}

		sql += " ORDER BY A.PO_DT,A.PO_NO,A.PO_SEQ,EX.BP_CD";

// 		System.out.println(sql);
		rs = stmt.executeQuery(sql);
		while (rs.next()) {
			subObject = new JSONObject();
			subObject.put("PO_YN", rs.getString("PO_YN"));
			subObject.put("PO_NO", rs.getString("PO_NO"));
			subObject.put("PO_SEQ", Integer.parseInt(rs.getString("PO_SEQ")));
			subObject.put("PO_DT", rs.getString("PO_DT").substring(0, 10));
			subObject.put("PLANT_CD", rs.getString("PLANT_CD"));
			subObject.put("BP_ITEM_CD", rs.getString("BP_ITEM_CD"));
			subObject.put("ITEM_CD", rs.getString("ITEM_CD"));
			subObject.put("ITEM_NM", rs.getString("ITEM_NM"));
			subObject.put("SPEC", rs.getString("SPEC"));
			subObject.put("SL_QTY", rs.getFloat("SL_QTY"));
			subObject.put("SL_PRC", rs.getFloat("SL_PRC"));
			subObject.put("SL_AMT", rs.getFloat("SL_AMT"));
			subObject.put("BASE_SL_PRC", rs.getFloat("BASE_SL_PRC"));
			subObject.put("DLV_DT", rs.getString("DLV_DT").substring(0, 10));
			subObject.put("REMARK", rs.getString("REMARK"));
			subObject.put("M_BP_CD", rs.getString("M_BP_CD"));
			subObject.put("M_BP_NM", rs.getString("M_BP_NM"));
			subObject.put("M_PRC", rs.getFloat("M_PRC"));
			subObject.put("PLANT_NM", rs.getString("PLANT_NM"));

			jsonArray.add(subObject);
		}
		jsonObject.put("success", true);
		jsonObject.put("resultList", jsonArray);

		// 		System.out.println(jsonString);

		response.setContentType("text/plain; charset=UTF-8");
		PrintWriter pw = response.getWriter();
		pw.print(jsonObject);
		pw.flush();
		pw.close();
	} catch (Exception e) {
		e.printStackTrace();
	} finally {
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

