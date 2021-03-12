<%@page import="java.io.PrintWriter"%>
<%@page import="org.json.simple.JSONArray"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@page import="org.json.simple.JSONObject"%>
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
<%@ page import="java.sql.*"%>
<%@ page import="java.text.SimpleDateFormat"%>
<%@ include file="/HSPF01/common/DB_Connection.jsp"%>

<%
	request.setCharacterEncoding("utf-8");
	ResultSet rs = null;
	CallableStatement cs = null;

	try {
		JSONObject jsonObject = new JSONObject();
		JSONArray jsonArray = new JSONArray();
		JSONObject subObject = null;

		String V_TYPE = request.getParameter("V_TYPE") == null ? "" : request.getParameter("V_TYPE");
		// 		System.out.println("V_TYPE" + V_TYPE);
		if (V_TYPE.equals("EMAIL_YN")) {

			String V_M_BP_CD = request.getParameter("V_M_BP_CD") == null ? "" : request.getParameter("V_M_BP_CD");
			String[] V_M_BP_CD_arr = V_M_BP_CD.split(",");

			V_M_BP_CD = "('";
			for (int i = 0; i < V_M_BP_CD_arr.length; i++) {
				V_M_BP_CD += V_M_BP_CD_arr[i] + "','";
			}
			V_M_BP_CD = V_M_BP_CD.substring(0, V_M_BP_CD.length() - 2);
			V_M_BP_CD = V_M_BP_CD.concat(")");

			String sql = "";
			sql += " SELECT EMAIL, EMAIL_YN FROM Z_USR_INFO_HSPF ";
			sql += "	WHERE BP_CD IN " + V_M_BP_CD;
			sql += "	AND EMAIL_YN = 'Y' ";

			rs = stmt.executeQuery(sql);

			String EMAIL = "";

			subObject = new JSONObject();
			while (rs.next()) {
				if (rs.getString("EMAIL_YN").equals("Y")) {
					EMAIL += rs.getString("EMAIL") + ",";
				}
			}

// 			System.out.println("EMAIL1" + EMAIL);
			jsonObject.put("EMAIL", EMAIL);
			jsonObject.put("success", true);
			response.setContentType("text/plain; charset=UTF-8");
			PrintWriter pw = response.getWriter();
			pw.print(jsonObject);
			pw.flush();
			pw.close();

		} else if (V_TYPE.equals("EMAIL_SEND")) {

			String V_EMAIL = request.getParameter("V_EMAIL") == null ? "" : request.getParameter("V_EMAIL");

			if (!V_EMAIL.equals("")) {
				String V_TYPE2 = request.getParameter("V_TYPE2") == null ? "" : request.getParameter("V_TYPE2");
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

				String V_PO_NO = request.getParameter("V_PO_NO") == null ? "" : request.getParameter("V_PO_NO");
				String V_USR_ID = request.getParameter("V_USR_ID") == null ? "" : request.getParameter("V_USR_ID");

				String[] V_PO_NO_arr = V_PO_NO.split(",");

				V_PO_NO = "('";
				for (int i = 0; i < V_PO_NO_arr.length; i++) {
					V_PO_NO += V_PO_NO_arr[i] + "','";
				}
				V_PO_NO = V_PO_NO.substring(0, V_PO_NO.length() - 2);
				V_PO_NO = V_PO_NO.concat(")");

				subject = "(주)화승네트웍스 발주건 [" + today + "]"; //메일 제목 입력해주세요. 
				body += "안녕하십니까.<br><br>";
				body += "화승플랫폼으로 P/O가 등록되었습니다.<br>";
				body += "화승플랫폼에 접속하시어 납품진행 바랍니다. <br><br>";
				body += "http://hspf.hsnetw.com<br><br>";

				body += "<br><br>감사합니다.";

				Properties props = System.getProperties();
				props.put("mail.smtp.host", host);
				props.put("mail.smtp.port", port);
				props.put("mail.smtp.auth", "true");
				props.put("mail.smtp.ssl.enable", "false");
				props.put("mail.smtp.ssl.trust", host);

				String[] V_EMAIL_arr = V_EMAIL.split(",");

				for (int i = 0; i < V_EMAIL_arr.length; i++) {
					String recipient = V_EMAIL_arr[i].trim();

					// 										System.out.println("*********************************");
//System.out.println(recipient);
					// 										System.out.println("now" + now);
					// 										System.out.println("*********************************");

					//Session 생성 
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

		}

	} catch (Exception e) {
		e.printStackTrace();
	} finally {
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
