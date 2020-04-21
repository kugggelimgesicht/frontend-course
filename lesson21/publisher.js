
class Publisher {
    constructor(name, language) {
        this.name = name;
        this.language = language;

    }
    publishBook(name, author, words) {
        const year = (new Date).getFullYear();
        return new Book(name, words, year, author, this.language, this.name);
    }
}