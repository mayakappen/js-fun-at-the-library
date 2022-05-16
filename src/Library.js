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
///	if library.shelves[genre].includes(title) {
 ///		 library.shelves[book.genre].pop(book);
	///	 return `You have now checked out ${title} from the ${library.name}`
///	}
///	else return `Sorry, there are currently no copies of ${title} available at the ${library.name}`;
///}


function checkoutBook(library, title, book) {
	if library.shelves[book.genre].includes(title) {
 		 library.shelves[book.genre].pop(book);
		 return `You have now checked out ${title} from the ${library.name}`
	}
	else {
	return `Sorry, there are currently no copies of ${title} available at the ${library.name}`;
	}
}
module.exports = {
createLibrary,
addBook,
checkoutBook
};
