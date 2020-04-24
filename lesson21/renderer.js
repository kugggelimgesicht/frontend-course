class Renderer {
    renderBook(book, cont) {

        cont.insertAdjacentHTML('beforeend', `<li>${book.author}, "${book.name}"</li>`)
    }
    renderLibrary(library, cont) {
        cont.innerHTML = ''
        cont.insertAdjacentHTML('beforeend', `<p>library name: ${library.name}; books amount: ${library.booksAmount}; languages: ${library.languages}</p>`);
        library.books.forEach(book => {
            this.renderBook(book, cont);
        })
    }
    renderPublisher(publisher, libraries, cont) {
        cont.insertAdjacentHTML('beforeend', `<p>publisher: ${publisher.name}; language: ${publisher.language}<p>
                                              <input id='bName'/><input id='bAuthor'/><input id='bWords'/>
                                              <button id='publish'>add</button>
                                              <select id='libs'>
                                              <option>royallib</option>
                                              <option>libru</option>
                                              <option>litmir</option>
                                              </select>`);

        const btn = document.getElementById('publish');
        btn.addEventListener('click', function () {
            let name = document.getElementById('bName');
            let author = document.getElementById('bAuthor');
            let words = document.getElementById('bWords');
            const lib = document.getElementById('libs');
            const index = lib.options.selectedIndex;
            console.log(index);
            libraries[index].addBook(publisher.publishBook(name.value, author.value, words.value));
            console.log(libraries);
            const divs = document.getElementsByTagName('div')
            Array.from(divs).forEach(div => {
                if (div.hasAttribute('data-index')) {
                    const num = Number(div.getAttribute("data-index"));
                    if (num == index) {
                        console.log(index)
                        renderer.renderLibrary(libraries[index], div);
                        name.value = '';
                        author.value = '';
                        words.value = '';
                    }
                }
            })
        })
    }
}

const renderer = new Renderer();