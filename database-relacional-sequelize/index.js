const { CRUD } = require("./helpers");
const db = require("./models");

const params = process.argv;
console.log(params);

if (params.length <= 2) {
  process.exit(0);
}

const args = params.slice(2);

const command = args[0].split(":")[0].substring(2);
const entity = args[0].split(":")[1];

// se reciben argumentos desde terminal y se interactua con la bd
switch (command) {
  case CRUD.CREATE:
    const data = {};
    args.slice(1).map((arg) => {
      const tmp = arg.split("=");
      data[tmp[0].substring(2)] = tmp[1];
    });
    // save in db
    db[entity]
      .create(data)
      .then(() => {
        console.log(`Contact ${data} created`);
      })
      .catch((err) => {
        console.log('Error at create contact', err);
      });
    break;
  case CRUD.READ:
    db[entity]
      .findAll()
      .then((contacts) => {
        console.log("Get all contacts ", contacts);
      })
      .catch((err) => {
        console.log('Error at get all contacts', err);
      });
    break;
  case CRUD.UPDATE:
    console.log("Updated!!");
    break;
  case CRUD.DELETE:
    console.log("Deleted!!");
    break;
  default:
    console.log("Operation not found!!");
    break;
}
