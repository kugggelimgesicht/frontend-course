const decodeButton = document.getElementById('decode');
decodeButton.addEventListener('click', function () {
    let str = document.getElementById('cipher').value;
    let low = str.toLowerCase();
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    let newStr = '';
    for (let i = 0; i < low.length; i++) {
        let curr = low[i];
        if (curr === ' ') {
            newStr += curr;
            continue;
        }
        let currIndex = alphabet.indexOf(curr);
        let newIndex = currIndex + 2;
        if (newIndex > 25) newIndex = newIndex - 26;
        if (newIndex < 0) newIndex = newIndex + 26;
        if (str[i] === str[i].toUpperCase()) {
            newStr += alphabet[newIndex].toUpperCase();

        }
        else newStr += alphabet[newIndex];
    }

    document.getElementById('decipher').value = newStr;

})

const encodeButton = document.getElementById('encode');
encodeButton.addEventListener('click', function () {
    let str = document.getElementById('decipher').value;
    let low = str.toLowerCase();
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    let newStr = '';
    for (let i = 0; i < low.length; i++) {
        let curr = low[i];
        if (curr === ' ') {
            newStr += curr;
            continue;
        }
        let currIndex = alphabet.indexOf(curr);
        let newIndex = currIndex - 2;
        if (newIndex > 25) newIndex = newIndex - 26;
        if (newIndex < 0) newIndex = newIndex + 26;
        if (str[i] === str[i].toUpperCase()) {
            newStr += alphabet[newIndex].toUpperCase();

        }
        else newStr += alphabet[newIndex];
    }

    document.getElementById('cipher').value = newStr;
})
