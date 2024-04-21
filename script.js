// construction de l'objet librarie et fonction pour ajouter des éléments


const myLibrary = []

const book = (bookName, author, read, liked) => {
    return {
        bookName: bookName,
        author: author,
        read: read,
        liked: liked
    }
}

function addBookToLibrary(bookName, author, read, liked) {
    newBook = book(bookName, author, read, liked)
    return myLibrary.push(newBook)
}


function strToBoolean(str) {
    return str === 'Yes';
}

const submit = document.querySelector(".submit");
const authorName = document.querySelector("#author");
const bookName = document.querySelector("#book");


submit.addEventListener("click", function (event) {
    event.preventDefault();

    const book = bookName.value;
    const author = authorName.value;
    const read = readChoice;
    const liked = lovedChoice;

    addBookToLibrary(book, author, read, liked);

    authorName.value = '';
    bookName.value = '';

    displayBook();

    console.log(myLibrary);
});


// --------- gestion des choix oui et non pour la lecture du livre ---------

const yesOptionRead = document.querySelector(".yes-option-read")
const noOptionRead = document.querySelector(".no-option-read")

yesOptionRead.addEventListener('mouseenter', function () {
    yesOptionRead.classList.add('hovered');
})

yesOptionRead.addEventListener('mouseleave', function () {
    yesOptionRead.classList.remove('hovered');
})

noOptionRead.addEventListener('mouseenter', function () {
    noOptionRead.classList.add('hovered');
})

noOptionRead.addEventListener('mouseleave', function () {
    noOptionRead.classList.remove('hovered');
})

let readChoice = ''
let readChoiceYesSelected = false
let readChoiceNoSelected = false

yesOptionRead.addEventListener("click", function () {
    readChoice = strToBoolean(yesOptionRead.textContent);
    if (!readChoiceNoSelected) {
        readChoiceYesSelected = true;
        yesOptionRead.classList.add('colored');
    } else {
        readChoiceYesSelected = true;
        readChoiceNoSelected = false
        yesOptionRead.classList.add('colored');
        noOptionRead.classList.remove('colored');
    }
})


noOptionRead.addEventListener("click", function () {
    readChoice = strToBoolean(noOptionRead.textContent);
    if (!readChoiceYesSelected) {
        readChoiceNoSelected = true;
        noOptionRead.classList.add('colored');
    } else {
        readChoiceNoSelected = true;
        readChoiceYesSelected = false;
        noOptionRead.classList.add('colored');
        yesOptionRead.classList.remove('colored');
    }
})

// --------- gestion des choix oui et non pour l'avis du livre ---------

const yesOptionLoved = document.querySelector(".yes-option-loved")
const noOptionLoved = document.querySelector(".no-option-loved")

yesOptionLoved.addEventListener('mouseenter', function () {
    yesOptionLoved.classList.add('hovered');
})

yesOptionLoved.addEventListener('mouseleave', function () {
    yesOptionLoved.classList.remove('hovered');
})

noOptionLoved.addEventListener('mouseenter', function () {
    noOptionLoved.classList.add('hovered');
})

noOptionLoved.addEventListener('mouseleave', function () {
    noOptionLoved.classList.remove('hovered');
})

let lovedChoice = ''
let lovedChoiceYesSelected = false
let lovedChoiceNoSelected = false

yesOptionLoved.addEventListener("click", function () {
    lovedChoice = strToBoolean(yesOptionLoved.textContent);
    if (!lovedChoiceNoSelected) {
        lovedChoiceYesSelected = true;
        yesOptionLoved.classList.add('colored');
    } else {
        lovedChoiceYesSelected = true;
        lovedChoiceNoSelected = false
        yesOptionLoved.classList.add('colored');
        noOptionLoved.classList.remove('colored');
    }
})

noOptionLoved.addEventListener("click", function () {
    lovedChoice = strToBoolean(noOptionLoved.textContent);
    if (!lovedChoiceYesSelected) {
        lovedChoiceNoSelected = true;
        noOptionLoved.classList.add('colored');
    } else {
        lovedChoiceNoSelected = true;
        lovedChoiceYesSelected = false;
        noOptionLoved.classList.add('colored');
        yesOptionLoved.classList.remove('colored');
    }
})


// fonction pour afficher le pop up et le fermer

const popup = document.querySelector(".popup")
const showPopUp = document.querySelector(".add")
const closePopUp = document.querySelector(".close-btn")

showPopUp.addEventListener("click", function () {
    popup.classList.add("active");
})

closePopUp.addEventListener("click", function () {
    popup.classList.remove("active");
})


// -------- Afficher les elements de la librarie dans le code html --------

const cards = document.querySelector('.cards')

// Parcourir chaque livre dans myLibrary
function displayBook() {
    const cardsContainer = document.querySelector('.cards');

    // Effacer le contenu existant de l'élément parent (.cards)
    cardsContainer.innerHTML = '';

    // Parcourir chaque livre dans myLibrary
    for (const book in myLibrary) {
        if (myLibrary.hasOwnProperty(book)) {
            const bookData = myLibrary[book]; // Obtenir les données du livre actuel

            // Créer un élément <div> pour chaque livre
            const cardElement = document.createElement('div');
            cardElement.classList.add('card-item');

            // Construire le contenu HTML du <div> avec les données du livre
            cardElement.innerHTML = `
                <p <strong>Author:</strong> <span class="author-name">${bookData.author}</span></p>
                <p>${bookData.bookName}</p>
                <p>${bookData.read ? 'Yes ' : 'No'}</p>
                <p>${bookData.liked ? 'Yes &#128525' : 'No &#128169'}</p>
            `;

            // Ajouter le <div> du livre à l'élément parent (.cards)
            cardsContainer.appendChild(cardElement);
        }
    }
}