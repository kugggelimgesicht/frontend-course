//существует ли треугольник с данными сторонами
const a = Number(prompt("enter your number"));
const b = Number(prompt("enter your number"));
const c = Number(prompt("enter your number"));

if(a > (c + b) || b > (c + d) || c > (a + b))
alert("triangle doesn't exist");
else
alert("triangle exists");