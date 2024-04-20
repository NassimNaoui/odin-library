// construction de l'objet librarie et fonction pour ajouter des éléments


const myLibrary = []

const book = (bookName, author, read, liked) => {
    return {
        bookName : bookName,
        author : author,
        read : read,
        liked : liked
    }
}

function addBookToLibrary (bookName, author, read, liked) {
    newBook = book(bookName, author, read, liked)
    return myLibrary.push(newBook)
}

function strToBoolean(str) {
    return str === 'Yes';
}

const submit = document.querySelector(".submit");
const authorName = document.querySelector("#author");
const bookName = document.querySelector("#book");
const readInput = document.querySelector("#readInput");
const lovedItInput = document.querySelector("#lovedInput");
let readChoice = '';
let lovedItChoice = '';

readInput.addEventListener('input', function(){
    readChoice = readInput.value.trim();
})

lovedItInput.addEventListener('input', function(){
    lovedItChoice = readInput.value.trim();
})

submit.addEventListener("click", function(event) {
    event.preventDefault(); // Prevent default form submission behavior

    const author = authorName.value;
    const book = bookName.value;
    const read = strToBoolean(readChoice); // Convert readChoice to boolean
    const liked = strToBoolean(lovedItChoice); // Convert lovedItChoice to boolean

    addBookToLibrary(author, book, read, liked);

    console.log(myLibrary);
});

// fonction pour afficher le pop up et le fermer

const popup = document.querySelector(".popup")
const showPopUp = document.querySelector(".add")
const closePopUp = document.querySelector(".close-btn")

showPopUp.addEventListener("click", function() {
    popup.classList.add("active");
})

closePopUp.addEventListener("click", function() {
    popup.classList.remove("active");
})
