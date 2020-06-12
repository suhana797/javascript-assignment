var no1=5;
var no2=6;
var result=no1+no2;
document.write("the sum of"+" "+no1+" "+"and"+" "+no2+" "+ " is" +" "+ result+"<br>");

var no3=5;
var no4=2;
var result=no3-no4;
document.write("the sub of"+" "+no3+" "+"and"+" "+no4+" "+ " is" +" "+ result+"<br>");

var no5=5;
var no6=2;
var result=no5*no6;
document.write("the sub of"+" "+no5+" "+"and"+" "+no6+" "+ " is" +" "+ result+"<br>");

var no7=5;
var no8=2;
var result=no7/no8;
document.write("the sub of"+" "+no7+" "+"and"+" "+no8+" "+ " is" +" "+ result+"<br><br>");

document.write("task 2 <br><br>");
var value=5;
document.write("value after variable declaration is",value+"<br> ");
document.write("The initial value is", value+"<br>");
var addition=value+5;
document.write("the value after increment is",addition+"<br>");
var multiply =addition/2;
document.write("the value after multiplication is",multiply+"<br>");
var subtract=multiply-5;
document.write("the value after subtraction is" ,subtract+"<br>");
document.write("the reminder is",subtract+"<br>");

document.write("task 3 <br><br>");
var ticket= 600;
var mmovie =ticket*5;
document.write("total cost to buy five tickets to a movie is"+" "+mmovie+"pkr"+"<br>");

document.write("task 4<br><br>");
var a= 4;
var i;
for(i=0;i<11;i++){
 document.write(a+"X "+i+"= "+a*i+"<br>");   
}
document.write("task 4<br><br>")
var celcius=prompt("enter any celcius value");
var convert=celcius*9/5+35;
document.write(celcius +" c is"+convert+"f<br>");
var farhenite=prompt("enter any farhenite value");
var converter=farhenite-32*5/9;
document.write(farhenite +" f is"+converter+"c<br>");



document.write("shopping cart<br><br>");
var a=300;
var b=300;
var c=prompt("enter the quantity of item 1");
var d=prompt("enter the quantity of item 2");
var shipping=400;
var item1=a*c;
var item2=b*d;
var result=item1+item2+shipping;
document.write("the price of item one is"+a+"<br>");
document.write("the price of item one quantity is"+item1+"<br>");
document.write("the price of item two is"+b+"<br>");
document.write("the price of item two quantity is"+item2+"<br>");
document.write("the shipping charges are"+shipping+"<br>");
document.write("the total cost of your order is"+result+"<br>");

document.write("mark sheet<br><br>");
var marks=prompt("enter your marks");
var total=prompt("enter total marks");
var percentage=marks*100/total;
document.write("marks obtained"+marks+"<br>");
document.write("total marks"+total+"<br>");
document.write("yur percentage is"+percentage+"<br>");

document.write("Currency in pkr<br><br>");
var dollar=10*104.80;
var riyal=25*28;
var total=dollar+riyal;
document.write("total currency in PKR:"+total+"<br><br>");

document.write("task 10<br><br>");
var a=5+5*10/2;
document.write(a);

document.write("Age calculator<br>");
var birth=prompt("enter your birth year");
var current=prompt("enter current year<br>");
var age=current-birth;
document.write("current year"+current+"<br>");
document.write("birth year"+birth+"<br>");
document.write("your age is"+age+"<br>");
document.write("the gemoterized<br><br>");
var circle=prompt("enter the radius of circle");
var pie=3.124;
var circumference=2*pie*circle;
var area=pie*circle*2;
document.write("radius is"+circle+"<br>");
document.write("circumference is"+circumference+"<br>");
document.write("area is"+area+"<br>");

document.write("the life time supply calculator<br><br>");
var snacks=prompt("enter your favourite snacks");
var yourage=prompt("enter your current age");
var maximum=prompt("enter estimates age");
var amount=prompt("enter amount of snacks you eat per day");
var totalsnacks=maximum-yourage;
var total=totalsnacks*amount;
document.write("your favourite snacks are"+snacks+"<br>");
document.write("current age is"+yourage+"<br>");
document.write("estimated maximum age"+maximum+"<br>");
document.write("amount of snacks per day"+amount+"<br>");
 document.write("you will need"+total+snacks+"to last you until you ripe old age of"+maximum+"<br>");