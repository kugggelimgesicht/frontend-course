//Найти во введённом тексте все американские номера телефонов (+1). В номере цифры могут разделяться внутри дефисами.
const str = prompt('american phone number format:+1(###)###-####')
const exp = /\+1\(?\d{3}\)?-?\d{3}-?\d{4}/g;
console.log(str.match(exp));
