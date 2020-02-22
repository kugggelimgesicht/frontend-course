//Пользователь вводит строку с текстом. Посчитать и вывести на экран количество согласных, гласных букв(латинских) в тексте, а также не-букв.
const str = prompt("write something");
const vowels = str.match(/[aieou]/gi);
const consonants = str.match(/[qwrtpsdfghklzxcvbnm]/gi);
const upsilon = str.match(/y/gi); //neither vowel, nor consonant
const notALetter = str.length - upsilon.length - consonants.length - vowels.length;
alert(vowels.length + " гласных звуков, " + consonants.length + " согласных звуков, " + upsilon.length + " ипсилон, " + notALetter + " не-букв");
