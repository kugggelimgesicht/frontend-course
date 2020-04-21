class Book {
    constructor(name, words, year, author, language, publisher) {
        this.name = name;
        this.words = words;
        this.year = year;
        this.author = author;
        this.language = language;
        this.publisher = publisher;
    }

    getPagesCount() {
        return Math.ceil(this.words / 800);
    }
}