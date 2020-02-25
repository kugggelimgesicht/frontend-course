//С клавиатуры вводится кол-во секунд (не больше 86 399). Преобразовать это число в кол-во часов : кол-во минут : кол-во секунд
const seconds = Number(prompt("how many seconds?"));

if (seconds > 86399 || seconds < 0) {
    alert("error");
} else {
    const hours = Math.floor(seconds / 3600);
    const min = Math.floor((seconds % 3600) / 60);
    const sec = seconds - min * 60 - hours * 3600;
    alert(hours + " : " + min + " : " + sec);
}
