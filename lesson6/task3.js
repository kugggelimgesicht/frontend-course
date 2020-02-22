//Пользователь вводит числа x, N. Вывести результат вычисления ряда Тейлора для разложения функции e^x по первым N членам.
const x = Number(prompt("enter x"));
const N = Number(prompt("enter N"));
function factorial(n) {
  if (n == 0) {
    return 1;
  }
  else {
    return (n != 1) ? n * factorial(n - 1) : 1;
  }
}

let taylor = 0;
for (let i = 0; i < N; i++) {
  taylor += (x ** i / factorial(i));
}
alert(taylor);
