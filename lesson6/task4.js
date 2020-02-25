//Проверить расстановку скобок в введённой строке
const str = prompt("write something");
let open = 0;
let close = 0;
for (let i = 0; i < str.length; i++) {
    if (str[i] == "(")
        open++;
    if (str[i] == ")")
        close++
}
const brackets = open - close;
switch (true) {
    case brackets == 0:
        alert("Скобки расставлены верно");
        break;
    case brackets == 1:
        alert("Не хватает закрывающей скобки");
        break;
    case brackets == -1:
        alert("Не хватает открывающей скобки");
        break;
    case brackets < -1:
        alert("Не хватает " + -brackets + " открывающих скобок");
        break;
    case brackets > 1:
        alert("Не хватает " + brackets + " закрывающих скобок");
        break;
}

