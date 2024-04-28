// construction de l'objet librarie et fonction pour ajouter des éléments


let myLibrary = []

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

let readChoiceCard = '';
let likeChoiceCard = '';

function isCheckboxChecked(checkBoxId) {
    var checkbox = document.getElementById(checkBoxId);
    return checkbox.checked;
}

const submit = document.querySelector(".submit");
const authorName = document.querySelector("#author");
const bookName = document.querySelector("#book");

submit.addEventListener("click", function (event) {
    event.preventDefault();

    const book = bookName.value;
    const author = authorName.value;
    const read = readChoice;
    const liked = likeChoice;

    addBookToLibrary(book, author, read, liked);

    authorName.value = '';
    bookName.value = '';

    noOptionRead.classList.remove('colored');
    yesOptionRead.classList.remove('colored');
    noOptionLoved.classList.remove('colored');
    yesOptionLoved.classList.remove('colored');

    displayBook();
});


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
    for (let i = 0; i < myLibrary.length; i++) {
        if (myLibrary.hasOwnProperty(i)) {
            const bookData = myLibrary[i]; // Obtenir les données du livre actuel

            // Créer un identifiant unique pour chaque livre
            const checkBoxId = `check${i}`;
            const checkBoxLikeId = `checkLike${i}`;
            const removeId = `remove${i}`;

            // Créer un élément <div> pour chaque livre
            const cardElement = document.createElement('div');
            cardElement.classList.add("card")

            // Construire le contenu HTML du <div> avec les données du livre
            cardElement.innerHTML = `
            <button id="${removeId}">x</button>
            <div class="book-item">
            <div class="title-item">Book :</div>
            <div class="book-value">${bookData.bookName}</div>
        </div>
        <div class="author-item">
            <div class="title-item">Author :</div>
            <div class="author-value">${bookData.author}</div>
        </div>
        <div class="checkbox-container">
            <input type="checkbox" id="${checkBoxId}" title="Read it?" ${bookData.read ? 'checked' : ''}>
            <label for="${checkBoxId}" class="checkbox-read"></label>
            <input type="checkbox" id="${checkBoxLikeId}" title="Liked it?" ${bookData.liked ? 'checked' : ''}>
            <label for="${checkBoxLikeId}" class="checkbox-like"></label>
        </div>
        `;
            // Ajouter le <div> du livre à l'élément parent (.cards)
            cardsContainer.appendChild(cardElement);

            // changer la valeur de read et de like dans la librarie
            const readChoiceCheckBox = document.querySelector(`#check${i}`);
            if (readChoiceCheckBox) {
                readChoiceCheckBox.addEventListener("click", function () {
                    readChoiceCard = isCheckboxChecked(`check${i}`);
                    myLibrary[i].read = readChoiceCard;
                })
            }
            const likeChoiceCheckBox = document.querySelector(`#checkLike${i}`);
            if (likeChoiceCheckBox) {
                likeChoiceCheckBox.addEventListener("click", function () {
                    likeChoiceCard = isCheckboxChecked(`checkLike${i}`);
                    myLibrary[i].liked = likeChoiceCard;
                })
            }
            // supprimer les cards 
            const removeButton = document.querySelector(`#remove${i}`);
            if (removeButton) {
                removeButton.addEventListener("click", function() {
                    delete myLibrary[i];
                    myLibrary = myLibrary.filter(item => item);
                    displayBook();
                })
            }
        }
    };
};

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

let readChoice = false
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

let likeChoice = false
let likeChoiceYesSelected = false
let likeChoiceNoSelected = false

yesOptionLoved.addEventListener("click", function () {
    likeChoice = strToBoolean(yesOptionLoved.textContent);
    if (!likeChoiceNoSelected) {
        likeChoiceYesSelected = true;
        yesOptionLoved.classList.add('colored');
    } else {
        likeChoiceYesSelected = true;
        likeChoiceNoSelected = false
        yesOptionLoved.classList.add('colored');
        noOptionLoved.classList.remove('colored');
    }
})

noOptionLoved.addEventListener("click", function () {
    likeChoice = strToBoolean(noOptionLoved.textContent);
    if (!likeChoiceYesSelected) {
        likeChoiceNoSelected = true;
        noOptionLoved.classList.add('colored');
    } else {
        likeChoiceNoSelected = true;
        likeChoiceYesSelected = false;
        noOptionLoved.classList.add('colored');
        yesOptionLoved.classList.remove('colored');
    }
})