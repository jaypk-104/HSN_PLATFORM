﻿<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@page import="java.io.PrintWriter"%>
<%@page import="org.json.simple.JSONArray"%>
<%@page import="org.json.simple.JSONObject"%>
<%@page import="java.sql.*"%>
<%@ include file="/HSPF01/common/DB_Connection.jsp"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
</head>
<body>
	<%
		request.setCharacterEncoding("utf-8");
		ResultSet rs = null;
		CallableStatement cs = null;
		ResultSet pre_rs = null;
		try {
			JSONObject jsonTreeRootObject = new JSONObject();
			JSONObject jsonTreeObject = null;
			JSONArray jsonTreeChildrenArray = new JSONArray();
			JSONObject jsonTreeChildrenObject = null;
			JSONArray jsonArray = new JSONArray();
			JSONObject subObject = null;
			JSONObject jsonObject = new JSONObject();

			jsonTreeObject = new JSONObject();

			String user_id = session.getAttribute("user_id") == null ? "" : (String) session.getAttribute("user_id");
			String comp_id = session.getAttribute("comp_id") == null ? "" : (String) session.getAttribute("comp_id");
			String role_cd = "";
			
// 			user_id = "PEB7986";

			String pre_sql = "select ROLE_CD from Z_USR_INFO_HSPF WHERE UPPER(USR_ID) = '" + user_id.toUpperCase() + "' ";
			pre_rs = stmt.executeQuery(pre_sql);

			while (pre_rs.next()) {
				role_cd = pre_rs.getString("ROLE_CD");
			}
// 			role_cd = "PEB";
			
	%>
	<%
		if (comp_id.equals("") || user_id.equals("")) {
				// 			response.sendRedirect("/HSPF01/common/login/login.jsp");
				// 			RequestDispatcher rd = request.getRequestDispatcher("/HSPF01/common/login/login.jsp");
				// 			rd.forward(request, response);
				// 				out.println("<Script language='JavaScript'>top.document.location.reload();</Script>");
				// 			return;
			} else {
				String click_node = request.getParameter("node");
				
// 				/*소재원자재*/
// 				String sql = "";
// 				sql = "SELECT  C.PGM_ID, C.PGM_NM,   C.LEVELS,                          ";
// 				sql += "        CASE                                                               ";
// 				sql += "                WHEN C.FILE_TYPE = 'MENU'                                  ";
// 				sql += "                THEN '/'                                                   ";
// 				sql += "                ELSE '../../' || D.PGM_PATH || '/'  || LOWER(C.PGM_ID) || '/'  || C.PGM_ID || '.' || C.FILE_TYPE        ";
// 				sql += "        END PGM_PATH, C.UPPER_PGM_ID, C.LEVELS, C.SEQ, C.IDX, C.PARENT_IDX, ";
// 				sql += "         (SELECT COUNT(*) FROM Z_PGM_HSPF CX WHERE CX.PARENT_IDX = C.IDX) COUNT  ";
// 				sql += "		 FROM    Z_USR_INFO_HSPF A                                          ";
// 				sql += "        LEFT OUTER JOIN Z_AUTH_HSPF B                                      ";
// 				sql += "        ON      A.ROLE_CD = B.ROLE_CD                                      ";
// 				sql += "        LEFT OUTER JOIN Z_PGM_HSPF C                                       ";
// 				sql += "        ON      B.PGM_ID = C.PGM_ID                                        ";
// 				sql += "        LEFT OUTER JOIN Z_MODULE_HSPF D                                    ";
// 				sql += "        ON      C.MODULE_CD = D.MODULE_CD                                  ";
// 				sql += "WHERE   A.USR_ID            = '" + user_id.toUpperCase() + "'                                      ";
// 				sql += "AND     A.COMP_ID           = '" + comp_id + "'                                        ";
// 				if (!click_node.equals("root")) {
// 					sql += "AND     C.parent_idx = " + click_node;
// 				}
// 				sql += " ORDER BY                                                                   ";
// 				sql += "       C.IDX, C.PARENT_IDX                                                 ";

// 				/*일반무역*/
// 				String sql2 = "";
// 				sql2 = "SELECT  C.PGM_ID, C.PGM_NM,   C.LEVELS,                          ";
// 				sql2 += "        CASE                                                               ";
// 				sql2 += "                WHEN C.FILE_TYPE = 'MENU'                                  ";
// 				sql2 += "                THEN '/'                                                   ";
// 				sql2 += "                ELSE '../../' || D.PGM_PATH || '/'  || LOWER(C.PGM_ID) || '/'  || C.PGM_ID || '.' || C.FILE_TYPE        ";
// 				sql2 += "        END PGM_PATH, C.UPPER_PGM_ID, C.LEVELS, C.SEQ, C.IDX, C.PARENT_IDX, ";
// 				sql2 += "         (SELECT COUNT(*) FROM Z_PGM_DISTB CX WHERE CX.PARENT_IDX = C.IDX) COUNT  ";
// 				sql2 += "		 FROM    Z_USR_INFO_HSPF A                                          ";
// 				sql2 += "        LEFT OUTER JOIN Z_AUTH_DISTB B                                      ";
// 				sql2 += "        ON      A.ROLE_CD = B.ROLE_CD                                      ";
// 				sql2 += "        LEFT OUTER JOIN Z_PGM_DISTB C                                       ";
// 				sql2 += "        ON      B.PGM_ID = C.PGM_ID                                        ";
// 				sql2 += "        LEFT OUTER JOIN Z_MODULE_DISTB D                                    ";
// 				sql2 += "        ON      C.MODULE_CD = D.MODULE_CD                                  ";
// 				sql2 += "WHERE   A.USR_ID            = '" + user_id.toUpperCase() + "'                                      ";
// 				sql2 += "AND     A.COMP_ID           = '" + comp_id + "'                                        ";
// 				if (!click_node.equals("root")) {
// 					sql2 += "AND     C.parent_idx = " + click_node;
// 				}
// 				sql2 += " ORDER BY                                                                   ";
// 				sql2 += "       C.IDX, C.PARENT_IDX             ;                                    ";

// 				/*철강*/
// 				String sql3 = "";
// 				sql3 = "SELECT  C.PGM_ID, C.PGM_NM,   C.LEVELS,                          ";
// 				sql3 += "        CASE                                                               ";
// 				sql3 += "                WHEN C.FILE_TYPE = 'MENU'                                  ";
// 				sql3 += "                THEN '/'                                                   ";
// 				sql3 += "                ELSE '../../' || D.PGM_PATH || '/'  || LOWER(C.PGM_ID) || '/'  || C.PGM_ID || '.' || C.FILE_TYPE        ";
// 				sql3 += "        END PGM_PATH, C.UPPER_PGM_ID, C.LEVELS, C.SEQ, C.IDX, C.PARENT_IDX, ";
// 				sql3 += "         (SELECT COUNT(*) FROM Z_PGM_STEEL CX WHERE CX.PARENT_IDX = C.IDX) COUNT  ";
// 				sql3 += "		 FROM    Z_USR_INFO_HSPF A                                          ";
// 				sql3 += "        LEFT OUTER JOIN Z_AUTH_STEEL B                                      ";
// 				sql3 += "        ON      A.ROLE_CD = B.ROLE_CD                                      ";
// 				sql3 += "        LEFT OUTER JOIN Z_PGM_STEEL C                                       ";
// 				sql3 += "        ON      B.PGM_ID = C.PGM_ID                                        ";
// 				sql3 += "        LEFT OUTER JOIN Z_MODULE_STEEL D                                    ";
// 				sql3 += "        ON      C.MODULE_CD = D.MODULE_CD                                  ";
// 				sql3 += "WHERE   A.USR_ID            = '" + user_id.toUpperCase() + "'                                      ";
// 				sql3 += "AND     A.COMP_ID           = '" + comp_id + "'                                        ";
// 				if (!click_node.equals("root")) {
// 					sql3 += "AND     C.parent_idx = " + click_node;
// 				}
// 				sql3 += " ORDER BY                                                                   ";
// 				sql3 += "       C.IDX, C.PARENT_IDX                                                 ";
				
// 				String sql_SWM = "";
// 				sql_SWM = "SELECT  C.PGM_ID, C.PGM_NM,   C.LEVELS,                          ";
// 				sql_SWM += "        CASE                                                               ";
// 				sql_SWM += "                WHEN C.FILE_TYPE = 'MENU'                                  ";
// 				sql_SWM += "                THEN '/'                                                   ";
// 				sql_SWM += "                ELSE '../../' || D.PGM_PATH || '/'  || LOWER(C.PGM_ID) || '/'  || C.PGM_ID || '.' || C.FILE_TYPE        ";
// 				sql_SWM += "        END PGM_PATH, C.UPPER_PGM_ID, C.LEVELS, C.SEQ, C.IDX, C.PARENT_IDX, ";
// 				sql_SWM += "         (SELECT COUNT(*) FROM Z_PGM_HSPF_SWM CX WHERE CX.PARENT_IDX = C.IDX) COUNT  ";
// 				sql_SWM += "		 FROM    Z_USR_INFO_HSPF A                                          ";
// 				sql_SWM += "        LEFT OUTER JOIN Z_AUTH_SWM B                                      ";
// 				sql_SWM += "        ON      A.ROLE_CD = B.ROLE_CD                                      ";
// 				sql_SWM += "        LEFT OUTER JOIN Z_PGM_HSPF_SWM C                                       ";
// 				sql_SWM += "        ON      B.PGM_ID = C.PGM_ID                                        ";
// 				sql_SWM += "        LEFT OUTER JOIN Z_MODULE_SWM D                                    ";
// 				sql_SWM += "        ON      C.MODULE_CD = D.MODULE_CD                                  ";
// 				sql_SWM += "WHERE   A.USR_ID            = '" + user_id.toUpperCase() + "'                                      ";
// 				sql_SWM += "AND     A.COMP_ID           = '" + comp_id + "'                                        ";
// 				if (!click_node.equals("root")) {
// 					sql_SWM  += "AND     C.parent_idx = " + click_node;
// 				}
// 				sql_SWM += " ORDER BY                                                                   ";
// 				sql_SWM += "       C.IDX, C.PARENT_IDX                                                 ";
				
				
// 				String sql_SEOUL = "";
// 				sql_SEOUL = "SELECT  C.PGM_ID, C.PGM_NM,   C.LEVELS,                          ";
// 				sql_SEOUL += "        CASE                                                               ";
// 				sql_SEOUL += "                WHEN C.FILE_TYPE = 'MENU'                                  ";
// 				sql_SEOUL += "                THEN '/'                                                   ";
// 				sql_SEOUL += "                ELSE '../../' || D.PGM_PATH || '/'  || LOWER(C.PGM_ID) || '/'  || C.PGM_ID || '.' || C.FILE_TYPE        ";
// 				sql_SEOUL += "        END PGM_PATH, C.UPPER_PGM_ID, C.LEVELS, C.SEQ, C.IDX, C.PARENT_IDX, ";
// 				sql_SEOUL += "         (SELECT COUNT(*) FROM Z_PGM_SEOUL CX WHERE CX.PARENT_IDX = C.IDX) COUNT  ";
// 				sql_SEOUL += "		 FROM    Z_USR_INFO_HSPF A                                          ";
// 				sql_SEOUL += "        LEFT OUTER JOIN Z_AUTH_SEOUL B                                      ";
// 				sql_SEOUL += "        ON      A.ROLE_CD = B.ROLE_CD                                      ";
// 				sql_SEOUL += "        LEFT OUTER JOIN Z_PGM_SEOUL C                                       ";
// 				sql_SEOUL += "        ON      B.PGM_ID = C.PGM_ID                                        ";
// 				sql_SEOUL += "        LEFT OUTER JOIN Z_MODULE_SEOUL D                                    ";
// 				sql_SEOUL += "        ON      C.MODULE_CD = D.MODULE_CD                                  ";
// 				sql_SEOUL += "WHERE   A.USR_ID            = '" + user_id.toUpperCase() + "'                                      ";
// 				sql_SEOUL += "AND     A.COMP_ID           = '" + comp_id + "'                                        ";
// 				if (!click_node.equals("root")) {
// 					sql_SEOUL  += "AND     C.parent_idx = " + click_node;
// 				}
// 				sql_SEOUL += " ORDER BY                                                                   ";
// 				sql_SEOUL += "       C.IDX, C.PARENT_IDX                                                 ";
				
				

// 				if (role_cd.equals("AD_DISTB") || role_cd.equals("AD_RISK")|| role_cd.equals("CU_DISTB") || role_cd.equals("SAMHYUN") || role_cd.equals("GYEONGGI") || role_cd.equals("PEB")) {
// 					rs = stmt.executeQuery(sql2);
// 				} 
// 				else if (role_cd.equals("AD_STEEL")) {
// 					rs = stmt.executeQuery(sql3);
// 				} 
// 				else if (role_cd.equals("AD_SWM") || role_cd.equals("SUPP_SWM")){
// 					rs = stmt.executeQuery(sql_SWM);
// 				}
// 				else if (role_cd.equals("AD_SEOUL")){
// 					rs = stmt.executeQuery(sql_SEOUL);
// 				}
// 				else {
// 					rs = stmt.executeQuery(sql);
// 				}
				cs = conn.prepareCall("call USP_MENU_LIST(?,?,?,?,?)");
				cs.setString(1, comp_id);//
				cs.setString(2, role_cd);//
				cs.setString(3, click_node);//
				cs.setString(4, user_id);//
				cs.registerOutParameter(5, com.tmax.tibero.TbTypes.CURSOR);
				cs.executeQuery();

				rs = (ResultSet) cs.getObject(5);
				
// 				System.out.println(sql2);
// 				System.out.println("=======================================================");
// 				System.out.println(sql3);

				while (rs.next()) {
					subObject = new JSONObject();
					
					subObject.put("id", rs.getInt("IDX"));
					subObject.put("text", rs.getString("PGM_NM"));
					subObject.put("url", rs.getString("PGM_PATH"));
					subObject.put("pgm_id", rs.getString("PGM_ID"));
					//아이콘추가
					if (rs.getString("PGM_ID").equals("BB")) {
						subObject.put("iconCls", "fa-list-ol");
					} else if (rs.getString("PGM_ID").equals("MM")) {
						subObject.put("iconCls", "fa-shopping-cart");
					} else if (rs.getString("PGM_ID").equals("SL")) {
						subObject.put("iconCls", "fa-archive");
					} else if (rs.getString("PGM_ID").equals("SP")) {
						subObject.put("iconCls", "fa-truck");
					} else if (rs.getString("PGM_ID").equals("SS")) {
						subObject.put("iconCls", "fa-handshake-o");
					} else if (rs.getString("PGM_ID").equals("QQ")) {
						subObject.put("iconCls", "fa-search");
					} else if (rs.getString("PGM_ID").equals("END")) {
						subObject.put("iconCls", "fa-calculator");
					} else if (rs.getString("PGM_ID").equals("YY")) {
						subObject.put("iconCls", "fa-clipboard");
					} else if (rs.getString("PGM_ID").equals("ST")) { 
						subObject.put("iconCls", "fa-stack-overflow");
					}
					if (rs.getInt("count") > 0) {
						subObject.put("expanded", false);
					} else {
						subObject.put("leaf", true);
					}
					jsonArray.add(subObject);
				}
				jsonObject.put("success", true);
				jsonObject.put("children", jsonArray);
				
// 				System.out.println(jsonObject);

				response.setContentType("text/plain; charset=UTF-8");
				PrintWriter pw = response.getWriter();
				pw.print(jsonObject);
				pw.flush();
				pw.close();
			}

		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			if (rs != null) try {
				rs.close();
			} catch (SQLException ex) {}
			if (pre_rs != null) try {
				pre_rs.close();
			} catch (SQLException ex) {}
			if (stmt != null) try {
				stmt.close();
			} catch (SQLException ex) {}
			if (conn != null) try {
				conn.close();
			} catch (SQLException ex) {}
		}
	%>


</body>
</html>