<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>input/controlExample.jsp</title>
</head>

<body>
    <%

        String firstName = request.getParameter("firstName");
        String lastName = request.getParameter("lastName");
        String hireDate = request.getParameter("hireDate");
        String computer = request.getParameter("computer");
    %>
    <input type="text" name="firstName" value=<%=firstName%>><br>
    <input type="text" name="lastName" value=<%=lastName%>><br>
    <input type="date" name="hireDate" value=<%=hireDate%>><br>
    <select name="computer">
        <option value="">선택하세요...</option>
        <option value="Software">Software</option>
        <option value="Robot" selected>Robot</option>
        <option value="System">System</option>
</body>

</html>