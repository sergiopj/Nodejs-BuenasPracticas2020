const express = require("express");
const server = express();
const cors = require("cors");
const { Technology } = require("../models");

// config para tratar con json en las peticiones
server.use(express.json());

// hacemos publico el dir public
server.use(express.static(__dirname + "/../public"));

// cors config
server.use(cors());

// end points TODO migrarlo a otro fichero
server.get("/api/technologies", async (req, res) => {
  let technologies = await Technology.find();

  // se recorre con map para modificar el resultado
  technologies = technologies.map((technology) => {
    // ruta correcta de cada logo en nuestra maquina
    technology.logo = `${req.protocol}://${req.headers.host}/img/${technology.logo}`;
    return technology;
  });

  // por defecto el status code es 200
  res.send({
    ok: true,
    technologies,
  });
});

server.get("/api/technology/:id", async (req, res) => {
  const id = req.params.id;

  let technology = await Technology.findById(id);

  technology.logo = `${req.protocol}://${req.headers.host}/img/${technology.logo}`;

  // por defecto el status code es 200
  res.send({
    ok: true,
    technology,
  });
});

server.get("/api/technology/search/:name", async (req, res) => {

   const name = req.params.name; 

  let technologies = await Technology.find({
    name: { $regex: new RegExp(name, "i") },
  });

  // se recorre con map para modificar el resultado
  technologies = technologies.map((technology) => {
    // ruta correcta de cada logo en nuestra maquina
    technology.logo = `${req.protocol}://${req.headers.host}/img/${technology.logo}`;
    return technology;
  });

  // por defecto el status code es 200
  res.send({
    ok: true,
    technologies,
  });
});

module.exports = server;
