//Написать скрипт, который выведет домен 1-го уровня той страницы, ана которой запущен.
const exp =/\.[^\.]+?$/;
const domain = location.host.match(exp);
console.log(domain);
