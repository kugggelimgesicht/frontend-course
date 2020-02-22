const a = Number(prompt("enter your number"));
const b = Number(prompt("enter your number"));
const c = Number(prompt("enter your number"));
const d = Number(prompt("enter your number"));
//максимум из четырех чисел

    //Вариант 1
    const maxABC = a > b ? (a > c ? a : c) : (b > c ? b : c);
    alert(maxABC > d ? maxABC : d); 

    //Вариант 2
    const max = function(x, y){
        return x > y ? x : y
    }
    alert(max(max(a, b),max(c, d)));
    //вариант 3: максимум из прозвольного количества чисел
    let max = function(...numbers){
    let res = -Infinity;
    for(let number of numbers){
    if(number > res)
    res = number;
        }
    return res;
    }

    alert(max(a, b, c, d));

//среднее гармоническое

 let avgHarm = 4/(a**(-1)+b**(-1)+c**(-1)+d**(-1));
 alert(avgHarm);
