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

<%@page import="java.text.SimpleDateFormat"%>
<%@page import="java.util.Date"%>

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
		String V_USR_ID = request.getParameter("V_USR_ID") == null ? ""	: request.getParameter("V_USR_ID").toUpperCase();
		String V_MVMT_DT_FR = request.getParameter("V_MVMT_DT_FR") == null ? ""	: request.getParameter("V_MVMT_DT_FR").toUpperCase().substring(0, 10);
		String V_MVMT_DT_TO = request.getParameter("V_MVMT_DT_TO") == null ? ""	: request.getParameter("V_MVMT_DT_TO").toUpperCase().substring(0, 10);
		String V_LC_DOC_NO = request.getParameter("V_LC_DOC_NO") == null ? "" : request.getParameter("V_LC_DOC_NO").toUpperCase();
		String V_BL_DOC_NO = request.getParameter("V_BL_DOC_NO") == null ? "" : request.getParameter("V_BL_DOC_NO").toUpperCase();
		String V_MVMT_NO = request.getParameter("V_MVMT_NO") == null ? "" : request.getParameter("V_MVMT_NO").toUpperCase();
		String V_DN_DT_FR = request.getParameter("V_DN_DT_FR") == null ? "" : request.getParameter("V_DN_DT_FR").toUpperCase().substring(0, 10);
		String V_DN_DT_TO = request.getParameter("V_DN_DT_TO") == null ? ""	: request.getParameter("V_DN_DT_TO").toUpperCase().substring(0, 10);
		String V_DN_DT = request.getParameter("V_DN_DT") == null ? "" : request.getParameter("V_DN_DT").toUpperCase().substring(0, 10);
		String V_S_BP_NM = request.getParameter("V_S_BP_NM") == null ? "" : request.getParameter("V_S_BP_NM").toUpperCase();
		String V_S_BP_CD = request.getParameter("V_S_BP_CD") == null ? "" : request.getParameter("V_S_BP_CD").toUpperCase();
		String V_M_BP_NM = request.getParameter("V_M_BP_NM") == null ? "" : request.getParameter("V_M_BP_NM").toUpperCase();
		String V_ITEM_CD = request.getParameter("V_ITEM_CD") == null ? "" : request.getParameter("V_ITEM_CD").toUpperCase();
		String V_ITEM_NM = request.getParameter("V_ITEM_NM") == null ? "" : request.getParameter("V_ITEM_NM").toUpperCase();

		//상단
		if (V_TYPE.equals("SH")) {

			cs = conn.prepareCall("call USP_003_M_GR_TO_DN_TOT_HSPF(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)");
			cs.setString(1, V_COMP_ID);//V_COMP_ID
			cs.setString(2, V_TYPE);//V_TYPE
			cs.setString(3, "");//V_ITS_NO
			cs.setString(4, V_MVMT_DT_FR);//V_MVMT_DT_FR
			cs.setString(5, V_MVMT_DT_TO);//V_DN_DT
			cs.setString(6, "");//V_DN_DT
			cs.setString(7, "");//V_DN_NO
			cs.setString(8, "");//V_DN_SEQ
			cs.setString(9, V_S_BP_NM);//V_S_BP_CD
			cs.setString(10, "");//V_SALE_TYPE
			cs.setString(11, "");//V_CUR
			cs.setString(12, "");//V_DN_XCHG_RT
			cs.setString(13, V_ITEM_CD);//V_ITEM_CD
			cs.setString(14, "");//V_DN_QTY
			cs.setString(15, V_ITEM_NM);//V_ITEM_NM
			cs.setString(16, "");//V_DN_BOX_WGT_UNIT
			cs.setString(17, "");//V_DN_REAL_QTY
			cs.setString(18, "");//V_DN_PRC
			cs.setString(19, "");//V_DN_AMT
			cs.setString(20, "");//V_DN_LOC_AMT
			cs.setString(21, "");//V_SALE_ISSUE_DT
			cs.setString(22, "");//V_REMARK
			cs.setString(23, "");//V_MVMT_NO
			cs.setString(24, V_LC_DOC_NO);//V_LC_DOC_NO
			cs.setString(25, V_BL_DOC_NO);//V_BL_DOC_NO
			cs.setString(26, "");//V_USR_ID
			cs.registerOutParameter(27, com.tmax.tibero.TbTypes.CURSOR);
			cs.setString(28, "");//V_FIRST_YN
			cs.setString(29, V_M_BP_NM);//V_M_BP_NM
			cs.setString(30, "");//V_FIRST_YN
			cs.executeQuery();

			rs = (ResultSet) cs.getObject(27);

			while (rs.next()) {
				subObject = new JSONObject();
				subObject.put("MVMT_NO", rs.getString("MVMT_NO"));
				subObject.put("M_BP_CD", rs.getString("M_BP_CD"));
				subObject.put("M_BP_NM", rs.getString("M_BP_NM"));
				subObject.put("IV_TYPE", rs.getString("IV_TYPE"));
				subObject.put("IV_TYPE_NM", rs.getString("IV_TYPE_NM"));
				subObject.put("APPROV_NO", rs.getString("APPROV_NO"));
				subObject.put("APPROV_TYPE", rs.getString("APPROV_TYPE"));
				subObject.put("PO_NO", rs.getString("PO_NO"));
				subObject.put("PO_SEQ", rs.getString("PO_SEQ"));
				subObject.put("LC_DOC_NO", rs.getString("LC_DOC_NO"));
				subObject.put("BL_DOC_NO", rs.getString("BL_DOC_NO"));
				subObject.put("CONT_NO", rs.getString("CONT_NO"));
				subObject.put("CONT_QTY", rs.getString("CONT_QTY"));
				subObject.put("ITEM_CD", rs.getString("ITEM_CD"));
				subObject.put("ITEM_NM", rs.getString("ITEM_NM"));
// 				subObject.put("BOX_QTY", rs.getString("BOX_QTY"));
// 				subObject.put("BOX_WGT_UNIT", rs.getString("BOX_WGT_UNIT"));
				subObject.put("QTY", rs.getString("QTY"));
				subObject.put("CUR", rs.getString("CUR"));
				subObject.put("XCHG_RT", rs.getString("XCHG_RT"));
				subObject.put("FORWARD_XCH_RT", rs.getString("FORWARD_XCH_RT"));
				subObject.put("FORWARD_XCH_AMT", rs.getString("FORWARD_XCH_AMT"));
				subObject.put("ID_DT", rs.getString("ID_DT"));
				subObject.put("IN_DT", rs.getString("IN_DT"));
				subObject.put("MVMT_DT", rs.getString("MVMT_DT"));
				subObject.put("SL_CD", rs.getString("SL_CD"));
				subObject.put("SL_NM", rs.getString("SL_NM"));
// 				subObject.put("RE_BOX_QTY", rs.getString("RE_BOX_QTY"));
				subObject.put("STOCK_QTY", rs.getString("STOCK_QTY"));
				subObject.put("REMAIN", rs.getString("REMAIN"));
				subObject.put("SALE_TYPE", rs.getString("SALE_TYPE"));
				subObject.put("S_BP_CD", rs.getString("S_BP_CD"));
				subObject.put("S_BP_NM", rs.getString("S_BP_NM"));
				subObject.put("DN_DT", rs.getString("DN_DT"));
				subObject.put("DN_QTY", rs.getString("DN_QTY"));
				subObject.put("DN_CUR", rs.getString("DN_CUR"));
				subObject.put("DN_XCHG_RT", rs.getString("DN_XCHG_RT"));
				subObject.put("DN_PRC", rs.getString("DN_PRC"));
				subObject.put("DN_AMT", rs.getString("DN_AMT"));
				subObject.put("DN_LOC_AMT", rs.getString("DN_LOC_AMT"));
				subObject.put("DN_CONT_QTY", rs.getString("DN_CONT_QTY"));
// 				subObject.put("REMAIN_BOX_QTY", rs.getString("REQ_BOX_QTY"));
// 				subObject.put("DN_BOX_QTY", rs.getString("DN_BOX_QTY"));
// 				subObject.put("APPROV_NM", rs.getString("APPROV_NM"));
				subObject.put("IV_PRC", rs.getString("IV_PRC"));
// 				subObject.put("ADD_DN_AMT", rs.getString("ADD_DN_AMT"));
				subObject.put("SALE_PRC", rs.getString("SALE_PRC"));
				subObject.put("REMARK", rs.getString("REMARK"));
				subObject.put("GR_TYPE", rs.getString("GR_TYPE"));

// 				if (rs.getString("DN_BOX_QTY").equals("0")) {
					subObject.put("SALE_TYPE", "DSO");
					subObject.put("DN_CUR", "KRW");
					subObject.put("DN_XCHG_RT", "1");
					subObject.put("DN_DT", V_DN_DT);
					subObject.put("ISSUE_DT", V_DN_DT);
// 				}
				jsonArray.add(subObject);
			}

			jsonObject.put("success", true);
			jsonObject.put("resultList", jsonArray);

			response.setContentType("text/plain; charset=UTF-8");
			PrintWriter pw = response.getWriter();
			pw.print(jsonObject);
			pw.flush();
			pw.close();

			//하단
		} else if (V_TYPE.equals("SD")) {

			String sql = "";
			sql = "";
			sql += "  SELECT TO_CHAR(A.DN_DT, 'YYYY-MM-DD') DN_DT, A.ITS_NO, A.DN_NO, A.DN_SEQ, A.ITEM_CD, C.ITEM_NM ";
			sql += "       , A.DN_NO, A.DN_SEQ, A.S_BP_CD, B.BP_NM S_BP_NM, A.DN_QTY, A.VAT_AMT                      ";
			sql += "       , ROUND((DN_LOC_AMT)/A.DN_QTY,2) DN_PRC, DN_LOC_AMT, COG_AMT 				 			 ";
			sql += "       , A.MVMT_NO, NVL(E.BL_DOC_NO, E2.BL_DOC_NO) BL_DOC_NO, NVL(ROUND(A.COG_AMT/A.DN_QTY, 2), 0) SALE_PRC, D.TEMP_GL_NO     ";
			sql += "       , NVL(A.DN_DT-D.MVMT_DT+1, 0) OWN_DT, D.M_BP_CD, G.BP_NM M_BP_NM   ";
			sql += "       , H.DTL_NM SALE_TYPE   ";
			sql += "       , case when I.LOT_BC_NO is not null then 'Y' else 'N' END BARCODE_YN , A.REMARK  ";
			sql += " FROM   M_GR_TO_DN_TOT_HSPF A                                             ";
			sql += " LEFT OUTER JOIN B_BIZ_HSPF B                                             ";
			sql += " ON     A.COMP_ID=B.COMP_ID                                               ";
			sql += " AND    A.S_BP_CD=B.BP_CD                                                 ";
			sql += " LEFT OUTER JOIN B_ITEM_HSPF C                                            ";
			sql += " ON     A.COMP_ID=C.COMP_ID                                               ";
			sql += " AND    A.ITEM_CD=C.ITEM_CD                                               ";
			sql += " LEFT OUTER JOIN M_GR_TOT_HSPF D                                          ";
			sql += " ON     A.MVMT_NO = D.MVMT_NO                                             ";
			sql += " LEFT OUTER JOIN M_CC_HDR_TOT_HSPF E                                      ";
			sql += " ON     D.CC_NO = E.CC_NO                                                 ";
			
			sql += " LEFT OUTER JOIN M_BL_HDR_TOT_HSPF E2                                      ";
			sql += " ON     D.BL_NO = E2.BL_NO                                                 ";
			sql += " LEFT OUTER JOIN M_PO_DTL_TOT_HSPF F ";
			sql += " ON     D.PO_NO = F.PO_NO ";
			sql += " AND    D.PO_SEQ = F.PO_SEQ ";
			sql += " LEFT OUTER JOIN B_BIZ_HSPF G                                             ";
			sql += " ON     D.COMP_ID=G.COMP_ID                                               ";
			sql += " AND    D.M_BP_CD=G.BP_CD                                                 ";
			sql += " LEFT OUTER JOIN B_DTL_INFO H ON H.MAST_CD = 'SC02' and A.SALE_TYPE = H.DTL_CD ";
			sql += " LEFt OUTER jOIN (SELECT DN_NO, MAX(LOT_BC_NO) LOT_BC_NO from S_DN_DIREC_BC_TOT_HSPF group by DN_NO) I ON A.DN_NO = I.DN_NO ";
			
			//전체보기
			if (V_BL_DOC_NO.equals("")) {
				sql += " WHERE A.MVMT_NO IN " + V_MVMT_NO + "";
			} else if (!V_BL_DOC_NO.equals("*")) {
				sql += " WHERE    (E.BL_DOC_NO LIKE '%" + V_BL_DOC_NO + "%' OR E2.BL_DOC_NO LIKE '%" + V_BL_DOC_NO + "%')";
			} else if (V_BL_DOC_NO.equals("*")) {
				sql += " WHERE      A.DN_DT >= '" + V_DN_DT_FR + "'";
				sql += " AND      A.DN_DT <= '" + V_DN_DT_TO + "'";
			}
			if(!V_S_BP_CD.equals("")){
				sql += " AND      UPPER(B.BP_CD) LIKE '%" + V_S_BP_CD + "%'";
			}
			else{
				sql += " AND      UPPER(B.BP_NM) LIKE '%" + V_S_BP_NM + "%'";
			}
			sql += " ORDER BY A.DN_DT, A.ITS_NO";

			
			rs = stmt.executeQuery(sql);

			while (rs.next()) {
				subObject = new JSONObject();
				subObject.put("DN_DT", rs.getString("DN_DT"));
				subObject.put("ITS_NO", rs.getString("ITS_NO"));
				subObject.put("DN_NO", rs.getString("DN_NO"));
				subObject.put("DN_SEQ", rs.getString("DN_SEQ"));
				subObject.put("ITEM_CD", rs.getString("ITEM_CD"));
				subObject.put("ITEM_NM", rs.getString("ITEM_NM"));
				subObject.put("S_BP_CD", rs.getString("S_BP_CD"));
				subObject.put("S_BP_NM", rs.getString("S_BP_NM"));
				subObject.put("M_BP_CD", rs.getString("M_BP_CD"));
				subObject.put("M_BP_NM", rs.getString("M_BP_NM"));
				subObject.put("DN_QTY", rs.getString("DN_QTY"));
				subObject.put("DN_PRC", rs.getString("DN_PRC"));
				subObject.put("DN_LOC_AMT", rs.getString("DN_LOC_AMT"));
				subObject.put("VAT_AMT", rs.getString("VAT_AMT"));
				subObject.put("COG_AMT", rs.getString("COG_AMT"));
				subObject.put("MVMT_NO", rs.getString("MVMT_NO"));
				subObject.put("BL_DOC_NO", rs.getString("BL_DOC_NO"));
				subObject.put("SALE_PRC", rs.getString("SALE_PRC"));
				subObject.put("TEMP_GL_NO", rs.getString("TEMP_GL_NO"));
				subObject.put("OWN_DT", rs.getString("OWN_DT"));
				subObject.put("SALE_TYPE", rs.getString("SALE_TYPE"));
				subObject.put("BARCODE_YN", rs.getString("BARCODE_YN"));
				subObject.put("REMARK", rs.getString("REMARK"));
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

			String V_DN_SEQ = "";

			if (jsonData.lastIndexOf("},{") > 0) { //배열일경우
				JSONArray jsonAr = (JSONArray) JSONValue.parse(jsonData);

				for (int i = 0; i < jsonAr.size(); i++) {
					HashMap hashMap = (HashMap) jsonAr.get(i);
					String V_DN_NO = request.getParameter("V_DN_NO") == null ? "" : request.getParameter("V_DN_NO").toUpperCase();
					V_DN_DT = request.getParameter("V_DN_DT") == null ? "" : request.getParameter("V_DN_DT").toUpperCase().substring(0, 10);
					V_TYPE = hashMap.get("V_TYPE") == null ? "" : hashMap.get("V_TYPE").toString();

					if (!V_TYPE.equals("")) {
						String V_ITS_NO = hashMap.get("ITS_NO") == null ? "" : hashMap.get("ITS_NO").toString();
						V_S_BP_CD = hashMap.get("S_BP_CD") == null ? ""	: hashMap.get("S_BP_CD").toString();
						String V_SALE_TYPE = hashMap.get("SALE_TYPE") == null ? ""	: hashMap.get("SALE_TYPE").toString();
						String V_DN_CUR = hashMap.get("DN_CUR") == null ? "" : hashMap.get("DN_CUR").toString();
						String V_DN_XCHG_RT = hashMap.get("DN_XCHG_RT") == null ? "": hashMap.get("DN_XCHG_RT").toString();
						V_ITEM_CD = hashMap.get("ITEM_CD") == null ? ""	: hashMap.get("ITEM_CD").toString();
						String V_DN_QTY = hashMap.get("DN_QTY") == null ? "" : hashMap.get("DN_QTY").toString();
						String V_REQ_QTY = hashMap.get("REQ_QTY") == null ? "": hashMap.get("REQ_QTY").toString();
						String V_SPEC = hashMap.get("SPEC") == null ? "" : hashMap.get("SPEC").toString();
						String V_UNIT = hashMap.get("UNIT") == null ? "" : hashMap.get("UNIT").toString();
						String V_DN_BOX_QTY = hashMap.get("REQ_BOX_QTY") == null ? "": hashMap.get("REQ_BOX_QTY").toString();
						String V_DN_BOX_WGT_UNIT = hashMap.get("DN_BOX_WGT_UNIT") == null ? ""	: hashMap.get("DN_BOX_WGT_UNIT").toString();
						String V_DN_REAL_QTY = hashMap.get("DN_REAL_QTY") == null ? ""	: hashMap.get("DN_REAL_QTY").toString();
						String V_DN_PRC = hashMap.get("DN_PRC") == null ? "" : hashMap.get("DN_PRC").toString();
						String V_DN_AMT = hashMap.get("DN_AMT") == null ? "" : hashMap.get("DN_AMT").toString();
						String V_DN_LOC_AMT = hashMap.get("DN_LOC_AMT") == null ? "" : hashMap.get("DN_LOC_AMT").toString();
						String V_SALE_ISSUE_DT = hashMap.get("ISSUE_DT") == null ? "" : hashMap.get("ISSUE_DT").toString().substring(0, 10);
						String V_REMARK = hashMap.get("REMARK") == null ? "" : hashMap.get("REMARK").toString();
						V_MVMT_NO = hashMap.get("MVMT_NO") == null ? "" : hashMap.get("MVMT_NO").toString();
// 						String V_DN_FINAL_AMT = hashMap.get("DN_TOTAL_AMT") == null ? "" : hashMap.get("DN_FINAL_AMT").toString();
						String V_VAT_AMT = hashMap.get("VAT_AMT") == null ? "" : hashMap.get("VAT_AMT").toString();

						if (!V_TYPE.equals("IH") && !V_TYPE.equals("ID")) {
							V_DN_NO = hashMap.get("DN_NO") == null ? "" : hashMap.get("DN_NO").toString();
							V_DN_SEQ = hashMap.get("DN_SEQ") == null ? "" : hashMap.get("DN_SEQ").toString();
							V_DN_DT = hashMap.get("DN_DT") == null ? ""	: hashMap.get("DN_DT").toString().substring(0, 10);
						}

						cs = conn.prepareCall("call USP_003_M_GR_TO_DN_TOT_HSPF(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)");
						cs.setString(1, V_COMP_ID);//V_COMP_ID
						cs.setString(2, V_TYPE);//V_TYPE
						cs.setString(3, V_ITS_NO);//V_ITS_NO
						cs.setString(4, V_MVMT_DT_FR);//V_MVMT_DT_FR
						cs.setString(5, V_MVMT_DT_TO);//V_DN_DT
						cs.setString(6, V_DN_DT);//V_DN_DT
						cs.setString(7, V_DN_NO);//V_DN_NO
						cs.setString(8, V_DN_SEQ);//V_DN_SEQ
						cs.setString(9, V_S_BP_CD);//V_S_BP_CD
						cs.setString(10, V_SALE_TYPE);//V_SALE_TYPE
						cs.setString(11, V_DN_CUR);//V_CUR
						cs.setString(12, V_DN_XCHG_RT);//V_DN_XCHG_RT
						cs.setString(13, V_ITEM_CD);//V_ITEM_CD

						String DN_QTY = "";
						if (V_TYPE.equals("ID")) {
							DN_QTY = V_REQ_QTY;

							double V_DN_QTY1 = Double.parseDouble(V_REQ_QTY);
							double V_DN_QTY2 = (Math.round(V_DN_QTY1 * 10000) / 10000.0);

							DN_QTY = V_DN_QTY2 + "";

						} else {
							double V_DN_QTY1 = Double.parseDouble(V_DN_QTY);
							double V_DN_QTY2 = (Math.round(V_DN_QTY1 * 10000) / 10000.0);

							DN_QTY = V_DN_QTY2 + "";
						}
						cs.setString(14, DN_QTY);//V_DN_BOX_QTY
						cs.setString(15, "");//V_ITEM_NM
						cs.setString(16, "");//V_DN_BOX_WGT_UNIT
						cs.setString(17, V_DN_REAL_QTY);//V_DN_REAL_QTY
						cs.setString(18, V_DN_PRC);//V_DN_PRC
						cs.setString(19, V_DN_AMT);//V_DN_AMT
						cs.setString(20, V_DN_LOC_AMT);//V_DN_LOC_AMT
						cs.setString(21, V_SALE_ISSUE_DT);//V_SALE_ISSUE_DT
						cs.setString(22, V_REMARK);//V_REMARK
						cs.setString(23, V_MVMT_NO);//V_MVMT_NO
						cs.setString(24, V_LC_DOC_NO);//V_LC_DOC_NO
						cs.setString(25, V_BL_DOC_NO);//V_BL_DOC_NO
						cs.setString(26, V_USR_ID);//V_USR_ID
						cs.registerOutParameter(27, com.tmax.tibero.TbTypes.CURSOR);
						cs.setString(28, "");//V_FIRST_YN
						cs.setString(29, "");//V_M_BP_NM
						cs.setString(30, V_VAT_AMT);//V_VAT_AMT
						cs.executeQuery();

						String V_BS_DT = V_DN_DT;
						String V_BS_BOX_QTY = V_DN_BOX_QTY;
						String V_BS_QTY = DN_QTY;
						String V_BAS_STEP = "DS";

						rs = (ResultSet) cs.getObject(27);

						String V_BAS_NO = "NO";
						while (rs.next()) {
							V_BAS_NO = rs.getString("BAS_NO");
						}

						response.setContentType("text/plain; charset=UTF-8");
						PrintWriter pw = response.getWriter();
						pw.print("success");
						pw.flush();
						pw.close();
					}

				}
			} else {

				JSONObject jsondata = JSONObject.fromObject(jsonData);
				V_TYPE = jsondata.get("V_TYPE") == null ? "" : jsondata.get("V_TYPE").toString();
				if (!V_TYPE.equals("")) {
					String V_ITS_NO = jsondata.get("ITS_NO") == null ? "" : jsondata.get("ITS_NO").toString();
					V_S_BP_CD = jsondata.get("S_BP_CD") == null ? ""	 : jsondata.get("S_BP_CD").toString();
					String V_SALE_TYPE = jsondata.get("SALE_TYPE") == null ? "" : jsondata.get("SALE_TYPE").toString();
					String V_DN_CUR = jsondata.get("DN_CUR") == null ? "" : jsondata.get("DN_CUR").toString();
					String V_DN_XCHG_RT = jsondata.get("DN_XCHG_RT") == null ? "" : jsondata.get("DN_XCHG_RT").toString();
					V_ITEM_CD = jsondata.get("ITEM_CD") == null ? "" : jsondata.get("ITEM_CD").toString();
					String V_DN_QTY = jsondata.get("DN_QTY") == null ? "" : jsondata.get("DN_QTY").toString();
					String V_REQ_QTY = jsondata.get("REQ_QTY") == null ? "" : jsondata.get("REQ_QTY").toString();
					String V_SPEC = jsondata.get("SPEC") == null ? "" : jsondata.get("SPEC").toString();
					String V_UNIT = jsondata.get("UNIT") == null ? "" : jsondata.get("UNIT").toString();
					String V_DN_BOX_QTY = jsondata.get("REQ_BOX_QTY") == null ? "" : jsondata.get("REQ_BOX_QTY").toString();
					String V_DN_BOX_WGT_UNIT = jsondata.get("DN_BOX_WGT_UNIT") == null ? "" : jsondata.get("DN_BOX_WGT_UNIT").toString();
					String V_DN_REAL_QTY = jsondata.get("DN_REAL_QTY") == null ? ""	 : jsondata.get("DN_REAL_QTY").toString();
					String V_DN_PRC = jsondata.get("DN_PRC") == null ? "" : jsondata.get("DN_PRC").toString();
					String V_DN_AMT = jsondata.get("DN_AMT") == null ? "" : jsondata.get("DN_AMT").toString();
					String V_DN_LOC_AMT = jsondata.get("DN_LOC_AMT") == null ? "" : jsondata.get("DN_LOC_AMT").toString();
					String V_SALE_ISSUE_DT = jsondata.get("ISSUE_DT") == null ? "" : jsondata.get("ISSUE_DT").toString().substring(0, 10);
					String V_REMARK = jsondata.get("REMARK") == null ? "" : jsondata.get("REMARK").toString();
					V_MVMT_NO = jsondata.get("MVMT_NO") == null ? "" : jsondata.get("MVMT_NO").toString();
// 					String V_DN_FINAL_AMT = jsondata.get("DN_TOTAL_AMT") == null ? "" : jsondata.get("DN_FINAL_AMT").toString();
					String V_VAT_AMT = jsondata.get("VAT_AMT") == null ? "" : jsondata.get("VAT_AMT").toString();
					String V_DN_NO = request.getParameter("V_DN_NO") == null ? "" : request.getParameter("V_DN_NO").toUpperCase();
					V_DN_DT = request.getParameter("V_DN_DT") == null ? "" : request.getParameter("V_DN_DT").toUpperCase().substring(0, 10);

					if (!V_TYPE.equals("IH") && !V_TYPE.equals("ID")) {
						V_DN_NO = jsondata.get("DN_NO") == null ? "" : jsondata.get("DN_NO").toString();
						V_DN_SEQ = jsondata.get("DN_SEQ") == null ? "" : jsondata.get("DN_SEQ").toString();
						V_DN_DT = jsondata.get("DN_DT") == null ? "" : jsondata.get("DN_DT").toString().substring(0, 10);
					}

					cs = conn.prepareCall("call USP_003_M_GR_TO_DN_TOT_HSPF(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)");
					cs.setString(1, V_COMP_ID);//V_COMP_ID
					cs.setString(2, V_TYPE);//V_TYPE
					cs.setString(3, V_ITS_NO);//V_ITS_NO
					cs.setString(4, V_MVMT_DT_FR);//V_MVMT_DT_FR
					cs.setString(5, V_MVMT_DT_TO);//V_DN_DT
					cs.setString(6, V_DN_DT);//V_DN_DT
					cs.setString(7, V_DN_NO);//V_DN_NO
					cs.setString(8, V_DN_SEQ);//V_DN_SEQ
					cs.setString(9, V_S_BP_CD);//V_S_BP_CD
					cs.setString(10, V_SALE_TYPE);//V_SALE_TYPE
					cs.setString(11, V_DN_CUR);//V_CUR
					cs.setString(12, V_DN_XCHG_RT);//V_DN_XCHG_RT
					cs.setString(13, V_ITEM_CD);//V_ITEM_CD

					String DN_QTY = "";
					if (V_TYPE.equals("ID")) {

						double V_DN_QTY1 = Double.parseDouble(V_REQ_QTY);
						double V_DN_QTY2 = (Math.round(V_DN_QTY1 * 10000) / 10000.0);

						DN_QTY = V_DN_QTY2 + "";

					} else {
						double V_DN_QTY1 = Double.parseDouble(V_DN_QTY);
						double V_DN_QTY2 = (Math.round(V_DN_QTY1 * 10000) / 10000.0);

						DN_QTY = V_DN_QTY2 + "";
					}

					cs.setString(14, DN_QTY);//V_DN_QTY
					cs.setString(15, "");//V_ITEM_NM
					cs.setString(16, "");//V_DN_BOX_WGT_UNIT
					cs.setString(17, V_DN_REAL_QTY);//V_DN_REAL_QTY
					cs.setString(18, V_DN_PRC);//V_DN_PRC
					cs.setString(19, V_DN_AMT);//V_DN_AMT
					cs.setString(20, V_DN_LOC_AMT);//V_DN_LOC_AMT
					cs.setString(21, V_SALE_ISSUE_DT);//V_SALE_ISSUE_DT
					cs.setString(22, V_REMARK);//V_REMARK
					cs.setString(23, V_MVMT_NO);//V_MVMT_NO
					cs.setString(24, V_LC_DOC_NO);//V_LC_DOC_NO
					cs.setString(25, V_BL_DOC_NO);//V_BL_DOC_NO
					cs.setString(26, V_USR_ID);//V_USR_ID
					cs.registerOutParameter(27, com.tmax.tibero.TbTypes.CURSOR);
					cs.setString(28, "");//V_FIRST_YN
					cs.setString(29, "");//V_M_BP_NM
					cs.setString(30, V_VAT_AMT);//V_VAT_AMT
					cs.executeQuery();

					String V_BS_DT = V_DN_DT;
					String V_BS_BOX_QTY = V_DN_BOX_QTY;
					String V_BS_QTY = DN_QTY;
					String V_BAS_STEP = "DS";

					rs = (ResultSet) cs.getObject(27);

					String V_BAS_NO = "NO";
					while (rs.next()) {
						V_BAS_NO = rs.getString("BAS_NO");
					}

					response.setContentType("text/plain; charset=UTF-8");
					PrintWriter pw = response.getWriter();
					pw.print("success");
					pw.flush();
					pw.close();
				}

			}
		} else if (V_TYPE.equals("IH")) {

			V_DN_DT = request.getParameter("V_DN_DT") == null ? "" : request.getParameter("V_DN_DT").toUpperCase().substring(0, 10);

			cs = conn.prepareCall("call USP_003_M_GR_TO_DN_TOT_HSPF(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)");
			cs.setString(1, V_COMP_ID);//V_COMP_ID
			cs.setString(2, V_TYPE);//V_TYPE
			cs.setString(3, "");//V_ITS_NO
			cs.setString(4, "");//V_MVMT_DT_FR
			cs.setString(5, "");//V_MVMT_DT_TO
			cs.setString(6, V_DN_DT);//V_DN_DT
			cs.setString(7, "");//V_DN_NO
			cs.setString(8, "");//V_DN_SEQ
			cs.setString(9, "");//V_S_BP_CD
			cs.setString(10, "");//V_SALE_TYPE
			cs.setString(11, "");//V_CUR
			cs.setString(12, "");//V_DN_XCHG_RT
			cs.setString(13, "");//V_ITEM_CD
			cs.setString(14, "");//V_DN_QTY
			cs.setString(15, "");//V_ITEM_NM
			cs.setString(16, "");//V_DN_BOX_WGT_UNIT
			cs.setString(17, "");//V_DN_REAL_QTY
			cs.setString(18, "");//V_DN_PRC
			cs.setString(19, "");//V_DN_AMT
			cs.setString(20, "");//V_DN_LOC_AMT
			cs.setString(21, "");//V_SALE_ISSUE_DT
			cs.setString(22, "");//V_REMARK
			cs.setString(23, "");//V_MVMT_NO
			cs.setString(24, "");//V_LC_DOC_NO
			cs.setString(25, "");//V_BL_DOC_NO
			cs.setString(26, V_USR_ID);//V_USR_ID
			cs.registerOutParameter(27, com.tmax.tibero.TbTypes.CURSOR);
			cs.setString(28, "");//V_FIRST_YN
			cs.setString(29, "");//V_M_BP_NM
			cs.setString(30, "");//V_FIRST_YN
			cs.executeQuery();

			rs = (ResultSet) cs.getObject(27);
			String DN_NO = "";

			while (rs.next()) {
				DN_NO = rs.getString("DN_NO");
			}

			response.setContentType("text/plain; charset=UTF-8");
			PrintWriter pw = response.getWriter();
			pw.print(DN_NO);
			pw.flush();
			pw.close();
			
		}

	} catch (Exception e) {
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


