//создать N объектов-людей со случайными значениями имени, даты рождения и зарплаты; вывести их средний возраст; вывести имя человека с самой большой зарплатой

const peopleNum = Number(prompt("enter the number of people"));

const names = ['Basil', 'Alex', 'Randy', 'Benedict', 'John', 'Friedrich', 'Albrecht', 'Immanuel', 'Richard', 'Heinrich'];
let people = [];
//birthdates range
const d1 = new Date('1980-01-01');
const d2 = new Date('1995-12-31');
const diff = d2 - d1;

let ages = 0;
let maxSalary = 0;
let richy = '';
for (let i = 0; i < peopleNum; i++) {
    const human = {
        name: names[Math.floor(Math.random() * names.length)],
        birthday: new Date(Math.random() * diff + Number(d1)),
        salary: Math.floor(Math.random() * 500)
    }
    if (human.salary > maxSalary) {
        maxSalary = human.salary;
        richy = human.name;
    }
    ages += Number(human.birthday);
    people.push(human)
}
console.log(people);
const now = new Date();
const avgBD = new Date(ages / peopleNum);
const avgAge = now.getFullYear() - avgBD.getFullYear();
alert("Средний возраст людей: " + avgAge);
alert("Человек с самой большой зарплатой: " + richy);