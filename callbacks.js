const booksBd = [
  {
    id: 1,
    title: "el quijote",
    authorId: 1,
  },
  {
    id: 2,
    title: "jar 3000",
    authorId: 45,
  },
  {
    id: 3,
    title: "jaws",
    authorId: 56,
  },
];

const authorsDb = [
  {
    id: 1,
    name: "Guelmi garcia",
    age: 34,
  },
  {
    id: 45,
    name: "Angel tomas",
    age: 65,
  },
  {
    id: 56,
    name: "Maria ordoñez",
    age: 45,
  },
];

function getBookById(id, callback) {
  const book = booksBd.find((book) => book.id === id);
  console.log("Your book ", book);

  if (!book) {
    const error = new Error();
    error.message = `Book with id ${id} not found`;
    return callback(error);
  }

  // si encontramos el book
  callback(null, book);
}

function getAuthorById(id, callback) {
  const author = authorsDb.find((author) => author.id === id);
  console.log("Your author ", author);

  if (!author) {
    const error = new Error();
    error.message = `author with id ${id} not found`;
    return callback(error);
  }

  // si encontramos el autor
  callback(null, author);
}

getBookById(1, (err, book) => {
  if (err) {
    return console.log(err.message);
  }

  // callback Hell
  getAuthorById(book.authorId, (err, author) => {
    if (err) {
      return console.log(err.message);
    }

    return console.log(`This book ${book.title} was written by ${author.name}`);
  });

  return console.log(book);
});
