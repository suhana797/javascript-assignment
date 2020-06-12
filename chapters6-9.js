document.write("Task 1<br><br>");
var a=10;
document.write("result<br><br>");
document.write("the value of a is"+a+"<br>");
document.write("--------------------------<br>");

++a;
document.write("the value of ++a is:"+a+"<br>");
document.write(" now the value of a is:"+a+"<br><br>");
document.write("the value of a++ is:"+a+"<br>");
a++;
document.write(" now the value of a is:"+a+"<br><br>");

--a;
document.write("the value of --a is:"+a+"<br>");
document.write(" now the value of a is:"+a+"<br><br>");
document.write("the value of a-- is:"+a+"<br>");
a--;

document.write(" now the value of a is:"+a+"<br><br>");

document.write("task 2<br><br>");
var a=2;
var b=1;
var result=--a - --b + ++b + b--;
document.write("a:"+a+"<br>");
document.write("b:"+b+"<br>");
document.write("result:"+result+"<br>");

document.write("task 3<br><br>");
var name=prompt("enter your name here");
document.write("hey"+name+"welcome to javascript session<br><br>");

document.write("task 5<br><br>");
var a= prompt("enter any number");
var i;
for(i=1;i<11;i++){
 document.write(a+"X "+i+"= "+a*i+"<br>");

 var a=5;
if(a==null){
 
document.write(a+"X "+i+"= "+a*i+"<br>");

}
} 
document.write("task 5<br><br>")

var sub1=prompt("enter subject 1");

var obtmarks1=+prompt("enter marks of first subject");
var per1=obtmarks1*100/100;

var total=100;

var sub2=prompt("enter subject 2");

var obtmarks2=+prompt("enter marks of second subject");
var per2=obtmarks2*100/100;
var sub3=prompt("enter subject 3");

var obtmarks3=+prompt("enter marks of third subject");
var per3=obtmarks3*100/100;

var totalmarks=300;
var totalobt=obtmarks1+obtmarks2+obtmarks3;
var totalper=totalobt*100/totalmarks;
