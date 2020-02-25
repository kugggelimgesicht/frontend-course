//Определить, является ли введенное число простым или составным
const a = Number(prompt("enter a number"));

for (let i = 2; i < Math.abs(a); i++) {

    if ((a % i == 0) || (-a % i == 0)) {
        alert("Число составное");
        break;
    }
    else {
        alert("Число простое");
        break;
    }
}

if (Math.abs(a) == 1 || Math.abs(a) == 2) {
    alert("Число простое");
}
