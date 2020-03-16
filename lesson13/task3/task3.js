
const button = document.getElementById('count');
button.addEventListener('click', function (evt) {

    const table = document.getElementById('result');
    table.insertAdjacentHTML('beforeend', '<tr><td>номер месяца</td><td>сумма к оплате</td><td>остаток долга</td></tr>');
    const month = Number(document.getElementById('month').value).toFixed(2);
    const sum = Number(document.getElementById('sum').value);
    const annuity = ((0.11 / 12) * (1 + 0.11 / 12) ** month / ((1 + 0.11 / 12) ** month - 1));

    const perMonth = sum * annuity;
    const realSum = perMonth * month;
    let debt = realSum;
    for (let i = 0; i < month; i++) {
        table.insertAdjacentHTML('beforeend', `<tr><td>${i + 1}</td><td>${perMonth.toFixed(2)}</td><td>${debt.toFixed(2)}</td></tr>`)
        debt -= perMonth;
    }
    const p = document.getElementById('summary');
    p.innerText = `Суммарная выплата за все время: ${realSum.toFixed(2)}; размер переплаты:${(realSum - sum).toFixed(2)}`
})