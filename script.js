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

function validateForm() {
    let x = document.forms["myform"]["title"].value;
    if (x == "") {
      alert("Title must be filled out");
      return false;
    }
  } 

function addBookToLibrary(book) {
    library.push(book);
}

function readAndDisplayLibrary(library) {
    library.forEach(book => {
        const div = document.createElement("div");
        div.classList.add("card");
        div.setAttribute("data-id", book.id);
        const title = document.createElement("h3");
        title.classList.add("title");
        const author = document.createElement("p");
        author.classList.add("author");
        const pages = document.createElement("p");
        pages.classList.add("pages");
        const read = document.createElement("p");
        read.classList.add("read");
        const remove = document.createElement("button");
        remove.classList.add("remove-book");
        frame.appendChild(div);
        div.appendChild(title);
        div.appendChild(author);
        div.appendChild(pages);
        div.appendChild(read);
        div.appendChild(remove);
        title.innerHTML = book.title;
        author.innerHTML = book.author;
        pages.innerHTML = "Pages: " + book.pages;
        read.innerHTML = book.read;
        remove.innerHTML = "Remove Book";
    });
}

function readNewBook(book) {
    const div = document.createElement("div");
    div.classList.add("card");
    div.setAttribute("data-id", book.id);
    const title = document.createElement("h3");
    title.classList.add("title");
    const author = document.createElement("p");
    author.classList.add("author");
    const pages = document.createElement("p");
    pages.classList.add("pages");
    const read = document.createElement("p");
    read.classList.add("read");
    const remove = document.createElement("button");
    remove.classList.add("remove-book");
    frame.appendChild(div);
    div.appendChild(title);
    div.appendChild(author);
    div.appendChild(pages);
    div.appendChild(read);
    div.appendChild(remove);
    title.innerHTML = book.title;
    author.innerHTML = book.author;
    pages.innerHTML = "Pages: " + book.pages;
    read.innerHTML = book.read;
    remove.innerHTML = "Remove Book";
    document.querySelectorAll(".remove-book").forEach(remove_button => 
        remove_button.addEventListener("click", () => {
            const original_card = remove_button.parentElement;
            frame.removeChild(original_card);
            const book_id = original_card.dataset;
            for (let i = 0; i < library.length; i++) {
                if (book_id["id"] === library[i].id)
                    library.splice(i, 1);
            }
        })
    );
}

const frame = document.querySelector(".content");
const book_one = new Book("El Quijote", "Miguel de Cervantes", "531", "not read");
const book_two = new Book("鏡の孤城", "Mizuki Tsujimura", "413", "read");
const book_three = new Book("The Subtle Art of Not Giving a F*ck", "Mark Manson", "272", "read");
addBookToLibrary(book_one);
addBookToLibrary(book_two);
addBookToLibrary(book_three);
readAndDisplayLibrary(library);
//add book
const addbook = document.querySelector(".add-book");
addbook.addEventListener("click", () => {
    addbook.setAttribute("disabled", "");
    const form = document.createElement("form");
    frame.appendChild(form);
    form.setAttribute("name", "myform");
    form.setAttribute("action", "#");
    form.setAttribute("method", "post");
    form.setAttribute("onsubmit", "window.validateForm();");
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
    //author
    const label1 = document.createElement("label");
    label1.setAttribute("for", "author");
    label1.innerHTML = "Author";    
    form.appendChild(label1);
    const input1 = document.createElement("input");
    input1.setAttribute("type", "text");
    input1.setAttribute("id", "author");
    input1.setAttribute("name", "author");
    input1.required = true;
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
    input3.setAttribute("value", "read");
    form.appendChild(input3);
    //checkbox not read
    const label4 = document.createElement("label");
    label4.setAttribute("for","no-read");
    label4.innerHTML = "Not read";
    form.appendChild(label4);
    const input4 = document.createElement("input");
    input4.setAttribute("type", "checkbox");
    input4.setAttribute("id", "no-read");
    input4.setAttribute("value", "not-read");
    form.appendChild(input4);
    //submit button
    const submit = document.createElement("button");
    submit.setAttribute("type", "submit");
    submit.innerHTML = "Submit";
    form.appendChild(submit);
    submit.addEventListener("click", () => {
        addbook.removeAttribute("disabled", "");
        const title_book = document.forms["myform"].title.value;
        const author_book = document.forms["myform"].author.value;
        const pages_book = document.forms["myform"].pages.value;
        if (document.querySelector('input[id=read]').checked) {
            read_book = "read";
        } else {
            read_book = "not read";
        }
        // const read_book = document.forms["myform"].read.value;
        frame.removeChild(form);
        const myNewBook = new Book(title_book, author_book, pages_book, read_book);
        addBookToLibrary(myNewBook);
        readNewBook(myNewBook);
    });
});
//remove book from dom and js
document.querySelectorAll(".remove-book").forEach(remove_button => 
    remove_button.addEventListener("click", () => {
        const original_card = remove_button.parentElement;
        frame.removeChild(original_card);
        //quita libro del array
        const book_id = original_card.dataset;
        for (let i = 0; i < library.length; i++) {
            if (book_id["id"] === library[i].id)
                library.splice(i, 1);
        }
    })
);
