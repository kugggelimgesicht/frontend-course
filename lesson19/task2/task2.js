
const readBtn = document.getElementById('read');
const table = document.getElementById('table');
const p = document.getElementById('warning')
readBtn.addEventListener('click', function () {
    const input = document.getElementById('input');
    if(input.value.length == 0){
        input.style.border = '1px red solid';
        input.style.boxShadow = '1px 1px 5px red';
        p.style.display = 'block'
    }
    else{
           p.style.display = 'none';
           input.style.border = '';
        input.style.boxShadow = '';
    }
 
    const file = input.files[0];
    const reader = new FileReader();
    reader.onload = function () {
        const str = reader.result.toLowerCase()
        const arr = str.split('');
        const letters = {}
        for (let i = 0; i < arr.length; i++) {
            if (letters[arr[i]] === undefined) {
                letters[arr[i]] = 0;
            }
            letters[arr[i]]++;
        }
        
           
            lettArr = Object.entries(letters)

        
        lettArr.sort(function (a, b) {
            return b[1] - a[1]
        })
        console.log(lettArr);
        renderTable(lettArr)
    }

    reader.readAsText(file)


})

function renderTable(items){
    table.innerHTML = '';
    table.innerHTML = '<tr><td>symbol</td><td>occurence</td></tr>'
    items.forEach(elem => {
        table.insertAdjacentHTML('beforeend', `<tr><td>${elem[0]}</td><td>${elem[1]}</td></tr>`);
    })
}
