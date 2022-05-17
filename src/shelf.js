function shelfBook(title, shelf) {
if (shelf.length < 3) {
return shelf.unshift(title);
}
};

function unshelfBook(title, shelf) {
  for ( var i = 0; i < shelf.length; i++)
  {
    if (shelf[i].title === title) {

    return shelf.splice(i, 1);
  }
}
};

function listTitles(book) {
  var titles = []
  for (var i = 0; i < 3; i++) {
    titles.push(book[i].title);
}
return titles.join(', ');
};

function searchShelf(shelf, book) {
  var onShelf = false
  for (var i = 0; i < shelf.length; i++) {
   if (shelf[i].title === book) {
     onShelf = true
   }
}
return onShelf
}

module.exports = {
shelfBook,
unshelfBook,
listTitles,
searchShelf
}
