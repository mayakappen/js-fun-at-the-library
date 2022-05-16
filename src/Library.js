function createLibrary(library) {
var shelves = {
  fantasy: [],
  fiction: [],
  nonFiction: []
}
  var library = {
    name: library,
    shelves: shelves
  }
return library
}

function addBook(library, book) {
  if book.genre = "fantasy" {
book.push(library.shelves.fantasy);
  }
  return book
}

createLibrary,
addBook,
  // checkoutBook
};
