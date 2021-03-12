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
<%@page import="java.text.DateFormat"%>
<%@page import="java.text.SimpleDateFormat"%>
<%@page import="java.util.Calendar"%>
<%@page import="java.util.Date"%>
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
		String V_PO_DT_FR = request.getParameter("V_PO_DT_FR") == null ? "" : request.getParameter("V_PO_DT_FR").substring(0, 10);
		String V_PO_DT_TO = request.getParameter("V_PO_DT_TO") == null ? "" : request.getParameter("V_PO_DT_TO").substring(0, 10);
		String V_BP_NM = request.getParameter("V_BP_NM") == null ? "" : request.getParameter("V_BP_NM").toUpperCase();
		String V_PO_NO = request.getParameter("V_PO_NO") == null ? "" : request.getParameter("V_PO_NO").toUpperCase();
		String V_PO_SEQ = request.getParameter("V_PO_SEQ") == null ? "" : request.getParameter("V_PO_SEQ").toUpperCase();
		String V_LC_DOC_NO = request.getParameter("V_LC_DOC_NO") == null ? "" : request.getParameter("V_LC_DOC_NO").toUpperCase();
		String V_BL_DOC_NO = request.getParameter("V_BL_DOC_NO") == null ? "" : request.getParameter("V_BL_DOC_NO").toUpperCase();
		String V_ITEM_CD = request.getParameter("V_ITEM_CD") == null ? "" : request.getParameter("V_ITEM_CD").toUpperCase();
		String V_ITEM_NM = request.getParameter("V_ITEM_NM") == null ? "" : request.getParameter("V_ITEM_NM").toUpperCase();
		String V_AFFILIATE = request.getParameter("V_AFFILIATE") == null ? "" : request.getParameter("V_AFFILIATE").toUpperCase();
		String V_MAKER = request.getParameter("V_MAKER") == null ? "" : request.getParameter("V_MAKER").toUpperCase();
		String V_PO_USR_NM = request.getParameter("V_PO_USR_NM") == null ? "" : request.getParameter("V_PO_USR_NM").toUpperCase();
		String V_USR_ID = request.getParameter("V_USR_ID") == null ? "" : request.getParameter("V_USR_ID").toUpperCase();
		String V_GR_YN = request.getParameter("V_GR_YN") == null ? "" : request.getParameter("V_GR_YN").toUpperCase();
		String V_SEND_YN = request.getParameter("V_SEND_YN") == null ? "" : request.getParameter("V_SEND_YN").toUpperCase();
		String V_INBOARD_YN = request.getParameter("V_INBOARD_YN") == null ? "" : request.getParameter("V_INBOARD_YN").toUpperCase();

		String V_PO_TYPE = request.getParameter("V_PO_TYPE") == null ? "" : request.getParameter("V_PO_TYPE").toUpperCase();
		if (V_PO_TYPE.equals("T")) {
			V_PO_TYPE = "";
		}

		if (V_TYPE.equals("S")) {
			cs = conn.prepareCall("call USP_003_M_IMP_TOT_HSPF(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)");
			cs.setString(1, V_COMP_ID);//V_COMP_ID
			cs.setString(2, V_TYPE);//V_TYPE
			cs.setString(3, V_PO_DT_FR);//V_PO_DT_FR
			cs.setString(4, V_PO_DT_TO);//V_PO_DT_TO
			cs.setString(5, V_BP_NM);//V_BP_CD
			cs.setString(6, V_LC_DOC_NO);//V_LC_DOC_NO
			cs.setString(7, V_BL_DOC_NO);//V_BL_DOC_NO
			cs.setString(8, "");//V_BAS_NO
			cs.setString(9, "");//V_BAS_SEQ
			cs.setString(10, "");//V_BAS_TYPE
			cs.setString(11, "");//V_IMP_CD
			cs.setString(12, "");//V_IMP_VAL
			cs.setString(13, "");//V_REMARK
			cs.setString(14, V_USR_ID);//V_USR_ID
			cs.registerOutParameter(15, com.tmax.tibero.TbTypes.CURSOR);
			cs.setString(16, V_PO_NO);//V_PO_NO
			cs.setString(17, V_ITEM_CD);//V_ITEM_CD
			cs.setString(18, V_ITEM_NM);//V_ITEM_NM
			cs.setString(19, V_AFFILIATE);//V_AFFILIATE
			cs.setString(20, V_MAKER);//V_MAKER
			cs.setString(21, V_PO_USR_NM);//V_PO_USR_NM
			cs.setString(22, V_GR_YN);//V_GR_YN
			cs.setString(23, V_PO_TYPE);//V_PO_TYPE
			cs.setString(24, "");//V_DTL_SEQ
			cs.setString(25, "");//V_QTY
			cs.setString(26, "");//V_ETA
			cs.setString(27, "");//V_ETD
			cs.setString(28, V_SEND_YN);//V_SEND_YN
			cs.setString(29, V_INBOARD_YN);//V_INBOARD_YN
			cs.executeQuery();

			rs = (ResultSet) cs.getObject(15);
			while (rs.next()) {
				subObject = new JSONObject();
				subObject.put("MAKER", rs.getString("MAKER"));
				subObject.put("AGENT", rs.getString("AGENT"));
				subObject.put("OFFER_NO", rs.getString("OFFER_NO"));
				subObject.put("PO_NO", rs.getString("PO_NO"));
				subObject.put("PO_SEQ", rs.getString("PO_SEQ"));
				subObject.put("ITEM_CD", rs.getString("ITEM_CD"));
				subObject.put("ITEM_NM", rs.getString("ITEM_NM"));
				subObject.put("ITEM_GROUP_NM", rs.getString("ITEM_GROUP_NM"));
				subObject.put("IN_TERMS", rs.getString("IN_TERMS"));
				subObject.put("CUR", rs.getString("CUR"));
				subObject.put("QTY", rs.getString("QTY"));
				subObject.put("DOC_AMT", rs.getString("DOC_AMT"));
				subObject.put("PRC", rs.getString("PRC"));
				subObject.put("RTA", rs.getString("RTA"));
				subObject.put("LC_DOC_NO", rs.getString("LC_DOC_NO"));
				subObject.put("BL_DOC_NO", rs.getString("BL_DOC_NO"));
				// 				subObject.put("LC_OPEN_DT", rs.getString("LC_OPEN_DT"));
				subObject.put("ETD", rs.getString("ETD"));
				subObject.put("ETA", rs.getString("ETA"));
				subObject.put("LOADING_DT", rs.getString("LOADING_DT"));
				subObject.put("ORDER_SEQ", rs.getString("ORDER_SEQ"));
				subObject.put("DOC_YN", rs.getString("DOC_YN"));
				subObject.put("O_BL_YN", rs.getString("O_BL_YN"));
				subObject.put("DLVY_HOPE_DT", rs.getString("DLVY_HOPE_DT"));
				subObject.put("FR_TIME", rs.getString("FR_TIME"));
				subObject.put("FR_DT", rs.getString("FR_DT"));
				subObject.put("OVER_DT", rs.getString("OVER_DT"));
				subObject.put("IMPORT_REPORT_ADD_TAX_DT", rs.getString("IMPORT_REPORT_ADD_TAX_DT"));
				subObject.put("ID_NO", rs.getString("ID_NO"));
				subObject.put("ID_DT", rs.getString("ID_DT"));
				subObject.put("GR_REQ_DT", rs.getString("GR_REQ_DT"));
				subObject.put("MVMT_DT", rs.getString("MVMT_DT"));
				subObject.put("SL_CD", rs.getString("SL_CD"));
				subObject.put("SL_NM", rs.getString("SL_NM"));
				subObject.put("BP_NM", rs.getString("BP_NM"));
				subObject.put("FOR_BP_CD", rs.getString("FOR_BP_CD"));
				// 				subObject.put("S_BP_CD", rs.getString("FOR_BP_CD"));
				// 				subObject.put("S_BP_NM", rs.getString("FOR_BP_NM"));
				subObject.put("PAY_METH", rs.getString("PAY_METH"));
				subObject.put("PAY_METH_NM", rs.getString("PAY_METH_NM"));
				subObject.put("IV_DT", rs.getString("IV_DT"));
				subObject.put("SEND_DT", rs.getString("SEND_DT"));
				subObject.put("REMARK", rs.getString("REMARK"));
				subObject.put("LC_NO", rs.getString("LC_NO"));
				subObject.put("LC_SEQ", rs.getString("LC_SEQ"));
				subObject.put("BL_NO", rs.getString("BL_NO"));
				subObject.put("BL_SEQ", rs.getString("BL_SEQ"));
				subObject.put("CC_NO", rs.getString("CC_NO"));
				subObject.put("CC_SEQ", rs.getString("CC_SEQ"));
				subObject.put("MVMT_NO", rs.getString("MVMT_NO"));
				subObject.put("INBOARD_DT", rs.getString("INBOARD_DT"));
				subObject.put("NO_OV", rs.getString("NO_OV"));
				subObject.put("NO_OV_DT", rs.getString("NO_OV_DT"));
				subObject.put("BL_TYPE", rs.getString("BL_TYPE"));
				subObject.put("PO_USR_NM", rs.getString("PO_USR_NM"));
				subObject.put("AFFILIATE", rs.getString("AFFILIATE"));
				subObject.put("BL_REMAIN_QTY", rs.getString("BL_REMAIN_QTY"));
				subObject.put("DTL_SEQ", rs.getString("DTL_SEQ"));
				subObject.put("CLS_YN", rs.getString("CLS_YN"));

				String PAY_METH = rs.getString("PAY_METH");
				String DUE_DT = rs.getString("DUE_DT");
				String ETA = rs.getString("ETA");
				String IV_DT = rs.getString("IV_DT");
				String BL_DT = rs.getString("LOADING_DT");

				if (DUE_DT == null && PAY_METH != null) {
					DUE_DT = calcDueDate(PAY_METH, ETA, IV_DT, BL_DT);
					subObject.put("DUE_DT", DUE_DT);
				} else {
					subObject.put("DUE_DT", rs.getString("DUE_DT"));
				}
				jsonArray.add(subObject);
			}

			jsonObject.put("success", true);
			jsonObject.put("resultList", jsonArray);

			//System.out.println(jsonObject);

			response.setContentType("text/plain; charset=UTF-8");
			PrintWriter pw = response.getWriter();
			pw.print(jsonObject);
			pw.flush();
			pw.close();

		} else if (V_TYPE.equals("WS")) {

			cs = conn.prepareCall("call USP_003_M_IMP_TOT_HSPF(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)");
			cs.setString(1, V_COMP_ID);//V_COMP_ID
			cs.setString(2, V_TYPE);//V_TYPE
			cs.setString(3, "");//V_PO_DT_FR
			cs.setString(4, "");//V_PO_DT_TO
			cs.setString(5, "");//V_BP_CD
			cs.setString(6, "");//V_LC_DOC_NO
			cs.setString(7, V_BL_DOC_NO);//V_BL_DOC_NO
			cs.setString(8, V_PO_NO);//V_BAS_NO
			cs.setString(9, V_PO_SEQ);//V_BAS_SEQ
			cs.setString(10, "");//V_BAS_TYPE
			cs.setString(11, "");//V_IMP_CD
			cs.setString(12, "");//V_IMP_VAL
			cs.setString(13, "");//V_REMARK
			cs.setString(14, V_USR_ID);//V_USR_ID
			cs.registerOutParameter(15, com.tmax.tibero.TbTypes.CURSOR);
			cs.setString(16, "");//V_PO_NO
			cs.setString(17, "");//V_ITEM_CD
			cs.setString(18, "");//V_ITEM_NM
			cs.setString(19, "");//V_AFFILIATE
			cs.setString(20, "");//V_MAKER
			cs.setString(21, "");//V_PO_USR_NM
			cs.setString(22, "");//V_GR_YN
			cs.setString(23, "");//V_PO_TYPE
			cs.setString(24, "");//V_DTL_SEQ
			cs.setString(25, "");//V_QTY
			cs.setString(26, "");//V_ETA
			cs.setString(27, "");//V_ETD
			cs.setString(28, "");//V_SEND_YN
			cs.setString(29, "");//V_INBOARD_YN
			cs.executeQuery();

			rs = (ResultSet) cs.getObject(15);
			while (rs.next()) {
				subObject = new JSONObject();
				subObject.put("PO_NO", rs.getString("PO_NO"));
				subObject.put("PO_SEQ", rs.getString("PO_SEQ"));
				subObject.put("QTY", rs.getString("QTY"));
				subObject.put("ETD", rs.getString("ETD"));
				subObject.put("ETA", rs.getString("ETA"));
				subObject.put("DTL_SEQ", rs.getString("DTL_SEQ"));
				subObject.put("BL_DOC_NO", rs.getString("BL_DOC_NO"));
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
			request.setCharacterEncoding("utf-8");
			String[] findList = { "#", "+", "&", "%", " " };
			String[] replList = { "%23", "%2B", "%26", "%25", "%20" };

			String V_BAS_TYPE = "";
			String V_BAS_NO = "";
			String V_BAS_SEQ = "";
			String V_IMP_CD = "";
			String V_IMP_VAL = "";
			String V_REMARK = "";

			String data = request.getParameter("data");
			data = StringUtils.replaceEach(data, findList, replList);
			String jsonData = URLDecoder.decode(data, "UTF-8");

			if (jsonData.lastIndexOf("},{") > 0) { //배열인 경우
				JSONArray jsonAr = (JSONArray) JSONValue.parse(jsonData);
				for (int i = 0; i < jsonAr.size(); i++) {
					HashMap hashMap = (HashMap) jsonAr.get(i);

					String PO_NO = hashMap.get("PO_NO") == null ? "" : hashMap.get("PO_NO").toString();
					String PO_SEQ = hashMap.get("PO_SEQ") == null ? "" : hashMap.get("PO_SEQ").toString();
					String BL_NO = hashMap.get("BL_NO") == null ? "" : hashMap.get("BL_NO").toString();
					String BL_SEQ = hashMap.get("BL_SEQ") == null ? "" : hashMap.get("BL_SEQ").toString();
					String CC_NO = hashMap.get("CC_NO") == null ? "" : hashMap.get("CC_NO").toString();
					String CC_SEQ = hashMap.get("CC_SEQ") == null ? "" : hashMap.get("CC_SEQ").toString();
					String MVMT_NO = hashMap.get("MVMT_NO") == null ? "" : hashMap.get("MVMT_NO").toString();
					String OFFER_NO = hashMap.get("OFFER_NO") == null ? "" : hashMap.get("OFFER_NO").toString();

					String BL_DOC_NO = hashMap.get("BL_DOC_NO") == null ? "" : hashMap.get("BL_DOC_NO").toString();
					String DOC_YN = hashMap.get("DOC_YN") == null ? "" : hashMap.get("DOC_YN").toString();
					String O_BL_YN = hashMap.get("O_BL_YN") == null ? "" : hashMap.get("O_BL_YN").toString();
					String FOR_BP_CD = hashMap.get("FOR_BP_CD") == null ? "" : hashMap.get("FOR_BP_CD").toString();
					String REMARK = hashMap.get("REMARK") == null ? "" : hashMap.get("REMARK").toString();

					String ETA = hashMap.get("ETA") == null || hashMap.get("ETA").equals("null") ? "" : hashMap.get("ETA").toString().substring(0, 10);
					String ETD = hashMap.get("ETD") == null || hashMap.get("ETD").equals("null") ? "" : hashMap.get("ETD").toString().substring(0, 10);
					String INBOARD_DT = hashMap.get("INBOARD_DT") == null || hashMap.get("INBOARD_DT").equals("null") ? "" : hashMap.get("INBOARD_DT").toString().substring(0, 10);
					String FR_TIME = hashMap.get("FR_TIME") == null || hashMap.get("FR_TIME").equals("null") ? "" : hashMap.get("FR_TIME").toString();
					String GR_REQ_DT = hashMap.get("GR_REQ_DT") == null || hashMap.get("GR_REQ_DT").equals("null") ? "" : hashMap.get("GR_REQ_DT").toString().substring(0, 10);
					String NO_OV = hashMap.get("NO_OV") == null || hashMap.get("NO_OV").equals("null") ? "" : hashMap.get("NO_OV").toString().substring(0, 10);
					String IV_DT = hashMap.get("IV_DT") == null || hashMap.get("IV_DT").equals("null") ? "" : hashMap.get("IV_DT").toString().substring(0, 10);
					String DUE_DT = hashMap.get("DUE_DT") == null || hashMap.get("DUE_DT").equals("null") ? "" : hashMap.get("DUE_DT").toString().substring(0, 10);
					String SEND_DT = hashMap.get("SEND_DT") == null || hashMap.get("SEND_DT").equals("null") ? "" : hashMap.get("SEND_DT").toString().substring(0, 10);
					String ID_DT = hashMap.get("ID_DT") == null || hashMap.get("ID_DT").equals("null") ? "" : hashMap.get("ID_DT").toString().substring(0, 10);

					String V_DTL_SEQ = hashMap.get("DTL_SEQ") == null ? "" : hashMap.get("DTL_SEQ").toString();

					cs = conn.prepareCall("call USP_003_M_IMP_TOT_HSPF(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)");

					V_REMARK = REMARK;

					if (!PO_NO.equals("") && !PO_SEQ.equals("")) {
						V_BAS_TYPE = "PO";
						V_BAS_NO = PO_NO;
						V_BAS_SEQ = PO_SEQ;

						if (BL_NO.equals("")) {
							V_IMP_CD = "B";
							V_IMP_VAL = INBOARD_DT;
							callProcedure(cs, V_COMP_ID, V_TYPE, V_BAS_NO, V_BAS_SEQ, V_BAS_TYPE, V_IMP_CD, V_IMP_VAL, V_REMARK, V_USR_ID, V_DTL_SEQ);
							
							V_IMP_CD = "C";
							V_IMP_VAL = FR_TIME;
							callProcedure(cs, V_COMP_ID, V_TYPE, V_BAS_NO, V_BAS_SEQ, V_BAS_TYPE, V_IMP_CD, V_IMP_VAL, V_REMARK, V_USR_ID, V_DTL_SEQ);
							
							V_IMP_CD = "E";
							V_IMP_VAL = GR_REQ_DT;
							callProcedure(cs, V_COMP_ID, V_TYPE, V_BAS_NO, V_BAS_SEQ, V_BAS_TYPE, V_IMP_CD, V_IMP_VAL, V_REMARK, V_USR_ID, V_DTL_SEQ);
							
							V_IMP_CD = "F";
							V_IMP_VAL = IV_DT;
							callProcedure(cs, V_COMP_ID, V_TYPE, V_BAS_NO, V_BAS_SEQ, V_BAS_TYPE, V_IMP_CD, V_IMP_VAL, V_REMARK, V_USR_ID, V_DTL_SEQ);
							
							V_IMP_CD = "I";
							V_IMP_VAL = BL_DOC_NO;
							callProcedure(cs, V_COMP_ID, V_TYPE, V_BAS_NO, V_BAS_SEQ, V_BAS_TYPE, V_IMP_CD, V_IMP_VAL, V_REMARK, V_USR_ID, V_DTL_SEQ);
							
							V_IMP_CD = "J";
							V_IMP_VAL = ETA;
							callProcedure(cs, V_COMP_ID, V_TYPE, V_BAS_NO, V_BAS_SEQ, V_BAS_TYPE, V_IMP_CD, V_IMP_VAL, V_REMARK, V_USR_ID, V_DTL_SEQ);
							
							V_IMP_CD = "K";
							V_IMP_VAL = ETD;
							callProcedure(cs, V_COMP_ID, V_TYPE, V_BAS_NO, V_BAS_SEQ, V_BAS_TYPE, V_IMP_CD, V_IMP_VAL, V_REMARK, V_USR_ID, V_DTL_SEQ);
							
							V_IMP_CD = "M";
							V_IMP_VAL = DOC_YN;
							callProcedure(cs, V_COMP_ID, V_TYPE, V_BAS_NO, V_BAS_SEQ, V_BAS_TYPE, V_IMP_CD, V_IMP_VAL, V_REMARK, V_USR_ID, V_DTL_SEQ);
							
							V_IMP_CD = "N";
							V_IMP_VAL = ID_DT;
							callProcedure(cs, V_COMP_ID, V_TYPE, V_BAS_NO, V_BAS_SEQ, V_BAS_TYPE, V_IMP_CD, V_IMP_VAL, V_REMARK, V_USR_ID, V_DTL_SEQ);
						}
						
					}

					if (!BL_NO.equals("") && !BL_SEQ.equals("")) {
						V_BAS_TYPE = "BL";
						V_BAS_NO = BL_NO;
						V_BAS_SEQ = BL_SEQ;

						// 						if(!O_BL_YN.equals("")){
						V_IMP_CD = "A";
						V_IMP_VAL = O_BL_YN;
						callProcedure(cs, V_COMP_ID, V_TYPE, V_BAS_NO, V_BAS_SEQ, V_BAS_TYPE, V_IMP_CD, V_IMP_VAL, V_REMARK, V_USR_ID, V_DTL_SEQ);

						V_IMP_CD = "B";
						V_IMP_VAL = INBOARD_DT;
						callProcedure(cs, V_COMP_ID, V_TYPE, V_BAS_NO, V_BAS_SEQ, V_BAS_TYPE, V_IMP_CD, V_IMP_VAL, V_REMARK, V_USR_ID, V_DTL_SEQ);
						// 						}
						
//			 			if(!FR_TIME.equals("")){
						V_IMP_CD = "C";
						V_IMP_VAL = FR_TIME;
						callProcedure(cs, V_COMP_ID, V_TYPE, V_BAS_NO, V_BAS_SEQ, V_BAS_TYPE, V_IMP_CD, V_IMP_VAL, V_REMARK, V_USR_ID, V_DTL_SEQ);
						//		 				}

// 						if(!GR_REQ_DT.equals("")){
						V_IMP_CD = "E";
						V_IMP_VAL = GR_REQ_DT;
						callProcedure(cs, V_COMP_ID, V_TYPE, V_BAS_NO, V_BAS_SEQ, V_BAS_TYPE, V_IMP_CD, V_IMP_VAL, V_REMARK, V_USR_ID, V_DTL_SEQ);
						// 						}	

						V_IMP_CD = "F";
						V_IMP_VAL = IV_DT;
						callProcedure(cs, V_COMP_ID, V_TYPE, V_BAS_NO, V_BAS_SEQ, V_BAS_TYPE, V_IMP_CD, V_IMP_VAL, V_REMARK, V_USR_ID, V_DTL_SEQ);
						
// 						if(!SEND_DT.equals("")){
						V_IMP_CD = "H";
						V_IMP_VAL = SEND_DT;
						callProcedure(cs, V_COMP_ID, V_TYPE, V_BAS_NO, V_BAS_SEQ, V_BAS_TYPE, V_IMP_CD, V_IMP_VAL, V_REMARK, V_USR_ID, V_DTL_SEQ);
						// 						}

						V_IMP_CD = "J";
						V_IMP_VAL = ETA;
						callProcedure(cs, V_COMP_ID, V_TYPE, V_BAS_NO, V_BAS_SEQ, V_BAS_TYPE, V_IMP_CD, V_IMP_VAL, V_REMARK, V_USR_ID, V_DTL_SEQ);
						
						V_IMP_CD = "K";
						V_IMP_VAL = ETD;
						callProcedure(cs, V_COMP_ID, V_TYPE, V_BAS_NO, V_BAS_SEQ, V_BAS_TYPE, V_IMP_CD, V_IMP_VAL, V_REMARK, V_USR_ID, V_DTL_SEQ);
						
						// 						if(!FOR_BP_CD.equals("")){
						V_IMP_CD = "L";
						V_IMP_VAL = FOR_BP_CD;
						callProcedure(cs, V_COMP_ID, V_TYPE, V_BAS_NO, V_BAS_SEQ, V_BAS_TYPE, V_IMP_CD, V_IMP_VAL, V_REMARK, V_USR_ID, V_DTL_SEQ);
						// 						}	

						V_IMP_CD = "M";
						V_IMP_VAL = DOC_YN;
						callProcedure(cs, V_COMP_ID, V_TYPE, V_BAS_NO, V_BAS_SEQ, V_BAS_TYPE, V_IMP_CD, V_IMP_VAL, V_REMARK, V_USR_ID, V_DTL_SEQ);
						
						V_IMP_CD = "N";
						V_IMP_VAL = ID_DT;
						callProcedure(cs, V_COMP_ID, V_TYPE, V_BAS_NO, V_BAS_SEQ, V_BAS_TYPE, V_IMP_CD, V_IMP_VAL, V_REMARK, V_USR_ID, V_DTL_SEQ);
					}

// 					if (!CC_NO.equals("") && !CC_SEQ.equals("")) {
// 						V_BAS_TYPE = "CC";
// 						V_BAS_NO = CC_NO;
// 						V_BAS_SEQ = CC_SEQ;
// 					}

					if (!MVMT_NO.equals("")) {
						V_BAS_TYPE = "GR";
						V_BAS_NO = MVMT_NO;
						V_BAS_SEQ = "0";

						// 						if(!NO_OV.equals("")){
						V_IMP_CD = "D";
						V_IMP_VAL = NO_OV;
						callProcedure(cs, V_COMP_ID, V_TYPE, V_BAS_NO, V_BAS_SEQ, V_BAS_TYPE, V_IMP_CD, V_IMP_VAL, V_REMARK, V_USR_ID, V_DTL_SEQ);
						// 						}		
						// 						if(!DUE_DT.equals("")){
						V_IMP_CD = "G";
						V_IMP_VAL = DUE_DT;
						callProcedure(cs, V_COMP_ID, V_TYPE, V_BAS_NO, V_BAS_SEQ, V_BAS_TYPE, V_IMP_CD, V_IMP_VAL, V_REMARK, V_USR_ID, V_DTL_SEQ);
						// 						}		
					}

					if (!OFFER_NO.equals("")) {
						callProcedure(cs, V_COMP_ID, "OFFER", PO_NO, PO_SEQ, "", "", OFFER_NO, "", V_USR_ID, V_DTL_SEQ);
					}

					response.setContentType("text/plain; charset=UTF-8");
					PrintWriter pw = response.getWriter();
					pw.print("success");
					pw.flush();
					pw.close();
				}
			} else {
				JSONParser parser = new JSONParser();
				Object obj = parser.parse(jsonData);
				JSONObject jsonItem = (JSONObject) obj;

				String PO_NO = jsonItem.get("PO_NO") == null ? "" : jsonItem.get("PO_NO").toString();
				String PO_SEQ = jsonItem.get("PO_SEQ") == null ? "" : jsonItem.get("PO_SEQ").toString();
				String BL_NO = jsonItem.get("BL_NO") == null ? "" : jsonItem.get("BL_NO").toString();
				String BL_SEQ = jsonItem.get("BL_SEQ") == null ? "" : jsonItem.get("BL_SEQ").toString();
				String CC_NO = jsonItem.get("CC_NO") == null ? "" : jsonItem.get("CC_NO").toString();
				String CC_SEQ = jsonItem.get("CC_SEQ") == null ? "" : jsonItem.get("CC_SEQ").toString();
				String MVMT_NO = jsonItem.get("MVMT_NO") == null ? "" : jsonItem.get("MVMT_NO").toString();
				String OFFER_NO = jsonItem.get("OFFER_NO") == null ? "" : jsonItem.get("OFFER_NO").toString();

				String BL_DOC_NO = jsonItem.get("BL_DOC_NO") == null ? "" : jsonItem.get("BL_DOC_NO").toString();
				String DOC_YN = jsonItem.get("DOC_YN") == null ? "" : jsonItem.get("DOC_YN").toString();
				String O_BL_YN = jsonItem.get("O_BL_YN") == null ? "" : jsonItem.get("O_BL_YN").toString();
				String FOR_BP_CD = jsonItem.get("FOR_BP_CD") == null ? "" : jsonItem.get("FOR_BP_CD").toString();
				String REMARK = jsonItem.get("REMARK") == null ? "" : jsonItem.get("REMARK").toString();

				String ETA = jsonItem.get("ETA") == null || jsonItem.get("ETA").equals("null") ? "" : jsonItem.get("ETA").toString().substring(0, 10);
				String ETD = jsonItem.get("ETD") == null || jsonItem.get("ETD").equals("null") ? "" : jsonItem.get("ETD").toString().substring(0, 10);
				String INBOARD_DT = jsonItem.get("INBOARD_DT") == null || jsonItem.get("INBOARD_DT").equals("null") ? "" : jsonItem.get("INBOARD_DT").toString().substring(0, 10);
				String FR_TIME = jsonItem.get("FR_TIME") == null || jsonItem.get("FR_TIME").equals("null") ? "" : jsonItem.get("FR_TIME").toString();
				String GR_REQ_DT = jsonItem.get("GR_REQ_DT") == null || jsonItem.get("GR_REQ_DT").equals("null") ? "" : jsonItem.get("GR_REQ_DT").toString().substring(0, 10);
				String NO_OV = jsonItem.get("NO_OV") == null || jsonItem.get("NO_OV").equals("null") ? "" : jsonItem.get("NO_OV").toString().substring(0, 10);
				String IV_DT = jsonItem.get("IV_DT") == null || jsonItem.get("IV_DT").equals("null") ? "" : jsonItem.get("IV_DT").toString().substring(0, 10);
				String DUE_DT = jsonItem.get("DUE_DT") == null || jsonItem.get("DUE_DT").equals("null") ? "" : jsonItem.get("DUE_DT").toString().substring(0, 10);
				String SEND_DT = jsonItem.get("SEND_DT") == null || jsonItem.get("SEND_DT").equals("null") ? "" : jsonItem.get("SEND_DT").toString().substring(0, 10);
				String ID_DT = jsonItem.get("ID_DT") == null || jsonItem.get("ID_DT").equals("null") ? "" : jsonItem.get("ID_DT").toString().substring(0, 10);

				String V_DTL_SEQ = jsonItem.get("DTL_SEQ") == null ? "" : jsonItem.get("DTL_SEQ").toString();

				cs = conn.prepareCall("call USP_003_M_IMP_TOT_HSPF(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)");

				V_REMARK = REMARK;

				if (!PO_NO.equals("") && !PO_SEQ.equals("")) {
					V_BAS_TYPE = "PO";
					V_BAS_NO = PO_NO;
					V_BAS_SEQ = PO_SEQ;

					if (BL_NO.equals("")) {
						V_IMP_CD = "B";
						V_IMP_VAL = INBOARD_DT;
						callProcedure(cs, V_COMP_ID, V_TYPE, V_BAS_NO, V_BAS_SEQ, V_BAS_TYPE, V_IMP_CD, V_IMP_VAL, V_REMARK, V_USR_ID, V_DTL_SEQ);
						
						V_IMP_CD = "C";
						V_IMP_VAL = FR_TIME;
						callProcedure(cs, V_COMP_ID, V_TYPE, V_BAS_NO, V_BAS_SEQ, V_BAS_TYPE, V_IMP_CD, V_IMP_VAL, V_REMARK, V_USR_ID, V_DTL_SEQ);
						
						V_IMP_CD = "E";
						V_IMP_VAL = GR_REQ_DT;
						callProcedure(cs, V_COMP_ID, V_TYPE, V_BAS_NO, V_BAS_SEQ, V_BAS_TYPE, V_IMP_CD, V_IMP_VAL, V_REMARK, V_USR_ID, V_DTL_SEQ);
						
						V_IMP_CD = "F";
						V_IMP_VAL = IV_DT;
						callProcedure(cs, V_COMP_ID, V_TYPE, V_BAS_NO, V_BAS_SEQ, V_BAS_TYPE, V_IMP_CD, V_IMP_VAL, V_REMARK, V_USR_ID, V_DTL_SEQ);
						
						V_IMP_CD = "I";
						V_IMP_VAL = BL_DOC_NO;
						callProcedure(cs, V_COMP_ID, V_TYPE, V_BAS_NO, V_BAS_SEQ, V_BAS_TYPE, V_IMP_CD, V_IMP_VAL, V_REMARK, V_USR_ID, V_DTL_SEQ);
						
						V_IMP_CD = "J";
						V_IMP_VAL = ETA;
						callProcedure(cs, V_COMP_ID, V_TYPE, V_BAS_NO, V_BAS_SEQ, V_BAS_TYPE, V_IMP_CD, V_IMP_VAL, V_REMARK, V_USR_ID, V_DTL_SEQ);
						
						V_IMP_CD = "K";
						V_IMP_VAL = ETD;
						callProcedure(cs, V_COMP_ID, V_TYPE, V_BAS_NO, V_BAS_SEQ, V_BAS_TYPE, V_IMP_CD, V_IMP_VAL, V_REMARK, V_USR_ID, V_DTL_SEQ);
						
						V_IMP_CD = "M";
						V_IMP_VAL = DOC_YN;
						callProcedure(cs, V_COMP_ID, V_TYPE, V_BAS_NO, V_BAS_SEQ, V_BAS_TYPE, V_IMP_CD, V_IMP_VAL, V_REMARK, V_USR_ID, V_DTL_SEQ);
						
						V_IMP_CD = "N";
						V_IMP_VAL = ID_DT;
						callProcedure(cs, V_COMP_ID, V_TYPE, V_BAS_NO, V_BAS_SEQ, V_BAS_TYPE, V_IMP_CD, V_IMP_VAL, V_REMARK, V_USR_ID, V_DTL_SEQ);
					}
				}

				if (!BL_NO.equals("") && !BL_SEQ.equals("")) {
					V_BAS_TYPE = "BL";
					V_BAS_NO = BL_NO;
					V_BAS_SEQ = BL_SEQ;

					// 					if(!O_BL_YN.equals("")){
					V_IMP_CD = "A";
					V_IMP_VAL = O_BL_YN;
					callProcedure(cs, V_COMP_ID, V_TYPE, V_BAS_NO, V_BAS_SEQ, V_BAS_TYPE, V_IMP_CD, V_IMP_VAL, V_REMARK, V_USR_ID, V_DTL_SEQ);

					V_IMP_CD = "B";
					V_IMP_VAL = INBOARD_DT;
					callProcedure(cs, V_COMP_ID, V_TYPE, V_BAS_NO, V_BAS_SEQ, V_BAS_TYPE, V_IMP_CD, V_IMP_VAL, V_REMARK, V_USR_ID, V_DTL_SEQ);
					// 					}
					
//	 				if(!FR_TIME.equals("")){
					V_IMP_CD = "C";
					V_IMP_VAL = FR_TIME;
					callProcedure(cs, V_COMP_ID, V_TYPE, V_BAS_NO, V_BAS_SEQ, V_BAS_TYPE, V_IMP_CD, V_IMP_VAL, V_REMARK, V_USR_ID, V_DTL_SEQ);
					//	 				}

// 					if(!GR_REQ_DT.equals("")){
					V_IMP_CD = "E";
					V_IMP_VAL = GR_REQ_DT;
					callProcedure(cs, V_COMP_ID, V_TYPE, V_BAS_NO, V_BAS_SEQ, V_BAS_TYPE, V_IMP_CD, V_IMP_VAL, V_REMARK, V_USR_ID, V_DTL_SEQ);
					// 					}

					V_IMP_CD = "F";
					V_IMP_VAL = IV_DT;
					callProcedure(cs, V_COMP_ID, V_TYPE, V_BAS_NO, V_BAS_SEQ, V_BAS_TYPE, V_IMP_CD, V_IMP_VAL, V_REMARK, V_USR_ID, V_DTL_SEQ);

// 					if(!SEND_DT.equals("")){
					V_IMP_CD = "H";
					V_IMP_VAL = SEND_DT;
					callProcedure(cs, V_COMP_ID, V_TYPE, V_BAS_NO, V_BAS_SEQ, V_BAS_TYPE, V_IMP_CD, V_IMP_VAL, V_REMARK, V_USR_ID, V_DTL_SEQ);
					// 					}

					V_IMP_CD = "J";
					V_IMP_VAL = ETA;
					callProcedure(cs, V_COMP_ID, V_TYPE, V_BAS_NO, V_BAS_SEQ, V_BAS_TYPE, V_IMP_CD, V_IMP_VAL, V_REMARK, V_USR_ID, V_DTL_SEQ);
					
					V_IMP_CD = "K";
					V_IMP_VAL = ETD;
					callProcedure(cs, V_COMP_ID, V_TYPE, V_BAS_NO, V_BAS_SEQ, V_BAS_TYPE, V_IMP_CD, V_IMP_VAL, V_REMARK, V_USR_ID, V_DTL_SEQ);
					
					// 					if(!FOR_BP_CD.equals("")){
					V_IMP_CD = "L";
					V_IMP_VAL = FOR_BP_CD;
					callProcedure(cs, V_COMP_ID, V_TYPE, V_BAS_NO, V_BAS_SEQ, V_BAS_TYPE, V_IMP_CD, V_IMP_VAL, V_REMARK, V_USR_ID, V_DTL_SEQ);
					// 					}

					V_IMP_CD = "M";
					V_IMP_VAL = DOC_YN;
					callProcedure(cs, V_COMP_ID, V_TYPE, V_BAS_NO, V_BAS_SEQ, V_BAS_TYPE, V_IMP_CD, V_IMP_VAL, V_REMARK, V_USR_ID, V_DTL_SEQ);
					
					V_IMP_CD = "N";
					V_IMP_VAL = ID_DT;
					callProcedure(cs, V_COMP_ID, V_TYPE, V_BAS_NO, V_BAS_SEQ, V_BAS_TYPE, V_IMP_CD, V_IMP_VAL, V_REMARK, V_USR_ID, V_DTL_SEQ);
				}

// 				if (!CC_NO.equals("") && !CC_SEQ.equals("")) {
// 					V_BAS_TYPE = "CC";
// 					V_BAS_NO = CC_NO;
// 					V_BAS_SEQ = CC_SEQ;

// 				}

				if (!MVMT_NO.equals("")) {
					V_BAS_TYPE = "GR";
					V_BAS_NO = MVMT_NO;
					V_BAS_SEQ = "0";

					// 					if(!NO_OV.equals("")){
					V_IMP_CD = "D";
					V_IMP_VAL = NO_OV;
					callProcedure(cs, V_COMP_ID, V_TYPE, V_BAS_NO, V_BAS_SEQ, V_BAS_TYPE, V_IMP_CD, V_IMP_VAL, V_REMARK, V_USR_ID, V_DTL_SEQ);
					// 					}		

					// 					if(!DUE_DT.equals("")){
					V_IMP_CD = "G";
					V_IMP_VAL = DUE_DT;
					callProcedure(cs, V_COMP_ID, V_TYPE, V_BAS_NO, V_BAS_SEQ, V_BAS_TYPE, V_IMP_CD, V_IMP_VAL, V_REMARK, V_USR_ID, V_DTL_SEQ);
					// 					}		
					
				}

				if (!OFFER_NO.equals("")) {
					callProcedure(cs, V_COMP_ID, "OFFER", PO_NO, PO_SEQ, "", "", OFFER_NO, "", V_USR_ID, V_DTL_SEQ);
				}

				response.setContentType("text/plain; charset=UTF-8");
				PrintWriter pw = response.getWriter();
				pw.print("success");
				pw.flush();
				pw.close();
			}

		} else if (V_TYPE.equals("WI")) {
			request.setCharacterEncoding("utf-8");
			String[] findList = { "#", "+", "&", "%", " " };
			String[] replList = { "%23", "%2B", "%26", "%25", "%20" };

			String data = request.getParameter("data");
			String jsonData = URLDecoder.decode(data, "UTF-8");

			if (jsonData.lastIndexOf("},{") > 0) { //배열일경우
				JSONArray jsonAr = (JSONArray) JSONValue.parse(jsonData);

				for (int i = 0; i < jsonAr.size(); i++) {
					HashMap hashMap = (HashMap) jsonAr.get(i);
					V_TYPE = hashMap.get("V_TYPE") == null ? "" : hashMap.get("V_TYPE").toString();
					V_BL_DOC_NO = hashMap.get("BL_DOC_NO") == null ? "" : hashMap.get("BL_DOC_NO").toString();
					String V_DTL_SEQ = hashMap.get("DTL_SEQ") == null ? "" : hashMap.get("DTL_SEQ").toString();
					String V_QTY = hashMap.get("QTY") == null ? "" : hashMap.get("QTY").toString();
					String V_ETA = hashMap.get("ETA") == null || hashMap.get("ETA").equals("null") ? "" : hashMap.get("ETA").toString().substring(0, 10);
					String V_ETD = hashMap.get("ETD") == null || hashMap.get("ETD").equals("null") ? "" : hashMap.get("ETD").toString().substring(0, 10);

					cs = conn.prepareCall("call USP_003_M_IMP_TOT_HSPF(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)");
					cs.setString(1, V_COMP_ID);//V_COMP_ID
					cs.setString(2, V_TYPE);//V_TYPE
					cs.setString(3, "");//V_PO_DT_FR
					cs.setString(4, "");//V_PO_DT_TO
					cs.setString(5, "");//V_BP_CD
					cs.setString(6, "");//V_LC_DOC_NO
					cs.setString(7, V_BL_DOC_NO);//V_BL_DOC_NO
					cs.setString(8, V_PO_NO);//V_BAS_NO
					cs.setString(9, V_PO_SEQ);//V_BAS_SEQ
					cs.setString(10, "");//V_BAS_TYPE
					cs.setString(11, "");//V_IMP_CD
					cs.setString(12, "");//V_IMP_VAL
					cs.setString(13, "");//V_REMARK
					cs.setString(14, V_USR_ID);//V_USR_ID
					cs.registerOutParameter(15, com.tmax.tibero.TbTypes.CURSOR);
					cs.setString(16, "");//V_PO_NO
					cs.setString(17, "");//V_ITEM_CD
					cs.setString(18, "");//V_ITEM_NM
					cs.setString(19, "");//V_AFFILIATE
					cs.setString(20, "");//V_MAKER
					cs.setString(21, "");//V_PO_USR_NM
					cs.setString(22, "");//V_GR_YN
					cs.setString(23, "");//V_PO_TYPE
					cs.setString(24, V_DTL_SEQ);//V_DTL_SEQ
					cs.setString(25, V_QTY);//V_QTY
					cs.setString(26, V_ETA);//V_ETA
					cs.setString(27, V_ETD);//V_ETD
					cs.setString(28, "");//V_SEND_YN
					cs.setString(29, "");//V_INBOARD_YN
					cs.executeQuery();

					response.setContentType("text/plain; charset=UTF-8");
					PrintWriter pw = response.getWriter();
					pw.print("success");
					pw.flush();
					pw.close();

				}
			} else {
				JSONParser parser = new JSONParser();
				Object obj = parser.parse(jsonData);
				JSONObject jsondata = (JSONObject) obj;

				V_TYPE = jsondata.get("V_TYPE") == null ? "" : jsondata.get("V_TYPE").toString();
				V_BL_DOC_NO = jsondata.get("BL_DOC_NO") == null ? "" : jsondata.get("BL_DOC_NO").toString();
				String V_DTL_SEQ = jsondata.get("DTL_SEQ") == null ? "" : jsondata.get("DTL_SEQ").toString();
				String V_QTY = jsondata.get("QTY") == null ? "" : jsondata.get("QTY").toString();
				String V_ETA = jsondata.get("ETA") == null || jsondata.get("ETA").equals("null") ? "" : jsondata.get("ETA").toString().substring(0, 10);
				String V_ETD = jsondata.get("ETD") == null || jsondata.get("ETD").equals("null") ? "" : jsondata.get("ETD").toString().substring(0, 10);

				cs = conn.prepareCall("call USP_003_M_IMP_TOT_HSPF(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)");
				cs.setString(1, V_COMP_ID);//V_COMP_ID
				cs.setString(2, V_TYPE);//V_TYPE
				cs.setString(3, "");//V_PO_DT_FR
				cs.setString(4, "");//V_PO_DT_TO
				cs.setString(5, "");//V_BP_CD
				cs.setString(6, "");//V_LC_DOC_NO
				cs.setString(7, V_BL_DOC_NO);//V_BL_DOC_NO
				cs.setString(8, V_PO_NO);//V_BAS_NO
				cs.setString(9, V_PO_SEQ);//V_BAS_SEQ
				cs.setString(10, "");//V_BAS_TYPE
				cs.setString(11, "");//V_IMP_CD
				cs.setString(12, "");//V_IMP_VAL
				cs.setString(13, "");//V_REMARK
				cs.setString(14, V_USR_ID);//V_USR_ID
				cs.registerOutParameter(15, com.tmax.tibero.TbTypes.CURSOR);
				cs.setString(16, "");//V_PO_NO
				cs.setString(17, "");//V_ITEM_CD
				cs.setString(18, "");//V_ITEM_NM
				cs.setString(19, "");//V_AFFILIATE
				cs.setString(20, "");//V_MAKER
				cs.setString(21, "");//V_PO_USR_NM
				cs.setString(22, "");//V_GR_YN
				cs.setString(23, "");//V_PO_TYPE
				cs.setString(24, V_DTL_SEQ);//V_DTL_SEQ
				cs.setString(25, V_QTY);//V_QTY
				cs.setString(26, V_ETA);//V_ETA
				cs.setString(27, V_ETD);//V_ETD
				cs.setString(28, "");//V_SEND_YN
				cs.setString(29, "");//V_INBOARD_YN
				cs.executeQuery();

				response.setContentType("text/plain; charset=UTF-8");
				PrintWriter pw = response.getWriter();
				pw.print("success");
				pw.flush();
				pw.close();

			}
			
		} else if (V_TYPE.equals("NEW")) {
			String V_TT_NO = "";
			
			cs = conn.prepareCall("call USP_003_M_TT_FORM_TOT_HSPF(?,?,?,?,?,?)");
			cs.setString(1, V_TYPE);//V_TYPE
			cs.setString(2, "");//V_BL_DOC_NO
			cs.setString(3, "");//V_TT_NO
			cs.setString(4, "");//V_ITEM_GB
			cs.setString(5, V_USR_ID);//V_USR_ID
			cs.registerOutParameter(6, com.tmax.tibero.TbTypes.CURSOR);
			cs.executeQuery();
			
			rs = (ResultSet) cs.getObject(6);
			if (rs.next()) {
				V_TT_NO = rs.getString("V_TT_NO");
			}

			response.setContentType("text/plain; charset=UTF-8");
			PrintWriter pw = response.getWriter();
			pw.print(V_TT_NO);
			pw.flush();
			pw.close();

		} else if (V_TYPE.equals("TT")) {
			request.setCharacterEncoding("utf-8");
			String[] findList = { "#", "+", "&", "%", " " };
			String[] replList = { "%23", "%2B", "%26", "%25", "%20" };

			String data = request.getParameter("data");
			String jsonData = URLDecoder.decode(data, "UTF-8");
			
			String V_TT_NO = request.getParameter("V_TT_NO") == null ? "" : request.getParameter("V_TT_NO").toUpperCase();
			
			String PRE_BL_DOC_NO = "";
			
			if (jsonData.lastIndexOf("},{") > 0) { //배열일경우
				JSONArray jsonAr = (JSONArray) JSONValue.parse(jsonData);

				for (int i = 0; i < jsonAr.size(); i++) {
					HashMap hashMap = (HashMap) jsonAr.get(i);
					V_TYPE = hashMap.get("V_TYPE") == null ? "" : hashMap.get("V_TYPE").toString();
					V_BL_DOC_NO = hashMap.get("BL_DOC_NO") == null ? "" : hashMap.get("BL_DOC_NO").toString();
					
					
					
					if(V_TYPE.equals("I")){
						//20201113 김장운. 같은 BL_DOC_NO가 넘어오는경우 PK 에러가 생겨서 이렇게 처리.. 재무팀 요청떄문에 시간없어서 이렇게 구현함.. 나중에 수정해야한다.
						if(!PRE_BL_DOC_NO.equals(V_BL_DOC_NO)){
							cs = conn.prepareCall("call USP_003_M_TT_FORM_TOT_HSPF(?,?,?,?,?,?)");
							cs.setString(1, V_TYPE);//V_TYPE
							cs.setString(2, V_BL_DOC_NO);//V_BL_DOC_NO
							cs.setString(3, V_TT_NO);//V_TT_NO
							cs.setString(4, "");//V_ITEM_GB
							cs.setString(5, V_USR_ID);//V_USR_ID
							cs.registerOutParameter(6, com.tmax.tibero.TbTypes.CURSOR);
							cs.executeQuery();
							PRE_BL_DOC_NO = V_BL_DOC_NO;
						}
						
					}

				}
			} else {
				JSONParser parser = new JSONParser();
				Object obj = parser.parse(jsonData);
				JSONObject jsondata = (JSONObject) obj;

				V_TYPE = jsondata.get("V_TYPE") == null ? "" : jsondata.get("V_TYPE").toString();
				V_BL_DOC_NO = jsondata.get("BL_DOC_NO") == null ? "" : jsondata.get("BL_DOC_NO").toString();

				if(V_TYPE.equals("I")){
					cs = conn.prepareCall("call USP_003_M_TT_FORM_TOT_HSPF(?,?,?,?,?,?)");
					cs.setString(1, V_TYPE);//V_TYPE
					cs.setString(2, V_BL_DOC_NO);//V_BL_DOC_NO
					cs.setString(3, V_TT_NO);//V_TT_NO
					cs.setString(4, "");//V_ITEM_GB
					cs.setString(5, V_USR_ID);//V_USR_ID
					cs.registerOutParameter(6, com.tmax.tibero.TbTypes.CURSOR);
					cs.executeQuery();
				}

			}
			
			response.setContentType("text/plain; charset=UTF-8");
			PrintWriter pw = response.getWriter();
			pw.print(V_TT_NO);
			pw.flush();
			pw.close();

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
	}
%>

<%!
	void callProcedure(CallableStatement cs, String V_COMP_ID, String V_TYPE, String V_BAS_NO, String V_BAS_SEQ, String V_BAS_TYPE, String V_IMP_CD, String V_IMP_VAL, String V_REMARK, String V_USR_ID, String V_DTL_SEQ) throws Exception
	{
		cs.setString(1, V_COMP_ID);//V_COMP_ID
		cs.setString(2, V_TYPE);//V_TYPE
		cs.setString(3, "");//V_PO_DT_FR
		cs.setString(4, "");//V_PO_DT_TO
		cs.setString(5, "");//V_BP_CD
		cs.setString(6, "");//V_LC_DOC_NO
		cs.setString(7, "");//V_BL_DOC_NO
		cs.setString(8, V_BAS_NO);//V_BAS_NO
		cs.setString(9, V_BAS_SEQ);//V_BAS_SEQ
		cs.setString(10, V_BAS_TYPE);//V_BAS_TYPE
		cs.setString(11, V_IMP_CD);//V_IMP_CD
		cs.setString(12, V_IMP_VAL);//V_IMP_VAL
		cs.setString(13, V_REMARK);//V_REMARK
		cs.setString(14, V_USR_ID);//V_USR_ID
		cs.registerOutParameter(15, com.tmax.tibero.TbTypes.CURSOR);
		cs.setString(16, "");//V_PO_NO
		cs.setString(17, "");//V_ITEM_CD
		cs.setString(18, "");//V_ITEM_NM
		cs.setString(19, "");//V_AFFILIATE
		cs.setString(20, "");//V_MAKER
		cs.setString(21, "");//V_PO_USR_NM
		cs.setString(22, "");//V_GR_YN
		cs.setString(23, "");//V_PO_TYPE
		cs.setString(24, V_DTL_SEQ);//V_DTL_SEQ
		cs.setString(25, "");//V_QTY
		cs.setString(26, "");//V_ETA
		cs.setString(27, "");//V_ETD
		cs.setString(28, "");//V_SEND_YN
		cs.setString(29, "");//V_INBOARD_YN
		cs.executeQuery();
	}

	String calcDueDate(String PAY_METH, String ETA, String IV_DT, String BL_DT) throws Exception
	{
		DateFormat df = new SimpleDateFormat("yyyy-MM-dd");
		Date date = null;
		Calendar cal = Calendar.getInstance();

		String targetDate = null;
		int addDate = 0;

		try {
			if (PAY_METH.equals("TE1")) {
				targetDate = ETA;
				addDate = 7;
			} else if (PAY_METH.equals("TE2")) {
				targetDate = ETA;
				addDate = 10;
			} else if (PAY_METH.equals("TI1")) {
				targetDate = IV_DT;
				addDate = 8;
			} else if (PAY_METH.equals("TI2")) {
				targetDate = IV_DT;
				addDate = 14;
			} else if (PAY_METH.equals("TI3")) {
				targetDate = IV_DT;
				addDate = 15;
			} else if (PAY_METH.equals("TI4")) {
				targetDate = IV_DT;
				addDate = 30;
			} else if (PAY_METH.equals("TI5")) {
				targetDate = IV_DT;
				addDate = 45;
			} else if (PAY_METH.equals("TI6")) {
				targetDate = IV_DT;
				addDate = 60;
			} else if (PAY_METH.equals("TI7")) {
				targetDate = IV_DT;
				addDate = 90;
			} else if (PAY_METH.equals("TI8")) {
				targetDate = IV_DT;
				addDate = 7;
			} else if (PAY_METH.equals("TB1")) {
				targetDate = BL_DT;
				addDate = 7;
			} else if (PAY_METH.equals("TB2")) {
				targetDate = BL_DT;
				addDate = 10;
			} else if (PAY_METH.equals("TB3")) {
				targetDate = BL_DT;
				addDate = 14;
			} else if (PAY_METH.equals("TB4")) {
				targetDate = BL_DT;
				addDate = 15;
			} else if (PAY_METH.equals("TB5")) {
				targetDate = BL_DT;
				addDate = 20;
			} else if (PAY_METH.equals("TB6")) {
				targetDate = BL_DT;
				addDate = 30;
			} else if (PAY_METH.equals("TB7")) {
				targetDate = BL_DT;
				addDate = 45;
			} else if (PAY_METH.equals("TB8")) {
				targetDate = BL_DT;
				addDate = 60;
			} else if (PAY_METH.equals("TB9")) {
				targetDate = BL_DT;
				addDate = 90;
			} else if (PAY_METH.equals("TB10")) {
				targetDate = BL_DT;
				addDate = 180;
			} else if (PAY_METH.equals("TB11")) {
				targetDate = BL_DT;
				addDate = 90;
			} else if (PAY_METH.equals("TB12")) {
				targetDate = BL_DT;
				addDate = 180;
			} else if (PAY_METH.equals("TB13")) {
				targetDate = BL_DT;
				addDate = 5;
			} else if (PAY_METH.equals("TTM")) {
				targetDate = BL_DT;
			}

			if (targetDate == null) { return null; }
			
			date = df.parse(targetDate);
			cal.setTime(date);
			cal.add(Calendar.DATE, addDate);	
			
			if (PAY_METH.equals("TTM")) {
				int dayOfMonth = cal.getActualMaximum(Calendar.DAY_OF_MONTH);
				cal.set(Calendar.DAY_OF_MONTH, dayOfMonth);  
			}

		} catch (Exception e) {
			e.printStackTrace();
		}

		return df.format(cal.getTime());
	}
%>


