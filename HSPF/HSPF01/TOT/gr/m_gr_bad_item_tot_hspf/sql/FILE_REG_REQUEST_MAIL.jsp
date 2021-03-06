<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>

<%@page import="java.nio.file.Files"%>
<%@page import="java.nio.file.Paths"%>
<%@page import="javax.activation.DataHandler"%>
<%@page import="javax.activation.FileDataSource"%>
<%@page import="javax.mail.internet.MimeUtility"%>
	

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

<%@ page import="java.io.BufferedReader"%>
<%@ page import="java.io.InputStreamReader"%>
<%@ page import="java.net.HttpURLConnection"%>
<%@ page import="java.net.URL"%>

<%@ page import="java.nio.file.Path"%>
<%@ page import="java.io.*"%>
<%@page import="org.apache.commons.fileupload.FileItem"%>


<%@ page import="java.util.regex.Matcher"%>
<%@ page import="java.util.regex.Pattern"%>



<%
	
	request.setCharacterEncoding("utf-8");
	ResultSet rs = null;
	CallableStatement cs = null;
	CallableStatement cs2 = null;
	CallableStatement cs3 = null;
	JSONObject jsonObject = new JSONObject();
	JSONArray jsonArray = new JSONArray();
	JSONObject subObject = null;

	try {

		String V_ASN_NO = request.getParameter("V_ASN_NO") == null ? "" : request.getParameter("V_ASN_NO");
		String V_EMAIL = "";
		
		String sql = ""; 
		sql += " SELECT NVL(C.EMAIL, 'N') EMAIL "; 
		sql += " FROM SCM_BARCD_MST_TOT_HSPF A  "; 
		sql += " LEFT OUTER JOIN M_PO_HDR_TOT_HSPF B ON A.PO_NO = B.PO_NO "; 
		sql += " LEFT OUTER JOIN Z_USR_INFO_HSPF C ON B.BP_CD = C.BP_CD  "; 
		sql += " WHERE ASN_NO = '" + V_ASN_NO + "' "; 

		rs = stmt.executeQuery(sql);

		while (rs.next()) {
			V_EMAIL = rs.getString("EMAIL");
		}
		
		String[] V_EMAIL_ARR = V_EMAIL.split(",");
		
		
		InternetAddress[] toAddr = new InternetAddress[V_EMAIL_ARR.length];
		
		boolean err = false; 
		for(int i = 0 ; i < V_EMAIL_ARR.length ; i ++){
			//????????? ?????? ?????? ???????????? ??????
			String regex = "^[_a-z0-9-]+(.[_a-z0-9-]+)*@(?:\\w+\\.)+\\w+$"; 
			Pattern p = Pattern.compile(regex); 
			Matcher m = p.matcher(V_EMAIL_ARR[i]); 
			if(m.matches()) { 
				err = true; 
				toAddr[i] = new InternetAddress (V_EMAIL_ARR[i]);
			}
		}
		
		
		
		
		if(err){
// 			System.out.println("????????? ??????????????????.");
			
			long time = System.currentTimeMillis();
			SimpleDateFormat dayTime = new SimpleDateFormat("yyyy-MM-dd");
			SimpleDateFormat dayTime2 = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
			String today = dayTime.format(new Date(time));
			String now = dayTime2.format(new Date(time));

			

			boolean skip = false;
			String client = "";


			String subject = "ASN ????????? ??? ???????????? ?????? ??????(??????????????????)" ;
			String body = "";

			body += "<SPAN style=\"FONT-SIZE: 14pt\"> ???????????????( <a href='http://hspf.hsnetw.com'>http://hspf.hsnetw.com</a> ) ??? ??????????????? ???????????? ????????? ???????????? ????????????</SPAN>";
			body += "<br><br><br><SPAN style=\"FONT-SIZE: 14pt\"> ASN ?????? :  "  + V_ASN_NO +   "</SPAN>";
			body += "<br><br><span style='color:red'>??? E-MAIL??? ?????????????????? ????????? ???????????????.</span>";


			String host = "123.142.124.146";
			int port = 25;

			final String username = "admin";
			final String password = "hsnadmin";

			Properties props = System.getProperties();
			props.put("mail.smtp.host", host);
			props.put("mail.smtp.port", port);
			props.put("mail.smtp.auth", "true");
			props.put("mail.smtp.ssl.enable", "false");
			props.put("mail.smtp.ssl.trust", host);

			String recipient = V_EMAIL;
			
// 			System.out.println("*********************************");
// 			System.out.println("mail send to  : " + recipient);
// 			System.out.println("now : " + now);
// 			System.out.println("*********************************");

			
			//Session ?????? 
			Session session2 = Session.getInstance(props, new javax.mail.Authenticator() {
				String	un	= username;
				String	pw	= password;

				protected javax.mail.PasswordAuthentication getPasswordAuthentication()
				{
					return new javax.mail.PasswordAuthentication(un, pw);
				}
			});
			session2.setDebug(false); //for debug

			Message mimeMessage = new MimeMessage(session2); //MimeMessage ?????? 
			mimeMessage.setFrom(new InternetAddress("admin@hsnetw.com"));
// 			mimeMessage.setRecipient(Message.RecipientType.TO, new InternetAddress(recipient));
			mimeMessage.setRecipients(Message.RecipientType.TO, toAddr);

			BodyPart messageBodyPart = new MimeBodyPart();
			messageBodyPart.setContent(body, "text/html;charset=UTF-8");

			Multipart multipart = new MimeMultipart();
			multipart.addBodyPart(messageBodyPart);

//	 		mimeMessage.setSubject(subject); //???????????? 
			mimeMessage.setSubject(MimeUtility.encodeText(subject, "UTF-8", "B")); //???????????? 
			mimeMessage.setContent(multipart);
			Transport.send(mimeMessage); //javax.mail.Transport.send() ??????
			
			response.setContentType("text/plain; charset=UTF-8");
			PrintWriter pw = response.getWriter();
			pw.print("?????? ????????? ?????????????????????.");
			pw.flush();
			pw.close();
			
			
		}
		else{
// 			System.out.println("???????????? ??????????????????.");
			
			response.setContentType("text/plain; charset=UTF-8");
			PrintWriter pw = response.getWriter();
			pw.print("???????????? ??????????????????. ????????? ????????? ??????????????????.");
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
		if (cs3 != null)
			try {
				cs3.close();
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


