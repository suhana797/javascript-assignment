// ade
var age ="15";
alert("i am" + " " + age +" "+ "years old")

// visitors count


function getCookieVal (offset) {
    var endstr = document.cookie.indexOf (";", offset);
    if (endstr == -1)
    endstr = document.cookie.length;
    return unescape(document.cookie.substring(offset, endstr));
    }
    function GetCookie (name) {
    var arg = name + "=";
    var alen = arg.length;
    var clen = document.cookie.length;
    var i = 0;
    while (i < clen) {
    var j = i + alen;
    if (document.cookie.substring(i, j) == arg)
    return getCookieVal (j);
    i = document.cookie.indexOf(" ", i) + 1;
    if (i == 0) 
    break; 
    }
    return null;
    }
    function SetCookie (name, value) {
    var argv = SetCookie.arguments;
    var argc = SetCookie.arguments.length;
    var expires = (2 < argc) ? argv[2] : null;
    var path = (3 < argc) ? argv[3] : null;
    var domain = (4 < argc) ? argv[4] : null;
    var secure = (5 < argc) ? argv[5] : false;
    document.cookie = name + "=" + escape (value) +
    ((expires == null) ? "" : ("; expires=" + expires.toGMTString())) +
    ((path == null) ? "" : ("; path=" + path)) +
    ((domain == null) ? "" : ("; domain=" + domain)) +
    ((secure == true) ? "; secure" : "");
    }
    function DisplayInfo() {
    var expdate = new Date();
    var visit;
    expdate.setTime(expdate.getTime() +  (24 * 60 * 60 * 1000 * 365)); 
    if(!(visit = GetCookie("visit"))) 
    visit = 0;
    visit++;
    SetCookie("visit", visit, expdate, "/", null, false);
    var message;
    if(visit == 1) 
    message="         Welcome to my page!";
    if(visit== 2) 
    message="           I see you came back !";
    if(visit == 3) 
    message="               Oh, it's you again!";
    if(visit == 4)
    message="            You must be curious!"; 
    if(visit == 5) 
    message="      You're practically a regular!";
    if(visit == 6) 
    message="              You need a hobby!";
    if(visit == 7)
    message="             Nothing better to do?"; 
    if(visit == 8) 
    message="            Don't you ever sleep?";
    if(visit == 9)
    message="                      Get a life!!!"; 
    if(visit >= 10) 
    message="  Rent is due on the 1st of the month!";
      alert("\n"+"Your browser has visited this page               \n"
                +"                              "+visit+"\n"
                +"                          time(s)."+"\n"+"\n"
                +message);
    }
    function ResetCounts() {
    var expdate = new Date();
    expdate.setTime(expdate.getTime() +  (24 * 60 * 60 * 1000 * 365)); 
    visit = 0;
    SetCookie("visit", visit, expdate , "/", null, false);
    history.go(0);
    }
    
    window.onload=DisplayInfo

    var birthyear="2001";
    document.write("My birth year is"+" "+birthyear+"<br>");
    document.write("The datatype of my declared variable is number"+"<br>");



    var name=prompt("Ënter your name");
    var product=prompt("Enter your product title");
    var quantity=prompt("how many product you want to order");

document.write(name+ " " + "ordered"+ " " +quantity + " " + product + " " + "at JIJANAB STORE");


    
    
    
    
    