const myLibrary = []

const book = (bookName, author, read, liked) => {
    return {
        bookName : bookName,
        author : author,
        read : read,
        liked : liked
    }
}

function addBookBtoLibrary (bookName, author, read, liked) {
    newBook = book(bookName, author, read, liked)
    return myLibrary.push(newBook)
}

addBookBtoLibrary('x','y', false, false)
addBookBtoLibrary('Al quran', 'Allah', true, true)
addBookBtoLibrary("harry potter à l'école des sorciers", 'JK Rowling', false, true)
console.log(myLibrary)