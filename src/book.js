function createTitle(title) {

  return "The " + title;

};

function buildMainCharacter(name, age, pronouns) {
return {
  name: name,
  age: age,
  pronouns: pronouns
}
};

function saveReview(review, reviews) {
if (reviews.indexOf(review) === -1) {
reviews.push(review);
}
}

function calculatePageCount(bookTitle, bookPageCount) {
bookPageCount = bookTitle.length * 20;
return bookPageCount;
}

function writeBook(title, character, genre) {
var book = {
    title: title,
    mainCharacter: character,
    pageCount: calculatePageCount(title),
    genre: genre

  }
  return book
}

function editBook(title) {
title.pageCount = title.pageCount * 0.75;
return title;
}




module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook
}
