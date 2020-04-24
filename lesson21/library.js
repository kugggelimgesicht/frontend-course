class Library {
    constructor(name, books) {
        this.name = name;
        this.books = books;

    }

    getAllBooks() {
        for (let i = 0; i < this.books.length; i++) {

            return this.books[i];

        }
    }
    addBook(book) {
        this.books.push(book);
    }
    removeBook(book) {
        this.books.splice(this.books.indexOf(book), 1);
    }
    mergeLibraries(library) {
        this.books = this.books.concat(library.books);
        library.books = [];
    }

}



    Object.defineProperty(Library.prototype, "booksAmount", {
    get () {
    return this.books.length;
}
});

    Object.defineProperty(Library.prototype, "languages", {
    get () {
    const lang =[];
    this.books.forEach(book => {
    lang.push(book.language)
})
    return lang.filter((v, i, a) => a.indexOf(v) === i);
}
}
);
    Object.defineProperty(Library.prototype, "authors", {
    get () {
    const authors =[];
    this.books.forEach(book => {
    authors.push(book.author)
})
    return authors.filter((v, i, a) => a.indexOf(v) === i);
}
}
);