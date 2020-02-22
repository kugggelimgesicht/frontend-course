//площадь треугольника
const a = Number(prompt("enter your number"));
const b = Number(prompt("enter your number"));
const c = Number(prompt("enter your number"));

if(a > (c + b) || b > (c + d) || c > (a + b)){
alert("triangle doesn't exist");}
else{
const p = (a + b + c) * 0.5;
const s =(p * ((p - a) * (p - b) * (p - c))) ** (1 / 2);
alert(s);}