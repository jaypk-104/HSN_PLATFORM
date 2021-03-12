<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@page import="org.json.simple.JSONArray"%>
<%@page import="org.json.simple.JSONValue"%>
<%@page import="net.sf.json.JSONObject"%>
<%@page import="java.io.PrintWriter"%>
<%@page import="java.io.StringWriter"%>
<%@page import="java.net.URLDecoder"%>
<%@page import="java.util.HashMap"%>
<%@page import="org.apache.commons.lang.StringUtils"%>
<%@ include file="/HSPF01/common/DB_Connection.jsp"%>
<%@ page import="java.net.*"%>
<%@ page import="java.io.*"%>
<%@ page import="java.lang.reflect.InvocationTargetException"%>
<%@ page import="java.util.ArrayList"%>
<%@ page import="java.util.HashMap"%>
<%@ page import="java.util.Map"%>
<%@ page import="org.apache.commons.beanutils.BeanUtils"%>

<%
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
		String V_TAX_DT_FR = request.getParameter("V_TAX_DT_FR") == null ? "" : request.getParameter("V_TAX_DT_FR").toUpperCase().substring(0, 10);
		String V_TAX_DT_TO = request.getParameter("V_TAX_DT_TO") == null ? "" : request.getParameter("V_TAX_DT_TO").toUpperCase().substring(0, 10);
		String V_S_BP_NM = request.getParameter("V_S_BP_NM") == null ? "" : request.getParameter("V_S_BP_NM").toUpperCase();

		//최상단
		if (V_TYPE.equals("SH")) {

			cs = conn.prepareCall("call USP_001_S_TAX_REF_STEEL(?,?,?,?,?,?)");
			cs.setString(1, V_TYPE);//V_COMP_ID
			cs.setString(2, V_COMP_ID);//V_COMP_ID
			cs.setString(3, V_TAX_DT_FR);//V_TAX_DT_FR
			cs.setString(4, V_TAX_DT_TO);//V_TAX_DT_TO
			cs.setString(5, V_S_BP_NM);//V_S_BP_CD
			cs.registerOutParameter(6, com.tmax.tibero.TbTypes.CURSOR);
			cs.executeQuery();

			rs = (ResultSet) cs.getObject(6);

			while (rs.next()) {
				subObject = new JSONObject();
				subObject.put("BILL_NO", rs.getString("BILL_NO"));
				subObject.put("BILL_SEQ", rs.getString("BILL_SEQ"));
				subObject.put("BILL_DT", rs.getString("BILL_DT"));
				subObject.put("DN_ISSUE_DT", rs.getString("DN_ISSUE_DT"));
				subObject.put("S_BP_CD", rs.getString("S_BP_CD"));
				subObject.put("S_BP_NM", rs.getString("S_BP_NM"));
				subObject.put("BL_DOC_NO", rs.getString("BL_DOC_NO"));
				subObject.put("ITEM_CD", rs.getString("ITEM_CD"));
				subObject.put("ITEM_NM", rs.getString("ITEM_NM"));
				subObject.put("BRAND", rs.getString("BRAND"));
				subObject.put("DN_BON_QTY", rs.getString("DN_BON_QTY"));
				subObject.put("BILL_QTY", rs.getString("BILL_QTY"));
				subObject.put("BILL_PRC", rs.getString("BILL_PRC"));
				subObject.put("BILL_LOC_AMT", rs.getString("BILL_LOC_AMT"));
				subObject.put("VAT_TYPE_NM", rs.getString("VAT_TYPE_NM"));
				subObject.put("VAT_TYPE", rs.getString("VAT_TYPE"));
				subObject.put("VAT_AMT", rs.getString("VAT_AMT"));
				subObject.put("VAT_RATE", rs.getString("VAT_RATE"));

				subObject.put("BRAND", rs.getString("BRAND"));
				subObject.put("COST_CD", rs.getString("COST_CD"));

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

			//팝업
		} else if (V_TYPE.equals("PH")) {

// 			System.out.println("V_TAX_DT_FR" + V_TAX_DT_FR);
// 			System.out.println("V_TAX_DT_TO" + V_TAX_DT_TO);
// 			System.out.println("V_S_BP_NM" + V_S_BP_NM);

			cs = conn.prepareCall("call USP_001_S_TAX_REF_STEEL(?,?,?,?,?,?)");
			cs.setString(1, V_TYPE);//V_COMP_ID
			cs.setString(2, V_COMP_ID);//V_COMP_ID
			cs.setString(3, V_TAX_DT_FR);//V_TAX_DT_FR
			cs.setString(4, V_TAX_DT_TO);//V_TAX_DT_TO
			cs.setString(5, V_S_BP_NM);//V_S_BP_NM
			cs.registerOutParameter(6, com.tmax.tibero.TbTypes.CURSOR);
			cs.executeQuery();

			rs = (ResultSet) cs.getObject(6);

			while (rs.next()) {
				subObject = new JSONObject();
				subObject.put("TAX_BILL_NO", rs.getString("TAX_BILL_NO"));
				subObject.put("TAX_DOC_NO", rs.getString("TAX_DOC_NO"));
				subObject.put("ISSUED_DT", rs.getString("ISSUED_DT"));
				subObject.put("S_BP_CD", rs.getString("S_BP_CD"));
				subObject.put("TAX_BILL_TYPE", rs.getString("TAX_BILL_TYPE"));
				subObject.put("TEMP_GL_NO", rs.getString("TEMP_GL_NO"));
				subObject.put("BILL_LOC_AMT", rs.getString("BILL_LOC_AMT"));
				subObject.put("S_BP_NM", rs.getString("S_BP_NM"));
				subObject.put("TAX_BILL_TYPE_NM", rs.getString("TAX_BILL_TYPE_NM"));
				
				subObject.put("TAX_BILL_YN", rs.getString("TAX_BILL_YN"));
				subObject.put("TAX_BILL_SEND_YN", rs.getString("TAX_BILL_SEND_YN"));
				subObject.put("LOGIS_STATUS", rs.getString("LOGIS_STATUS"));
				subObject.put("CR_TYPE", rs.getString("CR_TYPE"));

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

			//하단헤더조회

		} else if (V_TYPE.equals("S")) {

			String V_TAX_BILL_NO = request.getParameter("V_TAX_BILL_NO") == null ? "" : request.getParameter("V_TAX_BILL_NO").toUpperCase();

			// 			System.out.println("V_TAX_BILL_NO" + V_TAX_BILL_NO);

			cs = conn.prepareCall("call USP_001_S_TAX_STEEL(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)");
			cs.setString(1, V_TYPE);//V_TYPE
			cs.setString(2, V_COMP_ID);//V_COMP_ID
			cs.setString(3, V_TAX_BILL_NO);//V_TAX_BILL_NO
			cs.setString(4, "");//V_TAX_BILL_SEQ
			cs.setString(5, "");//V_TAX_BILL_DOC_NO
			cs.setString(6, "");//V_ITEM_CD
			cs.setString(7, "");//V_S_BP_CD
			cs.setString(8, "");//V_TAX_BILL_TYPE
			cs.setString(9, "");//V_ISSUED_DT
			cs.setString(10, "");//V_VAT_INC
			cs.setString(11, "");//V_VAT_TYPE
			cs.setString(12, "");//V_VAT_RATE
			cs.setString(13, "");//V_CUR
			cs.setString(14, "");//V_XCH_RATE
			cs.setString(15, "");//V_BILL_QTY
			cs.setString(16, "");//V_NET_AMT
			cs.setString(17, "");//V_NET_LOC_AMT
			cs.setString(18, "");//V_VAT_AMT
			cs.setString(19, "");//V_VAT_LOC_AMT
			cs.setString(20, "");//V_COST_CD
			cs.setString(21, "");//V_BIZ_AREA_CD
			cs.setString(22, "");//V_BILL_NO
			cs.setString(23, "");//V_BILL_SEQ
			cs.setString(24, "");//V_POST_FLAG
			cs.setString(25, "");//V_REMARKS
			cs.setString(26, V_USR_ID);//V_USR_ID
			cs.setString(27, "");//V_BILL_PRICE
			cs.setString(28, "");//V_BILL_AMT
			cs.registerOutParameter(29, com.tmax.tibero.TbTypes.CURSOR);
			cs.executeQuery();

			rs = (ResultSet) cs.getObject(29);

			while (rs.next()) {
				subObject = new JSONObject();
				subObject.put("TAX_BILL_NO", rs.getString("TAX_BILL_NO"));
				subObject.put("TAX_DOC_NO", rs.getString("TAX_DOC_NO"));
				subObject.put("S_BP_CD", rs.getString("S_BP_CD"));
				subObject.put("S_BP_NM", rs.getString("S_BP_NM"));
				subObject.put("TAX_BILL_TYPE", rs.getString("TAX_BILL_TYPE"));
				subObject.put("ISSUED_DT", rs.getString("ISSUED_DT"));
				subObject.put("VAT_INC", rs.getString("VAT_INC"));
				subObject.put("VAT_TYPE", rs.getString("VAT_TYPE"));
				subObject.put("VAT_RATE", rs.getString("VAT_RATE"));
				subObject.put("CUR", rs.getString("CUR"));
				subObject.put("XCH_RATE", rs.getString("XCH_RATE"));
				subObject.put("NET_AMT", rs.getString("NET_AMT"));
				subObject.put("NET_LOC_AMT", rs.getString("NET_LOC_AMT"));
				subObject.put("VAT_AMT", rs.getString("VAT_AMT"));
				subObject.put("VAT_LOC_AMT", rs.getString("VAT_LOC_AMT"));
				subObject.put("BIZ_AREA_CD", rs.getString("BIZ_AREA_CD"));
				subObject.put("POST_FLAG", rs.getString("POST_FLAG"));
				subObject.put("TOTAL_AMT", rs.getString("TOTAL_AMT"));
				subObject.put("REMARKS", rs.getString("REMARKS"));
				subObject.put("TEMP_GL_NO", rs.getString("TEMP_GL_NO"));
				
				subObject.put("TAX_BILL_YN", rs.getString("TAX_BILL_YN"));
				subObject.put("TAX_BILL_SEND_YN", rs.getString("TAX_BILL_SEND_YN"));
				subObject.put("CR_TYPE", rs.getString("CR_TYPE"));
				
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
			//하단상세조회
		} else if (V_TYPE.equals("SD")) {

			String V_TAX_BILL_NO = request.getParameter("V_TAX_BILL_NO") == null ? "" : request.getParameter("V_TAX_BILL_NO").toUpperCase();

			cs = conn.prepareCall("call USP_001_S_TAX_STEEL(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)");
			cs.setString(1, V_TYPE);//V_TYPE
			cs.setString(2, V_COMP_ID);//V_COMP_ID
			cs.setString(3, V_TAX_BILL_NO);//V_TAX_BILL_NO
			cs.setString(4, "");//V_TAX_BILL_SEQ
			cs.setString(5, "");//V_TAX_BILL_DOC_NO
			cs.setString(6, "");//V_ITEM_CD
			cs.setString(7, "");//V_S_BP_CD
			cs.setString(8, "");//V_TAX_BILL_TYPE
			cs.setString(9, "");//V_ISSUED_DT
			cs.setString(10, "");//V_VAT_INC
			cs.setString(11, "");//V_VAT_TYPE
			cs.setString(12, "");//V_VAT_RATE
			cs.setString(13, "");//V_CUR
			cs.setString(14, "");//V_XCH_RATE
			cs.setString(15, "");//V_BILL_QTY
			cs.setString(16, "");//V_NET_AMT
			cs.setString(17, "");//V_NET_LOC_AMT
			cs.setString(18, "");//V_VAT_AMT
			cs.setString(19, "");//V_VAT_LOC_AMT
			cs.setString(20, "");//V_COST_CD
			cs.setString(21, "");//V_BIZ_AREA_CD
			cs.setString(22, "");//V_BILL_NO
			cs.setString(23, "");//V_BILL_SEQ
			cs.setString(24, "");//V_POST_FLAG
			cs.setString(25, "");//V_REMARKS
			cs.setString(26, V_USR_ID);//V_USR_ID
			cs.setString(27, "");//V_BILL_PRICE
			cs.setString(28, "");//V_BILL_AMT
			cs.registerOutParameter(29, com.tmax.tibero.TbTypes.CURSOR);
			cs.executeQuery();

			rs = (ResultSet) cs.getObject(29);

			while (rs.next()) {
				subObject = new JSONObject();
				subObject.put("COST_CD", rs.getString("COST_CD"));
				subObject.put("COMP_ID", rs.getString("COMP_ID"));
				subObject.put("TAX_BILL_NO", rs.getString("TAX_BILL_NO"));
				subObject.put("TAX_BILL_SEQ", rs.getString("TAX_BILL_SEQ"));
				subObject.put("ITEM_CD", rs.getString("ITEM_CD"));
				subObject.put("ITEM_NM", rs.getString("ITEM_NM"));
				subObject.put("BILL_DT", rs.getString("BILL_DT"));
				subObject.put("BILL_QTY", rs.getString("BILL_QTY"));
				subObject.put("BILL_PRC", rs.getString("BILL_PRC"));
				subObject.put("BILL_AMT", rs.getString("BILL_AMT"));
				subObject.put("BILL_LOC_AMT", rs.getString("BILL_LOC_AMT"));
				subObject.put("VAT_TYPE", rs.getString("VAT_TYPE"));
				subObject.put("VAT_TYPE_NM", rs.getString("VAT_TYPE_NM"));
				subObject.put("VAT_AMT", rs.getString("VAT_AMT"));
				subObject.put("VAT_RATE", rs.getString("VAT_RATE"));
				subObject.put("BILL_NO", rs.getString("BILL_NO"));
				subObject.put("BILL_SEQ", rs.getString("BILL_SEQ"));
				subObject.put("BILL_AMT", rs.getString("BILL_AMT"));
				subObject.put("DN_BON_QTY", rs.getString("DN_BON_QTY"));
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

			String V_TAX_BILL_NO = request.getParameter("V_TAX_BILL_NO") == null ? "" : request.getParameter("V_TAX_BILL_NO").toUpperCase();
			String V_TAX_DOC_NO = request.getParameter("V_TAX_DOC_NO") == null ? "" : request.getParameter("V_TAX_DOC_NO").toUpperCase();
			String V_ISSUED_DT = request.getParameter("V_ISSUED_DT") == null ? "" : request.getParameter("V_ISSUED_DT").toUpperCase().substring(0, 10);

			if (jsonData.lastIndexOf("},{") > 0) { //배열일경우
				JSONArray jsonAr = (JSONArray) JSONValue.parse(jsonData);

				for (int i = 0; i < jsonAr.size(); i++) {

					HashMap hashMap = (HashMap) jsonAr.get(i);

					V_TYPE = hashMap.get("V_TYPE") == null ? "" : hashMap.get("V_TYPE").toString();
					String V_TAX_BILL_SEQ = hashMap.get("BILL_SEQ") == null ? "" : hashMap.get("BILL_SEQ").toString();
					if(V_TYPE.equals("U") || V_TYPE.equals("D")){
						V_TAX_BILL_NO =  hashMap.get("TAX_BILL_NO") == null ? "" : hashMap.get("TAX_BILL_NO").toString();
						V_TAX_BILL_SEQ =  hashMap.get("TAX_BILL_SEQ") == null ? "" : hashMap.get("TAX_BILL_SEQ").toString();
					}
					

					String V_ITEM_CD = hashMap.get("ITEM_CD") == null ? "" : hashMap.get("ITEM_CD").toString();
					String V_COST_CD = hashMap.get("COST_CD") == null ? "" : hashMap.get("COST_CD").toString();
					String V_VAT_TYPE = hashMap.get("VAT_TYPE") == null ? "" : hashMap.get("VAT_TYPE").toString();
					String V_VAT_RATE = hashMap.get("VAT_RATE") == null ? "" : hashMap.get("VAT_RATE").toString();
					String V_BILL_NO = hashMap.get("BILL_NO") == null ? "" : hashMap.get("BILL_NO").toString();
					String V_BILL_SEQ = hashMap.get("BILL_SEQ") == null ? "" : hashMap.get("BILL_SEQ").toString();
					String V_VAT_AMT = hashMap.get("VAT_AMT") == null ? "" : hashMap.get("VAT_AMT").toString();
					String V_BILL_QTY = hashMap.get("BILL_QTY") == null ? "" : hashMap.get("BILL_QTY").toString();
					String V_BILL_AMT = hashMap.get("BILL_LOC_AMT") == null ? "" : hashMap.get("BILL_LOC_AMT").toString();
					String V_BILL_LOC_AMT = hashMap.get("BILL_LOC_AMT") == null ? "" : hashMap.get("BILL_LOC_AMT").toString();
					String V_BILL_PRICE = hashMap.get("BILL_PRC") == null ? "" : hashMap.get("BILL_PRC").toString();

					cs = conn.prepareCall("call USP_001_S_TAX_STEEL(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)");
					cs.setString(1, V_TYPE);//V_TYPE
					cs.setString(2, V_COMP_ID);//V_COMP_ID
					cs.setString(3, V_TAX_BILL_NO);//V_TAX_BILL_NO
					cs.setString(4, V_TAX_BILL_SEQ);//V_TAX_BILL_SEQ
					cs.setString(5, V_TAX_DOC_NO);//V_TAX_BILL_DOC_NO
					cs.setString(6, V_ITEM_CD);//V_ITEM_CD
					cs.setString(7, "");//V_S_BP_CD
					cs.setString(8, "");//V_TAX_BILL_TYPE
					cs.setString(9, V_ISSUED_DT);//V_ISSUED_DT
					cs.setString(10, "");//V_VAT_INC
					cs.setString(11, V_VAT_TYPE);//V_VAT_TYPE
					cs.setString(12, V_VAT_RATE);//V_VAT_RATE
					cs.setString(13, "");//V_CUR
					cs.setString(14, "");//V_XCH_RATE
					cs.setString(15, V_BILL_QTY);//V_BILL_QTY
					cs.setString(16, "");//V_NET_AMT
					cs.setString(17, "");//V_NET_LOC_AMT
					cs.setString(18, V_VAT_AMT);//V_VAT_AMT
					cs.setString(19, V_VAT_AMT);//V_VAT_LOC_AMT
					cs.setString(20, V_COST_CD);//V_COST_CD
					cs.setString(21, "");//V_BIZ_AREA_CD
					cs.setString(22, V_BILL_NO);//V_BILL_NO
					cs.setString(23, V_BILL_SEQ);//V_BILL_SEQ
					cs.setString(24, "");//V_POST_FLAG
					cs.setString(25, "");//V_REMARKS
					cs.setString(26, V_USR_ID);//V_USR_ID
					cs.setString(27, V_BILL_PRICE);//V_BILL_PRICE
					cs.setString(28, V_BILL_LOC_AMT);//V_BILL_AMT
					cs.registerOutParameter(29, com.tmax.tibero.TbTypes.CURSOR);

					cs.executeQuery();

					response.setContentType("text/plain; charset=UTF-8");
					PrintWriter pw = response.getWriter();
					pw.print("success");
					pw.flush();
					pw.close();

				}
			} else {

				JSONObject jsondata = JSONObject.fromObject(jsonData);
				V_TYPE = jsondata.get("V_TYPE") == null ? "" : jsondata.get("V_TYPE").toString();
				String V_TAX_BILL_SEQ = jsondata.get("BILL_SEQ") == null ? "" : jsondata.get("BILL_SEQ").toString();
				
				if(V_TYPE.equals("U") || V_TYPE.equals("D")){
					V_TAX_BILL_NO =  jsondata.get("TAX_BILL_NO") == null ? "" : jsondata.get("TAX_BILL_NO").toString();
					V_TAX_BILL_SEQ =  jsondata.get("TAX_BILL_SEQ") == null ? "" : jsondata.get("TAX_BILL_SEQ").toString();
				}
				
				String V_ITEM_CD = jsondata.get("ITEM_CD") == null ? "" : jsondata.get("ITEM_CD").toString();
				String V_COST_CD = jsondata.get("COST_CD") == null ? "" : jsondata.get("COST_CD").toString();
				String V_VAT_TYPE = jsondata.get("VAT_TYPE") == null ? "" : jsondata.get("VAT_TYPE").toString();
				String V_VAT_RATE = jsondata.get("VAT_RATE") == null ? "" : jsondata.get("VAT_RATE").toString();
				String V_BILL_NO = jsondata.get("BILL_NO") == null ? "" : jsondata.get("BILL_NO").toString();
				String V_BILL_SEQ = jsondata.get("BILL_SEQ") == null ? "" : jsondata.get("BILL_SEQ").toString();
				String V_VAT_AMT = jsondata.get("VAT_AMT") == null ? "" : jsondata.get("VAT_AMT").toString();
				String V_BILL_QTY = jsondata.get("BILL_QTY") == null ? "" : jsondata.get("BILL_QTY").toString();
				String V_BILL_AMT = jsondata.get("BILL_LOC_AMT") == null ? "" : jsondata.get("BILL_LOC_AMT").toString();
				String V_BILL_LOC_AMT = jsondata.get("BILL_LOC_AMT") == null ? "" : jsondata.get("BILL_LOC_AMT").toString();
				String V_BILL_PRICE = jsondata.get("BILL_PRC") == null ? "" : jsondata.get("BILL_PRC").toString();
				
// 				System.out.println("V_TYPE : " + V_TYPE);
// 				System.out.println("V_TAX_BILL_NO : " + V_TAX_BILL_NO);
// 				System.out.println("V_TAX_BILL_SEQ : " + V_TAX_BILL_SEQ);
// 				System.out.println("V_BILL_AMT : " + V_BILL_AMT);

				cs = conn.prepareCall("call USP_001_S_TAX_STEEL(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)");
				cs.setString(1, V_TYPE);//V_TYPE
				cs.setString(2, V_COMP_ID);//V_COMP_ID
				cs.setString(3, V_TAX_BILL_NO);//V_TAX_BILL_NO
				cs.setString(4, V_TAX_BILL_SEQ);//V_TAX_BILL_SEQ
				cs.setString(5, V_TAX_DOC_NO);//V_TAX_BILL_DOC_NO
				cs.setString(6, V_ITEM_CD);//V_ITEM_CD
				cs.setString(7, "");//V_S_BP_CD
				cs.setString(8, "");//V_TAX_BILL_TYPE
				cs.setString(9, V_ISSUED_DT);//V_ISSUED_DT
				cs.setString(10, "");//V_VAT_INC
				cs.setString(11, V_VAT_TYPE);//V_VAT_TYPE
				cs.setString(12, V_VAT_RATE);//V_VAT_RATE
				cs.setString(13, "");//V_CUR
				cs.setString(14, "");//V_XCH_RATE
				cs.setString(15, V_BILL_QTY);//V_BILL_QTY
				cs.setString(16, "");//V_NET_AMT
				cs.setString(17, "");//V_NET_LOC_AMT
				cs.setString(18, V_VAT_AMT);//V_VAT_AMT
				cs.setString(19, V_VAT_AMT);//V_VAT_LOC_AMT
				cs.setString(20, V_COST_CD);//V_COST_CD
				cs.setString(21, "");//V_BIZ_AREA_CD
				cs.setString(22, V_BILL_NO);//V_BILL_NO
				cs.setString(23, V_BILL_SEQ);//V_BILL_SEQ
				cs.setString(24, "");//V_POST_FLAG
				cs.setString(25, "");//V_REMARKS
				cs.setString(26, V_USR_ID);//V_USR_ID
				cs.setString(27, V_BILL_PRICE);//V_BILL_PRICE
				cs.setString(28, V_BILL_LOC_AMT);//V_BILL_AMT
				cs.registerOutParameter(29, com.tmax.tibero.TbTypes.CURSOR);

				cs.executeQuery();

				response.setContentType("text/plain; charset=UTF-8");
				PrintWriter pw = response.getWriter();
				pw.print("success");
				pw.flush();
				pw.close();

			}

			/*하단 헤더 I / U*/
		} else if (V_TYPE.equals("IH") || V_TYPE.equals("UH")) {

			String V_S_BP_CD = request.getParameter("V_S_BP_CD") == null ? "" : request.getParameter("V_S_BP_CD").toUpperCase();
			String V_ISSUED_DT = request.getParameter("V_ISSUED_DT") == null ? "" : request.getParameter("V_ISSUED_DT").toUpperCase().substring(0, 10);
			String V_TAX_BILL_TYPE = request.getParameter("V_TAX_BILL_TYPE") == null ? "" : request.getParameter("V_TAX_BILL_TYPE").toUpperCase();
			String V_BIZ_AREA_CD = request.getParameter("V_BIZ_AREA_CD") == null ? "" : request.getParameter("V_BIZ_AREA_CD").toUpperCase();
			String V_TAX_BILL_DOC_NO = request.getParameter("V_TAX_DOC_NO") == null ? "" : request.getParameter("V_TAX_DOC_NO").toUpperCase();
			String V_VAT_TYPE = request.getParameter("V_VAT_TYPE") == null ? "" : request.getParameter("V_VAT_TYPE").toUpperCase();
			String V_NET_AMT = request.getParameter("V_NET_AMT") == null ? "" : request.getParameter("V_NET_AMT").toUpperCase();
			String V_VAT_RATE = request.getParameter("V_VAT_RATE") == null ? "" : request.getParameter("V_VAT_RATE").toUpperCase();
			String V_VAT_AMT = request.getParameter("V_VAT_AMT") == null ? "" : request.getParameter("V_VAT_AMT").toUpperCase();
			String V_VAT_LOC_AMT = request.getParameter("V_VAT_LOC_AMT") == null ? "" : request.getParameter("V_VAT_LOC_AMT").toUpperCase();
			String V_NET_LOC_AMT = request.getParameter("V_NET_LOC_AMT") == null ? "" : request.getParameter("V_NET_LOC_AMT").toUpperCase();

			String V_TAX_BILL_NO = request.getParameter("V_TAX_BILL_NO") == null ? "" : request.getParameter("V_TAX_BILL_NO").toUpperCase();

			cs = conn.prepareCall("call USP_001_S_TAX_STEEL(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)");
			cs.setString(1, V_TYPE);//V_TYPE
			cs.setString(2, V_COMP_ID);//V_COMP_ID
			cs.setString(3, V_TAX_BILL_NO);//V_TAX_BILL_NO
			cs.setString(4, "");//V_TAX_BILL_SEQ
			cs.setString(5, V_TAX_BILL_DOC_NO);//V_TAX_BILL_DOC_NO
			cs.setString(6, "");//V_ITEM_CD
			cs.setString(7, V_S_BP_CD);//V_S_BP_CD
			cs.setString(8, V_TAX_BILL_TYPE);//V_TAX_BILL_TYPE
			cs.setString(9, V_ISSUED_DT);//V_ISSUED_DT
			cs.setString(10, "");//V_VAT_INC
			cs.setString(11, V_VAT_TYPE);//V_VAT_TYPE
			cs.setString(12, V_VAT_RATE);//V_VAT_RATE
			cs.setString(13, "");//V_CUR
			cs.setString(14, "");//V_XCH_RATE
			cs.setString(15, "");//V_BILL_QTY
			cs.setString(16, V_NET_AMT);//V_NET_AMT
			cs.setString(17, V_NET_LOC_AMT);//V_NET_LOC_AMT
			cs.setString(18, V_VAT_AMT);//V_VAT_AMT
			cs.setString(19, V_VAT_LOC_AMT);//V_VAT_LOC_AMT
			cs.setString(20, "");//V_COST_CD
			cs.setString(21, V_BIZ_AREA_CD);//V_BIZ_AREA_CD
			cs.setString(22, "");//V_BILL_NO
			cs.setString(23, "");//V_BILL_SEQ
			cs.setString(24, "");//V_POST_FLAG
			cs.setString(25, "");//V_REMARKS
			cs.setString(26, V_USR_ID);//V_USR_ID
			cs.setString(27, "");//V_BILL_PRICE
			cs.setString(28, "");//V_BILL_AMT
			cs.registerOutParameter(29, com.tmax.tibero.TbTypes.CURSOR);

			cs.executeQuery();

			if (V_TYPE.equals("IH")) {
				rs = (ResultSet) cs.getObject(29);
				String TAX_NO = "";
				String TAX_DOC_NO = "";

				while (rs.next()) {
					TAX_NO = rs.getString("TAX_NO");
					TAX_DOC_NO = rs.getString("TAX_DOC_NO");
				}

				jsonObject.put("TAX_NO", TAX_NO);
				jsonObject.put("TAX_DOC_NO", TAX_DOC_NO);

				response.setContentType("text/plain; charset=UTF-8");
				PrintWriter pw = response.getWriter();
				pw.print(jsonObject);
				pw.flush();
				pw.close();
			}

		} else if (V_TYPE.equals("I") || V_TYPE.equals("D")) {

			String V_TAX_BILL_NO = request.getParameter("V_TAX_BILL_NO") == null ? "" : request.getParameter("V_TAX_BILL_NO").toUpperCase();

			cs = conn.prepareCall("call USP_001_A_TEMP_TAX_STEEL(?,?,?,?,?)");

			cs.setString(1, V_COMP_ID);//V_COMP_ID
			cs.setString(2, V_TYPE);//V_TYPE
			cs.setString(3, V_TAX_BILL_NO);//V_TAX_BILL_NO
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

				System.out.println("V_TEMP_GL_NO " + V_TEMP_GL_NO);
				System.out.println(result);

				response.setContentType("text/plain; charset=UTF-8");
				PrintWriter pw = response.getWriter();
				pw.print(result);
				pw.flush();
				pw.close();
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
%>


