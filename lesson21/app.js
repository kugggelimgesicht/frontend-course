
class App {
    init() {

        const cont = document.getElementById('cont');
        const div1 = document.getElementById('div1');
        const div2 = document.getElementById('div2');
        const div3 = document.getElementById('div3');


        const lib1 = new Library('royalLib', []);
        const lib2 = new Library('LibRu', []);
        const lib3 = new Library('LitMir', []);

        const xhr = new XMLHttpRequest();
        xhr.open('GET', 'task1.json', true);
        xhr.onload = function () {
            const books = JSON.parse(xhr.responseText)
            console.log(books)
            lib1.addBook(books[0]);
            lib1.addBook(books[1]);
            lib1.addBook(books[2]);
            lib2.addBook(books[3]);
            lib2.addBook(books[4]);
            lib2.addBook(books[5]);
            lib3.addBook(books[6]);
            lib3.addBook(books[7]);
            lib3.addBook(books[8]);
            console.log(lib1);
            renderer.renderLibrary(lib1, div1);
            renderer.renderLibrary(lib2, div2)
            renderer.renderLibrary(lib3, div3)
        }
        xhr.send(null);

        const pub1 = new Publisher('Lorem', 'ru');
        const pub2 = new Publisher('Ipsum', 'en');
        lib1.addBook(pub1.publishBook('Holy Bible', 'God the Almighty', 5000000));
        lib2.addBook(pub2.publishBook('Mahabharata', 'God the Almighty', 50000000));
        const libs = [lib1, lib2, lib3];
        renderer.renderPublisher(pub1, libs, cont);




    }
}

const app = new App();
app.init()