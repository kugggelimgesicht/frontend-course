//Пользователь вводит строку. Найти и вывести самое длинное слово в этой строке. Вывести количество гласных (латинских) в этой строке (прописных и строчных)

const str = prompt("write something");
alert("количество гласных в строке: " + str.match(/[aeoiu]/gi).length);
alert("количество строчных гласных в строке: " + str.match(/[aeoiu]/g).length);
alert("количество прописных в строке: " + str.match(/[AEOIU]/g).length);
const arr = str.split(" ");
alert(arr);
let max = "";
for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > max.length) {
        max = arr[i];
    }

}
alert("самое длинное слово с строке: " + max);
