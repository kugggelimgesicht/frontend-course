const text = document.getElementById('text');
text.addEventListener('click', function (evt) {
    if (evt.target.nodeName === 'A') {
        confirm('Вы действительно хотите перейти по ссылке?') ? true : evt.preventDefault()
    }

})