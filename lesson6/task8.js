// Вывести строку из первых букв каждого слова во введенной пользователем строке
const str = prompt("write something");
let result = "";
for (let i = 0; i < str.length; i++) {
    if (i == 0) {
        result += str[i];
    }
    else if (str[i] == " ") {
        result += str[i + 1];
    }
}
alert(result);