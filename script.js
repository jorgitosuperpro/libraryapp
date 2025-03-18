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

const addbook = document.querySelector(".add-book");
addbook.addEventListener("click", () => {
    const form = document.createElement("form");
    frame.appendChild(form);
    form.setAttribute("action", "library.com/form")
    form.setAttribute("method", "post");
    //title
    const label = document.createElement("label");
    form.appendChild(label);
    label.setAttribute("for", "title");
    label.innerHTML = "Title";    
    const input = document.createElement("input");
    form.appendChild(input);
    input.setAttribute("type", "text");
    input.setAttribute("id", "title");
    input.setAttribute("name", "title");
    input.setAttribute("required", "");
    //author
    const label1 = document.createElement("label");
    label1.setAttribute("for", "author");
    label1.innerHTML = "Author";    
    form.appendChild(label1);
    const input1 = document.createElement("input");
    input1.setAttribute("type", "text");
    input1.setAttribute("id", "author");
    input1.setAttribute("name", "author");
    input1.setAttribute("required", "");
    form.appendChild(input1);
    //pages
    const label2 = document.createElement("label");
    label2.setAttribute("for", "pages");
    label2.innerHTML = "Pages";    
    form.appendChild(label2);
    const input2 = document.createElement("input");
    input2.setAttribute("type", "text");
    input2.setAttribute("id", "pages");
    input2.setAttribute("name", "pages");
    form.appendChild(input2);
    //checkbox read
    const label3 = document.createElement("label");
    label3.setAttribute("for","read");
    label3.innerHTML = "Read";
    form.appendChild(label3);
    const input3 = document.createElement("input");
    input3.setAttribute("type", "checkbox");
    input3.setAttribute("id", "read");
    input3.setAttribute("name", "read");
    form.appendChild(input3);
    //checkbox not read
    const label4 = document.createElement("label");
    label4.setAttribute("for","no-read");
    label4.innerHTML = "Not read";
    form.appendChild(label4);
    const input4 = document.createElement("input");
    input4.setAttribute("type", "checkbox");
    input4.setAttribute("id", "no-read");
    input4.setAttribute("name", "no-read");
    form.appendChild(input4);
    //submit button
    const submit = document.createElement("button");
    submit.innerHTML = "Submit";
    submit.setAttribute("type", "submit");
    submit.setAttribute("class", "submit");
    form.appendChild(submit);
});