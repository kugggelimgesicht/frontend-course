const booksList = document.getElementById('books');
const container = document.getElementById('book-container');
const up = document.getElementById('up')

booksList.addEventListener('click', function (evt) {

    if (evt.target.hasAttribute('data-text')) {
        const book = evt.target.getAttribute('data-text');
        loadBook(book);
    }
})

function loadBook(book) {  
    const xhr = new XMLHttpRequest();
    xhr.open('GET', book, true);
    container.innerHTML = '<div class="d-flex justify-content-center text-center"><div class="spinner-border" role="status"><span class="sr-only">Loading...</span></div></div>'



   
    xhr.onload = function () {
        up.style.visibility = 'visible'
        const text = this.responseText;
        onBookLoaded(text);

    }
    xhr.send(null);
}

function onBookLoaded(text) {
    container.innerText = text;
}

