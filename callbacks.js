const booksBd = [
    {
      id: 1,
      title: "el quijote",
    },
    {
      id: 2,
      title: "jar 3000",
    },
    {
      id: 3,
      title: "jaws",
    },
  ];
  
  
  
  function getBookById(id, callback) {
  
  
      const book = booksBd.find( book => book.id === id);
      console.log('Your book ', book);
  
      if (!book) {
          const error = new Error();
          error.message = `Book with id ${id} not found`;
          return callback(error)
      };
  
      // si encontramos el book
      callback(null, book);
  
  };
  
  
  getBookById(1, (err, book) => {
      if (err) {
          return console.log(err.message);
      }
  
      return console.log(book);
  });
  