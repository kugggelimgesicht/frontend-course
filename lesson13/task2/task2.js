
const input = document.getElementById('input');
const fromButton = document.getElementById('from');
const toButton = document.getElementById('to');
function conversion() {

    let sum = Number(input.value);
    let result = sum;
    const from = Number(document.getElementById('from').value);
    const to = Number(document.getElementById('to').value);
    if (from === 1) {
        result *= to
    }

    else {
        result *= to / from;
    }

    const p = document.getElementById('res');
    p.innerText = `${sum} ${fromButton.options[fromButton.selectedIndex].text} = ${result.toFixed(3)} ${toButton.options[toButton.selectedIndex].text}`;

}

input.addEventListener('input', conversion);
fromButton.addEventListener('click', conversion);
toButton.addEventListener('click', conversion);