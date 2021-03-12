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

	String V_PO_NO = "";
	String V_PO_SEQ = "";

	try {
		String V_TYPE = request.getParameter("V_TYPE") == null ? "" : request.getParameter("V_TYPE");
		String V_COMP_ID = request.getParameter("V_COMP_ID") == null ? "" : request.getParameter("V_COMP_ID").toUpperCase();
		String V_USR_ID = request.getParameter("V_USR_ID") == null ? "" : request.getParameter("V_USR_ID").toUpperCase();
		String V_MAST_PO_NO = request.getParameter("V_MAST_PO_NO") == null ? "" : request.getParameter("V_MAST_PO_NO").toUpperCase();
		String V_PO_TYPE = request.getParameter("V_PO_TYPE") == null ? "" : request.getParameter("V_PO_TYPE").toUpperCase();
		String V_PO_DT = request.getParameter("V_PO_DT") == null ? "" : request.getParameter("V_PO_DT").substring(0, 10);
		String V_CUR = request.getParameter("V_CUR") == null ? "" : request.getParameter("V_CUR").toUpperCase();
		String V_XCHG_RATE = request.getParameter("V_XCHG_RATE") == null ? "" : request.getParameter("V_XCHG_RATE").toUpperCase();
		String V_IN_TERMS = request.getParameter("V_IN_TERMS") == null ? "" : request.getParameter("V_IN_TERMS").toUpperCase();
		String V_PAY_METH = request.getParameter("V_PAY_METH") == null ? "" : request.getParameter("V_PAY_METH").toUpperCase();
		String V_VAT_TYPE = request.getParameter("V_VAT_TYPE") == null ? "" : request.getParameter("V_VAT_TYPE").toUpperCase();
		String V_GR_TYPE = request.getParameter("V_GR_TYPE") == null ? "" : request.getParameter("V_GR_TYPE").toUpperCase();
		String V_DLV_TYPE = request.getParameter("V_DLV_TYPE") == null ? "" : request.getParameter("V_DLV_TYPE").toUpperCase();
		String V_M_BP_CD = request.getParameter("V_M_BP_CD") == null ? "" : request.getParameter("V_M_BP_CD").toUpperCase();
		String V_M_BP_NM = request.getParameter("V_M_BP_NM") == null ? "" : request.getParameter("V_M_BP_NM").toUpperCase();
		String V_S_BP_CD = request.getParameter("V_S_BP_CD") == null ? "" : request.getParameter("V_S_BP_CD").toUpperCase();
		String V_S_BP_NM = request.getParameter("V_S_BP_NM") == null ? "" : request.getParameter("V_S_BP_NM").toUpperCase();
		String V_REMARK = request.getParameter("V_REMARK") == null ? "" : request.getParameter("V_REMARK").toUpperCase();
		String V_SYS_TYPE = request.getParameter("V_SYS_TYPE") == null ? "" : request.getParameter("V_SYS_TYPE").toUpperCase();

		String W_PO_DT_FR = request.getParameter("W_PO_DT_FR") == null ? "" : request.getParameter("W_PO_DT_FR").substring(0, 10);
		String W_PO_DT_TO = request.getParameter("W_PO_DT_TO") == null ? "" : request.getParameter("W_PO_DT_TO").substring(0, 10);
		String W_M_BP_NM = request.getParameter("W_M_BP_NM") == null ? "" : request.getParameter("W_M_BP_NM").toUpperCase();

		String V_TRANS_TYPE = request.getParameter("V_TRANS_TYPE") == null ? "" : request.getParameter("V_TRANS_TYPE").toUpperCase();
		String V_DISCHGE_PORT = request.getParameter("V_DISCHGE_PORT") == null ? "" : request.getParameter("V_DISCHGE_PORT").toUpperCase();

		String V_PO_NO2 = "";

		//저장
		if (V_TYPE.equals("I") || V_TYPE.equals("U")) {

			cs = conn.prepareCall("call USP_003_M_PO_TOT_MAST(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)");
			cs.setString(1, V_TYPE);//V_COMP_ID
			cs.setString(2, V_COMP_ID);//
			cs.setString(3, "");//V_PUR_NO
			cs.setString(4, "");//V_PUR_SEQ
			cs.setString(5, "");//V_PUR_DT_FR
			cs.setString(6, "");//V_PUR_DT_TO
			cs.setString(7, V_MAST_PO_NO);//V_PO_NO
			cs.setString(8, V_M_BP_CD);//V_M_BP_CD
			cs.setString(9, "");//V_M_BP_NM
			cs.setString(10, V_PO_DT);//V_PO_DT
			cs.setString(11, V_PO_TYPE);//V_PO_TYPE
			cs.setString(12, V_IN_TERMS);//V_IN_TERMS
			cs.setString(13, V_PAY_METH);//V_PAY_METH
			cs.setString(14, V_CUR);//V_CUR
			cs.setString(15, V_XCHG_RATE);//V_XCHG_RATE
			cs.setString(16, V_REMARK);//V_REMARK
			cs.setString(17, V_USR_ID);//V_PO_USR_ID
			cs.setString(18, "");//V_COMM_NO
			cs.setString(19, "");//V_ITEM_CD
			cs.setString(20, "");//V_PO_CFM
			cs.setString(21, V_SYS_TYPE);//V_SYS_TYPE
			cs.setString(22, V_DLV_TYPE);//V_DLV_TYPE
			cs.setString(23, V_GR_TYPE);//V_GR_TYPE
			cs.setString(24, V_VAT_TYPE);//V_VAT_TYPE
			cs.setString(25, V_USR_ID);//V_DN_DT_TO
			cs.registerOutParameter(26, com.tmax.tibero.TbTypes.CURSOR);
			cs.setString(27, V_S_BP_CD);//V_S_BP_CD
			cs.setString(28, V_TRANS_TYPE);//V_S_BP_CD
			cs.setString(29, V_DISCHGE_PORT);//V_S_BP_CD
			cs.executeQuery();

			rs = (ResultSet) cs.getObject(26);

			while (rs.next()) {
				V_PO_NO2 = rs.getString("V_PO_NO2");
			}

			response.setContentType("text/plain; charset=UTF-8");
			PrintWriter pw = response.getWriter();
			pw.print(V_PO_NO2);
			pw.flush();
			pw.close();
		} else if (V_TYPE.equals("SH") || V_TYPE.equals("D") || V_TYPE.equals("CF") || V_TYPE.equals("SP")) {
			String V_PO_CFM = request.getParameter("V_PO_CFM") == null ? "" : request.getParameter("V_PO_CFM").toUpperCase();
			String W_PO_USR_NM = request.getParameter("W_PO_USR_NM") == null ? "" : request.getParameter("W_PO_USR_NM").toUpperCase();

			cs = conn.prepareCall("call USP_003_M_PO_TOT_MAST(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)");
			cs.setString(1, V_TYPE);//V_COMP_ID
			cs.setString(2, V_COMP_ID);//
			cs.setString(3, "");//V_PUR_NO
			cs.setString(4, "");//V_PUR_SEQ
			cs.setString(5, W_PO_DT_FR);//V_PUR_DT_FR
			cs.setString(6, W_PO_DT_TO);//V_PUR_DT_TO
			cs.setString(7, V_MAST_PO_NO);//V_PO_NO
			cs.setString(8, "");//V_M_BP_CD
			cs.setString(9, W_M_BP_NM);//V_M_BP_NM
			cs.setString(10, "");//V_PO_DT
			cs.setString(11, "");//V_PO_TYPE
			cs.setString(12, "");//V_IN_TERMS
			cs.setString(13, "");//V_PAY_METH
			cs.setString(14, "");//V_CUR
			cs.setString(15, "");//V_XCHG_RATE
			cs.setString(16, "");//V_REMARK
			cs.setString(17, W_PO_USR_NM);//V_PO_USR_ID
			cs.setString(18, "");//V_COMM_NO
			cs.setString(19, "");//V_ITEM_CD
			cs.setString(20, V_PO_CFM);//V_PO_CFM
			cs.setString(21, "");//V_SYS_TYPE
			cs.setString(22, "");//V_DLV_TYPE
			cs.setString(23, "");//V_GR_TYPE
			cs.setString(24, "");//V_VAT_TYPE
			cs.setString(25, "");//V_DN_DT_TO
			cs.registerOutParameter(26, com.tmax.tibero.TbTypes.CURSOR);
			cs.setString(27, "");//V_S_BP_CD
			cs.setString(28, "");//V_S_BP_CD
			cs.setString(29, "");//V_S_BP_CD
			cs.executeQuery();

			if (V_TYPE.equals("SH")) {

				rs = (ResultSet) cs.getObject(26);

				while (rs.next()) {
					subObject = new JSONObject();
					subObject.put("PO_NO", rs.getString("PO_NO"));
					subObject.put("BP_CD", rs.getString("BP_CD"));
					subObject.put("BP_NM", rs.getString("BP_NM"));
					subObject.put("PO_DT", rs.getString("PO_DT"));
					subObject.put("PO_TYPE", rs.getString("PO_TYPE"));
					subObject.put("PO_TYPE_NM", rs.getString("PO_TYPE_NM"));
					subObject.put("PAY_METH", rs.getString("PAY_METH"));
					subObject.put("PAY_METH_NM", rs.getString("PAY_METH_NM"));
					subObject.put("IN_TERMS", rs.getString("IN_TERMS"));
					subObject.put("IN_TERMS_NM", rs.getString("IN_TERMS_NM"));
					subObject.put("CUR", rs.getString("CUR"));
					subObject.put("XCH_RATE", rs.getString("XCH_RATE"));
					subObject.put("APPROV_NO", rs.getString("APPROV_NO"));
					subObject.put("PO_CFM", rs.getString("PO_CFM"));
					subObject.put("DLV_TYPE", rs.getString("DLV_TYPE"));
					subObject.put("DLV_TYPE_NM", rs.getString("DLV_TYPE_NM"));
					subObject.put("REMARK", rs.getString("REMARK"));
					subObject.put("GR_TYPE", rs.getString("GR_TYPE"));
					subObject.put("GR_TYPE_NM", rs.getString("GR_TYPE_NM"));
					subObject.put("SYS_TYPE", rs.getString("SYS_TYPE"));
					subObject.put("SYS_TYPE_NM", rs.getString("SYS_TYPE_NM"));
					subObject.put("VAT_TYPE", rs.getString("VAT_TYPE"));
					subObject.put("S_BP_CD", rs.getString("S_BP_CD"));
					subObject.put("S_BP_NM", rs.getString("S_BP_NM"));
					subObject.put("TRANS_TYPE", rs.getString("TRANS_TYPE"));
					subObject.put("DISCHGE_PORT", rs.getString("DISCHGE_PORT"));

					jsonArray.add(subObject);
				}

				jsonObject.put("success", true);
				jsonObject.put("resultList", jsonArray);

				// 				System.out.println(jsonObject);

				response.setContentType("text/plain; charset=UTF-8");
				PrintWriter pw = response.getWriter();
				pw.print(jsonObject);
				pw.flush();
				pw.close();
			}

			if (V_TYPE.equals("SP")) {

				rs = (ResultSet) cs.getObject(26);

				while (rs.next()) {
					subObject = new JSONObject();
					subObject.put("BP_CD", rs.getString("BP_CD"));
					subObject.put("M_BP_NM", rs.getString("M_BP_NM"));
					subObject.put("MAST_PO_NO", rs.getString("MAST_PO_NO"));
					subObject.put("PO_DT", rs.getString("PO_DT"));
					subObject.put("TOT_PO_AMT", rs.getString("TOT_PO_AMT"));
					subObject.put("PO_TYPE", rs.getString("PO_TYPE"));
					subObject.put("PO_TYPE_NM", rs.getString("PO_TYPE_NM"));
					subObject.put("PAY_METH", rs.getString("PAY_METH"));
					subObject.put("PAY_METH_NM", rs.getString("PAY_METH_NM"));
					subObject.put("IN_TERMS", rs.getString("IN_TERMS"));
					subObject.put("IN_TERMS_NM", rs.getString("IN_TERMS_NM"));
					subObject.put("VAT_TYPE_NM", rs.getString("VAT_TYPE_NM"));
					subObject.put("CUR", rs.getString("CUR"));
					subObject.put("PO_CFM", rs.getString("PO_CFM"));
					subObject.put("S_BP_CD", rs.getString("S_BP_CD"));
					subObject.put("S_BP_NM", rs.getString("S_BP_NM"));
					subObject.put("PO_USR_NM", rs.getString("PO_USR_NM"));

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

			if (V_TYPE.equals("CF")) {
				String FLAG = "";
				rs = (ResultSet) cs.getObject(26);

				while (rs.next()) {
					FLAG = rs.getString("FLAG");
				}

// 				System.out.println("FLAG: " + FLAG);

				response.setContentType("text/plain; charset=UTF-8");
				PrintWriter pw = response.getWriter();
				pw.print(FLAG);
				pw.flush();
				pw.close();
			}
		} else if (V_TYPE.equals("S")) {

			cs = conn.prepareCall("call USP_003_M_PO_TOT_DTL4(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)");
			cs.setString(1, V_COMP_ID);//V_COMP_ID
			cs.setString(2, V_TYPE);//V_TYPE
			cs.setString(3, V_MAST_PO_NO);//V_MAST_PO_NO
			cs.setString(4, "");//V_PO_NO
			cs.setString(5, "");//V_PO_SEQ
			cs.setString(6, "");//V_ITEM_CD
			cs.setString(7, "");//V_PO_QTY
			cs.setString(8, "");//V_PO_PRC
			cs.setString(9, "");//V_PO_AMT
			cs.setString(10, "");//V_PO_LOC_AMT
			cs.setString(11, V_VAT_TYPE);//V_VAT_TYPE
			cs.setString(12, "");//V_DLVY_HOPE_DT
			cs.setString(13, "");//V_HOPE_SL_CD
			cs.setString(14, "10");//V_OVER_TOL
			cs.setString(15, "10");//V_UNDER_TOL
			cs.setString(16, V_M_BP_CD);//V_M_BP_CD
			cs.setString(17, V_USR_ID);//V_USR_ID
			cs.registerOutParameter(18, com.tmax.tibero.TbTypes.CURSOR);
			cs.setString(19, "");//V_USR_ID
			cs.setString(20, "");//V_USR_ID
			cs.setString(21, "");//
			cs.setString(22, "");//
			cs.setString(23, "");//
			cs.setString(24, "");//
			cs.setString(25, "");//
			cs.executeQuery();

			rs = (ResultSet) cs.getObject(18);

			while (rs.next()) {
				subObject = new JSONObject();
				subObject.put("ITEM_CD", rs.getString("ITEM_CD"));
				subObject.put("ITEM_NM", rs.getString("ITEM_NM"));
				subObject.put("MAKER", rs.getString("MAKER"));
				subObject.put("AGENT", rs.getString("AGENT"));
				subObject.put("SPEC", rs.getString("SPEC"));
				subObject.put("PO_SEQ", rs.getString("PO_SEQ"));
				subObject.put("UNIT", rs.getString("UNIT"));
				subObject.put("TOT_PO_QTY", rs.getString("TOT_PO_QTY"));
				subObject.put("PO_PRC", rs.getString("PO_PRC"));
				subObject.put("TOT_PO_AMT", rs.getString("TOT_PO_AMT"));
				subObject.put("HOPE_SL_CD", rs.getString("HOPE_SL_CD"));
				subObject.put("SL_NM", rs.getString("SL_NM"));
				subObject.put("DLVY_HOPE_DT1", rs.getString("DLVY_HOPE_DT1"));
				subObject.put("DLVY_HOPE_DT2", rs.getString("DLVY_HOPE_DT2"));
				subObject.put("DLVY_HOPE_DT3", rs.getString("DLVY_HOPE_DT3"));
				subObject.put("DLVY_HOPE_DT4", rs.getString("DLVY_HOPE_DT4"));
				subObject.put("DLVY_HOPE_DT5", rs.getString("DLVY_HOPE_DT5"));
				subObject.put("PO_QTY1", rs.getString("PO_QTY1"));
				subObject.put("PO_QTY2", rs.getString("PO_QTY2"));
				subObject.put("PO_QTY3", rs.getString("PO_QTY3"));
				subObject.put("PO_QTY4", rs.getString("PO_QTY4"));
				subObject.put("PO_QTY5", rs.getString("PO_QTY5"));
				subObject.put("PO_AMT1", rs.getString("PO_AMT1"));
				subObject.put("PO_AMT2", rs.getString("PO_AMT2"));
				subObject.put("PO_AMT3", rs.getString("PO_AMT3"));
				subObject.put("PO_AMT4", rs.getString("PO_AMT4"));
				subObject.put("PO_AMT5", rs.getString("PO_AMT5"));

				subObject.put("GR_SL_CD", rs.getString("GR_SL_CD"));
				subObject.put("PO_REMARK1", rs.getString("PO_REMARK1"));
				subObject.put("PO_REMARK2", rs.getString("PO_REMARK2"));
				subObject.put("PO_REMARK3", rs.getString("PO_REMARK3"));
				subObject.put("PO_REMARK4", rs.getString("PO_REMARK4"));
				subObject.put("PO_REMARK5", rs.getString("PO_REMARK5"));
				
				subObject.put("TRANS_TYPE1", rs.getString("TRANS_TYPE1"));
				subObject.put("TRANS_TYPE2", rs.getString("TRANS_TYPE2"));
				subObject.put("TRANS_TYPE3", rs.getString("TRANS_TYPE3"));
				subObject.put("TRANS_TYPE4", rs.getString("TRANS_TYPE4"));
				subObject.put("TRANS_TYPE5", rs.getString("TRANS_TYPE5"));

				subObject.put("SUPP_REMARK", rs.getString("SUPP_REMARK"));

				subObject.put("E103_GR_SL_NM", rs.getString("GR_SL_NM"));
				subObject.put("E103_ADDRESS", rs.getString("ADDRESS"));
				subObject.put("E103_USR_NM", rs.getString("USR_NM"));
				subObject.put("E103_USR_EMAIL", rs.getString("EMAIL"));
				subObject.put("E103_USR_TEL", rs.getString("TEL"));
				subObject.put("E103_REMARK", rs.getString("E103_REMARK"));
				
				subObject.put("PO_ROW", rs.getString("PO_ROW"));

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

			if (jsonData.lastIndexOf("},{") > 0) { //배열일경우
				JSONArray jsonAr = (JSONArray) JSONValue.parse(jsonData);

				for (int i = 0; i < jsonAr.size(); i++) {

					HashMap hashMap = (HashMap) jsonAr.get(i);

					V_TYPE = hashMap.get("V_TYPE") == null ? "" : hashMap.get("V_TYPE").toString();
					V_PO_NO = hashMap.get("PO_NO") == null ? "" : hashMap.get("PO_NO").toString();
					String V_DLVY_HOPE_DT1 = hashMap.get("DLVY_HOPE_DT1") == null ? "" : hashMap.get("DLVY_HOPE_DT1").toString();
					String V_DLVY_HOPE_DT2 = hashMap.get("DLVY_HOPE_DT2") == null ? "" : hashMap.get("DLVY_HOPE_DT2").toString();
					String V_DLVY_HOPE_DT3 = hashMap.get("DLVY_HOPE_DT3") == null ? "" : hashMap.get("DLVY_HOPE_DT3").toString();
					String V_DLVY_HOPE_DT4 = hashMap.get("DLVY_HOPE_DT4") == null ? "" : hashMap.get("DLVY_HOPE_DT4").toString();
					String V_DLVY_HOPE_DT5 = hashMap.get("DLVY_HOPE_DT5") == null ? "" : hashMap.get("DLVY_HOPE_DT5").toString();
					
					

					if(V_DLVY_HOPE_DT1.length() > 10 ){
						V_DLVY_HOPE_DT1 = V_DLVY_HOPE_DT1.substring(0,10);
					}
					else if(V_DLVY_HOPE_DT1.length() < 8){
						V_DLVY_HOPE_DT1 = "";
					}
					if(V_DLVY_HOPE_DT2.length() > 10 ){
						V_DLVY_HOPE_DT2 = V_DLVY_HOPE_DT2.substring(0,10);
					}
					else if(V_DLVY_HOPE_DT2.length() < 8){
						V_DLVY_HOPE_DT2 = "";
					}
					if(V_DLVY_HOPE_DT3.length() > 10 ){
						V_DLVY_HOPE_DT3 = V_DLVY_HOPE_DT3.substring(0,10);
					}
					else if(V_DLVY_HOPE_DT3.length() < 8){
						V_DLVY_HOPE_DT3 = "";
					}
					if(V_DLVY_HOPE_DT4.length() > 10 ){
						V_DLVY_HOPE_DT4 = V_DLVY_HOPE_DT4.substring(0,10);
					}
					else if(V_DLVY_HOPE_DT4.length() < 8){
						V_DLVY_HOPE_DT4 = "";
					}
					if(V_DLVY_HOPE_DT5.length() > 10 ){
						V_DLVY_HOPE_DT5 = V_DLVY_HOPE_DT5.substring(0,10);
					}
					else if(V_DLVY_HOPE_DT5.length() < 8){
						V_DLVY_HOPE_DT5 = "";
					}
					
					String V_ITEM_CD = hashMap.get("ITEM_CD") == null ? "" : hashMap.get("ITEM_CD").toString();
					String V_PO_PRC = hashMap.get("PO_PRC") == null ? "" : hashMap.get("PO_PRC").toString();
					String V_HOPE_SL_CD = hashMap.get("HOPE_SL_CD") == null ? "" : hashMap.get("HOPE_SL_CD").toString();
					String V_GR_SL_CD = hashMap.get("GR_SL_CD") == null ? "" : hashMap.get("GR_SL_CD").toString();
					String V_PO_REMARK = "";

					V_PO_SEQ = hashMap.get("PO_SEQ") == null ? "" : hashMap.get("PO_SEQ").toString();
					String V_PO_QTY = "";
					String V_PO_AMT = "";
					String V_PO_LOC_AMT = "";

					String SUPP_REMARK = hashMap.get("SUPP_REMARK") == null ? "" : hashMap.get("SUPP_REMARK").toString();

					/*삭제/수정 할 때*/
					if (V_TYPE.equals("D") || V_TYPE.equals("U")) {
						V_PO_NO = V_MAST_PO_NO;
					}
					
					String PO_ROW = hashMap.get("PO_ROW") == null ? "" : hashMap.get("PO_ROW").toString();

					//직입고 입고지 정보

					String E103_GR_SL_NM = hashMap.get("E103_GR_SL_NM") == null ? "" : hashMap.get("E103_GR_SL_NM").toString();
					String E103_ADDRESS = hashMap.get("E103_ADDRESS") == null ? "" : hashMap.get("E103_ADDRESS").toString();
					String E103_USR_NM = hashMap.get("E103_USR_NM") == null ? "" : hashMap.get("E103_USR_NM").toString();
					String E103_USR_EMAIL = hashMap.get("E103_USR_EMAIL") == null ? "" : hashMap.get("E103_USR_EMAIL").toString();
					String E103_USR_TEL = hashMap.get("E103_USR_TEL") == null ? "" : hashMap.get("E103_USR_TEL").toString();
					String E103_REMARK = hashMap.get("E103_REMARK") == null ? "" : hashMap.get("E103_REMARK").toString();
					
					String MAKER = hashMap.get("MAKER") == null ? "" : hashMap.get("MAKER").toString();
					String AGENT = hashMap.get("AGENT") == null ? "" : hashMap.get("AGENT").toString();
					

					cs2 = conn.prepareCall("call USP_003_M_PO_E103_INFO(?,?,?,?,?,?,?,?,?,?,?)");
					cs2.setString(1, V_COMP_ID);//V_COMP_ID
					cs2.setString(2, V_TYPE);//V_TYPE
					cs2.setString(3, V_MAST_PO_NO);//V_MAST_PO_NO
					cs2.setString(4, V_S_BP_CD);//V_S_BP_CD
					cs2.setString(5, E103_GR_SL_NM);//V_GR_SL_NM
					cs2.setString(6, E103_ADDRESS);//V_ADDRESS
					cs2.setString(7, E103_USR_NM);//V_USR_NM
					cs2.setString(8, E103_USR_EMAIL);//V_EMAIL
					cs2.setString(9, E103_USR_TEL);//V_TEL
					cs2.setString(10, V_USR_ID);//V_USR_ID
					cs2.setString(11, E103_REMARK);//
					cs2.executeQuery();

					if (!V_DLVY_HOPE_DT1.equals("")) {
						PO_ROW = hashMap.get("PO_ROW") == null ? "" : hashMap.get("PO_ROW").toString();
						/*등록할 때*/
						if (V_TYPE.equals("I")) {
							V_PO_SEQ = "1";
// 							PO_ROW = Integer.toString(i);

							cs = conn.prepareCall("call USP_003_M_PO_TOT_HDR(?,?,?,?,?,?,?,?)");
							cs.setString(1, V_COMP_ID);//V_COMP_ID
							cs.setString(2, V_TYPE);//V_TYPE
							cs.setString(3, V_MAST_PO_NO);//V_MAST_PO_NO
							cs.setString(4, V_PO_NO);//V_PO_NO
							cs.setString(5, V_PO_SEQ);//V_PO_NO
							cs.setString(6, "");//V_DLVY_HOPE_DT
							cs.setString(7, V_USR_ID);//V_USR_ID
							cs.registerOutParameter(8, com.tmax.tibero.TbTypes.CURSOR);
							cs.executeQuery();

							rs = (ResultSet) cs.getObject(8);

							while (rs.next()) {
								V_PO_NO = rs.getString("V_PO_NO");
							}
						} else if (V_TYPE.equals("U")) {
							V_PO_NO = V_MAST_PO_NO + "-1";
						}
						V_PO_QTY = hashMap.get("PO_QTY1") == null ? "" : hashMap.get("PO_QTY1").toString();
						V_PO_AMT = hashMap.get("PO_AMT1") == null ? "" : hashMap.get("PO_AMT1").toString();
						V_PO_REMARK = hashMap.get("PO_REMARK1") == null ? "" : hashMap.get("PO_REMARK1").toString();
						V_TRANS_TYPE = hashMap.get("TRANS_TYPE1") == null ? "" : hashMap.get("TRANS_TYPE1").toString();

						/*발주수량이 0이면 삭제*/
						if (V_TYPE.equals("U") && V_PO_QTY.equals("0")) {
							V_TYPE = "DD";
						}

						cs2 = conn.prepareCall("call USP_003_M_PO_TOT_DTL4(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)");
						cs2.setString(1, V_COMP_ID);//V_COMP_ID
						cs2.setString(2, V_TYPE);//V_TYPE
						cs2.setString(3, V_MAST_PO_NO);//V_MAST_PO_NO
						cs2.setString(4, V_PO_NO);//V_PO_NO
						cs2.setString(5, V_PO_SEQ);//V_PO_SEQ
						cs2.setString(6, V_ITEM_CD);//V_ITEM_CD
						cs2.setString(7, V_PO_QTY);//V_PO_QTY
						cs2.setString(8, V_PO_PRC);//V_PO_PRC
						cs2.setString(9, V_PO_AMT);//V_PO_AMT
						cs2.setString(10, V_PO_LOC_AMT);//V_PO_LOC_AMT
						cs2.setString(11, V_VAT_TYPE);//V_VAT_TYPE
						cs2.setString(12, V_DLVY_HOPE_DT1);//V_DLVY_HOPE_DT
						cs2.setString(13, V_HOPE_SL_CD);//V_HOPE_SL_CD
						cs2.setString(14, "10");//V_OVER_TOL
						cs2.setString(15, "10");//V_UNDER_TOL
						cs2.setString(16, V_M_BP_CD);//V_M_BP_CD
						cs2.setString(17, V_USR_ID);//V_USR_ID
						cs2.registerOutParameter(18, com.tmax.tibero.TbTypes.CURSOR);
						cs2.setString(19, V_GR_SL_CD);//V_USR_ID
						cs2.setString(20, V_PO_REMARK);//V_USR_ID
						cs2.setString(21, SUPP_REMARK);//SUPP_REMARK
						cs2.setString(22, PO_ROW);//PO_ROW
						cs2.setString(23, MAKER);//MAKER
						cs2.setString(24, AGENT);//AGENT
						cs2.setString(25, V_TRANS_TYPE);//
						cs2.executeQuery();

					}

					if (!V_DLVY_HOPE_DT2.equals("")) {
						PO_ROW = hashMap.get("PO_ROW") == null ? "" : hashMap.get("PO_ROW").toString();
						/*등록할 때*/
						if (V_TYPE.equals("I")) {
							V_PO_SEQ = "2";
// 							PO_ROW = Integer.toString(i);

							cs = conn.prepareCall("call USP_003_M_PO_TOT_HDR(?,?,?,?,?,?,?,?)");
							cs.setString(1, V_COMP_ID);//V_COMP_ID
							cs.setString(2, V_TYPE);//V_TYPE
							cs.setString(3, V_MAST_PO_NO);//V_MAST_PO_NO
							cs.setString(4, V_PO_NO);//V_PO_NO
							cs.setString(5, V_PO_SEQ);//V_PO_NO
							cs.setString(6, "");//V_DLVY_HOPE_DT
							cs.setString(7, V_USR_ID);//V_USR_ID
							cs.registerOutParameter(8, com.tmax.tibero.TbTypes.CURSOR);
							cs.executeQuery();

							rs = (ResultSet) cs.getObject(8);

							while (rs.next()) {
								V_PO_NO = rs.getString("V_PO_NO");
							}

						} else if (V_TYPE.equals("U")) {
							V_PO_NO = V_MAST_PO_NO + "-2";
						}

						V_PO_QTY = hashMap.get("PO_QTY2") == null ? "" : hashMap.get("PO_QTY2").toString();
						V_PO_AMT = hashMap.get("PO_AMT2") == null ? "" : hashMap.get("PO_AMT2").toString();
						V_PO_REMARK = hashMap.get("PO_REMARK2") == null ? "" : hashMap.get("PO_REMARK2").toString();
						V_TRANS_TYPE = hashMap.get("TRANS_TYPE2") == null ? "" : hashMap.get("TRANS_TYPE2").toString();

						/*발주수량이 0이면 삭제*/
						if (V_TYPE.equals("U") && V_PO_QTY.equals("0")) {
							V_TYPE = "DD";
						}

						cs2 = conn.prepareCall("call USP_003_M_PO_TOT_DTL4(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)");
						cs2.setString(1, V_COMP_ID);//V_COMP_ID
						cs2.setString(2, V_TYPE);//V_TYPE
						cs2.setString(3, V_MAST_PO_NO);//V_MAST_PO_NO
						cs2.setString(4, V_PO_NO);//V_PO_NO
						cs2.setString(5, V_PO_SEQ);//V_PO_SEQ
						cs2.setString(6, V_ITEM_CD);//V_ITEM_CD
						cs2.setString(7, V_PO_QTY);//V_PO_QTY
						cs2.setString(8, V_PO_PRC);//V_PO_PRC
						cs2.setString(9, V_PO_AMT);//V_PO_AMT
						cs2.setString(10, V_PO_LOC_AMT);//V_PO_LOC_AMT
						cs2.setString(11, V_VAT_TYPE);//V_VAT_TYPE
						cs2.setString(12, V_DLVY_HOPE_DT2);//V_DLVY_HOPE_DT
						cs2.setString(13, V_HOPE_SL_CD);//V_HOPE_SL_CD
						cs2.setString(14, "10");//V_OVER_TOL
						cs2.setString(15, "10");//V_UNDER_TOL
						cs2.setString(16, V_M_BP_CD);//V_M_BP_CD
						cs2.setString(17, V_USR_ID);//V_USR_ID
						cs2.registerOutParameter(18, com.tmax.tibero.TbTypes.CURSOR);
						cs2.setString(19, V_GR_SL_CD);//V_USR_ID
						cs2.setString(20, V_PO_REMARK);//V_USR_ID
						cs2.setString(21, SUPP_REMARK);//SUPP_REMARK
						cs2.setString(22, PO_ROW);//PO_ROW
						cs2.setString(23, MAKER);//MAKER
						cs2.setString(24, AGENT);//AGENT
						cs2.setString(25, V_TRANS_TYPE);//
						cs2.executeQuery();

					}
					if (!V_DLVY_HOPE_DT3.equals("")) {
						PO_ROW = hashMap.get("PO_ROW") == null ? "" : hashMap.get("PO_ROW").toString();
						/*등록할 때*/
						if (V_TYPE.equals("I")) {
							V_PO_SEQ = "3";
// 							PO_ROW = Integer.toString(i);
							
							cs = conn.prepareCall("call USP_003_M_PO_TOT_HDR(?,?,?,?,?,?,?,?)");
							cs.setString(1, V_COMP_ID);//V_COMP_ID
							cs.setString(2, V_TYPE);//V_TYPE
							cs.setString(3, V_MAST_PO_NO);//V_MAST_PO_NO
							cs.setString(4, V_PO_NO);//V_PO_NO
							cs.setString(5, V_PO_SEQ);//V_PO_NO
							cs.setString(6, "");//V_DLVY_HOPE_DT
							cs.setString(7, V_USR_ID);//V_USR_ID
							cs.registerOutParameter(8, com.tmax.tibero.TbTypes.CURSOR);
							cs.executeQuery();

							rs = (ResultSet) cs.getObject(8);

							while (rs.next()) {
								V_PO_NO = rs.getString("V_PO_NO");
							}
						} else if (V_TYPE.equals("U")) {
							V_PO_NO = V_MAST_PO_NO + "-3";
						}

						V_PO_QTY = hashMap.get("PO_QTY3") == null ? "" : hashMap.get("PO_QTY3").toString();
						V_PO_AMT = hashMap.get("PO_AMT3") == null ? "" : hashMap.get("PO_AMT3").toString();
						V_PO_REMARK = hashMap.get("PO_REMARK3") == null ? "" : hashMap.get("PO_REMARK3").toString();
						V_TRANS_TYPE = hashMap.get("TRANS_TYPE3") == null ? "" : hashMap.get("TRANS_TYPE3").toString();

						/*발주수량이 0이면 삭제*/
						if (V_TYPE.equals("U") && V_PO_QTY.equals("0")) {
							V_TYPE = "DD";
						}

						cs2 = conn.prepareCall("call USP_003_M_PO_TOT_DTL4(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)");
						cs2.setString(1, V_COMP_ID);//V_COMP_ID
						cs2.setString(2, V_TYPE);//V_TYPE
						cs2.setString(3, V_MAST_PO_NO);//V_MAST_PO_NO
						cs2.setString(4, V_PO_NO);//V_PO_NO
						cs2.setString(5, V_PO_SEQ);//V_PO_SEQ
						cs2.setString(6, V_ITEM_CD);//V_ITEM_CD
						cs2.setString(7, V_PO_QTY);//V_PO_QTY
						cs2.setString(8, V_PO_PRC);//V_PO_PRC
						cs2.setString(9, V_PO_AMT);//V_PO_AMT
						cs2.setString(10, V_PO_LOC_AMT);//V_PO_LOC_AMT
						cs2.setString(11, V_VAT_TYPE);//V_VAT_TYPE
						cs2.setString(12, V_DLVY_HOPE_DT3);//V_DLVY_HOPE_DT
						cs2.setString(13, V_HOPE_SL_CD);//V_HOPE_SL_CD
						cs2.setString(14, "10");//V_OVER_TOL
						cs2.setString(15, "10");//V_UNDER_TOL
						cs2.setString(16, V_M_BP_CD);//V_M_BP_CD
						cs2.setString(17, V_USR_ID);//V_USR_ID
						cs2.registerOutParameter(18, com.tmax.tibero.TbTypes.CURSOR);
						cs2.setString(19, V_GR_SL_CD);//V_USR_ID
						cs2.setString(20, V_PO_REMARK);//V_USR_ID
						cs2.setString(21, SUPP_REMARK);//SUPP_REMARK
						cs2.setString(22, PO_ROW);//PO_ROW
						cs2.setString(23, MAKER);//MAKER
						cs2.setString(24, AGENT);//AGENT
						cs2.setString(25, V_TRANS_TYPE);//
						cs2.executeQuery();

					}
					if (!V_DLVY_HOPE_DT4.equals("")) {
						PO_ROW = hashMap.get("PO_ROW") == null ? "" : hashMap.get("PO_ROW").toString();

						/*등록할 때*/
						if (V_TYPE.equals("I")) {
							V_PO_SEQ = "4";
// 							PO_ROW = Integer.toString(i);

							cs = conn.prepareCall("call USP_003_M_PO_TOT_HDR(?,?,?,?,?,?,?,?)");
							cs.setString(1, V_COMP_ID);//V_COMP_ID
							cs.setString(2, V_TYPE);//V_TYPE
							cs.setString(3, V_MAST_PO_NO);//V_MAST_PO_NO
							cs.setString(4, V_PO_NO);//V_PO_NO
							cs.setString(5, V_PO_SEQ);//V_PO_NO
							cs.setString(6, "");//V_DLVY_HOPE_DT
							cs.setString(7, V_USR_ID);//V_USR_ID
							cs.registerOutParameter(8, com.tmax.tibero.TbTypes.CURSOR);
							cs.executeQuery();

							rs = (ResultSet) cs.getObject(8);

							while (rs.next()) {
								V_PO_NO = rs.getString("V_PO_NO");
							}
						} else if (V_TYPE.equals("U")) {
							V_PO_NO = V_MAST_PO_NO + "-4";
						}

						V_PO_QTY = hashMap.get("PO_QTY4") == null ? "" : hashMap.get("PO_QTY4").toString();
						V_PO_AMT = hashMap.get("PO_AMT4") == null ? "" : hashMap.get("PO_AMT4").toString();
						V_PO_REMARK = hashMap.get("PO_REMARK4") == null ? "" : hashMap.get("PO_REMARK4").toString();
						V_TRANS_TYPE = hashMap.get("TRANS_TYPE4") == null ? "" : hashMap.get("TRANS_TYPE4").toString();

						/*발주수량이 0이면 삭제*/
						if (V_TYPE.equals("U") && V_PO_QTY.equals("0")) {
							V_TYPE = "DD";
						}

						cs2 = conn.prepareCall("call USP_003_M_PO_TOT_DTL4(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)");
						cs2.setString(1, V_COMP_ID);//V_COMP_ID
						cs2.setString(2, V_TYPE);//V_TYPE
						cs2.setString(3, V_MAST_PO_NO);//V_MAST_PO_NO
						cs2.setString(4, V_PO_NO);//V_PO_NO
						cs2.setString(5, V_PO_SEQ);//V_PO_SEQ
						cs2.setString(6, V_ITEM_CD);//V_ITEM_CD
						cs2.setString(7, V_PO_QTY);//V_PO_QTY
						cs2.setString(8, V_PO_PRC);//V_PO_PRC
						cs2.setString(9, V_PO_AMT);//V_PO_AMT
						cs2.setString(10, V_PO_LOC_AMT);//V_PO_LOC_AMT
						cs2.setString(11, V_VAT_TYPE);//V_VAT_TYPE
						cs2.setString(12, V_DLVY_HOPE_DT4);//V_DLVY_HOPE_DT
						cs2.setString(13, V_HOPE_SL_CD);//V_HOPE_SL_CD
						cs2.setString(14, "10");//V_OVER_TOL
						cs2.setString(15, "10");//V_UNDER_TOL
						cs2.setString(16, V_M_BP_CD);//V_M_BP_CD
						cs2.setString(17, V_USR_ID);//V_USR_ID
						cs2.registerOutParameter(18, com.tmax.tibero.TbTypes.CURSOR);
						cs2.setString(19, V_GR_SL_CD);//V_USR_ID
						cs2.setString(20, V_PO_REMARK);//V_USR_ID
						cs2.setString(21, SUPP_REMARK);//SUPP_REMARK
						cs2.setString(22, PO_ROW);//PO_ROW
						cs2.setString(23, MAKER);//MAKER
						cs2.setString(24, AGENT);//AGENT
						cs2.setString(25, V_TRANS_TYPE);//
						cs2.executeQuery();

					}
					if (!V_DLVY_HOPE_DT5.equals("")) {
						PO_ROW = hashMap.get("PO_ROW") == null ? "" : hashMap.get("PO_ROW").toString();

						/*등록할 때*/
						if (V_TYPE.equals("I")) {
							V_PO_SEQ = "5";
// 							PO_ROW = Integer.toString(i);

							cs = conn.prepareCall("call USP_003_M_PO_TOT_HDR(?,?,?,?,?,?,?,?)");
							cs.setString(1, V_COMP_ID);//V_COMP_ID
							cs.setString(2, V_TYPE);//V_TYPE
							cs.setString(3, V_MAST_PO_NO);//V_MAST_PO_NO
							cs.setString(4, V_PO_NO);//V_PO_NO
							cs.setString(5, V_PO_SEQ);//V_PO_NO
							cs.setString(6, "");//V_DLVY_HOPE_DT
							cs.setString(7, V_USR_ID);//V_USR_ID
							cs.registerOutParameter(8, com.tmax.tibero.TbTypes.CURSOR);
							cs.executeQuery();

							rs = (ResultSet) cs.getObject(8);

							while (rs.next()) {
								V_PO_NO = rs.getString("V_PO_NO");
							}
						} else if (V_TYPE.equals("U")) {
							V_PO_NO = V_MAST_PO_NO + "-5";
						}

						V_PO_QTY = hashMap.get("PO_QTY5") == null ? "" : hashMap.get("PO_QTY5").toString();
						V_PO_AMT = hashMap.get("PO_AMT5") == null ? "" : hashMap.get("PO_AMT5").toString();
						V_PO_REMARK = hashMap.get("PO_REMARK5") == null ? "" : hashMap.get("PO_REMARK5").toString();
						V_TRANS_TYPE = hashMap.get("TRANS_TYPE5") == null ? "" : hashMap.get("TRANS_TYPE5").toString();

						/*발주수량이 0이면 삭제*/
						if (V_TYPE.equals("U") && V_PO_QTY.equals("0")) {
							V_TYPE = "DD";
						}

						cs2 = conn.prepareCall("call USP_003_M_PO_TOT_DTL4(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)");
						cs2.setString(1, V_COMP_ID);//V_COMP_ID
						cs2.setString(2, V_TYPE);//V_TYPE
						cs2.setString(3, V_MAST_PO_NO);//V_MAST_PO_NO
						cs2.setString(4, V_PO_NO);//V_PO_NO
						cs2.setString(5, V_PO_SEQ);//V_PO_SEQ
						cs2.setString(6, V_ITEM_CD);//V_ITEM_CD
						cs2.setString(7, V_PO_QTY);//V_PO_QTY
						cs2.setString(8, V_PO_PRC);//V_PO_PRC
						cs2.setString(9, V_PO_AMT);//V_PO_AMT
						cs2.setString(10, V_PO_LOC_AMT);//V_PO_LOC_AMT
						cs2.setString(11, V_VAT_TYPE);//V_VAT_TYPE
						cs2.setString(12, V_DLVY_HOPE_DT5);//V_DLVY_HOPE_DT
						cs2.setString(13, V_HOPE_SL_CD);//V_HOPE_SL_CD
						cs2.setString(14, "10");//V_OVER_TOL
						cs2.setString(15, "10");//V_UNDER_TOL
						cs2.setString(16, V_M_BP_CD);//V_M_BP_CD
						cs2.setString(17, V_USR_ID);//V_USR_ID
						cs2.registerOutParameter(18, com.tmax.tibero.TbTypes.CURSOR);
						cs2.setString(19, V_GR_SL_CD);//V_USR_ID
						cs2.setString(20, V_PO_REMARK);//V_USR_ID
						cs2.setString(21, SUPP_REMARK);//SUPP_REMARK
						cs2.setString(22, PO_ROW);//PO_ROW
						cs2.setString(23, MAKER);//MAKER
						cs2.setString(24, AGENT);//AGENT
						cs2.setString(25, V_TRANS_TYPE);//
						cs2.executeQuery();
					}

				}
			} else {

				JSONObject jsondata = JSONObject.fromObject(jsonData);

				V_TYPE = jsondata.get("V_TYPE") == null ? "" : jsondata.get("V_TYPE").toString();
				V_PO_NO = jsondata.get("PO_NO") == null ? "" : jsondata.get("PO_NO").toString();
				

				String V_DLVY_HOPE_DT1 = jsondata.get("DLVY_HOPE_DT1") == null ? "" : jsondata.get("DLVY_HOPE_DT1").toString();
				String V_DLVY_HOPE_DT2 = jsondata.get("DLVY_HOPE_DT2") == null ? "" : jsondata.get("DLVY_HOPE_DT2").toString();
				String V_DLVY_HOPE_DT3 = jsondata.get("DLVY_HOPE_DT3") == null ? "" : jsondata.get("DLVY_HOPE_DT3").toString();
				String V_DLVY_HOPE_DT4 = jsondata.get("DLVY_HOPE_DT4") == null ? "" : jsondata.get("DLVY_HOPE_DT4").toString();
				String V_DLVY_HOPE_DT5 = jsondata.get("DLVY_HOPE_DT5") == null ? "" : jsondata.get("DLVY_HOPE_DT5").toString();
				
				if(V_DLVY_HOPE_DT1.length() > 10 ){
					V_DLVY_HOPE_DT1 = V_DLVY_HOPE_DT1.substring(0,10);
				}
				else if(V_DLVY_HOPE_DT1.length() < 8){
					V_DLVY_HOPE_DT1 = "";
				}
				if(V_DLVY_HOPE_DT2.length() > 10 ){
					V_DLVY_HOPE_DT2 = V_DLVY_HOPE_DT2.substring(0,10);
				}
				else if(V_DLVY_HOPE_DT2.length() < 8){
					V_DLVY_HOPE_DT2 = "";
				}
				if(V_DLVY_HOPE_DT3.length() > 10 ){
					V_DLVY_HOPE_DT3 = V_DLVY_HOPE_DT3.substring(0,10);
				}
				else if(V_DLVY_HOPE_DT3.length() < 8){
					V_DLVY_HOPE_DT3 = "";
				}
				if(V_DLVY_HOPE_DT4.length() > 10 ){
					V_DLVY_HOPE_DT4 = V_DLVY_HOPE_DT4.substring(0,10);
				}
				else if(V_DLVY_HOPE_DT4.length() < 8){
					V_DLVY_HOPE_DT4 = "";
				}
				if(V_DLVY_HOPE_DT5.length() > 10 ){
					V_DLVY_HOPE_DT5 = V_DLVY_HOPE_DT5.substring(0,10);
				}
				else if(V_DLVY_HOPE_DT5.length() < 8){
					V_DLVY_HOPE_DT5 = "";
				}
				

				String V_ITEM_CD = jsondata.get("ITEM_CD") == null ? "" : jsondata.get("ITEM_CD").toString();
				String V_PO_PRC = jsondata.get("PO_PRC") == null ? "" : jsondata.get("PO_PRC").toString();
				String V_HOPE_SL_CD = jsondata.get("HOPE_SL_CD") == null ? "" : jsondata.get("HOPE_SL_CD").toString();

				V_PO_SEQ = jsondata.get("PO_SEQ") == null ? "" : jsondata.get("PO_SEQ").toString();
				String V_PO_QTY = "";
				String V_PO_AMT = "";
				String V_PO_LOC_AMT = "";

				String V_GR_SL_CD = jsondata.get("GR_SL_CD") == null ? "" : jsondata.get("GR_SL_CD").toString();
				String V_PO_REMARK = "";

				String SUPP_REMARK = jsondata.get("SUPP_REMARK") == null ? "" : jsondata.get("SUPP_REMARK").toString();

				/*삭제/수정 할 때*/
				if (V_TYPE.equals("D") || V_TYPE.equals("U")) { // V_TYPE.equals("U")
					V_PO_NO = V_MAST_PO_NO;
				}
				
				String PO_ROW = jsondata.get("PO_ROW") == null ? "" : jsondata.get("PO_ROW").toString();

				//직입고 입고지 정보
				String E103_GR_SL_NM = jsondata.get("E103_GR_SL_NM") == null ? "" : jsondata.get("E103_GR_SL_NM").toString();
				String E103_ADDRESS = jsondata.get("E103_ADDRESS") == null ? "" : jsondata.get("E103_ADDRESS").toString();
				String E103_USR_NM = jsondata.get("E103_USR_NM") == null ? "" : jsondata.get("E103_USR_NM").toString();
				String E103_USR_EMAIL = jsondata.get("E103_USR_EMAIL") == null ? "" : jsondata.get("E103_USR_EMAIL").toString();
				String E103_USR_TEL = jsondata.get("E103_USR_TEL") == null ? "" : jsondata.get("E103_USR_TEL").toString();
				String E103_REMARK = jsondata.get("E103_REMARK") == null ? "" : jsondata.get("E103_REMARK").toString();
				
				String MAKER = jsondata.get("MAKER") == null ? "" : jsondata.get("MAKER").toString();
				String AGENT = jsondata.get("AGENT") == null ? "" : jsondata.get("AGENT").toString();

				cs2 = conn.prepareCall("call USP_003_M_PO_E103_INFO(?,?,?,?,?,?,?,?,?,?,?)");
				cs2.setString(1, V_COMP_ID);//V_COMP_ID
				cs2.setString(2, V_TYPE);//V_TYPE
				cs2.setString(3, V_MAST_PO_NO);//V_MAST_PO_NO
				cs2.setString(4, V_S_BP_CD);//V_S_BP_CD
				cs2.setString(5, E103_GR_SL_NM);//V_GR_SL_NM
				cs2.setString(6, E103_ADDRESS);//V_ADDRESS
				cs2.setString(7, E103_USR_NM);//V_USR_NM
				cs2.setString(8, E103_USR_EMAIL);//V_EMAIL
				cs2.setString(9, E103_USR_TEL);//V_TEL
				cs2.setString(10, V_USR_ID);//V_USR_ID
				cs2.setString(11, E103_REMARK);//
				cs2.executeQuery();

				if (!V_DLVY_HOPE_DT1.equals("")) {
					PO_ROW = jsondata.get("PO_ROW") == null ? "" : jsondata.get("PO_ROW").toString();

					/*등록할 때*/
					if (V_TYPE.equals("I")) {
						V_PO_SEQ = "1";
// 						PO_ROW = "0";

						cs = conn.prepareCall("call USP_003_M_PO_TOT_HDR(?,?,?,?,?,?,?,?)");
						cs.setString(1, V_COMP_ID);//V_COMP_ID
						cs.setString(2, V_TYPE);//V_TYPE
						cs.setString(3, V_MAST_PO_NO);//V_MAST_PO_NO
						cs.setString(4, V_PO_NO);//V_PO_NO
						cs.setString(5, V_PO_SEQ);//V_PO_NO
						cs.setString(6, "");//V_DLVY_HOPE_DT
						cs.setString(7, V_USR_ID);//V_USR_ID
						cs.registerOutParameter(8, com.tmax.tibero.TbTypes.CURSOR);
						cs.executeQuery();

						rs = (ResultSet) cs.getObject(8);

						while (rs.next()) {
							V_PO_NO = rs.getString("V_PO_NO");
						}
					} else if (V_TYPE.equals("U")) {
						V_PO_NO = V_MAST_PO_NO + "-1";
					}

					V_PO_QTY = jsondata.get("PO_QTY1") == null ? "" : jsondata.get("PO_QTY1").toString();
					V_PO_AMT = jsondata.get("PO_AMT1") == null ? "" : jsondata.get("PO_AMT1").toString();
					V_PO_REMARK = jsondata.get("PO_REMARK1") == null ? "" : jsondata.get("PO_REMARK1").toString();
					V_TRANS_TYPE = jsondata.get("TRANS_TYPE1") == null ? "" : jsondata.get("TRANS_TYPE1").toString();

					/*발주수량이 0이면 삭제*/
					if (V_TYPE.equals("U") && V_PO_QTY.equals("0")) {
						V_TYPE = "DD";
					}

					cs2 = conn.prepareCall("call USP_003_M_PO_TOT_DTL4(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)");
					cs2.setString(1, V_COMP_ID);//V_COMP_ID
					cs2.setString(2, V_TYPE);//V_TYPE
					cs2.setString(3, V_MAST_PO_NO);//V_MAST_PO_NO
					cs2.setString(4, V_PO_NO);//V_PO_NO
					cs2.setString(5, V_PO_SEQ);//V_PO_SEQ
					cs2.setString(6, V_ITEM_CD);//V_ITEM_CD
					cs2.setString(7, V_PO_QTY);//V_PO_QTY
					cs2.setString(8, V_PO_PRC);//V_PO_PRC
					cs2.setString(9, V_PO_AMT);//V_PO_AMT
					cs2.setString(10, V_PO_LOC_AMT);//V_PO_LOC_AMT
					cs2.setString(11, V_VAT_TYPE);//V_VAT_TYPE
					cs2.setString(12, V_DLVY_HOPE_DT1);//V_DLVY_HOPE_DT
					cs2.setString(13, V_HOPE_SL_CD);//V_HOPE_SL_CD
					cs2.setString(14, "10");//V_OVER_TOL
					cs2.setString(15, "10");//V_UNDER_TOL
					cs2.setString(16, V_M_BP_CD);//V_M_BP_CD
					cs2.setString(17, V_USR_ID);//V_USR_ID
					cs2.registerOutParameter(18, com.tmax.tibero.TbTypes.CURSOR);
					cs2.setString(19, V_GR_SL_CD);//V_USR_ID
					cs2.setString(20, V_PO_REMARK);//V_USR_ID
					cs2.setString(21, SUPP_REMARK);//SUPP_REMARK
					cs2.setString(22, PO_ROW);//PO_ROW
					cs2.setString(23, MAKER);//MAKER
					cs2.setString(24, AGENT);//AGENT
					cs2.setString(25, V_TRANS_TYPE);//
					cs2.executeQuery();

				}

				if (!V_DLVY_HOPE_DT2.equals("")) {
					PO_ROW = jsondata.get("PO_ROW") == null ? "" : jsondata.get("PO_ROW").toString();

					/*등록할 때*/
					if (V_TYPE.equals("I")) {
						V_PO_SEQ = "2";
// 						PO_ROW = "0";

						cs = conn.prepareCall("call USP_003_M_PO_TOT_HDR(?,?,?,?,?,?,?,?)");
						cs.setString(1, V_COMP_ID);//V_COMP_ID
						cs.setString(2, V_TYPE);//V_TYPE
						cs.setString(3, V_MAST_PO_NO);//V_MAST_PO_NO
						cs.setString(4, V_PO_NO);//V_PO_NO
						cs.setString(5, V_PO_SEQ);//V_PO_NO
						cs.setString(6, "");//V_DLVY_HOPE_DT
						cs.setString(7, V_USR_ID);//V_USR_ID
						cs.registerOutParameter(8, com.tmax.tibero.TbTypes.CURSOR);
						cs.executeQuery();

						rs = (ResultSet) cs.getObject(8);

						while (rs.next()) {
							V_PO_NO = rs.getString("V_PO_NO");
						}

					} else if (V_TYPE.equals("U")) {
						V_PO_NO = V_MAST_PO_NO + "-2";
					}

					V_PO_QTY = jsondata.get("PO_QTY2") == null ? "" : jsondata.get("PO_QTY2").toString();
					V_PO_AMT = jsondata.get("PO_AMT2") == null ? "" : jsondata.get("PO_AMT2").toString();
					V_PO_REMARK = jsondata.get("PO_REMARK2") == null ? "" : jsondata.get("PO_REMARK2").toString();
					V_TRANS_TYPE = jsondata.get("TRANS_TYPE2") == null ? "" : jsondata.get("TRANS_TYPE2").toString();

					/*발주수량이 0이면 삭제*/
					if (V_TYPE.equals("U") && V_PO_QTY.equals("0")) {
						V_TYPE = "DD";
					}

					cs2 = conn.prepareCall("call USP_003_M_PO_TOT_DTL4(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)");
					cs2.setString(1, V_COMP_ID);//V_COMP_ID
					cs2.setString(2, V_TYPE);//V_TYPE
					cs2.setString(3, V_MAST_PO_NO);//V_MAST_PO_NO
					cs2.setString(4, V_PO_NO);//V_PO_NO
					cs2.setString(5, V_PO_SEQ);//V_PO_SEQ
					cs2.setString(6, V_ITEM_CD);//V_ITEM_CD
					cs2.setString(7, V_PO_QTY);//V_PO_QTY
					cs2.setString(8, V_PO_PRC);//V_PO_PRC
					cs2.setString(9, V_PO_AMT);//V_PO_AMT
					cs2.setString(10, V_PO_LOC_AMT);//V_PO_LOC_AMT
					cs2.setString(11, V_VAT_TYPE);//V_VAT_TYPE
					cs2.setString(12, V_DLVY_HOPE_DT2);//V_DLVY_HOPE_DT
					cs2.setString(13, V_HOPE_SL_CD);//V_HOPE_SL_CD
					cs2.setString(14, "10");//V_OVER_TOL
					cs2.setString(15, "10");//V_UNDER_TOL
					cs2.setString(16, V_M_BP_CD);//V_M_BP_CD
					cs2.setString(17, V_USR_ID);//V_USR_ID
					cs2.registerOutParameter(18, com.tmax.tibero.TbTypes.CURSOR);
					cs2.setString(19, V_GR_SL_CD);//V_USR_ID
					cs2.setString(20, V_PO_REMARK);//V_USR_ID
					cs2.setString(21, SUPP_REMARK);//SUPP_REMARK
					cs2.setString(22, PO_ROW);//PO_ROW
					cs2.setString(23, MAKER);//MAKER
					cs2.setString(24, AGENT);//AGENT
					cs2.setString(25, V_TRANS_TYPE);//
					cs2.executeQuery();

				}
				if (!V_DLVY_HOPE_DT3.equals("")) {
					PO_ROW = jsondata.get("PO_ROW") == null ? "" : jsondata.get("PO_ROW").toString();
					/*등록할 때*/
					if (V_TYPE.equals("I")) {
						V_PO_SEQ = "3";
// 						PO_ROW = "0";

						cs = conn.prepareCall("call USP_003_M_PO_TOT_HDR(?,?,?,?,?,?,?,?)");
						cs.setString(1, V_COMP_ID);//V_COMP_ID
						cs.setString(2, V_TYPE);//V_TYPE
						cs.setString(3, V_MAST_PO_NO);//V_MAST_PO_NO
						cs.setString(4, V_PO_NO);//V_PO_NO
						cs.setString(5, V_PO_SEQ);//V_PO_NO
						cs.setString(6, "");//V_DLVY_HOPE_DT
						cs.setString(7, V_USR_ID);//V_USR_ID
						cs.registerOutParameter(8, com.tmax.tibero.TbTypes.CURSOR);
						cs.executeQuery();

						rs = (ResultSet) cs.getObject(8);

						while (rs.next()) {
							V_PO_NO = rs.getString("V_PO_NO");
						}
					} else if (V_TYPE.equals("U")) {
						V_PO_NO = V_MAST_PO_NO + "-3";
					}

					V_PO_QTY = jsondata.get("PO_QTY3") == null ? "" : jsondata.get("PO_QTY3").toString();
					V_PO_AMT = jsondata.get("PO_AMT3") == null ? "" : jsondata.get("PO_AMT3").toString();
					V_PO_REMARK = jsondata.get("PO_REMARK3") == null ? "" : jsondata.get("PO_REMARK3").toString();
					V_TRANS_TYPE = jsondata.get("TRANS_TYPE3") == null ? "" : jsondata.get("TRANS_TYPE3").toString();

					/*발주수량이 0이면 삭제*/
					if (V_TYPE.equals("U") && V_PO_QTY.equals("0")) {
						V_TYPE = "DD";
					}

					cs2 = conn.prepareCall("call USP_003_M_PO_TOT_DTL4(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)");
					cs2.setString(1, V_COMP_ID);//V_COMP_ID
					cs2.setString(2, V_TYPE);//V_TYPE
					cs2.setString(3, V_MAST_PO_NO);//V_MAST_PO_NO
					cs2.setString(4, V_PO_NO);//V_PO_NO
					cs2.setString(5, V_PO_SEQ);//V_PO_SEQ
					cs2.setString(6, V_ITEM_CD);//V_ITEM_CD
					cs2.setString(7, V_PO_QTY);//V_PO_QTY
					cs2.setString(8, V_PO_PRC);//V_PO_PRC
					cs2.setString(9, V_PO_AMT);//V_PO_AMT
					cs2.setString(10, V_PO_LOC_AMT);//V_PO_LOC_AMT
					cs2.setString(11, V_VAT_TYPE);//V_VAT_TYPE
					cs2.setString(12, V_DLVY_HOPE_DT3);//V_DLVY_HOPE_DT
					cs2.setString(13, V_HOPE_SL_CD);//V_HOPE_SL_CD
					cs2.setString(14, "10");//V_OVER_TOL
					cs2.setString(15, "10");//V_UNDER_TOL
					cs2.setString(16, V_M_BP_CD);//V_M_BP_CD
					cs2.setString(17, V_USR_ID);//V_USR_ID
					cs2.registerOutParameter(18, com.tmax.tibero.TbTypes.CURSOR);
					cs2.setString(19, V_GR_SL_CD);//V_USR_ID
					cs2.setString(20, V_PO_REMARK);//V_USR_ID
					cs2.setString(21, SUPP_REMARK);//SUPP_REMARK
					cs2.setString(22, PO_ROW);//PO_ROW
					cs2.setString(23, MAKER);//MAKER
					cs2.setString(24, AGENT);//AGENT
					cs2.setString(25, V_TRANS_TYPE);//
					cs2.executeQuery();

				}
				if (!V_DLVY_HOPE_DT4.equals("")) {
					PO_ROW = jsondata.get("PO_ROW") == null ? "" : jsondata.get("PO_ROW").toString();

					/*등록할 때*/
					if (V_TYPE.equals("I")) {
						V_PO_SEQ = "4";
// 						PO_ROW = "0";

						cs = conn.prepareCall("call USP_003_M_PO_TOT_HDR(?,?,?,?,?,?,?,?)");
						cs.setString(1, V_COMP_ID);//V_COMP_ID
						cs.setString(2, V_TYPE);//V_TYPE
						cs.setString(3, V_MAST_PO_NO);//V_MAST_PO_NO
						cs.setString(4, V_PO_NO);//V_PO_NO
						cs.setString(5, V_PO_SEQ);//V_PO_NO
						cs.setString(6, "");//V_DLVY_HOPE_DT
						cs.setString(7, V_USR_ID);//V_USR_ID
						cs.registerOutParameter(8, com.tmax.tibero.TbTypes.CURSOR);
						cs.executeQuery();

						rs = (ResultSet) cs.getObject(8);

						while (rs.next()) {
							V_PO_NO = rs.getString("V_PO_NO");
						}
					} else if (V_TYPE.equals("U")) {
						V_PO_NO = V_MAST_PO_NO + "-4";
					}

					V_PO_QTY = jsondata.get("PO_QTY4") == null ? "" : jsondata.get("PO_QTY4").toString();
					V_PO_AMT = jsondata.get("PO_AMT4") == null ? "" : jsondata.get("PO_AMT4").toString();
					V_PO_REMARK = jsondata.get("PO_REMARK4") == null ? "" : jsondata.get("PO_REMARK4").toString();
					V_TRANS_TYPE = jsondata.get("TRANS_TYPE4") == null ? "" : jsondata.get("TRANS_TYPE4").toString();

					/*발주수량이 0이면 삭제*/
					if (V_TYPE.equals("U") && V_PO_QTY.equals("0")) {
						V_TYPE = "DD";
					}

					cs2 = conn.prepareCall("call USP_003_M_PO_TOT_DTL4(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)");
					cs2.setString(1, V_COMP_ID);//V_COMP_ID
					cs2.setString(2, V_TYPE);//V_TYPE
					cs2.setString(3, V_MAST_PO_NO);//V_MAST_PO_NO
					cs2.setString(4, V_PO_NO);//V_PO_NO
					cs2.setString(5, V_PO_SEQ);//V_PO_SEQ
					cs2.setString(6, V_ITEM_CD);//V_ITEM_CD
					cs2.setString(7, V_PO_QTY);//V_PO_QTY
					cs2.setString(8, V_PO_PRC);//V_PO_PRC
					cs2.setString(9, V_PO_AMT);//V_PO_AMT
					cs2.setString(10, V_PO_LOC_AMT);//V_PO_LOC_AMT
					cs2.setString(11, V_VAT_TYPE);//V_VAT_TYPE
					cs2.setString(12, V_DLVY_HOPE_DT4);//V_DLVY_HOPE_DT
					cs2.setString(13, V_HOPE_SL_CD);//V_HOPE_SL_CD
					cs2.setString(14, "10");//V_OVER_TOL
					cs2.setString(15, "10");//V_UNDER_TOL
					cs2.setString(16, V_M_BP_CD);//V_M_BP_CD
					cs2.setString(17, V_USR_ID);//V_USR_ID
					cs2.registerOutParameter(18, com.tmax.tibero.TbTypes.CURSOR);
					cs2.setString(19, V_GR_SL_CD);//V_USR_ID
					cs2.setString(20, V_PO_REMARK);//V_USR_ID
					cs2.setString(21, SUPP_REMARK);//SUPP_REMARK
					cs2.setString(22, PO_ROW);//PO_ROW
					cs2.setString(23, MAKER);//MAKER
					cs2.setString(24, AGENT);//AGENT
					cs2.setString(25, V_TRANS_TYPE);//
					cs2.executeQuery();

				}
				if (!V_DLVY_HOPE_DT5.equals("")) {
					PO_ROW = jsondata.get("PO_ROW") == null ? "" : jsondata.get("PO_ROW").toString();
					
					/*등록할 때*/
					if (V_TYPE.equals("I")) {

						V_PO_SEQ = "5";
// 						PO_ROW = "0";
								

						cs = conn.prepareCall("call USP_003_M_PO_TOT_HDR(?,?,?,?,?,?,?,?)");
						cs.setString(1, V_COMP_ID);//V_COMP_ID
						cs.setString(2, V_TYPE);//V_TYPE
						cs.setString(3, V_MAST_PO_NO);//V_MAST_PO_NO
						cs.setString(4, V_PO_NO);//V_PO_NO
						cs.setString(5, V_PO_SEQ);//V_PO_NO
						cs.setString(6, "");//V_DLVY_HOPE_DT
						cs.setString(7, V_USR_ID);//V_USR_ID
						cs.registerOutParameter(8, com.tmax.tibero.TbTypes.CURSOR);
						cs.executeQuery();

						rs = (ResultSet) cs.getObject(8);

						while (rs.next()) {
							V_PO_NO = rs.getString("V_PO_NO");
						}
					} else if (V_TYPE.equals("U")) {
						V_PO_NO = V_MAST_PO_NO + "-5";
					}

					V_PO_QTY = jsondata.get("PO_QTY5") == null ? "" : jsondata.get("PO_QTY5").toString();
					V_PO_AMT = jsondata.get("PO_AMT5") == null ? "" : jsondata.get("PO_AMT5").toString();
					V_PO_REMARK = jsondata.get("PO_REMARK5") == null ? "" : jsondata.get("PO_REMARK5").toString();
					V_TRANS_TYPE = jsondata.get("TRANS_TYPE5") == null ? "" : jsondata.get("TRANS_TYPE5").toString();

					/*발주수량이 0이면 삭제*/
					if (V_TYPE.equals("U") && V_PO_QTY.equals("0")) {
						V_TYPE = "DD";
					}

					cs2 = conn.prepareCall("call USP_003_M_PO_TOT_DTL4(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)");
					cs2.setString(1, V_COMP_ID);//V_COMP_ID
					cs2.setString(2, V_TYPE);//V_TYPE
					cs2.setString(3, V_MAST_PO_NO);//V_MAST_PO_NO
					cs2.setString(4, V_PO_NO);//V_PO_NO
					cs2.setString(5, V_PO_SEQ);//V_PO_SEQ
					cs2.setString(6, V_ITEM_CD);//V_ITEM_CD
					cs2.setString(7, V_PO_QTY);//V_PO_QTY
					cs2.setString(8, V_PO_PRC);//V_PO_PRC
					cs2.setString(9, V_PO_AMT);//V_PO_AMT
					cs2.setString(10, V_PO_LOC_AMT);//V_PO_LOC_AMT
					cs2.setString(11, V_VAT_TYPE);//V_VAT_TYPE
					cs2.setString(12, V_DLVY_HOPE_DT5);//V_DLVY_HOPE_DT
					cs2.setString(13, V_HOPE_SL_CD);//V_HOPE_SL_CD
					cs2.setString(14, "10");//V_OVER_TOL
					cs2.setString(15, "10");//V_UNDER_TOL
					cs2.setString(16, V_M_BP_CD);//V_M_BP_CD
					cs2.setString(17, V_USR_ID);//V_USR_ID
					cs2.registerOutParameter(18, com.tmax.tibero.TbTypes.CURSOR);
					cs2.setString(19, V_GR_SL_CD);//V_USR_ID
					cs2.setString(20, V_PO_REMARK);//V_USR_ID
					cs2.setString(21, SUPP_REMARK);//SUPP_REMARK
					cs2.setString(22, PO_ROW);//PO_ROW
					cs2.setString(23, MAKER);//MAKER
					cs2.setString(24, AGENT);//AGENT
					cs2.setString(25, V_TRANS_TYPE);//
					cs2.executeQuery();

				}

				response.setContentType("text/plain; charset=UTF-8");
				PrintWriter pw = response.getWriter();
				pw.print("success");
				pw.flush();
				pw.close();
			}
		} else if (V_TYPE.equals("DEL_CHECK")) {

			cs = conn.prepareCall("call USP_003_M_PO_DEL_CHECK(?,?,?)");
			cs.registerOutParameter(1, com.tmax.tibero.TbTypes.CURSOR);
			cs.setString(2, V_COMP_ID);//V_COMP_ID
			cs.setString(3, V_MAST_PO_NO);//V_MAST_PO_NO
			cs.executeQuery();

			rs = (ResultSet) cs.getObject(1);

			while (rs.next()) {
				subObject = new JSONObject();
				subObject.put("DELETE_FLAG", rs.getString("DELETE_FLAG"));

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

		} else if (V_TYPE.equals("REF_H")) {
			String REF_PO_DT_FR = request.getParameter("REF_PO_DT_FR") == null ? "" : request.getParameter("REF_PO_DT_FR").toUpperCase();
			String REF_PO_DT_TO = request.getParameter("REF_PO_DT_TO") == null ? "" : request.getParameter("REF_PO_DT_TO").toUpperCase();
			String REF_M_BP_NM = request.getParameter("REF_M_BP_NM") == null ? "" : request.getParameter("REF_M_BP_NM").toUpperCase();
			String REF_PO_USR_NM = request.getParameter("REF_PO_USR_NM") == null ? "" : request.getParameter("REF_PO_USR_NM").toUpperCase();

			if (REF_PO_DT_FR.length() > 10) {
				REF_PO_DT_FR = REF_PO_DT_FR.substring(0, 10);
			}
			if (REF_PO_DT_TO.length() > 10) {
				REF_PO_DT_TO = REF_PO_DT_TO.substring(0, 10);
			}

			cs = conn.prepareCall("call USP_003_M_PO_TOT_REF(?,?,?,?,?,?,?,?)");
			cs.registerOutParameter(1, com.tmax.tibero.TbTypes.CURSOR);
			cs.setString(2, V_TYPE);//V_TYPE
			cs.setString(3, V_COMP_ID);//V_COMP_ID
			cs.setString(4, REF_PO_DT_FR);//V_PO_DT_FR
			cs.setString(5, REF_PO_DT_TO);//V_PO_DT_TO
			cs.setString(6, "");//V_PO_NO
			cs.setString(7, REF_PO_USR_NM);//
			cs.setString(8, REF_M_BP_NM);//V_M_BP_NM
			cs.executeQuery();

			rs = (ResultSet) cs.getObject(1);

			while (rs.next()) {
				subObject = new JSONObject();
				subObject.put("MAST_PO_NO", rs.getString("MAST_PO_NO"));
				subObject.put("PO_USR_NM", rs.getString("PO_USR_NM"));
				subObject.put("M_BP_CD", rs.getString("M_BP_CD"));
				subObject.put("M_BP_NM", rs.getString("M_BP_NM"));
				subObject.put("PO_TYPE_CD", rs.getString("PO_TYPE_CD"));
				subObject.put("PO_TYPE_NM", rs.getString("PO_TYPE_NM"));
				subObject.put("PO_DT", rs.getString("PO_DT"));
				subObject.put("TOT_PO_AMT", rs.getString("TOT_PO_AMT"));
				subObject.put("CUR", rs.getString("CUR"));
				subObject.put("IN_TERMS_CD", rs.getString("IN_TERMS_CD"));
				subObject.put("IN_TERMS_NM", rs.getString("IN_TERMS_NM"));
				subObject.put("PAY_METH_CD", rs.getString("PAY_METH_CD"));
				subObject.put("PAY_METH_NM", rs.getString("PAY_METH_NM"));
				subObject.put("VAT_TYPE_CD", rs.getString("VAT_TYPE_CD"));
				subObject.put("VAT_TYPE_NM", rs.getString("VAT_TYPE_NM"));
				subObject.put("DLV_TYPE_CD", rs.getString("DLV_TYPE_CD"));
				subObject.put("GR_TYPE_CD", rs.getString("GR_TYPE_CD"));
				subObject.put("S_BP_CD", rs.getString("S_BP_CD"));
				subObject.put("S_BP_NM", rs.getString("S_BP_NM"));
				subObject.put("REMARK", rs.getString("REMARK"));
				subObject.put("SYS_TYPE_CD", rs.getString("SYS_TYPE_CD"));
				subObject.put("TRANS_TYPE_CD", rs.getString("TRANS_TYPE_CD"));
				subObject.put("DISCHGE_PORT_CD", rs.getString("DISCHGE_PORT_CD"));

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
		} else if (V_TYPE.equals("REF_D")) {
			//V_MAST_PO_NO
			cs = conn.prepareCall("call USP_003_M_PO_TOT_REF(?,?,?,?,?,?,?,?)");
			cs.registerOutParameter(1, com.tmax.tibero.TbTypes.CURSOR);
			cs.setString(2, V_TYPE);//V_TYPE
			cs.setString(3, V_COMP_ID);//V_COMP_ID
			cs.setString(4, "");//V_PO_DT_FR
			cs.setString(5, "");//V_PO_DT_TO
			cs.setString(6, V_MAST_PO_NO);//V_PO_NO
			cs.setString(7, "");//V_M_BP_CD
			cs.setString(8, "");//V_M_BP_NM
			cs.executeQuery();

			rs = (ResultSet) cs.getObject(1);

			while (rs.next()) {
				subObject = new JSONObject();
				subObject.put("ITEM_CD", rs.getString("ITEM_CD"));
				subObject.put("ITEM_NM", rs.getString("ITEM_NM"));
				subObject.put("SPEC", rs.getString("SPEC"));
				subObject.put("MAKER", rs.getString("MAKER"));
				subObject.put("AGENT", rs.getString("AGENT"));
				subObject.put("UNIT", rs.getString("UNIT"));
				subObject.put("TOT_PO_QTY", rs.getString("TOT_PO_QTY"));
				subObject.put("PO_PRC", rs.getString("PO_PRC"));
				subObject.put("TOT_PO_AMT", rs.getString("TOT_PO_AMT"));
				subObject.put("HOPE_SL_CD", rs.getString("HOPE_SL_CD"));
				subObject.put("GR_SL_CD", rs.getString("GR_SL_CD"));
				subObject.put("SUPP_REMARK", rs.getString("SUPP_REMARK"));
				subObject.put("DLVY_HOPE_DT1", rs.getString("DLVY_HOPE_DT1"));
				subObject.put("PO_QTY1", rs.getString("PO_QTY1"));
				subObject.put("PO_AMT1", rs.getString("PO_AMT1"));
				subObject.put("PO_REMARK1", rs.getString("PO_REMARK1"));

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

		}
		else if (V_TYPE.equals("REMARK_CHG")) {
			cs = conn.prepareCall("call USP_003_M_PO_TOT_CHG_REMARK(?,?)");
			cs.setString(1, V_MAST_PO_NO);//V_MAST_PO_NO
			cs.setString(2, V_REMARK);//V_REMARK
			cs.executeQuery();
			
		}

	} catch (Exception e) {
		System.out.println("======PO_ERROR=====");
		System.out.println("PO_NO: " + V_PO_NO);
		System.out.println("PO_SEQ: " + V_PO_SEQ);

		response.setContentType("text/plain; charset=UTF-8");
		PrintWriter pw = response.getWriter();
		pw.print(e.toString());
		pw.flush();
		pw.close();

		e.printStackTrace();
	} finally {
		if (cs != null)
			try {
				cs.close();
			} catch (SQLException ex) {
			}
		if (cs2 != null)
			try {
				cs2.close();
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
%>


