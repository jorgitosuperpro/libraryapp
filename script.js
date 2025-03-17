const library = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.id = crypto.randomUUID();
    this. info = function() {
       return "id: " + this.id + "" + this.title +" by " + this.author + ", " + this.pages + " pages, " + this.read + ".";
    }
}

function addBookToLibrary(book) {
    library.push(book);
}

function readAndDisplayLibrary(library) {
    library.forEach(book => {
        const div = document.createElement("div");
        div.classList.add("card");
        const title = document.createElement("h3");
        title.classList.add("title");
        const author = document.createElement("p");
        author.classList.add("author");
        const pages = document.createElement("p");
        pages.classList.add("pages");
        const read = document.createElement("p");
        read.classList.add("read");
        frame.appendChild(div);
        div.appendChild(title);
        div.appendChild(author);
        div.appendChild(pages);
        div.appendChild(read);
        title.innerHTML = book.title;
        author.innerHTML = book.author;
        pages.innerHTML = "Pages: " + book.pages;
        read.innerHTML = book.read;
    });
}

const frame = document.querySelector(".content");

const book_one = new Book("El Quijote", "Miguel de Cervantes", "531", "no read");
const book_two = new Book("鏡の孤城", "Mizuki Tsujimura", "413", "read");
const book_three = new Book("The Subtle Art of Not Giving a F*ck", "Mark Manson", "272", "read");

addBookToLibrary(book_one);
addBookToLibrary(book_two);
addBookToLibrary(book_three);



readAndDisplayLibrary(library);

