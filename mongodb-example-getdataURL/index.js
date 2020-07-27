const mongoose = require("mongoose");
const { MONGO_URI } = require("./config");
const axios = require("axios").default;
// queremos pedir a una url de la web de cnn (devuelve un html) y asi sacamos el title y el src de noticias
const cheerio = require("cheerio");
const cron = require("node-cron");
// model
const { BreakingNew } = require("./models");

// CONNECT DB
mongoose
  .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Mongodb connection success!");
  })
  .catch((err) => {
    console.log("Error at connect to mongodb ", err.message);
  });

/* usamos cron para hacer que cada 4 horas se ejecute */
// doc url http://crontab.guru
cron.schedule("0 */4 * * *", async () => {
  // GET titles and src from element in a web
  // se pide el html
  const html = await axios.get("https://cnnespanol.cnn.com/");
  // referenciamos para acceder a la data de ese html
  const $ = cheerio.load(html.data);
  /* se inspecciono el html de la web de cnn para saber la class 
  del elemento que contiene los titles de las noticias */
  const titles = $(".news__title");
  // array with news data
  // iteramos los titles, digamos que titles es un array con todos los elementos que tenian la clase news__title (noticias)
  titles.each((index, element) => {
    const breakingNew = {
      title: $(element).text().toString(),
      link: $(element).children().attr("href"),
    };
    // create in db
    BreakingNew.create([breakingNew])
      .then(() => {
        console.log("News data created in db");
      })
      .catch((err) => {
        console.log("Error at create news data in db ", err);
      });
  });
});
