const numButtons = document.getElementsByClassName('calc');
const p = document.getElementById('history-value');
Array.from(numButtons).forEach((button) => {
    button.addEventListener('click', function () {
        if (p.innerText == '0') {
            p.innerText = ''
        }
        p.innerText += button.value;
    })
});

const answer = document.getElementById("output-value");
const equation = document.getElementById('equal');
equation.addEventListener('click', function () {
    let result = eval(p.innerText);
    answer.innerText = result;
})

const clear = document.getElementById('clear');
clear.addEventListener('click', function () {
    p.innerText = '0';
    answer.innerText = '';
})

const back = document.getElementById('backspace');
back.addEventListener('click', function () {
    let dispValLength = p.innerText.length;
    let dispVal = p.innerText;
    p.innerText = dispVal.slice(0, dispValLength - 1);
    answer.innerText = '';
    if (p.innerText == '') {
        p.innerText = '0'
    }
})