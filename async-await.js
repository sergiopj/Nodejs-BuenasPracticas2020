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

async function getBookById(id) {
  const book = await booksBd.find((book) => book.id === id);

  if (!book) {
    const error = new Error();
    error.message = `Book with id ${id} not found`;
    throw error;
  }

  // si encontramos el book
  return book;
}

async function getAuthorById(id) {
  const author = await authorsDb.find((author) => author.id === id);

  if (!author) {
    const error = new Error();
    error.message = `author with id ${id} not found`;
    // como el reject en las promises
    throw error;
  }

  // como el resolve en las promises
  return author;
}

// try catch para manejar los throw errors de las funciones superiores
async function main() {
  try {
    const book = await getBookById(1);
    const author = await getAuthorById(book.authorId);
    console.log(`Author ${author.name} wrote this book ${book.title}`);
  } catch (error) {
      console.log(error.message);
  }
}

main();
