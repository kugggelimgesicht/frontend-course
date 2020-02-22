//Вывести в консоль или в окно количество минут, которое осталось до конца дня, в котором запущен скрипт

const now = new Date();
let msToEnd = 86400000 - (now.getHours() * 3600000 + now.getMinutes() * 60000);
let minToEnd = msToEnd / 60000;
alert(minToEnd + " минут до конца дня");
