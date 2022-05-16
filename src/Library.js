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

function addBook(library, book)  {
return library.shelves[book.genre].push(book);
}

///function checkoutBook(library, title, book) {
///if library.shelves[book.genre].includes(title) {
/// 		 library.shelves[book.genre].pop(book);
///	 return `You have now checked out ${title} from the ${library.name}`
///}
///else return `Sorry, there are currently no copies of ${title} available at the ${library.name}`;
///}


function checkoutBook(library, book, genre) {
  for (var i = 0; i < library.shelves[genre].length; i++) {
    if (library.shelves[genre][i].title === book) {
    library.shelves[genre].splice([i], 1);
      return `You have now checked out ${book} from the ${library.name}`
}
}
  return `Sorry, there are currently no copies of ${book} available at the ${library.name}`

}
module.exports = {
createLibrary,
addBook,
checkoutBook
};
