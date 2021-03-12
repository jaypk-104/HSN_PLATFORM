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

<%
	request.setCharacterEncoding("utf-8");
	ResultSet rs = null;
	CallableStatement cs = null;
	JSONObject jsonObject = new JSONObject();
	JSONArray jsonArray = new JSONArray();
	JSONObject subObject = null;

	try {
		String V_TYPE = request.getParameter("V_TYPE") == null ? "" : request.getParameter("V_TYPE");
		String V_TYPE2 = request.getParameter("V_TYPE2") == null ? "" : request.getParameter("V_TYPE2");
		String V_COMP_ID = request.getParameter("V_COMP_ID") == null ? "" : request.getParameter("V_COMP_ID").toUpperCase();
		String V_USR_ID = request.getParameter("V_USR_ID") == null ? "" : request.getParameter("V_USR_ID").toUpperCase();
		String V_RISK_NO = request.getParameter("V_RISK_NO") == null ? "" : request.getParameter("V_RISK_NO").toUpperCase();

		if (V_TYPE.equals("SH")) {

			cs = conn.prepareCall("call USP_001_E_RISK_HD_STEEL(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)");
			cs.setString(1, V_TYPE);//V_TYPE
			cs.setString(2, V_COMP_ID);//V_COMP_ID
			cs.setString(3, V_RISK_NO);//V_RISK_NO
			cs.setString(4, "");//V_RISK_DOC_NO
			cs.setString(5, "");//V_DEPT_CD
			cs.setString(6, "");//V_QTY
			cs.setString(7, "");//V_RISK_DT
			cs.setString(8, "");//V_RISK_NM
			cs.setString(9, "");//V_SALE_TYPE
			cs.setString(10, "");//V_IV_TYPE
			cs.setString(11, "");//V_MON_APR_AMT
			cs.setString(12, "");//V_SUM_APR_AMT
			cs.setString(13, "");//V_BILL_LT_APR_AMT
			cs.setString(14, "");//V_MON_USE_AMT
			cs.setString(15, "");//V_SUM_USE_AMT
			cs.setString(16, "");//V_BILL_LT_USE_AMT
			cs.setString(17, "");//V_PAY_METH
			cs.setString(18, "");//V_BILL_LT_AMT
			cs.setString(19, "");//V_MID_TYPE
			cs.setString(20, "");//V_MID_RATE
			cs.setString(21, "");//V_HEDGE_AMT
			cs.setString(22, "");//V_REMARK
			cs.setString(23, V_USR_ID);//V_USR_ID
			cs.registerOutParameter(24, com.tmax.tibero.TbTypes.CURSOR);
			cs.setString(25, "");//
			cs.setString(26, "");//
			cs.setString(27, "");//
			cs.setString(28, "");//
			cs.setString(29, "");//
			cs.setString(30, "");//
			cs.setString(31, "");//
			cs.setString(32, "");//
			cs.executeQuery();

			rs = (ResultSet) cs.getObject(24);

			while (rs.next()) {
				subObject = new JSONObject();
				subObject.put("RISK_NO", rs.getString("RISK_NO"));
				subObject.put("RISK_DOC_NO", rs.getString("RISK_DOC_NO"));
				subObject.put("DEPT_CD", rs.getString("DEPT_CD"));
				subObject.put("DEPT_NM", rs.getString("DEPT_NM"));
				subObject.put("S_BP_CD", rs.getString("S_BP_CD"));
				subObject.put("S_BP_NM", rs.getString("S_BP_NM"));
				subObject.put("RISK_DT", rs.getString("RISK_DT"));
				subObject.put("RISK_NM", rs.getString("RISK_NM"));
				subObject.put("SALE_TYPE", rs.getString("SALE_TYPE"));
				subObject.put("SALE_TYPE_NM", rs.getString("SALE_TYPE_NM"));
				subObject.put("IV_TYPE", rs.getString("IV_TYPE"));
				subObject.put("IV_TYPE_NM", rs.getString("IV_TYPE_NM"));
				subObject.put("MON_APR_AMT", rs.getString("MON_APR_AMT"));
				subObject.put("SUM_APR_AMT", rs.getString("SUM_APR_AMT"));
				subObject.put("BILL_LT_APR_AMT", rs.getString("BILL_LT_APR_AMT"));
				subObject.put("MON_USE_AMT", rs.getString("MON_USE_AMT"));
				subObject.put("SUM_USE_AMT", rs.getString("SUM_USE_AMT"));
				subObject.put("BILL_LT_USE_AMT", rs.getString("BILL_LT_USE_AMT"));
				subObject.put("PAY_METH", rs.getString("PAY_METH"));
				subObject.put("PAY_TERM_NM", rs.getString("PAY_TERM_NM"));
				subObject.put("BILL_LT_AMT", rs.getString("BILL_LT_AMT"));
				subObject.put("MID_TYPE", rs.getString("MID_TYPE"));
				subObject.put("MID_NM", rs.getString("MID_NM"));
				subObject.put("MID_RATE", rs.getString("MID_RATE"));
				subObject.put("MID_UNIT", rs.getString("MID_UNIT"));
				subObject.put("HEDGE_AMT", rs.getString("HEDGE_AMT"));
				subObject.put("REMARK", rs.getString("REMARK"));
				subObject.put("CUR", rs.getString("CUR"));
				subObject.put("PAY_METH_SL", rs.getString("PAY_METH_SL"));
				subObject.put("BN_DT", rs.getString("BN_DT"));
				subObject.put("HEDGE_TYPE", rs.getString("HEDGE_TYPE"));
				subObject.put("RISK_TYPE", rs.getString("RISK_TYPE"));
				subObject.put("RISK_TYPE_NM", rs.getString("RISK_TYPE_NM"));
				subObject.put("RISK_YN", rs.getString("RISK_YN").equals("Y") ? true : false);
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
		} else if (V_TYPE.equals("SP1")) {

			String W_RISK_YN = request.getParameter("W_RISK_YN").toString().toLowerCase().equals("true") ? "Y" : "N";
			String W_RISK_TYPE = request.getParameter("W_RISK_TYPE") == null ? "" : request.getParameter("W_RISK_TYPE").toUpperCase();
			String W_RISK_DOC_NO = request.getParameter("W_RISK_DOC_NO") == null ? "" : request.getParameter("W_RISK_DOC_NO").toUpperCase();
			String W_S_BP_NM = request.getParameter("W_S_BP_NM") == null ? "" : request.getParameter("W_S_BP_NM").toUpperCase();

			if (W_RISK_TYPE.equals("T")) {
				W_RISK_TYPE = "";
			}

			cs = conn.prepareCall("call USP_001_E_RISK_HD_STEEL(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)");
			cs.setString(1, V_TYPE);//V_TYPE
			cs.setString(2, V_COMP_ID);//V_COMP_ID
			cs.setString(3, V_RISK_NO);//V_RISK_NO
			cs.setString(4, W_RISK_DOC_NO);//V_RISK_DOC_NO
			cs.setString(5, "");//V_DEPT_CD
			cs.setString(6, W_S_BP_NM);//
			cs.setString(7, "");//V_RISK_DT
			cs.setString(8, "");//V_RISK_NM
			cs.setString(9, W_RISK_TYPE);//V_SALE_TYPE
			cs.setString(10, "");//V_IV_TYPE
			cs.setString(11, "");//V_MON_APR_AMT
			cs.setString(12, "");//V_SUM_APR_AMT
			cs.setString(13, "");//V_BILL_LT_APR_AMT
			cs.setString(14, "");//V_MON_USE_AMT
			cs.setString(15, "");//V_SUM_USE_AMT
			cs.setString(16, "");//V_BILL_LT_USE_AMT
			cs.setString(17, "");//V_PAY_METH
			cs.setString(18, "");//V_BILL_LT_AMT
			cs.setString(19, "");//V_MID_TYPE
			cs.setString(20, "");//V_MID_RATE
			cs.setString(21, "");//V_HEDGE_AMT
			cs.setString(22, "");//V_REMARK
			cs.setString(23, V_USR_ID);//V_USR_ID
			cs.registerOutParameter(24, com.tmax.tibero.TbTypes.CURSOR);
			cs.setString(25, "");//
			cs.setString(26, "");//
			cs.setString(27, "");//
			cs.setString(28, "");//
			cs.setString(29, "");//
			cs.setString(30, W_RISK_YN);//
			cs.setString(31, "");//
			cs.setString(32, "");//
			cs.executeQuery();

			rs = (ResultSet) cs.getObject(24);

			while (rs.next()) {
				subObject = new JSONObject();
				subObject.put("RISK_NO", rs.getString("RISK_NO"));
				subObject.put("RISK_DOC_NO", rs.getString("RISK_DOC_NO"));
				subObject.put("RISK_NM", rs.getString("RISK_NM"));
				subObject.put("DEPT_CD", rs.getString("DEPT_CD"));
				subObject.put("DEPT_NM", rs.getString("DEPT_NM"));
				subObject.put("S_BP_CD", rs.getString("S_BP_CD"));
				subObject.put("S_BP_NM", rs.getString("S_BP_NM"));
				subObject.put("RISK_DT", rs.getString("RISK_DT"));
				subObject.put("RISK_NM", rs.getString("RISK_NM"));
				subObject.put("SALE_TYPE", rs.getString("SALE_TYPE"));
				subObject.put("SALE_TYPE_NM", rs.getString("SALE_TYPE_NM"));
				subObject.put("IV_TYPE", rs.getString("IV_TYPE"));
				subObject.put("IV_TYPE_NM", rs.getString("IV_TYPE_NM"));
				subObject.put("IV_TYPE_NM", rs.getString("IV_TYPE_NM"));
				subObject.put("RISK_YN", rs.getString("RISK_YN"));
				subObject.put("RISK_TYPE_NM", rs.getString("RISK_TYPE_NM"));
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

			//리스크관리 헤더 등록
		} else if (V_TYPE.equals("HI") || V_TYPE.equals("D")) {
			String V_RISK_DOC_NO = request.getParameter("V_RISK_DOC_NO") == null ? "" : request.getParameter("V_RISK_DOC_NO").toUpperCase();
			String V_S_BP_CD = request.getParameter("V_S_BP_CD") == null ? "" : request.getParameter("V_S_BP_CD").toUpperCase();
			String V_DEPT_CD = request.getParameter("V_DEPT_CD") == null ? "" : request.getParameter("V_DEPT_CD").toUpperCase();
			String V_RISK_DT = request.getParameter("V_RISK_DT") == null ? "" : request.getParameter("V_RISK_DT").toString().substring(0, 10);
			String V_RISK_NM = request.getParameter("V_RISK_NM") == null ? "" : request.getParameter("V_RISK_NM").toUpperCase();
			String V_SALE_TYPE = request.getParameter("V_SALE_TYPE") == null ? "" : request.getParameter("V_SALE_TYPE").toUpperCase();
			String V_IV_TYPE = request.getParameter("V_IV_TYPE") == null ? "" : request.getParameter("V_IV_TYPE").toUpperCase();
			String V_MON_APR_AMT = request.getParameter("V_MON_APR_AMT") == null ? "" : request.getParameter("V_MON_APR_AMT").toUpperCase().replaceAll(",", "");
			String V_MON_USE_AMT = request.getParameter("V_MON_USE_AMT") == null ? "" : request.getParameter("V_MON_USE_AMT").toUpperCase().replaceAll(",", "");
			String V_SUM_APR_AMT = request.getParameter("V_SUM_APR_AMT") == null ? "" : request.getParameter("V_SUM_APR_AMT").toUpperCase().replaceAll(",", "");
			String V_SUM_USE_AMT = request.getParameter("V_SUM_USE_AMT") == null ? "" : request.getParameter("V_SUM_USE_AMT").toUpperCase().replaceAll(",", "");
			String V_BILL_LT_APR_AMT = request.getParameter("V_BILL_LT_APR_AMT") == null ? "" : request.getParameter("V_BILL_LT_APR_AMT").toUpperCase().replaceAll(",", "");
			String V_BILL_LT_USE_AMT = request.getParameter("V_BILL_LT_USE_AMT") == null ? "" : request.getParameter("V_BILL_LT_USE_AMT").toUpperCase().replaceAll(",", "");
			String V_PAY_METH = request.getParameter("V_PAY_METH") == null ? "" : request.getParameter("V_PAY_METH").toUpperCase();
			String V_BILL_LT_AMT = request.getParameter("V_BILL_LT_AMT") == null ? "" : request.getParameter("V_BILL_LT_AMT").toUpperCase().replaceAll(",", "");
			String V_MID_TYPE = request.getParameter("V_MID_TYPE") == null ? "" : request.getParameter("V_MID_TYPE").toUpperCase();
			String V_MID_RATE = request.getParameter("V_MID_RATE") == null ? "" : request.getParameter("V_MID_RATE").toUpperCase().replaceAll(",", "");

			//%,톤
			String V_MID_UNIT = request.getParameter("V_MID_UNIT") == null ? "" : request.getParameter("V_MID_UNIT").toUpperCase();

			String V_HEDGE_AMT = request.getParameter("V_HEDGE_AMT") == null ? "" : request.getParameter("V_HEDGE_AMT").toUpperCase().replaceAll(",", "");
			String V_HEDGE_TYPE = request.getParameter("V_HEDGE_TYPE") == null ? "" : request.getParameter("V_HEDGE_TYPE").toUpperCase();
			String V_REMARK = request.getParameter("V_REMARK") == null ? "" : request.getParameter("V_REMARK").toUpperCase();
			String V_CUR = request.getParameter("V_CUR") == null ? "" : request.getParameter("V_CUR").toUpperCase();
			String V_PAY_METH_SL = request.getParameter("V_PAY_METH_SL") == null ? "" : request.getParameter("V_PAY_METH_SL").toUpperCase();
			String V_BN_DT = request.getParameter("V_BN_DT") == null ? "" : request.getParameter("V_BN_DT").toUpperCase();
			String V_RISK_TYPE = request.getParameter("V_RISK_TYPE") == null ? "" : request.getParameter("V_RISK_TYPE").toUpperCase();

			String V_RISK_YN = request.getParameter("V_RISK_YN") == null ? "" : request.getParameter("V_RISK_YN").toString().toLowerCase().equals("true") ? "Y" : "N";
			
			cs = conn.prepareCall("call USP_001_E_RISK_HD_STEEL(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)");
			cs.setString(1, V_TYPE);//V_TYPE
			cs.setString(2, V_COMP_ID);//V_COMP_ID
			cs.setString(3, V_RISK_NO);//V_RISK_NO
			cs.setString(4, V_RISK_DOC_NO);//V_RISK_DOC_NO
			cs.setString(5, V_DEPT_CD);//V_DEPT_CD
			cs.setString(6, V_S_BP_CD);//V_QTY
			cs.setString(7, V_RISK_DT);//V_RISK_DT
			cs.setString(8, V_RISK_NM);//V_RISK_NM
			cs.setString(9, V_SALE_TYPE);//V_SALE_TYPE
			cs.setString(10, V_IV_TYPE);//V_IV_TYPE
			cs.setString(11, V_MON_APR_AMT);//V_MON_APR_AMT
			cs.setString(12, V_SUM_APR_AMT);//V_SUM_APR_AMT
			cs.setString(13, V_BILL_LT_APR_AMT);//V_BILL_LT_APR_AMT
			cs.setString(14, V_MON_USE_AMT);//V_MON_USE_AMT
			cs.setString(15, V_SUM_USE_AMT);//V_SUM_USE_AMT
			cs.setString(16, V_BILL_LT_USE_AMT);//V_BILL_LT_USE_AMT
			cs.setString(17, V_PAY_METH);//V_PAY_METH
			cs.setString(18, V_BILL_LT_AMT);//V_BILL_LT_AMT
			cs.setString(19, V_MID_TYPE);//V_MID_TYPE
			cs.setString(20, V_MID_RATE);//V_MID_RATE
			cs.setString(21, V_HEDGE_AMT);//V_HEDGE_AMT
			cs.setString(22, V_REMARK);//V_REMARK
			cs.setString(23, V_USR_ID);//V_USR_ID
			cs.registerOutParameter(24, com.tmax.tibero.TbTypes.CURSOR);
			cs.setString(25, V_CUR);//V_CUR
			cs.setString(26, V_PAY_METH_SL);//V_PAY_METH_SL
			cs.setString(27, V_BN_DT);//V_BN_DT
			cs.setString(28, V_HEDGE_TYPE);//V_HEDGE_TYPE
			cs.setString(29, V_RISK_TYPE);//V_HEDGE_TYPE
			cs.setString(30, V_RISK_YN);//V_HEDGE_TYPE
			cs.setString(31, "");//V_MID_REF_NO
			cs.setString(32, V_MID_UNIT);//V_UNIT_TYPE
			cs.executeQuery();

			String res = "";
			if (V_TYPE.equals("HI")) {
				rs = (ResultSet) cs.getObject(24);
				while (rs.next()) {
					res = rs.getString("res");
				}

			} else {
				res = "success";
			}

			response.setContentType("text/plain; charset=UTF-8");
			PrintWriter pw = response.getWriter();
			pw.print(res);
			pw.flush();
			pw.close();

		} else if (V_TYPE2.equals("CR")) {

			//계약금 조회
			if (V_TYPE.equals("S")) {

				cs = conn.prepareCall("call USP_001_E_RISK_CR_STEEL(?,?,?,?,?,?,?,?,?,?,?,?)");
				cs.setString(1, V_TYPE);//V_TYPE
				cs.setString(2, V_COMP_ID);//V_COMP_ID
				cs.setString(3, V_RISK_NO);//V_RISK_NO
				cs.setString(4, "");//V_R_CR_NO
				cs.setString(5, "");//V_R_CR_SEQ
				cs.setString(6, "");//V_R_CR_CD
				cs.setString(7, "");//V_R_COL_CD
				cs.setString(8, "");//V_R_CR_RATE
				cs.setString(9, V_USR_ID);//V_USR_ID
				cs.registerOutParameter(10, com.tmax.tibero.TbTypes.CURSOR);
				cs.setString(11, "");//V_REMARK
				cs.setString(12, "");//V_R_CR_AMT
				cs.executeQuery();

				rs = (ResultSet) cs.getObject(10);

				while (rs.next()) {
					subObject = new JSONObject();
					subObject.put("RISK_NO", rs.getString("RISK_NO"));
					subObject.put("R_CR_NO", rs.getString("R_CR_NO"));
					subObject.put("R_CR_SEQ", rs.getString("R_CR_SEQ"));
					subObject.put("R_CR_CD", rs.getString("R_CR_CD"));
					subObject.put("R_CR_NM", rs.getString("R_CR_NM"));
					subObject.put("R_COL_CD", rs.getString("R_COL_CD"));
					subObject.put("R_COL_NM", rs.getString("R_COL_NM"));
					subObject.put("R_CR_RATE", rs.getString("R_CR_RATE"));
					subObject.put("R_CR_AMT", rs.getString("R_CR_AMT"));
					subObject.put("REMARK", rs.getString("REMARK"));
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
			//계약금 SYNC
			else if (V_TYPE.equals("SYNC")) {
				request.setCharacterEncoding("utf-8");
				String[] findList = { "#", "+", "&", "%", " " };
				String[] replList = { "%23", "%2B", "%26", "%25", "%20" };

				String data = request.getParameter("data");
				data = StringUtils.replaceEach(data, findList, replList);
				String jsonData = URLDecoder.decode(data, "UTF-8");

				// 								System.out.println(jsonData);

				if (jsonData.lastIndexOf("},{") > 0) { //배열일경우
					JSONArray jsonAr = (JSONArray) JSONValue.parse(jsonData);

					for (int i = 0; i < jsonAr.size(); i++) {
						HashMap hashMap = (HashMap) jsonAr.get(i);
						V_TYPE = hashMap.get("V_TYPE") == null ? "" : hashMap.get("V_TYPE").toString();
						String V_R_CR_NO = hashMap.get("R_CR_NO") == null ? "" : hashMap.get("R_CR_NO").toString();
						String V_R_CR_SEQ = hashMap.get("R_CR_SEQ") == null ? "" : hashMap.get("R_CR_SEQ").toString();
						String V_R_CR_CD = hashMap.get("R_CR_CD") == null ? "" : hashMap.get("R_CR_CD").toString();
						String V_R_COL_CD = hashMap.get("R_COL_CD") == null ? "" : hashMap.get("R_COL_CD").toString();
						String V_R_CR_RATE = hashMap.get("R_CR_RATE") == null ? "" : hashMap.get("R_CR_RATE").toString();
						String V_REMARK = hashMap.get("REMARK") == null ? "" : hashMap.get("REMARK").toString();
						String V_R_CR_AMT = hashMap.get("R_CR_AMT") == null ? "" : hashMap.get("R_CR_AMT").toString();

						cs = conn.prepareCall("call USP_001_E_RISK_CR_STEEL(?,?,?,?,?,?,?,?,?,?,?,?)");
						cs.setString(1, V_TYPE);//V_TYPE
						cs.setString(2, V_COMP_ID);//V_COMP_ID
						cs.setString(3, V_RISK_NO);//V_RISK_NO
						cs.setString(4, V_R_CR_NO);//V_R_CR_NO
						cs.setString(5, V_R_CR_SEQ);//V_R_CR_SEQ
						cs.setString(6, V_R_CR_CD);//V_R_CR_CD
						cs.setString(7, V_R_COL_CD);//V_R_COL_CD
						cs.setString(8, V_R_CR_RATE);//V_R_CR_RATE
						cs.setString(9, V_USR_ID);//V_USR_ID
						cs.registerOutParameter(10, com.tmax.tibero.TbTypes.CURSOR);
						cs.setString(11, V_REMARK);//V_REMARK
						cs.setString(12, V_R_CR_AMT);//V_R_CR_AMT
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
					String V_R_CR_NO = jsondata.get("R_CR_NO") == null ? "" : jsondata.get("R_CR_NO").toString();
					String V_R_CR_SEQ = jsondata.get("R_CR_SEQ") == null ? "" : jsondata.get("R_CR_SEQ").toString();
					String V_R_CR_CD = jsondata.get("R_CR_CD") == null ? "" : jsondata.get("R_CR_CD").toString();
					String V_R_COL_CD = jsondata.get("R_COL_CD") == null ? "" : jsondata.get("R_COL_CD").toString();
					String V_R_CR_RATE = jsondata.get("R_CR_RATE") == null ? "" : jsondata.get("R_CR_RATE").toString();
					String V_REMARK = jsondata.get("REMARK") == null ? "" : jsondata.get("REMARK").toString();
					String V_R_CR_AMT = jsondata.get("R_CR_AMT") == null ? "" : jsondata.get("R_CR_AMT").toString();

					cs = conn.prepareCall("call USP_001_E_RISK_CR_STEEL(?,?,?,?,?,?,?,?,?,?,?,?)");
					cs.setString(1, V_TYPE);//V_TYPE
					cs.setString(2, V_COMP_ID);//V_COMP_ID
					cs.setString(3, V_RISK_NO);//V_RISK_NO
					cs.setString(4, V_R_CR_NO);//V_R_CR_NO
					cs.setString(5, V_R_CR_SEQ);//V_R_CR_SEQ
					cs.setString(6, V_R_CR_CD);//V_R_CR_CD
					cs.setString(7, V_R_COL_CD);//V_R_COL_CD
					cs.setString(8, V_R_CR_RATE);//V_R_CR_RATE
					cs.setString(9, V_USR_ID);//V_USR_ID
					cs.registerOutParameter(10, com.tmax.tibero.TbTypes.CURSOR);
					cs.setString(11, V_REMARK);//V_REMARK
					cs.setString(12, V_R_CR_AMT);//V_REMARK

					cs.executeQuery();

					response.setContentType("text/plain; charset=UTF-8");
					PrintWriter pw = response.getWriter();
					pw.print("success");
					pw.flush();
					pw.close();

				}
			}
		} else if (V_TYPE2.equals("BN")) {

			//외상 조회
			if (V_TYPE.equals("S")) {

				cs = conn.prepareCall("call USP_001_E_RISK_BN_STEEL(?,?,?,?,?,?,?,?,?,?,?,?,?)");

				cs.setString(1, V_TYPE);//V_TYPE
				cs.setString(2, V_COMP_ID);//V_COMP_ID
				cs.setString(3, V_RISK_NO);//V_RISK_NO
				cs.setString(4, "");//V_R_BN_NO
				cs.setString(5, "");//V_R_BN_SEQ
				cs.setString(6, "");//V_R_BN_TYPE
				cs.setString(7, "");//V_R_BN_RATE
				cs.setString(8, V_USR_ID);//V_USR_ID
				cs.registerOutParameter(9, com.tmax.tibero.TbTypes.CURSOR);
				cs.setString(10, "");//V_REMARK
				cs.setString(11, "");//V_MORTGAGE_AMT
				cs.setString(12, "");//V_CREDIT_AMT
				cs.setString(13, "");//LOAN_RT
				cs.executeQuery();

				rs = (ResultSet) cs.getObject(9);

				while (rs.next()) {
					subObject = new JSONObject();
					subObject.put("RISK_NO", rs.getString("RISK_NO"));
					subObject.put("R_BN_NO", rs.getString("R_BN_NO"));
					subObject.put("R_BN_SEQ", rs.getString("R_BN_SEQ"));
					subObject.put("R_BN_TYPE", rs.getString("R_BN_TYPE"));
					subObject.put("R_BN_TYPE_NM", rs.getString("R_BN_TYPE_NM"));
					subObject.put("R_BN_RATE", rs.getString("R_BN_RATE"));
					subObject.put("REMARK", rs.getString("REMARK"));
					subObject.put("MORTGAGE_AMT", rs.getString("MORTGAGE_AMT"));
					subObject.put("CREDIT_AMT", rs.getString("CREDIT_AMT"));
					subObject.put("LOAN_RT", rs.getString("LOAN_RT"));
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
			//외상 SYNC
			else if (V_TYPE.equals("SYNC")) {
				request.setCharacterEncoding("utf-8");
				String[] findList = { "#", "+", "&", "%", " " };
				String[] replList = { "%23", "%2B", "%26", "%25", "%20" };

				String data = request.getParameter("data");
				data = StringUtils.replaceEach(data, findList, replList);
				String jsonData = URLDecoder.decode(data, "UTF-8");

				// 				System.out.println(jsonData);

				if (jsonData.lastIndexOf("},{") > 0) { //배열일경우
					JSONArray jsonAr = (JSONArray) JSONValue.parse(jsonData);

					for (int i = 0; i < jsonAr.size(); i++) {
						HashMap hashMap = (HashMap) jsonAr.get(i);
						V_TYPE = hashMap.get("V_TYPE") == null ? "" : hashMap.get("V_TYPE").toString();
						String V_R_BN_NO = hashMap.get("R_BN_NO") == null ? "" : hashMap.get("R_BN_NO").toString();
						String V_R_BN_SEQ = hashMap.get("R_BN_SEQ") == null ? "" : hashMap.get("R_BN_SEQ").toString();
						String V_R_BN_TYPE = hashMap.get("R_BN_TYPE") == null ? "" : hashMap.get("R_BN_TYPE").toString();
						String V_R_BN_RATE = hashMap.get("R_BN_RATE") == null ? "" : hashMap.get("R_BN_RATE").toString();
						String V_REMARK = hashMap.get("REMARK") == null ? "" : hashMap.get("REMARK").toString();
						String V_MORTGAGE_AMT = hashMap.get("MORTGAGE_AMT") == null ? "" : hashMap.get("MORTGAGE_AMT").toString();
						String V_CREDIT_AMT = hashMap.get("CREDIT_AMT") == null ? "" : hashMap.get("CREDIT_AMT").toString();
						String V_LOAN_RT = hashMap.get("LOAN_RT") == null ? "" : hashMap.get("LOAN_RT").toString();

						cs = conn.prepareCall("call USP_001_E_RISK_BN_STEEL(?,?,?,?,?,?,?,?,?,?,?,?,?)");

						cs.setString(1, V_TYPE);//V_TYPE
						cs.setString(2, V_COMP_ID);//V_COMP_ID
						cs.setString(3, V_RISK_NO);//V_RISK_NO
						cs.setString(4, V_R_BN_NO);//V_R_BN_NO
						cs.setString(5, V_R_BN_SEQ);//V_R_BN_SEQ
						cs.setString(6, V_R_BN_TYPE);//V_R_BN_TYPE
						cs.setString(7, V_R_BN_RATE);//V_R_BN_RATE
						cs.setString(8, V_USR_ID);//V_USR_ID
						cs.registerOutParameter(9, com.tmax.tibero.TbTypes.CURSOR);
						cs.setString(10, V_REMARK);//V_REMARK
						cs.setString(11, V_MORTGAGE_AMT);//V_MORTGAGE_AMT
						cs.setString(12, V_CREDIT_AMT);//V_CREDIT_AMT
						cs.setString(13, V_LOAN_RT);//V_LOAN_RT
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
					String V_R_BN_NO = jsondata.get("R_BN_NO") == null ? "" : jsondata.get("R_BN_NO").toString();
					String V_R_BN_SEQ = jsondata.get("R_BN_SEQ") == null ? "" : jsondata.get("R_BN_SEQ").toString();
					String V_R_BN_TYPE = jsondata.get("R_BN_TYPE") == null ? "" : jsondata.get("R_BN_TYPE").toString();
					String V_R_BN_RATE = jsondata.get("R_BN_RATE") == null ? "" : jsondata.get("R_BN_RATE").toString();
					String V_REMARK = jsondata.get("REMARK") == null ? "" : jsondata.get("REMARK").toString();
					String V_MORTGAGE_AMT = jsondata.get("MORTGAGE_AMT") == null ? "" : jsondata.get("MORTGAGE_AMT").toString();
					String V_CREDIT_AMT = jsondata.get("CREDIT_AMT") == null ? "" : jsondata.get("CREDIT_AMT").toString();
					String V_LOAN_RT = jsondata.get("LOAN_RT") == null ? "" : jsondata.get("LOAN_RT").toString();

					cs = conn.prepareCall("call USP_001_E_RISK_BN_STEEL(?,?,?,?,?,?,?,?,?,?,?,?,?)");

					cs.setString(1, V_TYPE);//V_TYPE
					cs.setString(2, V_COMP_ID);//V_COMP_ID
					cs.setString(3, V_RISK_NO);//V_RISK_NO
					cs.setString(4, V_R_BN_NO);//V_R_BN_NO
					cs.setString(5, V_R_BN_SEQ);//V_R_BN_SEQ
					cs.setString(6, V_R_BN_TYPE);//V_R_BN_TYPE
					cs.setString(7, V_R_BN_RATE);//V_R_BN_RATE
					cs.setString(8, V_USR_ID);//V_USR_ID
					cs.registerOutParameter(9, com.tmax.tibero.TbTypes.CURSOR);
					cs.setString(10, V_REMARK);//V_REMARK
					cs.setString(11, V_MORTGAGE_AMT);//V_MORTGAGE_AMT
					cs.setString(12, V_CREDIT_AMT);//V_CREDIT_AMT
					cs.setString(13, V_LOAN_RT);//V_LOAN_RT
					cs.executeQuery();

					response.setContentType("text/plain; charset=UTF-8");
					PrintWriter pw = response.getWriter();
					pw.print("success");
					pw.flush();
					pw.close();

				}
			}

		} else if (V_TYPE2.equals("RT")) {

			//이자 조회
			if (V_TYPE.equals("S")) {

				cs = conn.prepareCall("call USP_001_E_RISK_RT_STEEL(?,?,?,?,?,?,?,?,?,?,?,?,?)");

				cs.setString(1, V_TYPE);//V_TYPE
				cs.setString(2, V_COMP_ID);//V_COMP_ID
				cs.setString(3, V_RISK_NO);//V_RISK_NO
				cs.setString(4, "");//V_R_RT_NO
				cs.setString(5, "");//V_R_RT_SEQ
				cs.setString(6, "");//V_R_RT_FR
				cs.setString(7, "");//V_R_RT_TO
				cs.setString(8, "");//V_R_RT_RATE
				cs.setString(9, V_USR_ID);//V_USR_ID
				cs.registerOutParameter(10, com.tmax.tibero.TbTypes.CURSOR);
				cs.setString(11, "");//V_REMARK
				cs.setString(12, "");//V_R_STATUS
				cs.setString(13, "");//V_R_STATUS
				cs.executeQuery();

				rs = (ResultSet) cs.getObject(10);

				while (rs.next()) {
					subObject = new JSONObject();
					subObject.put("RISK_NO", rs.getString("RISK_NO"));
					subObject.put("R_RT_NO", rs.getString("R_RT_NO"));
					subObject.put("R_RT_SEQ", rs.getString("R_RT_SEQ"));
					subObject.put("R_RT_FR", rs.getString("R_RT_FR"));
					subObject.put("R_RT_TO", rs.getString("R_RT_TO"));
					subObject.put("R_RT_RATE", rs.getString("R_RT_RATE"));
					subObject.put("REMARK", rs.getString("REMARK"));
					subObject.put("R_RT_STATUS", rs.getString("R_RT_STATUS"));
					subObject.put("R_RT_STATUS_DT", rs.getString("R_RT_STATUS_DT"));
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
			//외상 SYNC
			else if (V_TYPE.equals("SYNC")) {
				request.setCharacterEncoding("utf-8");
				String[] findList = { "#", "+", "&", "%", " " };
				String[] replList = { "%23", "%2B", "%26", "%25", "%20" };

				String data = request.getParameter("data");
				data = StringUtils.replaceEach(data, findList, replList);
				String jsonData = URLDecoder.decode(data, "UTF-8");

				//				System.out.println(jsonData);

				if (jsonData.lastIndexOf("},{") > 0) { //배열일경우
					JSONArray jsonAr = (JSONArray) JSONValue.parse(jsonData);

					for (int i = 0; i < jsonAr.size(); i++) {
						HashMap hashMap = (HashMap) jsonAr.get(i);
						V_TYPE = hashMap.get("V_TYPE") == null ? "" : hashMap.get("V_TYPE").toString();
						String V_R_RT_NO = hashMap.get("R_RT_NO") == null ? "" : hashMap.get("R_RT_NO").toString();
						String V_R_RT_SEQ = hashMap.get("R_RT_SEQ") == null ? "" : hashMap.get("R_RT_SEQ").toString();
						String V_R_RT_FR = hashMap.get("R_RT_FR") == null ? "" : hashMap.get("R_RT_FR").toString();
						String V_R_RT_TO = hashMap.get("R_RT_TO") == null ? "" : hashMap.get("R_RT_TO").toString();
						String V_R_RT_RATE = hashMap.get("R_RT_RATE") == null ? "" : hashMap.get("R_RT_RATE").toString();
						String V_REMARK = hashMap.get("REMARK") == null ? "" : hashMap.get("REMARK").toString();
						String V_R_RT_STATUS = hashMap.get("R_RT_STATUS") == null ? "" : hashMap.get("R_RT_STATUS").toString();
						String V_R_RT_STATUS_DT = hashMap.get("R_RT_STATUS_DT") == null ? "" : hashMap.get("R_RT_STATUS_DT").toString();

						cs = conn.prepareCall("call USP_001_E_RISK_RT_STEEL(?,?,?,?,?,?,?,?,?,?,?,?,?)");

						cs.setString(1, V_TYPE);//V_TYPE
						cs.setString(2, V_COMP_ID);//V_COMP_ID
						cs.setString(3, V_RISK_NO);//V_RISK_NO
						cs.setString(4, V_R_RT_NO);//V_R_RT_NO
						cs.setString(5, V_R_RT_SEQ);//V_R_RT_SEQ
						cs.setString(6, V_R_RT_FR);//V_R_RT_FR
						cs.setString(7, V_R_RT_TO);//V_R_RT_TO
						cs.setString(8, V_R_RT_RATE);//V_R_RT_TO
						cs.setString(9, V_USR_ID);//V_USR_ID
						cs.registerOutParameter(10, com.tmax.tibero.TbTypes.CURSOR);
						cs.setString(11, V_REMARK);//V_REMARK
						cs.setString(12, V_R_RT_STATUS);//V_R_STATUS
						cs.setString(13, V_R_RT_STATUS_DT);//V_R_STATUS
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
					String V_R_RT_NO = jsondata.get("R_RT_NO") == null ? "" : jsondata.get("R_RT_NO").toString();
					String V_R_RT_SEQ = jsondata.get("R_RT_SEQ") == null ? "" : jsondata.get("R_RT_SEQ").toString();
					String V_R_RT_FR = jsondata.get("R_RT_FR") == null ? "" : jsondata.get("R_RT_FR").toString();
					String V_R_RT_TO = jsondata.get("R_RT_TO") == null ? "" : jsondata.get("R_RT_TO").toString();
					String V_R_RT_RATE = jsondata.get("R_RT_RATE") == null ? "" : jsondata.get("R_RT_RATE").toString();
					String V_REMARK = jsondata.get("REMARK") == null ? "" : jsondata.get("REMARK").toString();
					String V_R_RT_STATUS = jsondata.get("R_RT_STATUS") == null ? "" : jsondata.get("R_RT_STATUS").toString();
					String V_R_RT_STATUS_DT = jsondata.get("R_RT_STATUS_DT") == null ? "" : jsondata.get("R_RT_STATUS_DT").toString();

					cs = conn.prepareCall("call USP_001_E_RISK_RT_STEEL(?,?,?,?,?,?,?,?,?,?,?,?,?)");

					cs.setString(1, V_TYPE);//V_TYPE
					cs.setString(2, V_COMP_ID);//V_COMP_ID
					cs.setString(3, V_RISK_NO);//V_RISK_NO
					cs.setString(4, V_R_RT_NO);//V_R_RT_NO
					cs.setString(5, V_R_RT_SEQ);//V_R_RT_SEQ
					cs.setString(6, V_R_RT_FR);//V_R_RT_FR
					cs.setString(7, V_R_RT_TO);//V_R_RT_TO
					cs.setString(8, V_R_RT_RATE);//V_R_RT_TO
					cs.setString(9, V_USR_ID);//V_USR_ID
					cs.registerOutParameter(10, com.tmax.tibero.TbTypes.CURSOR);
					cs.setString(11, V_REMARK);//V_REMARK
					cs.setString(12, V_R_RT_STATUS);//V_R_RT_STATUS
					cs.setString(13, V_R_RT_STATUS_DT);//V_R_STATUS
					cs.executeQuery();

					response.setContentType("text/plain; charset=UTF-8");
					PrintWriter pw = response.getWriter();
					pw.print("success");
					pw.flush();
					pw.close();

				}
			}

			/*복사*/
		} else if (V_TYPE.equals("CP") || V_TYPE.equals("STATUS")) {
			cs = conn.prepareCall("call USP_001_E_RISK_HD_STEEL(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)");
			cs.setString(1, V_TYPE);//V_TYPE
			cs.setString(2, V_COMP_ID);//V_COMP_ID
			cs.setString(3, V_RISK_NO);//V_RISK_NO
			cs.setString(4, "");//V_RISK_DOC_NO
			cs.setString(5, "");//V_DEPT_CD
			cs.setString(6, "");//V_QTY
			cs.setString(7, "");//V_RISK_DT
			cs.setString(8, "");//V_RISK_NM
			cs.setString(9, "");//V_SALE_TYPE
			cs.setString(10, "");//V_IV_TYPE
			cs.setString(11, "");//V_MON_APR_AMT
			cs.setString(12, "");//V_SUM_APR_AMT
			cs.setString(13, "");//V_BILL_LT_APR_AMT
			cs.setString(14, "");//V_MON_USE_AMT
			cs.setString(15, "");//V_SUM_USE_AMT
			cs.setString(16, "");//V_BILL_LT_USE_AMT
			cs.setString(17, "");//V_PAY_METH
			cs.setString(18, "");//V_BILL_LT_AMT
			cs.setString(19, "");//V_MID_TYPE
			cs.setString(20, "");//V_MID_RATE
			cs.setString(21, "");//V_HEDGE_AMT
			cs.setString(22, "");//V_REMARK
			cs.setString(23, V_USR_ID);//V_USR_ID
			cs.registerOutParameter(24, com.tmax.tibero.TbTypes.CURSOR);
			cs.setString(25, "");//
			cs.setString(26, "");//
			cs.setString(27, "");//
			cs.setString(28, "");//
			cs.setString(29, "");//
			cs.setString(30, "");//
			cs.setString(31, "");//
			cs.setString(32, "");//
			cs.executeQuery();

			rs = (ResultSet) cs.getObject(24);

			String RISK_NO = "";
			String STATUS = "";

			while (rs.next()) {
				if (V_TYPE.equals("CP")) {
					RISK_NO = rs.getString("RISK_NO");
				} else {
					STATUS = rs.getString("STATUS");
				}
			}

			// 			System.out.println(RISK_NO);
			// 			System.out.println(STATUS);

			response.setContentType("text/plain; charset=UTF-8");
			PrintWriter pw = response.getWriter();

			if (V_TYPE.equals("CP")) {
				pw.print(RISK_NO);
			} else {
				pw.print(STATUS);
			}
			pw.flush();
			pw.close();
		} else if (V_TYPE2.equals("S_RT")) {

			if (V_TYPE.equals("S")) {

				cs = conn.prepareCall("call USP_001_E_RISK_S_RT_STEEL(?,?,?,?,?,?,?,?,?,?,?,?)");

				cs.setString(1, V_TYPE);//V_TYPE
				cs.setString(2, V_COMP_ID);//V_COMP_ID
				cs.setString(3, V_RISK_NO);//V_RISK_NO
				cs.setString(4, V_RISK_NO);//V_RISK_NO
				cs.setString(5, "");//V_R_RT_NO
				cs.setString(6, "");//V_R_RT_SEQ
				cs.setString(7, "");//V_R_RT_FR
				cs.setString(8, "");//V_R_RT_TO
				cs.setString(9, "");//V_R_RT_RATE
				cs.setString(10, "");//V_USR_ID
				cs.setString(11, V_USR_ID);//V_REMARK
				cs.registerOutParameter(12, com.tmax.tibero.TbTypes.CURSOR);
				cs.executeQuery();

				rs = (ResultSet) cs.getObject(12);
				while (rs.next()) {
					subObject = new JSONObject();
					subObject.put("SRT_NO", rs.getString("SRT_NO"));
					subObject.put("RISK_NO", rs.getString("RISK_NO"));
					subObject.put("BAS_DT", rs.getString("BAS_DT"));
					subObject.put("S_BP_CD", rs.getString("S_BP_CD"));
					subObject.put("S_TYPE", rs.getString("S_TYPE"));
					subObject.put("PROFIT_CNT", rs.getString("PROFIT_CNT"));
					subObject.put("PROFIT_TYPE", rs.getString("PROFIT_TYPE"));
					subObject.put("PROFIT_RT", rs.getString("PROFIT_RT"));
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
			//외상 SYNC
			else if (V_TYPE.equals("SYNC")) {
				request.setCharacterEncoding("utf-8");
				String[] findList = { "#", "+", "&", "%", " " };
				String[] replList = { "%23", "%2B", "%26", "%25", "%20" };

				String data = request.getParameter("data");
				data = StringUtils.replaceEach(data, findList, replList);
				String jsonData = URLDecoder.decode(data, "UTF-8");

				// 				System.out.println(jsonData);

				if (jsonData.lastIndexOf("},{") > 0) { //배열일경우
					JSONArray jsonAr = (JSONArray) JSONValue.parse(jsonData);

					for (int i = 0; i < jsonAr.size(); i++) {
						HashMap hashMap = (HashMap) jsonAr.get(i);
						V_TYPE = hashMap.get("V_TYPE") == null ? "" : hashMap.get("V_TYPE").toString();
						String V_SRT_NO = hashMap.get("SRT_NO") == null ? "" : hashMap.get("SRT_NO").toString();
						String V_BAS_DT = request.getParameter("V_BAS_DT") == null ? "" : request.getParameter("V_BAS_DT").substring(0, 10);
						String V_S_BP_CD = request.getParameter("V_S_BP_CD") == null ? "" : request.getParameter("V_S_BP_CD").toUpperCase();
						String V_S_TYPE = request.getParameter("V_S_TYPE") == null ? "" : request.getParameter("V_S_TYPE").toUpperCase();
						String V_PROFIT_CNT = hashMap.get("PROFIT_CNT") == null ? "" : hashMap.get("PROFIT_CNT").toString();
						String V_PROFIT_TYPE = hashMap.get("PROFIT_TYPE") == null ? "" : hashMap.get("PROFIT_TYPE").toString();
						String V_PROFIT_RT = hashMap.get("PROFIT_RT") == null ? "" : hashMap.get("PROFIT_RT").toString();

						cs = conn.prepareCall("call USP_001_E_RISK_S_RT_STEEL(?,?,?,?,?,?,?,?,?,?,?,?)");

						cs.setString(1, V_TYPE);//V_TYPE
						cs.setString(2, V_COMP_ID);//V_COMP_ID
						cs.setString(3, V_SRT_NO);//V_RISK_NO
						cs.setString(4, V_RISK_NO);//V_RISK_NO
						cs.setString(5, V_BAS_DT);//V_BAS_DT
						cs.setString(6, V_S_BP_CD);//V_S_BP_CD
						cs.setString(7, V_S_TYPE);//V_S_TYPE
						cs.setString(8, V_PROFIT_CNT);//V_PROFIT_CNT
						cs.setString(9, V_PROFIT_TYPE);//V_PROFIT_TYPE
						cs.setString(10, V_PROFIT_RT);//V_PROFIT_RT
						cs.setString(11, V_USR_ID);//V_USR_ID
						cs.registerOutParameter(12, com.tmax.tibero.TbTypes.CURSOR);
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
					String V_SRT_NO = jsondata.get("SRT_NO") == null ? "" : jsondata.get("SRT_NO").toString();
					String V_BAS_DT = request.getParameter("V_BAS_DT") == null ? "" : request.getParameter("V_BAS_DT").substring(0, 10);
					String V_S_BP_CD = request.getParameter("V_S_BP_CD") == null ? "" : request.getParameter("V_S_BP_CD").toUpperCase();
					String V_S_TYPE = request.getParameter("V_S_TYPE") == null ? "" : request.getParameter("V_S_TYPE").toUpperCase();
					String V_PROFIT_CNT = jsondata.get("PROFIT_CNT") == null ? "" : jsondata.get("PROFIT_CNT").toString();
					String V_PROFIT_TYPE = jsondata.get("PROFIT_TYPE") == null ? "" : jsondata.get("PROFIT_TYPE").toString();
					String V_PROFIT_RT = jsondata.get("PROFIT_RT") == null ? "" : jsondata.get("PROFIT_RT").toString();

					cs = conn.prepareCall("call USP_001_E_RISK_S_RT_STEEL(?,?,?,?,?,?,?,?,?,?,?,?)");

					cs.setString(1, V_TYPE);//V_TYPE
					cs.setString(2, V_COMP_ID);//V_COMP_ID
					cs.setString(3, V_SRT_NO);//V_RISK_NO
					cs.setString(4, V_RISK_NO);//V_RISK_NO
					cs.setString(5, V_BAS_DT);//V_BAS_DT
					cs.setString(6, V_S_BP_CD);//V_S_BP_CD
					cs.setString(7, V_S_TYPE);//V_S_TYPE
					cs.setString(8, V_PROFIT_CNT);//V_PROFIT_CNT
					cs.setString(9, V_PROFIT_TYPE);//V_PROFIT_TYPE
					cs.setString(10, V_PROFIT_RT);//V_PROFIT_RT
					cs.setString(11, V_USR_ID);//V_USR_ID
					cs.registerOutParameter(12, com.tmax.tibero.TbTypes.CURSOR);
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


