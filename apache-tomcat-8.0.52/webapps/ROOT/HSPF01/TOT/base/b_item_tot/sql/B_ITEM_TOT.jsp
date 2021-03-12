<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@page import="org.json.simple.JSONArray"%>
<%@page import="org.json.simple.JSONValue"%>
<%@page import="net.sf.json.JSONObject"%>
<%@page import="java.io.PrintWriter"%>
<%@page import="java.io.StringWriter"%>
<%@page import="java.net.URLDecoder"%>
<%@page import="java.util.HashMap"%>
<%@ page import="java.net.*"%>
<%@ page import="java.io.*"%>
<%@page import="org.apache.commons.lang.StringUtils"%>
<%@ include file="/HSPF01/common/DB_Connection.jsp"%>

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
		String V_TYPE = request.getParameter("V_TYPE") == null ? "^" : request.getParameter("V_TYPE");
		String V_COMP_ID = request.getParameter("V_COMP_ID") == null ? "^" : request.getParameter("V_COMP_ID").toUpperCase();
		String V_ITEM_CD = request.getParameter("V_ITEM_CD") == null ? "^" : request.getParameter("V_ITEM_CD").toUpperCase();
		String V_ITEM_NM = request.getParameter("V_ITEM_NM") == null ? "" : request.getParameter("V_ITEM_NM").toUpperCase();
		String V_SPEC = request.getParameter("V_SPEC") == null ? "" : request.getParameter("V_SPEC").toUpperCase();
		String V_USR_ID = request.getParameter("V_USR_ID") == null ? "" : request.getParameter("V_USR_ID").toUpperCase();
		String V_GUBUN = "";
		
		String V_ITEM_GRP = request.getParameter("V_ITEM_GRP") == null ? "" : request.getParameter("V_ITEM_GRP").toUpperCase();
		String V_ITEM_CALC_YN = request.getParameter("V_ITEM_CALC_YN") == null ? "" : request.getParameter("V_ITEM_CALC_YN").toUpperCase();
		String V_USE_YN = request.getParameter("V_USE_YN") == null ? "" : request.getParameter("V_USE_YN").toUpperCase();
		String V_GROUP_TYPE_CD = request.getParameter("V_GROUP_TYPE_CD") == null ? "" : request.getParameter("V_GROUP_TYPE_CD").toUpperCase();
		String V_GROUP_TYPE_DTL_CD = request.getParameter("V_GROUP_TYPE_DTL_CD") == null ? "" : request.getParameter("V_GROUP_TYPE_DTL_CD").toUpperCase();
		
		if(V_GROUP_TYPE_CD.equals("T")) V_GROUP_TYPE_CD = "";
		if(V_GROUP_TYPE_DTL_CD.equals("T")) V_GROUP_TYPE_DTL_CD = "";
		
		//조회
		if (V_TYPE.equals("S")) {
			cs = conn.prepareCall("call USP_003_B_ITEM_TOT(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)");
			cs.setString(1, V_TYPE);//V_TYPE
			cs.setString(2, V_COMP_ID);//V_COMP_ID
			cs.setString(3, V_ITEM_CD.trim());//V_ITEM_CD
			cs.setString(4, "");//V_ITEM_GROUP_CD
			cs.setString(5, V_ITEM_NM);//V_ITEM_NM
			cs.setString(6, V_SPEC);//V_SPEC
			cs.setString(7, "");//V_MAKER
			cs.setString(8, "");//V_UNIT
			cs.setString(9, "");//V_SAFE_QTY
			cs.setString(10, "");//V_MIN_PO_QTY
			cs.setString(11, "");//V_SUPP_LT_DT
			cs.setString(12, "");//V_HS_CD
			cs.setString(13, "");//V_IN_SL_CD
			cs.setString(14, "");//V_BAR_MAKE_UNIT
			cs.setString(15, "");//V_MAX_PACK_QTY
			cs.setString(16, "");//V_MAX_PACK_UNIT
			cs.setString(17, "");//V_MID_PACK_QTY
			cs.setString(18, "");//V_MID_PACK_UNIT
			cs.setString(19, "");//V_MIN_PACK_QTY
			cs.setString(20, "");//V_MIN_PACK_UNIT
			cs.setString(21, "");//V_USR_ID
			cs.setString(22, "");//V_REMARK
			cs.registerOutParameter(23, com.tmax.tibero.TbTypes.CURSOR);
			cs.setString(24, "");//V_REMARK
			cs.setString(25, V_ITEM_GRP);//V_REMARK
			cs.setString(26, V_ITEM_CALC_YN);//V_ITEM_CALC_YN
			cs.setString(27, "");//V_M_B_RT
			cs.setString(28, V_USE_YN);//V_USE_YN
			cs.setString(29, "");//V_SF_DAY
			cs.setString(30, "");//V_ORIGIN
			cs.setString(31, "");//V_SEND_MAIL_YN
			cs.setString(32, "");//V_BOX_PACK_QTY
			cs.setString(33, "");//V_MIN_PACK_SPEC
			cs.setString(34, "");//V_PALLET_MIN_PACK_SPEC
			cs.setString(35, "");//V_PALLET_WGT
			cs.setString(36, "");//V_PALLET_QTY
			cs.setString(37, "");//V_PALLET_SPEC
			cs.setString(38, "");//V_NET_WGT
			cs.setString(39, "");//V_GROSS_WGT
			cs.setString(40, "");//V_MIN_PACK_CBM
			cs.setString(41, "");//V_PALLET_CBM
			cs.setString(42, V_GROUP_TYPE_CD);//V_GROUP_TYPE_CD
			cs.setString(43, V_GROUP_TYPE_DTL_CD);//V_GROUP_TYPE_DTL_CD
			cs.setString(44, "");//
			cs.setString(45, "");//
			cs.executeQuery();

			rs = (ResultSet) cs.getObject(23);
			while (rs.next()) {
				subObject = new JSONObject();
				subObject.put("ITEM_CD", rs.getString("ITEM_CD"));
				subObject.put("ITEM_NM", rs.getString("ITEM_NM"));
				subObject.put("ITEM_GROUP_CD", rs.getString("ITEM_GROUP_CD"));
				subObject.put("ITEM_GROUP_NM", rs.getString("ITEM_GROUP_NM"));
				subObject.put("GROUP_TYPE_CD", rs.getString("GROUP_TYPE_CD"));
				subObject.put("GROUP_TYPE_DTL_CD", rs.getString("GROUP_TYPE_DTL_CD"));
				subObject.put("GROUP_TYPE_NM", rs.getString("GROUP_TYPE_NM"));
				subObject.put("GROUP_TYPE_DTL_NM", rs.getString("GROUP_TYPE_DTL_NM"));
				subObject.put("SPEC", rs.getString("SPEC"));
				subObject.put("UNIT", rs.getString("UNIT"));
				subObject.put("MIN_PO_QTY", rs.getString("MIN_PO_QTY"));
				subObject.put("SAFE_QTY", rs.getString("SAFE_QTY"));
				subObject.put("MAX_PACK_QTY", rs.getString("MAX_PACK_QTY"));
				subObject.put("MID_PACK_QTY", rs.getString("MID_PACK_QTY"));
				subObject.put("MIN_PACK_QTY", rs.getString("MIN_PACK_QTY"));
				subObject.put("MAX_PACK_UNIT", rs.getString("MAX_PACK_UNIT"));
				subObject.put("MID_PACK_UNIT", rs.getString("MID_PACK_UNIT"));
				subObject.put("MIN_PACK_UNIT", rs.getString("MIN_PACK_UNIT"));
				subObject.put("SUPP_LT_DT", rs.getString("SUPP_LT_DT"));
				subObject.put("HS_CD", rs.getString("HS_CD"));
				subObject.put("MAKER", rs.getString("MAKER"));
				subObject.put("IN_SL_CD", rs.getString("IN_SL_CD"));
				subObject.put("BAR_MAKE_UNIT", rs.getString("BAR_MAKE_UNIT"));
				subObject.put("REMARK", rs.getString("REMARK"));
				subObject.put("AGENT", rs.getString("AGENT"));
				subObject.put("ITEM_CALC_YN", rs.getString("ITEM_CALC_YN"));
				subObject.put("M_B_RT", rs.getString("M_B_RT"));
				subObject.put("USE_YN", rs.getString("USE_YN"));
				subObject.put("USE_YN_FOR_EXCEL", rs.getString("USE_YN_FOR_EXCEL"));
				subObject.put("SF_DAY", rs.getString("SF_DAY"));
				subObject.put("ORIGIN", rs.getString("ORIGIN"));
				subObject.put("SEND_MAIL_YN", rs.getString("SEND_MAIL_YN"));
				
				subObject.put("IMG_YN", rs.getString("IMG_YN"));
				subObject.put("BOX_PACK_QTY", rs.getString("BOX_PACK_QTY"));
				subObject.put("MIN_PACK_SPEC", rs.getString("MIN_PACK_SPEC"));
				subObject.put("PALLET_MIN_PACK_SPEC", rs.getString("PALLET_MIN_PACK_SPEC"));
				subObject.put("PALLET_WGT", rs.getString("PALLET_WGT"));
				subObject.put("PALLET_QTY", rs.getString("PALLET_QTY"));
				subObject.put("PALLET_SPEC", rs.getString("PALLET_SPEC"));
				subObject.put("NET_WGT", rs.getString("NET_WGT"));
				subObject.put("GROSS_WGT", rs.getString("GROSS_WGT"));
				subObject.put("MIN_PACK_CBM", rs.getString("MIN_PACK_CBM"));
				subObject.put("PALLET_CBM", rs.getString("PALLET_CBM"));
				
				subObject.put("M_BP_CD", rs.getString("M_BP_CD"));
				subObject.put("M_BP_NM", rs.getString("M_BP_NM"));
				subObject.put("M_PRICE", rs.getString("M_PRICE"));
				
				jsonArray.add(subObject);

			}

			jsonObject.put("success", true);
			jsonObject.put("resultList", jsonArray);

			response.setContentType("text/plain; charset=UTF-8");
			PrintWriter pw = response.getWriter();
			pw.print(jsonObject);
			pw.flush();
			pw.close();

			//아이템수정
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
					V_TYPE = hashMap.get("V_TYPE") == null ? "" : hashMap.get("V_TYPE").toString().toUpperCase();
					V_ITEM_CD = hashMap.get("ITEM_CD") == null ? "" : hashMap.get("ITEM_CD").toString().toUpperCase();
					V_ITEM_NM = hashMap.get("ITEM_NM") == null ? "" : hashMap.get("ITEM_NM").toString().toUpperCase();
					V_ITEM_CALC_YN = hashMap.get("ITEM_CALC_YN") == null ? "" : hashMap.get("ITEM_CALC_YN").toString().toUpperCase();
					V_SPEC = hashMap.get("SPEC") == null ? "" : hashMap.get("SPEC").toString().toUpperCase();
					
					String V_ITEM_GROUP_CD = hashMap.get("ITEM_GROUP_CD") == null ? "" : hashMap.get("ITEM_GROUP_CD").toString().toUpperCase();
					V_GROUP_TYPE_CD = hashMap.get("GROUP_TYPE_CD") == null ? "" : hashMap.get("GROUP_TYPE_CD").toString().toUpperCase();
					V_GROUP_TYPE_DTL_CD = hashMap.get("GROUP_TYPE_DTL_CD") == null ? "" : hashMap.get("GROUP_TYPE_DTL_CD").toString().toUpperCase();
					String V_UNIT = hashMap.get("UNIT") == null ? "" : hashMap.get("UNIT").toString().toUpperCase();
					String V_MIN_PO_QTY = hashMap.get("MIN_PO_QTY") == null ? "" : hashMap.get("MIN_PO_QTY").toString().toUpperCase();
					String V_SAFE_QTY = hashMap.get("SAFE_QTY") == null ? "" : hashMap.get("SAFE_QTY").toString().toUpperCase();
					String V_MAX_PACK_QTY = hashMap.get("MAX_PACK_QTY") == null ? "" : hashMap.get("MAX_PACK_QTY").toString().toUpperCase();
					String V_MAX_PACK_UNIT = hashMap.get("MAX_PACK_UNIT") == null ? "" : hashMap.get("MAX_PACK_UNIT").toString().toUpperCase();
					String V_MID_PACK_QTY = hashMap.get("MID_PACK_QTY") == null ? "" : hashMap.get("MID_PACK_QTY").toString().toUpperCase();
					String V_MID_PACK_UNIT = hashMap.get("MID_PACK_UNIT") == null ? "" : hashMap.get("MID_PACK_UNIT").toString().toUpperCase();
					String V_MIN_PACK_QTY = hashMap.get("MIN_PACK_QTY") == null ? "" : hashMap.get("MIN_PACK_QTY").toString().toUpperCase();
					String V_MIN_PACK_UNIT = hashMap.get("MIN_PACK_UNIT") == null ? "" : hashMap.get("MIN_PACK_UNIT").toString().toUpperCase();
					String V_SUPP_LT_DT = hashMap.get("SUPP_LT_DT") == null ? "" : hashMap.get("SUPP_LT_DT").toString().toUpperCase();
					String V_HS_CD = hashMap.get("HS_CD") == null ? "" : hashMap.get("HS_CD").toString().toUpperCase();
					String V_MAKER = hashMap.get("MAKER") == null ? "" : hashMap.get("MAKER").toString().toUpperCase();
					String V_IN_SL_CD = hashMap.get("IN_SL_CD") == null ? "" : hashMap.get("IN_SL_CD").toString().toUpperCase();
					String V_BAR_MAKE_UNIT = hashMap.get("BAR_MAKE_UNIT") == null ? "" : hashMap.get("BAR_MAKE_UNIT").toString().toUpperCase();
					String V_REMARK = hashMap.get("REMARK") == null ? "" : hashMap.get("REMARK").toString();
					String V_AGENT = hashMap.get("AGENT") == null ? "" : hashMap.get("AGENT").toString();
					String V_SF_DAY = hashMap.get("SF_DAY") == null ? "" : hashMap.get("SF_DAY").toString();
					String V_ORIGIN = hashMap.get("ORIGIN") == null ? "" : hashMap.get("ORIGIN").toString();
					String V_M_B_RT = hashMap.get("M_B_RT") == null || hashMap.get("M_B_RT") == "null" ? "" : hashMap.get("M_B_RT").toString();
					String USE_YN = hashMap.get("USE_YN") == null || hashMap.get("USE_YN") == "null" ? "" : hashMap.get("USE_YN").toString();
					String V_SEND_MAIL_YN = hashMap.get("SEND_MAIL_YN") == null ? "" : hashMap.get("SEND_MAIL_YN").toString().toUpperCase();
					
					String V_BOX_PACK_QTY = hashMap.get("BOX_PACK_QTY") == null ? "" : hashMap.get("BOX_PACK_QTY").toString().toUpperCase();
					String V_MIN_PACK_SPEC = hashMap.get("MIN_PACK_SPEC") == null ? "" : hashMap.get("MIN_PACK_SPEC").toString().toUpperCase();
					String V_PALLET_MIN_PACK_SPEC = hashMap.get("PALLET_MIN_PACK_SPEC") == null ? "" : hashMap.get("PALLET_MIN_PACK_SPEC").toString().toUpperCase();
					String V_PALLET_WGT = hashMap.get("PALLET_WGT") == null ? "" : hashMap.get("PALLET_WGT").toString().toUpperCase();
					String V_PALLET_QTY = hashMap.get("PALLET_QTY") == null ? "" : hashMap.get("PALLET_QTY").toString().toUpperCase();
					String V_PALLET_SPEC = hashMap.get("PALLET_SPEC") == null ? "" : hashMap.get("PALLET_SPEC").toString().toUpperCase();
					String V_NET_WGT = hashMap.get("NET_WGT") == null ? "" : hashMap.get("NET_WGT").toString().toUpperCase();
					String V_GROSS_WGT = hashMap.get("GROSS_WGT") == null ? "" : hashMap.get("GROSS_WGT").toString().toUpperCase();
					String V_MIN_PACK_CBM = hashMap.get("MIN_PACK_CBM") == null ? "" : hashMap.get("MIN_PACK_CBM").toString().toUpperCase();
					String V_PALLET_CBM = hashMap.get("PALLET_CBM") == null ? "" : hashMap.get("PALLET_CBM").toString().toUpperCase();
					String M_BP_CD = hashMap.get("M_BP_CD") == null ? "" : hashMap.get("M_BP_CD").toString().toUpperCase();
					String M_PRICE = hashMap.get("M_PRICE") == null ? "" : hashMap.get("M_PRICE").toString().toUpperCase();
					
					if(V_M_B_RT.equals("null")) V_M_B_RT = "";

					if (V_TYPE.equals("I") || V_TYPE.equals("U") || V_TYPE.equals("D")) {
						if (V_TYPE.equals("I")) {
							V_GUBUN = "C";
						} else if (V_TYPE.equals("U")) {
							V_GUBUN = "U";
						} else if (V_TYPE.equals("D")) {
							V_GUBUN = "D";
						}
						anySubObject = new JSONObject();
						anySubObject.put("GUBUN", V_GUBUN);
						anySubObject.put("ITEM_CD", V_ITEM_CD.trim());
						anySubObject.put("ITEM_GROUP_CD", V_ITEM_GROUP_CD);
						anySubObject.put("ITEM_NM", V_ITEM_NM);
						anySubObject.put("SPEC", V_SPEC);
						anySubObject.put("UNIT", V_UNIT);
						anySubObject.put("MIN_PO_QTY", V_MIN_PO_QTY);
						anySubObject.put("SAFE_QTY", V_SAFE_QTY);
						anySubObject.put("MAX_PACK_QTY", V_MAX_PACK_QTY);
						anySubObject.put("MAX_PACK_UNIT", V_MAX_PACK_UNIT);
						anySubObject.put("MID_PACK_QTY", V_MID_PACK_QTY);
						anySubObject.put("MID_PACK_UNIT", V_MID_PACK_UNIT);
						anySubObject.put("MIN_PACK_QTY", V_MIN_PACK_QTY);
						anySubObject.put("MIN_PACK_UNIT", V_MIN_PACK_UNIT);
						anySubObject.put("SUPP_LT_DT", V_SUPP_LT_DT);
						anySubObject.put("MAKER", V_MAKER);
						anySubObject.put("V_USR_ID", V_USR_ID);
						anyArray.add(anySubObject);
					}

					cs = conn.prepareCall("call USP_003_B_ITEM_TOT(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)");
					cs.setString(1, V_TYPE);//V_TYPE
					cs.setString(2, V_COMP_ID);//V_COMP_ID
					cs.setString(3, V_ITEM_CD.trim());//V_ITEM_CD
					cs.setString(4, V_ITEM_GROUP_CD);//V_ITEM_GROUP_CD
					cs.setString(5, V_ITEM_NM);//V_ITEM_NM
					cs.setString(6, V_SPEC);//V_SPEC
					cs.setString(7, V_MAKER);//V_MAKER
					cs.setString(8, V_UNIT);//V_UNIT
					cs.setString(9, V_SAFE_QTY);//V_SAFE_QTY
					cs.setString(10, V_MIN_PO_QTY);//V_MIN_PO_QTY
					cs.setString(11, V_SUPP_LT_DT);//V_SUPP_LT_DT
					cs.setString(12, V_HS_CD);//V_HS_CD
					cs.setString(13, V_IN_SL_CD);//V_IN_SL_CD
					cs.setString(14, V_BAR_MAKE_UNIT);//V_BAR_MAKE_UNIT
					cs.setString(15, V_MAX_PACK_QTY);//V_MAX_PACK_QTY
					cs.setString(16, V_MAX_PACK_UNIT);//V_MAX_PACK_UNIT
					cs.setString(17, V_MID_PACK_QTY);//V_MID_PACK_QTY
					cs.setString(18, V_MID_PACK_UNIT);//V_MID_PACK_UNIT
					cs.setString(19, V_MIN_PACK_QTY);//V_MIN_PACK_QTY
					cs.setString(20, V_MIN_PACK_UNIT);//V_MIN_PACK_UNIT
					cs.setString(21, V_USR_ID);//V_USR_ID
					cs.setString(22, V_REMARK);//V_REMARK
					cs.registerOutParameter(23, com.tmax.tibero.TbTypes.CURSOR);
					cs.setString(24, V_AGENT);//V_REMARK
					cs.setString(25, "");//V_REMARK
					cs.setString(26, V_ITEM_CALC_YN);//V_ITEM_CALC_YN
					cs.setString(27, V_M_B_RT);//V_M_B_RT
					cs.setString(28, USE_YN);//USE_YN
					cs.setString(29, V_SF_DAY);//V_SF_DAY
					cs.setString(30, V_ORIGIN);//V_ORIGIN
					cs.setString(31, V_SEND_MAIL_YN);//V_SEND_MAIL_YN
					cs.setString(32, V_BOX_PACK_QTY);//V_BOX_PACK_QTY
					cs.setString(33, V_MIN_PACK_SPEC);//V_MIN_PACK_SPEC
					cs.setString(34, V_PALLET_MIN_PACK_SPEC);//V_PALLET_MIN_PACK_SPEC
					cs.setString(35, V_PALLET_WGT);//V_PALLET_WGT
					cs.setString(36, V_PALLET_QTY);//V_PALLET_QTY
					cs.setString(37, V_PALLET_SPEC);//V_PALLET_SPEC
					cs.setString(38, V_NET_WGT);//V_NET_WGT
					cs.setString(39, V_GROSS_WGT);//V_GROSS_WGT
					cs.setString(40, V_MIN_PACK_CBM);//V_MIN_PACK_CBM
					cs.setString(41, V_PALLET_CBM);//V_PALLET_CBM
					cs.setString(42, V_GROUP_TYPE_CD);//V_GROUP_TYPE_CD
					cs.setString(43, V_GROUP_TYPE_DTL_CD);//V_GROUP_TYPE_DTL_CD
					cs.setString(44, M_BP_CD);//
					cs.setString(45, M_PRICE);//
					cs.executeQuery();
					
					// ERP 입력
					//20201222 김장운(자동채번으로 만들어진 경우 품목코드 알기가 힘드니 SP속에서 실행하도록 수정해봄.)
					/*
					cs = conn.prepareCall("call USP_003_B_ITEM_TOT_TO_ERP(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)");
					cs.setString(1, V_TYPE);//V_TYPE
					cs.setString(2, V_ITEM_CD.trim());//V_ITEM_CD
					cs.setString(3, V_ITEM_NM);//V_ITEM_NM
					cs.setString(4, V_ITEM_NM);//V_FORMAL_NM
					cs.setString(5, V_SPEC);//V_SPEC
					cs.setString(6, V_UNIT);//V_BASIC_UNIT
					cs.setString(7, "50");//V_ITEM_ACCT
					cs.setString(8, V_HS_CD);//V_HS_CD
					cs.setString(9, "");//V_HS_UNIT
					cs.setString(10, "0");//V_UNIT_WEIGHT
					cs.setString(11, "");//V_UNIT_OF_WEIGHT
					cs.setString(12, "");//V_DRAW_NO
					cs.setString(13, "N");//V_ITEM_IMAGE_FLG
					cs.setString(14, V_ITEM_GROUP_CD);//V_ITEM_GROUP_CD
					cs.setString(15, "Y");//V_VALID_FLG
					cs.setString(16, "0");//V_GROSS_WEIGHT
					cs.setString(17, "");//V_GROSS_UNIT
					cs.setString(18, "0");//V_CBM
					cs.setString(19, "");//V_CBM_DESCRIPTION
					cs.setString(20, "N");//V_AUTO_PO_FLG
					cs.setString(21, "N");//V_CATLG_FLG
					cs.setString(22, "");//V_COLOR
					cs.setString(23, "");//V_MODEL
					cs.setString(24, "");//V_SIZE
					cs.setString(25, V_MAKER);//V_MAKER
					cs.setString(26, V_USR_ID);//V_USER_ID
					cs.setString(27, "01");//V_PLANT_CD
					cs.setString(28, "N");//V_LOT_FLG
					cs.setString(29, V_IN_SL_CD);//V_ISSUED_SL_CD
					cs.setString(30, V_UNIT);//V_ISSUED_UNIT
					cs.setString(31, "N");//V_TRACKING_FLG
					cs.setString(32, V_UNIT);//V_ORDER_UNIT_PUR
					cs.setString(33, V_SUPP_LT_DT);//V_ORDER_LT_PUR
					cs.setString(34, V_IN_SL_CD);//V_PUR_ORG
					cs.setString(35, "N");//V_ORDER_TYPE
					cs.setString(36, "N");//V_STOCK_SALE_YN
					cs.executeQuery();
					*/
				}
			} else {
				JSONObject jsondata = JSONObject.fromObject(jsonData);

				V_TYPE = jsondata.get("V_TYPE") == null ? "" : jsondata.get("V_TYPE").toString().toUpperCase();
				V_ITEM_CD = jsondata.get("ITEM_CD") == null ? "" : jsondata.get("ITEM_CD").toString().toUpperCase();
				V_ITEM_NM = jsondata.get("ITEM_NM") == null ? "" : jsondata.get("ITEM_NM").toString().toUpperCase();
				V_ITEM_CALC_YN = jsondata.get("ITEM_CALC_YN") == null ? "" : jsondata.get("ITEM_CALC_YN").toString().toUpperCase();
				V_SPEC = jsondata.get("SPEC") == null ? "" : jsondata.get("SPEC").toString().toUpperCase();

				String V_ITEM_GROUP_CD = jsondata.get("ITEM_GROUP_CD") == null ? "" : jsondata.get("ITEM_GROUP_CD").toString().toUpperCase();
				V_GROUP_TYPE_CD = jsondata.get("GROUP_TYPE_CD") == null ? "" : jsondata.get("GROUP_TYPE_CD").toString().toUpperCase();
				V_GROUP_TYPE_DTL_CD = jsondata.get("GROUP_TYPE_DTL_CD") == null ? "" : jsondata.get("GROUP_TYPE_DTL_CD").toString().toUpperCase();
				String V_UNIT = jsondata.get("UNIT") == null ? "" : jsondata.get("UNIT").toString().toUpperCase();
				String V_MIN_PO_QTY = jsondata.get("MIN_PO_QTY") == null ? "" : jsondata.get("MIN_PO_QTY").toString().toUpperCase();
				String V_SAFE_QTY = jsondata.get("SAFE_QTY") == null ? "" : jsondata.get("SAFE_QTY").toString().toUpperCase();
				String V_MAX_PACK_QTY = jsondata.get("MAX_PACK_QTY") == null ? "" : jsondata.get("MAX_PACK_QTY").toString().toUpperCase();
				String V_MID_PACK_QTY = jsondata.get("MID_PACK_QTY") == null ? "" : jsondata.get("MID_PACK_QTY").toString().toUpperCase();
				String V_MIN_PACK_QTY = jsondata.get("MIN_PACK_QTY") == null ? "" : jsondata.get("MIN_PACK_QTY").toString().toUpperCase();
				String V_SUPP_LT_DT = jsondata.get("SUPP_LT_DT") == null ? "" : jsondata.get("SUPP_LT_DT").toString().toUpperCase();
				String V_HS_CD = jsondata.get("HS_CD") == null ? "" : jsondata.get("HS_CD").toString().toUpperCase();
				String V_MAKER = jsondata.get("MAKER") == null ? "" : jsondata.get("MAKER").toString().toUpperCase();
				String V_IN_SL_CD = jsondata.get("IN_SL_CD") == null ? "" : jsondata.get("IN_SL_CD").toString().toUpperCase();
				String V_BAR_MAKE_UNIT = jsondata.get("BAR_MAKE_UNIT") == null ? "" : jsondata.get("BAR_MAKE_UNIT").toString().toUpperCase();
				String V_MAX_PACK_UNIT = jsondata.get("MAX_PACK_UNIT") == null ? "" : jsondata.get("MAX_PACK_UNIT").toString().toUpperCase();
				String V_MID_PACK_UNIT = jsondata.get("MID_PACK_UNIT") == null ? "" : jsondata.get("MID_PACK_UNIT").toString().toUpperCase();
				String V_MIN_PACK_UNIT = jsondata.get("MIN_PACK_UNIT") == null ? "" : jsondata.get("MIN_PACK_UNIT").toString().toUpperCase();
				String V_REMARK = jsondata.get("REMARK") == null ? "" : jsondata.get("REMARK").toString();
				String V_AGENT = jsondata.get("AGENT") == null ? "" : jsondata.get("AGENT").toString();
				String V_SF_DAY = jsondata.get("SF_DAY") == null ? "" : jsondata.get("SF_DAY").toString();
				String V_ORIGIN = jsondata.get("ORIGIN") == null ? "" : jsondata.get("ORIGIN").toString();
				String V_M_B_RT = jsondata.get("M_B_RT") == null ? "" : jsondata.get("M_B_RT").toString();
				String USE_YN = jsondata.get("USE_YN") == null ? "" : jsondata.get("USE_YN").toString().toUpperCase();
				String V_SEND_MAIL_YN = jsondata.get("SEND_MAIL_YN") == null ? "" : jsondata.get("SEND_MAIL_YN").toString().toUpperCase();
				
				String V_BOX_PACK_QTY = jsondata.get("BOX_PACK_QTY") == null ? "" : jsondata.get("BOX_PACK_QTY").toString().toUpperCase();
				String V_MIN_PACK_SPEC = jsondata.get("MIN_PACK_SPEC") == null ? "" : jsondata.get("MIN_PACK_SPEC").toString().toUpperCase();
				String V_PALLET_MIN_PACK_SPEC = jsondata.get("PALLET_MIN_PACK_SPEC") == null ? "" : jsondata.get("PALLET_MIN_PACK_SPEC").toString().toUpperCase();
				String V_PALLET_WGT = jsondata.get("PALLET_WGT") == null ? "" : jsondata.get("PALLET_WGT").toString().toUpperCase();
				String V_PALLET_QTY = jsondata.get("PALLET_QTY") == null ? "" : jsondata.get("PALLET_QTY").toString().toUpperCase();
				String V_PALLET_SPEC = jsondata.get("PALLET_SPEC") == null ? "" : jsondata.get("PALLET_SPEC").toString().toUpperCase();
				String V_NET_WGT = jsondata.get("NET_WGT") == null ? "" : jsondata.get("NET_WGT").toString().toUpperCase();
				String V_GROSS_WGT = jsondata.get("GROSS_WGT") == null ? "" : jsondata.get("GROSS_WGT").toString().toUpperCase();
				String V_MIN_PACK_CBM = jsondata.get("MIN_PACK_CBM") == null ? "" : jsondata.get("MIN_PACK_CBM").toString().toUpperCase();
				String V_PALLET_CBM = jsondata.get("PALLET_CBM") == null ? "" : jsondata.get("PALLET_CBM").toString().toUpperCase();
				String M_BP_CD = jsondata.get("M_BP_CD") == null ? "" : jsondata.get("M_BP_CD").toString().toUpperCase();
				String M_PRICE = jsondata.get("M_PRICE") == null ? "" : jsondata.get("M_PRICE").toString().toUpperCase();
				
				if(V_M_B_RT.equals("null")) V_M_B_RT = "";

				if (V_TYPE.equals("I") || V_TYPE.equals("U") || V_TYPE.equals("D")) {
					if (V_TYPE.equals("I")) {
						V_GUBUN = "C";
					} else if (V_TYPE.equals("U")) {
						V_GUBUN = "U";
					} else if (V_TYPE.equals("D")) {
						V_GUBUN = "D";
					}
					anySubObject = new JSONObject();
					anySubObject.put("GUBUN", V_GUBUN);
					anySubObject.put("ITEM_CD", V_ITEM_CD.trim());
					anySubObject.put("ITEM_GROUP_CD", V_ITEM_GROUP_CD);
					anySubObject.put("ITEM_NM", V_ITEM_NM);
					anySubObject.put("SPEC", V_SPEC);
					anySubObject.put("UNIT", V_UNIT);
					anySubObject.put("MIN_PO_QTY", V_MIN_PO_QTY);
					anySubObject.put("SAFE_QTY", V_SAFE_QTY);
					anySubObject.put("MAX_PACK_QTY", V_MAX_PACK_QTY);
					anySubObject.put("MAX_PACK_UNIT", V_MAX_PACK_UNIT);
					anySubObject.put("MID_PACK_QTY", V_MID_PACK_QTY);
					anySubObject.put("MID_PACK_UNIT", V_MID_PACK_UNIT);
					anySubObject.put("MIN_PACK_QTY", V_MIN_PACK_QTY);
					anySubObject.put("MIN_PACK_UNIT", V_MIN_PACK_UNIT);
					anySubObject.put("SUPP_LT_DT", V_SUPP_LT_DT);
					anySubObject.put("MAKER", V_MAKER);
					anySubObject.put("V_USR_ID", V_USR_ID);
					anyArray.add(anySubObject);
				}

				cs = conn.prepareCall("call USP_003_B_ITEM_TOT(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)");
				cs.setString(1, V_TYPE);//V_TYPE
				cs.setString(2, V_COMP_ID);//V_COMP_ID
				cs.setString(3, V_ITEM_CD.trim());//V_ITEM_CD
				cs.setString(4, V_ITEM_GROUP_CD);//V_ITEM_GROUP_CD
				cs.setString(5, V_ITEM_NM);//V_ITEM_NM
				cs.setString(6, V_SPEC);//V_SPEC
				cs.setString(7, V_MAKER);//V_MAKER
				cs.setString(8, V_UNIT);//V_UNIT
				cs.setString(9, V_SAFE_QTY);//V_SAFE_QTY
				cs.setString(10, V_MIN_PO_QTY);//V_MIN_PO_QTY
				cs.setString(11, V_SUPP_LT_DT);//V_SUPP_LT_DT
				cs.setString(12, V_HS_CD);//V_HS_CD
				cs.setString(13, V_IN_SL_CD);//V_IN_SL_CD
				cs.setString(14, V_BAR_MAKE_UNIT);//V_BAR_MAKE_UNIT
				cs.setString(15, V_MAX_PACK_QTY);//V_MAX_PACK_QTY
				cs.setString(16, V_MAX_PACK_UNIT);//V_MAX_PACK_UNIT
				cs.setString(17, V_MID_PACK_QTY);//V_MID_PACK_QTY
				cs.setString(18, V_MID_PACK_UNIT);//V_MID_PACK_UNIT
				cs.setString(19, V_MIN_PACK_QTY);//V_MIN_PACK_QTY
				cs.setString(20, V_MIN_PACK_UNIT);//V_MIN_PACK_UNIT
				cs.setString(21, V_USR_ID);//V_USR_ID
				cs.setString(22, V_REMARK);//V_REMARK
				cs.registerOutParameter(23, com.tmax.tibero.TbTypes.CURSOR);
				cs.setString(24, V_AGENT);//V_REMARK
				cs.setString(25, "");//V_REMARK
				cs.setString(26, V_ITEM_CALC_YN);//V_ITEM_CALC_YN
				cs.setString(27, V_M_B_RT);//V_M_B_RT
				cs.setString(28, USE_YN);//V_M_B_RT
				cs.setString(29, V_SF_DAY);//V_SF_DAY
				cs.setString(30, V_ORIGIN);//V_ORIGIN
				cs.setString(31, V_SEND_MAIL_YN);//V_SEND_MAIL_YN
				cs.setString(32, V_BOX_PACK_QTY);//V_BOX_PACK_QTY
				cs.setString(33, V_MIN_PACK_SPEC);//V_MIN_PACK_SPEC
				cs.setString(34, V_PALLET_MIN_PACK_SPEC);//V_PALLET_MIN_PACK_SPEC
				cs.setString(35, V_PALLET_WGT);//V_PALLET_WGT
				cs.setString(36, V_PALLET_QTY);//V_PALLET_QTY
				cs.setString(37, V_PALLET_SPEC);//V_PALLET_SPEC
				cs.setString(38, V_NET_WGT);//V_NET_WGT
				cs.setString(39, V_GROSS_WGT);//V_GROSS_WGT
				cs.setString(40, V_MIN_PACK_CBM);//V_MIN_PACK_CBM
				cs.setString(41, V_PALLET_CBM);//V_PALLET_CBM
				cs.setString(42, V_GROUP_TYPE_CD);//V_GROUP_TYPE_CD
				cs.setString(43, V_GROUP_TYPE_DTL_CD);//V_GROUP_TYPE_DTL_CD
				cs.setString(44, M_BP_CD);//
				cs.setString(45, M_PRICE);//
				cs.executeQuery();
				
				// ERP 입력
				//20201130 김장운(자동채번으로 만들어진 경우 품목코드 알기가 힘드니 SP속에서 실행하도록 수정해봄.)
				/*
				cs = conn.prepareCall("call USP_003_B_ITEM_TOT_TO_ERP(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)");
				cs.setString(1, V_TYPE);//V_TYPE
				cs.setString(2, V_ITEM_CD.trim());//V_ITEM_CD
				cs.setString(3, V_ITEM_NM);//V_ITEM_NM
				cs.setString(4, V_ITEM_NM);//V_FORMAL_NM
				cs.setString(5, V_SPEC);//V_SPEC
				cs.setString(6, V_UNIT);//V_BASIC_UNIT
				cs.setString(7, "50");//V_ITEM_ACCT
				cs.setString(8, V_HS_CD);//V_HS_CD
				cs.setString(9, "");//V_HS_UNIT
				cs.setString(10, "0");//V_UNIT_WEIGHT
				cs.setString(11, "");//V_UNIT_OF_WEIGHT
				cs.setString(12, "");//V_DRAW_NO
				cs.setString(13, "N");//V_ITEM_IMAGE_FLG
				cs.setString(14, V_ITEM_GROUP_CD);//V_ITEM_GROUP_CD
				cs.setString(15, "Y");//V_VALID_FLG
				cs.setString(16, "0");//V_GROSS_WEIGHT
				cs.setString(17, "");//V_GROSS_UNIT
				cs.setString(18, "0");//V_CBM
				cs.setString(19, "");//V_CBM_DESCRIPTION
				cs.setString(20, "N");//V_AUTO_PO_FLG
				cs.setString(21, "N");//V_CATLG_FLG
				cs.setString(22, "");//V_COLOR
				cs.setString(23, "");//V_MODEL
				cs.setString(24, "");//V_SIZE
				cs.setString(25, V_MAKER);//V_MAKER
				cs.setString(26, V_USR_ID);//V_USER_ID
				cs.setString(27, "01");//V_PLANT_CD
				cs.setString(28, "N");//V_LOT_FLG
				cs.setString(29, V_IN_SL_CD);//V_ISSUED_SL_CD
				cs.setString(30, V_UNIT);//V_ISSUED_UNIT
				cs.setString(31, "N");//V_TRACKING_FLG
				cs.setString(32, V_UNIT);//V_ORDER_UNIT_PUR
				cs.setString(33, V_SUPP_LT_DT);//V_ORDER_LT_PUR
				cs.setString(34, V_IN_SL_CD);//V_PUR_ORG
				cs.setString(35, "N");//V_ORDER_TYPE
				cs.setString(36, "N");//V_STOCK_SALE_YN
				cs.executeQuery();
				*/
			}

		}

	} catch (Exception e) {
		e.printStackTrace();
	} finally {
		if (cs != null)
			try {
				cs.close();
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


