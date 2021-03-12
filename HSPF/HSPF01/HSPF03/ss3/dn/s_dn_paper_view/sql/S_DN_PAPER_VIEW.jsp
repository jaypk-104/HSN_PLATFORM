
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ page import="org.json.simple.JSONArray"%>
<%@ page import="org.json.simple.JSONValue"%>
<%@ page import="net.sf.json.JSONObject"%>
<%@ page import="java.io.PrintWriter"%>
<%@ page import="java.io.StringWriter"%>
<%@ page import="java.net.URLDecoder"%>
<%@ page import="java.util.HashMap"%>
<%@ page import="org.apache.commons.lang.StringUtils"%>
<%@ include file="/HSPF01/common/DB_Connection.jsp"%>
<%@ page import="java.text.SimpleDateFormat"%>
<%@ page import="java.util.Date"%>
<%@ page import="java.util.Properties"%>
<%@ page import="javax.mail.Message"%>
<%@ page import="javax.mail.Session"%>
<%@ page import="javax.mail.Transport"%>
<%@ page import="javax.mail.internet.InternetAddress"%>
<%@ page import="javax.mail.internet.MimeMessage"%>
<%@ page import="javax.mail.internet.MimeBodyPart"%>
<%@ page import="javax.mail.internet.MimeMultipart"%>
<%@ page import="javax.mail.BodyPart"%>
<%@ page import="javax.mail.Multipart"%>
<%@ page import="java.text.SimpleDateFormat"%>


<%
	request.setCharacterEncoding("utf-8");
	ResultSet rs = null;
	ResultSet rs2 = null;
	CallableStatement cs = null;
	CallableStatement cs2 = null;
	JSONObject jsonObject = new JSONObject();
	JSONArray jsonArray = new JSONArray();
	JSONObject subObject = null;

	try {

		String V_TYPE = request.getParameter("V_TYPE");
		String V_PRINT_NO_ORG = (String) session.getAttribute("PRINT_NO");
		String V_FLAG = (String) session.getAttribute("FLAG") == null ? "" : (String) session.getAttribute("FLAG");
		String V_APP = (String) session.getAttribute("APP") == null ? "" : (String) session.getAttribute("APP"); //
		

		String PRINT_NO1 = V_PRINT_NO_ORG.substring(0, 8);
		String PRINT_NO2 = V_PRINT_NO_ORG.substring(8);

		String V_PRINT_NO = PRINT_NO1 + "-" + PRINT_NO2;
		
// 		System.out.println("V_FLAG" + V_FLAG);
		
		if (V_TYPE.equals("LOAD")) {

			cs2 = conn.prepareCall("call USP_PRINT_CNT_STEEL(?,?,?)");
			cs2.setString(1, V_PRINT_NO);
			cs2.setString(2, V_FLAG);
			cs2.registerOutParameter(3, com.tmax.tibero.TbTypes.CURSOR);
			cs2.executeQuery();

			rs2 = (ResultSet) cs2.getObject(3);

			String status = "";

			while (rs2.next()) {
				subObject = new JSONObject();
				subObject.put("STATUS", rs2.getString("STATUS"));
				subObject.put("PRINT_NO", V_PRINT_NO_ORG);
				subObject.put("FLAG", V_FLAG);

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

		} else if (V_TYPE.equals("ALLOW") && V_FLAG.equals("C")) {
			
// 			System.out.println("취소승인");
			
			/*출하취소승인*/
			cs = conn.prepareCall("call USP_001_S_DN_PRINT_NEW(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)");
			cs.setString(1, "ACN");//V_TYPE
			cs.setString(2, "HSN");//V_COMP_ID
			cs.setString(3, "");//V_DN_NO
			cs.setString(4, "");//V_DN_SEQ
			cs.setString(5, "");//V_DN_REQ_DT
			cs.setString(6, "");//V_DN_REQ_NO
			cs.setString(7, V_PRINT_NO);//V_PRINT_NO
			cs.setString(8, "");//V_BLCN_NO
			cs.setString(9, "");//V_ITEM_NM2
			cs.setString(10, V_APP);//V_REMARK 승인 결재자 아이디
			cs.setString(11, "");//V_USR_ID
			cs.registerOutParameter(12, com.tmax.tibero.TbTypes.CURSOR);
			cs.setString(13, "");//V_USR_ID
			cs.setString(14, "");//V_USR_ID
			cs.setString(15, "");//V_CALC_INTER_YN
			cs.executeQuery();

			rs = (ResultSet) cs.getObject(12);

			String STATUS = "";

			while (rs.next()) {
				STATUS = rs.getString("STATUS");
			}

			response.setContentType("text/plain; charset=UTF-8");
			PrintWriter pw = response.getWriter();
			pw.print(STATUS);
			pw.flush();
			pw.close();
		} else if (V_TYPE.equals("ALLOW")) {
			System.out.println("승인");
			System.out.println(V_APP);
			/*요청서승인*/
			cs = conn.prepareCall("call USP_001_S_DN_PRINT_NEW(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)");
			cs.setString(1, "AC");//V_TYPE
			cs.setString(2, "HSN");//V_COMP_ID
			cs.setString(3, "");//V_DN_NO
			cs.setString(4, "");//V_DN_SEQ
			cs.setString(5, "");//V_DN_REQ_DT
			cs.setString(6, "");//V_DN_REQ_NO
			cs.setString(7, V_PRINT_NO);//V_PRINT_NO
			cs.setString(8, "");//V_BLCN_NO
			cs.setString(9, "");//V_ITEM_NM2
			cs.setString(10, V_APP);//V_REMARK 승인 결재자 아이디
			cs.setString(11, "");//V_USR_ID
			cs.registerOutParameter(12, com.tmax.tibero.TbTypes.CURSOR);
			cs.setString(13, "");//V_USR_ID
			cs.setString(14, "");//V_APP
			cs.setString(15, "");//V_CALC_INTER_YN
			cs.executeQuery();

			rs = (ResultSet) cs.getObject(12);

			String STATUS = "";
			String DN_REQ_NO = "";
			String DN_REQ_DT = "";
			String SL_NM = "";
			String S_BP_NM = "";

			while (rs.next()) {
				STATUS = rs.getString("STATUS");
				DN_REQ_NO = rs.getString("DN_REQ_NO");
				DN_REQ_DT = rs.getString("DN_REQ_DT").substring(0, 10);
				SL_NM = rs.getString("SL_NM");
				S_BP_NM = rs.getString("S_BP_NM");
			}

			if (STATUS.equals("Y")) {

				long time = System.currentTimeMillis();
				SimpleDateFormat dayTime = new SimpleDateFormat("yyyy-MM-dd");
				SimpleDateFormat dayTime2 = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
				String today = dayTime.format(new Date(time));
				String now = dayTime2.format(new Date(time));

				String host = "123.142.124.146";
				int port = 25;

				final String username = "admin";
				final String password = "hsnadmin";

				String subject = "";
				String body = "";

				if(V_FLAG.equals("C")) {
					subject = "[" + DN_REQ_NO + "]" + "출하취소요청서 승인완료 알림"; //메일 제목 입력해주세요.
					
					body += "<SPAN style=\"FONT-SIZE: 14pt\">요청하신 출하취소요청서가 승인되었습니다.</SPAN><br><br>";
					body += "<DIV><SPAN style=\"FONT-SIZE: 10pt\"><SPAN 9pt><출하취소요청서 요청내역></SPAN></SPAN></DIV>";
					body += "<DIV><SPAN style=\"FONT-SIZE: 10pt\"><SPAN 9pt>출하취소요청서번호 : " + DN_REQ_NO + "</SPAN></SPAN></DIV>";
					body += "<DIV><SPAN style=\"FONT-SIZE: 10pt\"><SPAN 9pt>출하취소요청일 : " + DN_REQ_DT + "</SPAN></SPAN></DIV>";
					body += "<DIV><SPAN style=\"FONT-SIZE: 10pt\"><SPAN 9pt>창고 : " + SL_NM + "</SPAN></SPAN></DIV>";
					body += "<DIV><SPAN style=\"FONT-SIZE: 10pt\"><SPAN 9pt>매출처 : " + S_BP_NM + "</SPAN></SPAN></DIV>";
					body += "<STRONG><SPAN style=\"FONT-SIZE: 20pt\"><A href=\"http://123.142.124.161:8080/HSPF01/HSPF03/ss3/dn/s_dn_paper_view/S_DN_PAPER_VIEW.jsp?PRINT_NO=" + V_PRINT_NO.replaceAll("-", "") + "\">출하요청서보기</A>&nbsp;<BR></SPAN></STRONG><BR><BR><BR>";
					body += "<DIV>&nbsp;</DIV>";
				} else {
					subject = "[" + DN_REQ_NO + "]" + "출하요청서 승인완료 알림"; //메일 제목 입력해주세요. 

					body += "<SPAN style=\"FONT-SIZE: 14pt\">요청하신 출하요청서가 승인되었습니다.</SPAN><br><br>";
					body += "<DIV><SPAN style=\"FONT-SIZE: 10pt\"><SPAN 9pt><출하요청서 요청내역></SPAN></SPAN></DIV>";
					body += "<DIV><SPAN style=\"FONT-SIZE: 10pt\"><SPAN 9pt>출하요청서번호 : " + DN_REQ_NO + "</SPAN></SPAN></DIV>";
					body += "<DIV><SPAN style=\"FONT-SIZE: 10pt\"><SPAN 9pt>출하요청일 : " + DN_REQ_DT + "</SPAN></SPAN></DIV>";
					body += "<DIV><SPAN style=\"FONT-SIZE: 10pt\"><SPAN 9pt>창고 : " + SL_NM + "</SPAN></SPAN></DIV>";
					body += "<DIV><SPAN style=\"FONT-SIZE: 10pt\"><SPAN 9pt>매출처 : " + S_BP_NM + "</SPAN></SPAN></DIV>";
					body += "<STRONG><SPAN style=\"FONT-SIZE: 20pt\"><A href=\"http://123.142.124.161:8080/HSPF01/HSPF03/ss3/dn/s_dn_paper_view/S_DN_PAPER_VIEW.jsp?PRINT_NO=" + V_PRINT_NO.replaceAll("-", "") + "\">출하요청서보기</A>&nbsp;<BR></SPAN></STRONG><BR><BR><BR>";
					body += "<DIV>&nbsp;</DIV>";
				}

				Properties props = System.getProperties();
				props.put("mail.smtp.host", host);
				props.put("mail.smtp.port", port);
				props.put("mail.smtp.auth", "true");
				props.put("mail.smtp.ssl.enable", "false");
				props.put("mail.smtp.ssl.trust", host);

// 				// 				String V_EMAIL = "jaypk104@hsnetw.com,yh1990@hsnetw.com";
// 				String V_EMAIL = "tpahtpah5@hsnetw.com";
				String V_EMAIL = (String) session.getAttribute("MR");
				String[] V_EMAIL_arr = V_EMAIL.split(",");

				for (int k = 0; k < V_EMAIL_arr.length; k++) {
					String recipient = V_EMAIL_arr[k].trim();
					System.out.println("*********************************");
					System.out.println("re_recipient" + recipient);
					System.out.println("now" + now);
					System.out.println("*********************************");

					Session session2 = Session.getInstance(props, new javax.mail.Authenticator() {
						String	un	= username;
						String	pw	= password;

						protected javax.mail.PasswordAuthentication getPasswordAuthentication()
						{
							return new javax.mail.PasswordAuthentication(un, pw);
						}
					});
					session2.setDebug(false); //for debug

					Message mimeMessage = new MimeMessage(session2); //MimeMessage 생성 
					mimeMessage.setFrom(new InternetAddress("admin@hsnetw.com"));
					mimeMessage.setRecipient(Message.RecipientType.TO, new InternetAddress(recipient));

					BodyPart messageBodyPart = new MimeBodyPart();
					messageBodyPart.setContent(body, "text/html;charset=UTF-8");

					Multipart multipart = new MimeMultipart();
					multipart.addBodyPart(messageBodyPart);

					mimeMessage.setSubject(subject); //제목셋팅 
					mimeMessage.setContent(multipart);
					Transport.send(mimeMessage); //javax.mail.Transport.send() 이용

				}

			}

			response.setContentType("text/plain; charset=UTF-8");
			PrintWriter pw = response.getWriter();
			pw.print(STATUS);
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
		if (cs != null) try {
			cs.close();
		} catch (SQLException ex) {}
		if (cs2 != null) try {
			cs2.close();
		} catch (SQLException ex) {}
		if (rs != null) try {
			rs.close();
		} catch (SQLException ex) {}
		if (rs2 != null) try {
			rs2.close();
		} catch (SQLException ex) {}
		if (stmt != null) try {
			stmt.close();
		} catch (SQLException ex) {}
		if (conn != null) try {
			conn.close();
		} catch (SQLException ex) {}
	}
%>
