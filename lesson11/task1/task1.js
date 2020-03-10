//multiplication table
const N = Number(prompt("enter the size of the table"));
const table = document.getElementById('table');

for (let i = 0; i <= N; i++) {
    const tr = document.createElement('tr');
    for (let j = 0; j <= N; j++) {
        const td = document.createElement('td');
        if (i == 0 && j > 0) {
            td.innerText = j;
        }
        else if (j == 0 && i > 0) {
            td.innerText = i;
        }
        else if (i > 0 && j > 0) {
            td.innerText = i * j;
        }

        tr.appendChild(td);
    }
    table.appendChild(tr);
}




