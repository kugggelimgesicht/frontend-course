//високосный год
const year = Number(prompt("enter a year"));

if((year % 4 == 0 && year % 100!= 0) || (year % 400 == 0))
alert(year + " год високосный");
else
alert(year + " год не високосный");