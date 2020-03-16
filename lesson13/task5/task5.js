let coworkers = [{
    name: 'Круглова Оксана Юрьевна',
    position: 'Senior Java developer',
    start: new Date('01.09.2000'),
    salary: 800
},
{
    name: 'Курченко Владимир Петрович',
    position: 'Team leader',
    start: new Date('01.06.1982'),
    salary: 900
},
{
    name: 'Петров Дмитрий Леонидович',
    position: 'Middle Java developer',
    start: new Date('01.04.2001'),
    salary: 700
}
];

const removeRow = function (evt) {
    this.parentNode.parentNode.remove();
    if (evt.target.hasAttribute('data-cart')) {
        const index = Number(evt.target.getAttribute("data-index"));
        coworkers.splice(index, 1);

        console.log(coworkers);

    }
}

function render(people) {
    const table = document.getElementById('table');
    table.innerHTML = '';
    table.insertAdjacentHTML('beforeend', '<thead><td>ФИО</td><td>Должность</td><td>Дата начала работы</td><td>Зарплата</td></thead>');
    people.forEach(({ name, position, start, salary }, i) => {
        table.insertAdjacentHTML('beforeend', `<tr>
    <td>${name}</td>
    <td>${position}</td>
    <td>${start.toLocaleDateString()}</td>
    <td>${salary}</td>
    <td class="button"><button class="delete" data-index="${i}" data-cart="">x</button></td></tr>`);
    });

    const buttons = table.getElementsByClassName('delete');
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', removeRow);
    }

}

render(coworkers);

const createButton = document.getElementById('create');
createButton.addEventListener('click', function (evt) {
    evt.preventDefault();
    coworkers.push({
        name: document.getElementById('name').value,
        position: document.getElementById('position').value,
        start: new Date(document.getElementById('date').value),
        salary: document.getElementById('salary').value
    });
    render(coworkers);
})

const salarySort = document.getElementById('salary-sort');
const dateSort = document.getElementById('date-sort');
let clickNum = 0;

salarySort.addEventListener('click', function () {
    const clonedItems = [...coworkers];
    clonedItems.sort((a, b) => a.salary - b.salary);
    render(clonedItems);
    clickNum++;
    if (clickNum % 2 === 0) {
        clonedItems.reverse();
        render(clonedItems);
    }
});

dateSort.addEventListener('click', function () {
    const clonedItems = [...coworkers];
    clonedItems.sort((a, b) => a.start - b.start);
    render(clonedItems);
    clickNum++;
    if (clickNum % 2 === 0) {
        clonedItems.reverse();
        render(clonedItems);
    }
});
