
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@page import="org.json.simple.JSONArray"%>
<%@page import="org.json.simple.JSONValue"%>
<%@page import="org.json.simple.parser.JSONParser"%>
<%-- <%@page import="net.sf.json.JSONObject"%> --%>
<%@page import="org.json.simple.JSONObject"%>
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
	JSONObject jsonObject = new JSONObject();
	JSONArray jsonArray = new JSONArray();
	JSONObject subObject = null;

	try {
		String V_TYPE = request.getParameter("V_TYPE") == null ? "" : request.getParameter("V_TYPE");
		String V_COMP_ID = request.getParameter("V_COMP_ID") == null ? "" : request.getParameter("V_COMP_ID").toUpperCase();
		String V_USR_ID = request.getParameter("V_USR_ID") == null ? "" : request.getParameter("V_USR_ID").toUpperCase();
		String V_BL_NO = request.getParameter("V_BL_NO") == null ? "" : request.getParameter("V_BL_NO").toUpperCase();
		String V_BL_SEQ = request.getParameter("V_BL_SEQ") == null ? "" : request.getParameter("V_BL_SEQ").toUpperCase();

		if (V_TYPE.equals("S")) {

			cs = conn.prepareCall("call USP_001_M_BL_DTL_STEEL(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)");
			cs.setString(1, V_COMP_ID);//V_COMP_ID
			cs.setString(2, V_TYPE);//V_TYPE
			cs.setString(3, V_BL_NO);//V_BL_NO
			cs.setString(4, V_BL_SEQ);//V_BL_SEQ
			cs.setString(5, "");//V_ITEM_CD
			cs.setString(6, "");//V_QTY
			cs.setString(7, "");//V_PRICE
			cs.setString(8, "");//V_DOC_AMT
			cs.setString(9, "");//V_LOC_AMT
			cs.setString(10, "");//V_PO_NO
			cs.setString(11, "");//V_PO_SEQ
			cs.setString(12, "");//V_CONT_NO
			cs.setString(13, "");//V_CONT_QTY
			cs.setString(14, "");//V_BOX_QTY
			cs.setString(15, "");//V_BOX_WGT_UNIT
			cs.setString(16, "");//V_PO_NO
			cs.registerOutParameter(17, com.tmax.tibero.TbTypes.CURSOR);
			cs.setString(18, "");//V_PO_SEQ
			cs.setString(19, "");//V_CONT_NO
			cs.setString(20, "");//V_CONT_QTY
			cs.setString(21, "");//V_BOX_QTY
			cs.setString(22, "");//V_BOX_WGT_UNIT
			cs.setString(23, "");//V_PO_NO
			cs.setString(24, "");//V_PO_SEQ
			cs.setString(25, "");//V_CONT_NO
			cs.setString(26, "");//V_CONT_QTY
			cs.setString(27, "");//V_BOX_QTY
			cs.setString(28, "");//V_BOX_QTY
			cs.executeQuery();

			rs = (ResultSet) cs.getObject(17);
			while (rs.next()) {
				
				subObject = new JSONObject();
				subObject.put("BL_NO", rs.getString("BL_NO"));
				subObject.put("BL_SEQ", rs.getString("BL_SEQ"));
				subObject.put("BL_SEQ2", rs.getString("BL_SEQ2"));
				subObject.put("ITEM_CD", rs.getString("ITEM_CD"));
				subObject.put("ITEM_NM", rs.getString("ITEM_NM"));
				subObject.put("BON_QTY", rs.getString("BON_QTY"));
				subObject.put("BON_WGT_UNIT", rs.getString("BON_WGT_UNIT"));
				subObject.put("QTY", rs.getString("QTY"));
				subObject.put("PRICE", rs.getString("PRICE"));
				subObject.put("DOC_AMT", rs.getString("DOC_AMT"));
				subObject.put("LOC_AMT", rs.getString("LOC_AMT"));
				subObject.put("PO_NO", rs.getString("PO_NO"));
				subObject.put("PO_SEQ", rs.getString("PO_SEQ"));
				subObject.put("LC_NO", rs.getString("LC_NO"));
				subObject.put("LC_SEQ", rs.getString("LC_SEQ"));
				subObject.put("SPEC1", rs.getString("SPEC1"));
				subObject.put("SPEC2", rs.getString("SPEC2"));
				subObject.put("SPEC3", rs.getString("SPEC3"));
				subObject.put("LENGTH", rs.getString("LENGTH"));
				subObject.put("ST_TYPE", rs.getString("ST_TYPE"));
				subObject.put("ST_TYPE_NM", rs.getString("ST_TYPE_NM"));
				subObject.put("ITEM_GROUP_CD", rs.getString("ITEM_GROUP_CD"));
				subObject.put("CHARGE_YN", rs.getString("CHARGE_YN"));
				subObject.put("CC_YN", rs.getString("CC_YN"));
				
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
						V_BL_NO = hashMap.get("BL_NO") == null ? "" : hashMap.get("BL_NO").toString();
						V_BL_SEQ = hashMap.get("BL_SEQ") == null ? "" : hashMap.get("BL_SEQ").toString();
						String V_BL_SEQ2 = hashMap.get("BL_SEQ2") == null ? "" : hashMap.get("BL_SEQ2").toString();
						
						String V_ITEM_CD = hashMap.get("ITEM_CD") == null ? "" : hashMap.get("ITEM_CD").toString();
						String V_QTY = hashMap.get("QTY") == null ? "" : hashMap.get("QTY").toString();
						String V_PRICE = hashMap.get("PRICE") == null ? "" : hashMap.get("PRICE").toString();

						String V_LOC_AMT = hashMap.get("LOC_AMT") == null ? "" : hashMap.get("LOC_AMT").toString();
						String V_DOC_AMT = hashMap.get("LOC_AMT") == null ? "" : hashMap.get("DOC_AMT").toString();

						String V_PO_NO = hashMap.get("PO_NO") == null ? "" : hashMap.get("PO_NO").toString();
						String V_PO_SEQ = hashMap.get("PO_SEQ") == null ? "" : hashMap.get("PO_SEQ").toString();
						String V_LC_NO = hashMap.get("LC_NO") == null ? "" : hashMap.get("LC_NO").toString();
						String V_LC_SEQ = hashMap.get("LC_SEQ") == null ? "" : hashMap.get("LC_SEQ").toString();

						String V_CONT_MGM_NO = hashMap.get("CONT_MGM_NO") == null ? "" : hashMap.get("CONT_MGM_NO").toString();
						String V_BON_QTY = hashMap.get("BON_QTY") == null ? "" : hashMap.get("BON_QTY").toString();
						String V_ST_TYPE_NM = hashMap.get("ST_TYPE_NM") == null ? "" : hashMap.get("ST_TYPE_NM").toString();
						String V_ST_TYPE = hashMap.get("ST_TYPE") == null ? "" : hashMap.get("ST_TYPE").toString();

						String V_ITEM_GROUP_CD = hashMap.get("ITEM_GROUP_CD") == null ? "" : hashMap.get("ITEM_GROUP_CD").toString();
						String V_SPEC1 = hashMap.get("SPEC1") == null ? "" : hashMap.get("SPEC1").toString();
						String V_SPEC2 = hashMap.get("SPEC2") == null ? "" : hashMap.get("SPEC2").toString();
						String V_SPEC3 = hashMap.get("SPEC3") == null ? "" : hashMap.get("SPEC3").toString();
						String V_LENGTH = hashMap.get("LENGTH") == null ? "" : hashMap.get("LENGTH").toString();
						String V_BON_WGT_UNIT = hashMap.get("BON_WGT_UNIT") == null ? "" : hashMap.get("BON_WGT_UNIT").toString();

// 						System.out.println("V_BL_NO" + V_BL_NO);
// 						System.out.println("V_BL_SEQ" + V_BL_SEQ);
// 						System.out.println("V_BL_SEQ2" + V_BL_SEQ2);

						cs = conn.prepareCall("call USP_001_M_BL_DTL_STEEL(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)");
						cs.setString(1, V_COMP_ID);//V_COMP_ID
						cs.setString(2, V_TYPE);//V_TYPE
						cs.setString(3, V_BL_NO);//V_BL_NO
						cs.setString(4, V_BL_SEQ);//V_BL_SEQ
						cs.setString(5, V_BL_SEQ2);//V_BL_SEQ2
						cs.setString(6, V_ITEM_CD);//V_QTY
						cs.setString(7, V_QTY);//V_QTY
						cs.setString(8, V_PRICE);//V_PRICE
						cs.setString(9, V_DOC_AMT);//V_DOC_AMT
						cs.setString(10, V_LOC_AMT);//V_LOC_AMT
						cs.setString(11, V_PO_NO);//V_PO_NO
						cs.setString(12, V_PO_SEQ);//V_PO_SEQ
						cs.setString(13, V_BON_QTY);//V_BON_QTY
						cs.setString(14, V_BON_WGT_UNIT);//BON_WGT_UNIT
						cs.setString(15, "");//V_FORWARD_XCH_AMT
						cs.setString(16, V_USR_ID);//V_USR_ID
						cs.registerOutParameter(17, com.tmax.tibero.TbTypes.CURSOR);
						cs.setString(18, "");//V_VALID_DT
						cs.setString(19, V_LC_NO);//V_LC_NO
						cs.setString(20, V_LC_SEQ);//V_LC_SEQ
						cs.setString(21, V_ST_TYPE_NM);//V_ITEM_NM
						cs.setString(22, V_ST_TYPE);//V_ST_TYPE
						cs.setString(23, V_SPEC1);//V_SPEC1
						cs.setString(24, V_SPEC2);//V_SPEC2
						cs.setString(25, V_SPEC3);//V_SPEC3
						cs.setString(26, V_LENGTH);//V_LENGTH
						cs.setString(27, "");//V_SPEC_TOT
						cs.setString(28, V_ITEM_GROUP_CD);//V_LENGTH
						cs.executeQuery();

						response.setContentType("text/plain; charset=UTF-8");
						PrintWriter pw = response.getWriter();
						pw.print("success");
						pw.flush();
						pw.close();

					}
				} else {
// 					JSONObject jsondata = JSONObject.fromObject(jsonData); //큰수에 소수점이 있는경우 숫자계산이 이상해서 수정함. 20200108 김장운

					JSONParser parser = new JSONParser();
					Object obj = parser.parse(jsonData);					
					JSONObject jsondata = (JSONObject) obj;

					V_TYPE = jsondata.get("V_TYPE") == null ? "" : jsondata.get("V_TYPE").toString();
					V_BL_NO = jsondata.get("BL_NO") == null ? "" : jsondata.get("BL_NO").toString();
					V_BL_SEQ = jsondata.get("BL_SEQ") == null ? "" : jsondata.get("BL_SEQ").toString();
					String V_BL_SEQ2 = jsondata.get("BL_SEQ2") == null ? "" : jsondata.get("BL_SEQ2").toString();
					
					String V_ITEM_CD = jsondata.get("ITEM_CD") == null ? "" : jsondata.get("ITEM_CD").toString();
					String V_QTY = jsondata.get("QTY") == null ? "" : jsondata.get("QTY").toString();
					String V_PRICE = jsondata.get("PRICE") == null ? "" : jsondata.get("PRICE").toString();

					String V_LOC_AMT = jsondata.get("LOC_AMT") == null ? "" : jsondata.get("LOC_AMT").toString();
					String V_DOC_AMT = jsondata.get("LOC_AMT") == null ? "" : jsondata.get("DOC_AMT").toString();

					String V_PO_NO = jsondata.get("PO_NO") == null ? "" : jsondata.get("PO_NO").toString();
					String V_PO_SEQ = jsondata.get("PO_SEQ") == null ? "" : jsondata.get("PO_SEQ").toString();
					String V_LC_NO = jsondata.get("LC_NO") == null ? "" : jsondata.get("LC_NO").toString();
					String V_LC_SEQ = jsondata.get("LC_SEQ") == null ? "" : jsondata.get("LC_SEQ").toString();

					String V_CONT_MGM_NO = jsondata.get("CONT_MGM_NO") == null ? "" : jsondata.get("CONT_MGM_NO").toString();
					String V_BON_QTY = jsondata.get("BON_QTY") == null ? "" : jsondata.get("BON_QTY").toString();
					String V_ST_TYPE = jsondata.get("ST_TYPE") == null ? "" : jsondata.get("ST_TYPE").toString();
					String V_ST_TYPE_NM = jsondata.get("ST_TYPE_NM") == null ? "" : jsondata.get("ST_TYPE_NM").toString();
					
					
					String V_ITEM_GROUP_CD = jsondata.get("ITEM_GROUP_CD") == null ? "" : jsondata.get("ITEM_GROUP_CD").toString();
					String V_SPEC1 = jsondata.get("SPEC1") == null ? "" : jsondata.get("SPEC1").toString();
					String V_SPEC2 = jsondata.get("SPEC2") == null ? "" : jsondata.get("SPEC2").toString();
					String V_SPEC3 = jsondata.get("SPEC3") == null ? "" : jsondata.get("SPEC3").toString();
					String V_LENGTH = jsondata.get("LENGTH") == null ? "" : jsondata.get("LENGTH").toString();

					String V_BON_WGT_UNIT = jsondata.get("BON_WGT_UNIT") == null ? "" : jsondata.get("BON_WGT_UNIT").toString();

					cs = conn.prepareCall("call USP_001_M_BL_DTL_STEEL(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)");
					cs.setString(1, V_COMP_ID);//V_COMP_ID
					cs.setString(2, V_TYPE);//V_TYPE
					cs.setString(3, V_BL_NO);//V_BL_NO
					cs.setString(4, V_BL_SEQ);//V_BL_SEQ
					cs.setString(5, V_BL_SEQ2);//V_BL_SEQ2
					cs.setString(6, V_ITEM_CD);//V_QTY
					cs.setString(7, V_QTY);//V_QTY
					cs.setString(8, V_PRICE);//V_PRICE
					cs.setString(9, V_DOC_AMT);//V_DOC_AMT
					cs.setString(10, V_LOC_AMT);//V_LOC_AMT
					cs.setString(11, V_PO_NO);//V_PO_NO
					cs.setString(12, V_PO_SEQ);//V_PO_SEQ
					cs.setString(13, V_BON_QTY);//V_BON_QTY
					cs.setString(14, V_BON_WGT_UNIT);//V_CONT_QTY
					cs.setString(15, "");//V_FORWARD_XCH_AMT
					cs.setString(16, V_USR_ID);//V_USR_ID
					cs.registerOutParameter(17, com.tmax.tibero.TbTypes.CURSOR);
					cs.setString(18, "");//V_VALID_DT
					cs.setString(19, V_LC_NO);//V_LC_NO
					cs.setString(20, V_LC_SEQ);//V_LC_SEQ
					cs.setString(21, V_ST_TYPE_NM);//V_ST_TYPE_NM
					cs.setString(22, V_ST_TYPE);//V_ST_TYPE
					cs.setString(23, V_SPEC1);//V_SPEC1
					cs.setString(24, V_SPEC2);//V_SPEC2
					cs.setString(25, V_SPEC3);//V_SPEC3
					cs.setString(26, V_LENGTH);//V_LENGTH
					cs.setString(27, "");//V_SPEC_TOT
					cs.setString(28, V_ITEM_GROUP_CD);//V_LENGTH
					cs.executeQuery();


					response.setContentType("text/plain; charset=UTF-8");
					PrintWriter pw = response.getWriter();
					pw.print("success");
					pw.flush();
					pw.close();

				}
				
				//BL데이터 저장하고 조정 쿼리 돌려줌
				cs = conn.prepareCall("call USP_001_M_BL_ADJUST(?)");
				cs.setString(1, V_BL_NO);//V_BL_NO
				
				cs.executeQuery();

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


