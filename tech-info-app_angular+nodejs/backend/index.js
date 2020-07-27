const server = require("./server");
const { PORT, MONGO_URI } = require("./config");
const mongoose = require("mongoose");

mongoose
  .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Database connection establised");
    server.listen(PORT, () => {
      console.log(`TechApp backend running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("Error when try connect to bd -- error: ", err);
  });
