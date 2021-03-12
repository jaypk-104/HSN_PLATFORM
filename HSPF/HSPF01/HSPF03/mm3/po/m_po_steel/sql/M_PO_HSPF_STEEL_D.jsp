<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@page import="org.json.simple.JSONArray"%>
<%@page import="org.json.simple.JSONValue"%>
<%@page import="org.json.simple.parser.JSONParser"%>
<%@page import="org.json.simple.JSONObject"%>
<%-- <%@page import="net.sf.json.JSONObject"%> --%> 
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
		String V_TYPE = request.getParameter("V_TYPE") == null ? "" : request.getParameter("V_TYPE");
		String V_COMP_ID = request.getParameter("V_COMP_ID") == null ? "" : request.getParameter("V_COMP_ID").toUpperCase();
		String V_USR_ID = request.getParameter("V_USR_ID") == null ? "" : request.getParameter("V_USR_ID").toUpperCase();
		String V_PO_NO = request.getParameter("V_PO_NO") == null ? "" : request.getParameter("V_PO_NO").toUpperCase();
		String V_M_BP_CD = request.getParameter("V_M_BP_CD") == null ? "" : request.getParameter("V_M_BP_CD").toUpperCase();
		String V_ITEM_CD = request.getParameter("V_ITEM_CD") == null ? "" : request.getParameter("V_ITEM_CD").toUpperCase();

		//발주디테일조회
		if (V_TYPE.equals("S")) {
			cs = conn.prepareCall("call USP_001_M_PO_D_STEEL(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)");
			cs.setString(1, V_TYPE);//V_TYPE
			cs.setString(2, V_COMP_ID);//V_COMP_ID
			cs.setString(3, V_PO_NO);//V_PO_NO
			cs.setString(4, "");//V_PO_SEQ
			cs.setString(5, "");//V_ITEM_CD
			cs.setString(6, "");//V_PO_QTY
			cs.setString(7, "");//V_PO_PRC
			cs.setString(8, "");//V_PO_AMT
			cs.setString(9, "");//V_PO_LOC_AMT
			cs.setString(10, "");//V_VAT_TYPE
			cs.setString(11, "");//V_VAT_RATE
			cs.setString(12, "");//V_VAT_AMT
			cs.setString(13, "");//V_DLVY_HOPE_DT
			cs.setString(14, "");//V_HOPE_SL_CD
			cs.setString(15, "");//V_OVER_TOL
			cs.setString(16, "");//V_HSCODE
			cs.setString(17, "");//V_BRAND
			cs.setString(18, "");//V_ORIGIN
			cs.setString(19, "");//V_REQ_NO
			cs.setString(20, "");//V_REQ_SEQ
			cs.setString(21, V_USR_ID);//V_USR_ID
			cs.registerOutParameter(22, com.tmax.tibero.TbTypes.CURSOR);
			cs.setString(23, "");//V_UNDER_TOL
			cs.setString(24, "");//V_PLANT_NO
			cs.setString(25, "");//V_PLANT_NO
			cs.setString(26, "");//V_CONT_QTY
			cs.setString(27, "");//V_APPROV_MGM_NO
			cs.setString(28, "");//V_APPROV_MGM_SEQ
			cs.executeQuery();

			rs = (ResultSet) cs.getObject(22);
			while (rs.next()) {
				subObject = new JSONObject();
				subObject.put("PO_NO", rs.getString("PO_NO"));
				subObject.put("PO_SEQ", rs.getString("PO_SEQ"));
				subObject.put("ITEM_CD", rs.getString("ITEM_CD"));
				subObject.put("ITEM_NM", rs.getString("ITEM_NM"));
				subObject.put("UNIT", rs.getString("UNIT"));
				subObject.put("PO_QTY", rs.getString("PO_QTY"));
				subObject.put("PO_PRC", rs.getString("PO_PRC"));
				subObject.put("PO_AMT", rs.getString("PO_AMT"));
				subObject.put("PO_LOC_AMT", rs.getString("PO_LOC_AMT"));
				subObject.put("VAT_TYPE", rs.getString("VAT_TYPE"));
				subObject.put("VAT_TYPE_NM", rs.getString("VAT_TYPE_NM"));
				subObject.put("VAT_RATE", rs.getString("VAT_RATE"));
				subObject.put("VAT_AMT", rs.getString("VAT_AMT"));
				subObject.put("DLVY_HOPE_DT", rs.getString("DLVY_HOPE_DT"));
				subObject.put("HOPE_SL_CD", rs.getString("HOPE_SL_CD"));
				subObject.put("HOPE_SL_NM", rs.getString("HOPE_SL_NM"));
				subObject.put("OVER_TOL", rs.getString("OVER_TOL"));
				subObject.put("UNDER_TOL", rs.getString("UNDER_TOL"));
				subObject.put("HS_CD", rs.getString("HS_CD"));
				subObject.put("BRAND", rs.getString("BRAND"));
				subObject.put("ORIGIN", rs.getString("ORIGIN"));
				subObject.put("PLANT_NO", rs.getString("PLANT_NO"));
				subObject.put("CONT_REMARK", rs.getString("CONT_REMARK"));
				subObject.put("CONT_QTY", rs.getString("CONT_QTY"));
				subObject.put("APPROV_MGM_NO", rs.getString("APPROV_MGM_NO"));
				subObject.put("APPROV_MGM_SEQ", rs.getString("APPROV_MGM_SEQ"));
				subObject.put("MAST_DB_NO", rs.getString("MAST_DB_NO"));
				subObject.put("END_FLAG", rs.getString("END_FLAG"));
				subObject.put("END_APPROV_NO", rs.getString("END_APPROV_NO"));
				jsonArray.add(subObject);

			}

			jsonObject.put("success", true);
			jsonObject.put("resultList", jsonArray);

			response.setContentType("text/plain; charset=UTF-8");
			PrintWriter pw = response.getWriter();
			pw.print(jsonObject);
			pw.flush();
			pw.close();

			//발주아이템불러오기
		} else if (V_TYPE.equals("B")) {
			cs = conn.prepareCall("call USP_001_M_PO_D_STEEL(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)");
			cs.setString(1, V_TYPE);//V_TYPE
			cs.setString(2, V_COMP_ID);//V_COMP_ID
			cs.setString(3, "");//V_PO_NO
			cs.setString(4, "");//V_PO_SEQ
			cs.setString(5, V_ITEM_CD);//V_ITEM_CD
			cs.setString(6, "");//V_PO_QTY
			cs.setString(7, "");//V_PO_PRC
			cs.setString(8, "");//V_PO_AMT
			cs.setString(9, "");//V_PO_LOC_AMT
			cs.setString(10, "");//V_VAT_TYPE
			cs.setString(11, "");//V_VAT_RATE
			cs.setString(12, "");//V_VAT_AMT
			cs.setString(13, "");//V_DLVY_HOPE_DT
			cs.setString(14, "");//V_HOPE_SL_CD
			cs.setString(15, "");//V_OVER_TOL
			cs.setString(16, "");//V_HSCODE
			cs.setString(17, "");//V_BRAND
			cs.setString(18, "");//V_ORIGIN 
			cs.setString(19, "");//V_REQ_NO
			cs.setString(20, "");//V_REQ_SEQ
			cs.setString(21, V_USR_ID);//V_USR_ID
			cs.registerOutParameter(22, com.tmax.tibero.TbTypes.CURSOR);
			cs.setString(23, "");//V_UNDER_TOL
			cs.setString(24, "");//V_PLANT_NO
			cs.setString(25, "");//V_PLANT_NO
			cs.setString(26, "");//V_PLANT_NO
			cs.setString(27, "");//V_APPROV_MGM_NO
			cs.setString(28, "");//V_APPROV_MGM_SEQ
			cs.executeQuery();

			rs = (ResultSet) cs.getObject(22);
			while (rs.next()) {
				subObject = new JSONObject();
				subObject.put("PO_PRC", rs.getString("PO_PRC"));
				subObject.put("UNIT", rs.getString("UNIT"));
				jsonArray.add(subObject);
			}

			jsonObject.put("success", true);
			jsonObject.put("resultList", jsonArray);
			// 			System.out.println(jsonObject);

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
			
// 			System.out.println(jsonData);

			if (!V_TYPE.equals("V")) {
				if (jsonData.lastIndexOf("},{") > 0) { //배열일경우
					JSONArray jsonAr = (JSONArray) JSONValue.parse(jsonData);

					for (int i = 0; i < jsonAr.size(); i++) {
						HashMap hashMap = (HashMap) jsonAr.get(i);
						V_TYPE = hashMap.get("V_TYPE") == null ? "" : hashMap.get("V_TYPE").toString();
						V_PO_NO = hashMap.get("PO_NO") == null ? "" : hashMap.get("PO_NO").toString();
						String V_PO_SEQ = hashMap.get("PO_SEQ") == null ? "" : hashMap.get("PO_SEQ").toString();
						V_ITEM_CD = hashMap.get("ITEM_CD") == null ? "" : hashMap.get("ITEM_CD").toString();
						String V_PO_QTY = hashMap.get("PO_QTY") == null ? "" : hashMap.get("PO_QTY").toString();
						String V_PO_PRC = hashMap.get("PO_PRC") == null ? "" : hashMap.get("PO_PRC").toString();
						String V_PO_AMT = hashMap.get("PO_AMT") == null ? "" : hashMap.get("PO_AMT").toString();
						String V_PO_LOC_AMT = hashMap.get("PO_LOC_AMT") == null ? "" : hashMap.get("PO_LOC_AMT").toString();
						String V_VAT_TYPE = hashMap.get("VAT_TYPE") == null ? "" : hashMap.get("VAT_TYPE").toString();
						String V_VAT_RATE = hashMap.get("VAT_RATE") == null ? "" : hashMap.get("VAT_RATE").toString();
						String V_VAT_AMT = hashMap.get("VAT_AMT") == null ? "" : hashMap.get("VAT_AMT").toString();
						String V_DLVY_HOPE_DT = hashMap.get("DLVY_HOPE_DT") == null ? "" : hashMap.get("DLVY_HOPE_DT").toString().substring(0, 10);
						String V_HOPE_SL_CD = hashMap.get("HOPE_SL_CD") == null ? "" : hashMap.get("HOPE_SL_CD").toString();
						String V_OVER_TOL = hashMap.get("OVER_TOL") == null ? "" : hashMap.get("OVER_TOL").toString();
						String V_UNDER_TOL = hashMap.get("UNDER_TOL") == null ? "" : hashMap.get("UNDER_TOL").toString();
						String V_HSCODE = hashMap.get("HS_CD") == null ? "" : hashMap.get("HS_CD").toString();
						String V_BRAND = hashMap.get("BRAND") == null ? "" : hashMap.get("BRAND").toString();
						String V_ORIGIN = hashMap.get("ORIGIN") == null ? "" : hashMap.get("ORIGIN").toString();
						String V_PLANT_NO = hashMap.get("PLANT_NO") == null ? "" : hashMap.get("PLANT_NO").toString();
						String V_CONT_REMARK = hashMap.get("CONT_REMARK") == null ? "" : hashMap.get("CONT_REMARK").toString();
						String V_CONT_QTY = hashMap.get("CONT_QTY") == null ? "0" : hashMap.get("CONT_QTY").toString();
						String V_APPROV_MGM_NO = hashMap.get("APPROV_MGM_NO") == null ? "" : hashMap.get("APPROV_MGM_NO").toString();
						String V_APPROV_MGM_SEQ = hashMap.get("APPROV_MGM_SEQ") == null ? "" : hashMap.get("APPROV_MGM_SEQ").toString();
						String V_END_APPROV_NO = hashMap.get("END_APPROV_NO") == null ? "" : hashMap.get("END_APPROV_NO").toString();

						if (V_TYPE.equals("I")) {
							V_PO_NO = request.getParameter("V_PO_NO") == null ? "" : request.getParameter("V_PO_NO");
							V_PO_SEQ = (i + 1) + "";
						}

						cs = conn.prepareCall("call USP_001_M_PO_D_STEEL(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)");
						cs.setString(1, V_TYPE);//V_TYPE
						cs.setString(2, V_COMP_ID);//V_COMP_ID
						cs.setString(3, V_PO_NO);//V_PO_NO
						cs.setString(4, V_PO_SEQ);//V_PO_SEQ
						cs.setString(5, V_ITEM_CD);//V_ITEM_CD
						cs.setString(6, V_PO_QTY);//V_PO_QTY
						cs.setString(7, V_PO_PRC);//V_PO_PRC
						cs.setString(8, V_PO_AMT);//V_PO_AMT
						cs.setString(9, V_PO_LOC_AMT);//V_PO_LOC_AMT
						cs.setString(10, V_VAT_TYPE);//V_VAT_TYPE
						cs.setString(11, V_VAT_RATE);//V_VAT_RATE
						cs.setString(12, V_VAT_AMT);//V_VAT_AMT
						cs.setString(13, V_DLVY_HOPE_DT);//V_DLVY_HOPE_DT
						cs.setString(14, V_HOPE_SL_CD);//V_HOPE_SL_CD
						cs.setString(15, V_OVER_TOL);//V_OVER_TOL
						cs.setString(16, V_HSCODE);//V_HSCODE
						cs.setString(17, V_BRAND);//V_BRAND
						cs.setString(18, V_ORIGIN);//V_ORIGIN
						cs.setString(19, V_END_APPROV_NO);//V_REQ_NO -- 품의취소번호로 사용
						cs.setString(20, "");//V_REQ_SEQ
						cs.setString(21, V_USR_ID);//V_USR_ID
						cs.registerOutParameter(22, com.tmax.tibero.TbTypes.CURSOR);
						cs.setString(23, V_UNDER_TOL);//V_UNDER_TOL
						cs.setString(24, V_PLANT_NO);//V_PLANT_NO
						cs.setString(25, V_CONT_REMARK);//V_CONT_REMARK
						cs.setString(26, V_CONT_QTY);//V_CONT_QTY
						cs.setString(27, V_APPROV_MGM_NO);//V_APPROV_MGM_NO
						cs.setString(28, V_APPROV_MGM_SEQ);//V_APPROV_MGM_SEQ
						cs.executeQuery();

						response.setContentType("text/plain; charset=UTF-8");
						PrintWriter pw = response.getWriter();
						pw.print("success");
						pw.flush();
						pw.close();

					}
				} else {
// 					JSONObject jsondata = JSONObject.fromObject(jsonData);
					JSONParser parser = new JSONParser();
					Object obj = parser.parse(jsonData);					
					JSONObject jsondata = (JSONObject) obj;
					
					V_TYPE = jsondata.get("V_TYPE") == null ? "" : jsondata.get("V_TYPE").toString();
					V_PO_NO = jsondata.get("PO_NO") == null ? "" : jsondata.get("PO_NO").toString();
					String V_PO_SEQ = jsondata.get("PO_SEQ") == null ? "" : jsondata.get("PO_SEQ").toString();
					V_ITEM_CD = jsondata.get("ITEM_CD") == null ? "" : jsondata.get("ITEM_CD").toString();
					String V_PO_QTY = jsondata.get("PO_QTY") == null ? "" : jsondata.get("PO_QTY").toString();
					String V_PO_PRC = jsondata.get("PO_PRC") == null ? "" : jsondata.get("PO_PRC").toString();
					String V_PO_AMT = jsondata.get("PO_AMT") == null ? "" : jsondata.get("PO_AMT").toString();
					String V_PO_LOC_AMT = jsondata.get("PO_LOC_AMT") == null ? "" : jsondata.get("PO_LOC_AMT").toString();
					String V_VAT_TYPE = jsondata.get("VAT_TYPE") == null ? "" : jsondata.get("VAT_TYPE").toString();
					String V_VAT_RATE = jsondata.get("VAT_RATE") == null ? "" : jsondata.get("VAT_RATE").toString();
					String V_VAT_AMT = jsondata.get("VAT_AMT") == null ? "" : jsondata.get("VAT_AMT").toString();
					String V_DLVY_HOPE_DT = jsondata.get("DLVY_HOPE_DT") == null ? "" : jsondata.get("DLVY_HOPE_DT").toString().substring(0, 10);
					String V_HOPE_SL_CD = jsondata.get("HOPE_SL_CD") == null ? "" : jsondata.get("HOPE_SL_CD").toString();
					String V_OVER_TOL = jsondata.get("OVER_TOL") == null ? "" : jsondata.get("OVER_TOL").toString();
					String V_UNDER_TOL = jsondata.get("UNDER_TOL") == null ? "" : jsondata.get("UNDER_TOL").toString();
					String V_HSCODE = jsondata.get("HS_CD") == null ? "" : jsondata.get("HS_CD").toString();
					String V_BRAND = jsondata.get("BRAND") == null ? "" : jsondata.get("BRAND").toString();
					String V_ORIGIN = jsondata.get("ORIGIN") == null ? "" : jsondata.get("ORIGIN").toString();
					String V_PLANT_NO = jsondata.get("PLANT_NO") == null ? "" : jsondata.get("PLANT_NO").toString();
					String V_CONT_REMARK = jsondata.get("CONT_REMARK") == null ? "" : jsondata.get("CONT_REMARK").toString();
					String V_CONT_QTY = jsondata.get("CONT_QTY") == null ? "0" : jsondata.get("CONT_QTY").toString();
					String V_APPROV_MGM_NO = jsondata.get("APPROV_MGM_NO") == null ? "" : jsondata.get("APPROV_MGM_NO").toString();
					String V_APPROV_MGM_SEQ = jsondata.get("APPROV_MGM_SEQ") == null ? "" : jsondata.get("APPROV_MGM_SEQ").toString();
					String V_END_APPROV_NO = jsondata.get("END_APPROV_NO") == null ? "" : jsondata.get("END_APPROV_NO").toString();

					if (V_TYPE.equals("I")) {
						V_PO_NO = request.getParameter("V_PO_NO") == null ? "" : request.getParameter("V_PO_NO");
						V_PO_SEQ = 1 + "";
					}

					cs = conn.prepareCall("call USP_001_M_PO_D_STEEL(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)");
					cs.setString(1, V_TYPE);//V_TYPE
					cs.setString(2, V_COMP_ID);//V_COMP_ID
					cs.setString(3, V_PO_NO);//V_PO_NO
					cs.setString(4, V_PO_SEQ);//V_PO_SEQ
					cs.setString(5, V_ITEM_CD);//V_ITEM_CD
					cs.setString(6, V_PO_QTY);//V_PO_QTY
					cs.setString(7, V_PO_PRC);//V_PO_PRC
					cs.setString(8, V_PO_AMT);//V_PO_AMT
					cs.setString(9, V_PO_LOC_AMT);//V_PO_LOC_AMT
					cs.setString(10, V_VAT_TYPE);//V_VAT_TYPE
					cs.setString(11, V_VAT_RATE);//V_VAT_RATE
					cs.setString(12, V_VAT_AMT);//V_VAT_AMT
					cs.setString(13, V_DLVY_HOPE_DT);//V_DLVY_HOPE_DT
					cs.setString(14, V_HOPE_SL_CD);//V_HOPE_SL_CD
					cs.setString(15, V_OVER_TOL);//V_OVER_TOL
					cs.setString(16, V_HSCODE);//V_HSCODE
					cs.setString(17, V_BRAND);//V_BRAND
					cs.setString(18, V_ORIGIN);//V_ORIGIN
					cs.setString(19, V_END_APPROV_NO);//V_REQ_NO --품의취소번호로 사용
					cs.setString(20, "");//V_REQ_SEQ
					cs.setString(21, V_USR_ID);//V_USR_ID
					cs.registerOutParameter(22, com.tmax.tibero.TbTypes.CURSOR);
					cs.setString(23, V_UNDER_TOL);//V_UNDER_TOL
					cs.setString(24, V_PLANT_NO);//V_PLANT_NO
					cs.setString(25, V_CONT_REMARK);//V_CONT_REMARK
					cs.setString(26, V_CONT_QTY);//V_CONT_QTY
					cs.setString(27, V_APPROV_MGM_NO);//V_APPROV_MGM_NO
					cs.setString(28, V_APPROV_MGM_SEQ);//V_APPROV_MGM_SEQ
					cs.executeQuery();

					response.setContentType("text/plain; charset=UTF-8");
					PrintWriter pw = response.getWriter();
					pw.print("success");
					pw.flush();
					pw.close();
				}
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


