<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>input/testExample.jsp</title>
</head>

<body>
    <%
        request.setCharacterEncoding("UTF-8"); //이 구간은 자바구간!
        String firstName = request.getParameter("firstName");
        String lastName = request.getParameter("lastName");
        String email = request.getParameter("email");
    %>
    <center>
        <h1>귀찮구만!</h1>

        <table border="1" style="width:30%">
            <tr align="center">
                <td>이름이머시유?</td>
                <td><%=firstName%></td>
            </tr>
            <tr align="center">
                <td>본관이어디유?</td>
                <td><%=lastName%></td>
            </tr>
            <tr align="center">
                <td>메일주소머유?</td>
                <td><%=email%></td>
            </tr>
    </center>
</body>

</html>