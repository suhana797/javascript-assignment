document.write("task 1<br>");
var city=prompt("enter your city");
if(city =='karachi'){

    document.write("welcome to the city of lights<br><br>");
}else{
    document.write("welcome to"+" "+city);
}
document.write("task 2<br><br>")
var gender=prompt("enter your gender");

if(gender=='male'){
    document.write("Good Morning sir<br>");
}else{
    document.write("Good morning mam<br><br>");
}
document.write("task 3<br><br>");
var a=prompt("enter colour of traffic light");
if(a=="red"){
    document.write(a+": "+"must stop<br><br>");}
    else if(a=="yellow"){
        document.write(a+" "+"ready to move<br><br>");
    }
else if(a=="green"){
document.write(a+": "+"move now<br>");

}

document.write("task 4<br><br>")
var fuel=prompt("enter remaining fuel in car");
if(fuel<0.25){
document.write("please refill the fuel in your car<br><br>");

}else{
    document.write("ókhy you can go<br><br>");
}
document.write("marksheet<br><br>");

var subject1=+prompt("enter your marks of subject 1");
var subject2=+prompt("enter your marks of subject 2");
var subject3=+prompt("enter your marks of subject 3");
document.write("total marks: 300<br><br>");
var percentage=subject1+subject2+subject3*100/300;

document.write("percentage :"+percentage+"<br><br>");
if(percentage>=80){
    document.write("Grade A<br><br>");
    document.write("Remarks :keep it up<br><br>");
}
else if(percentage>=70){
    document.write("grade B<br><br>");
    document.write("Remarks: need more practice<br><br>");
}


