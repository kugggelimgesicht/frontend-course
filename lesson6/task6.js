//Вывести k-ое число Фибоначчи 
//для небольших k
const k = Number(prompt("enter K"));
let fibonacci = function (n) {
    if (n == 1 || n == 2) {
        return 1;
    }
    else if (n <= 0) {
        return "error";
    }
    else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}
alert(fibonacci(k));
