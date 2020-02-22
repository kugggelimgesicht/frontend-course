//Написать калькулятор
const a = Number(prompt("enter a"));
const sign = prompt("enter operator");
const b = Number(prompt("enter b"));
switch (sign) {
    case "+":
        alert(a + b);
        break;
    case "-":
        alert(a - b);
        break;
    case "*":
        alert(a * b);
        break;
    case "/":
        alert(a / b);
        break;
    case "^":
        alert(a ** b);
        break;
}