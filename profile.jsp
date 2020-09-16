<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="layout.css">
    <title>profile.jsp</title>
</head>
<body>
    <h2>CSS Layout Float</h2>
<p>In this example, we have created a header, two columns/boxes and a footer. On smaller screens, the columns will stack on top of each other.</p>
<p>Resize the browser window to see the responsive effect (you will learn more about this in our next chapter - HTML Responsive.)</p>

<header style="background-color: goldenrod;">
  <h2>Cities</h2>
</header>

<section>
    <nav style="height:600px;">
      <ul>
        <li><a href="layout.html">London</a></li>
        <li><a href="paris.html">Paris</a></li>
        <li><a href="obamaman.html">Obama</a></li>
        <li><a href="profile.html">Profile</a></li>
      </ul>
    </nav>

    <%
        String id = request.getParameter("id");
        String hiredate = request.getParameter("hiredate");
        String sex = request.getParameter("sex");
        String email = request.getParameter("email");
        String phonenum1 = request.getParameter("phonenum1");
        String phonenum2 = request.getParameter("phonenum2");
        String phonenum3 = request.getParameter("phonenum3");
        String job = request.getParameter("job");
        String[] habby = request.getParameterValues("habby");
        String intro = request.getParameter("intro");
    %>
    <h3>UserId:<%=id%></h3>
    <h3>생년월일:<%=hiredate%></h3>
    <h3>성별:<%=sex%></h3>
    <h3>이메일:<%=email%></h3>
    <h3>전화번호:<%=phonenum1%>-<%=phonenum2%>-<%=phonenum3%></h3>
    <h3>직업:<%=job%></h3>
    
            <% for(String hob:habby) {
            %>
            <p>취미:<%=hob%></p>
            <%
    }
        %>

    <h3>자기소개:<%=intro%></h3>

    <footer>
        <p>Footer</p>
      </footer>
      
</body>
</html>