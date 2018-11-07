//Instanciar el express
const express = require("express");
const routes = express.Router();
const crud = require("../services/crud_mongo");

routes.get("/", function(req, res) {
  crud
    .Mongo()
    .get("estaciones", {})
    .then(function(respuesta) {
      //console.log(respuesta);
      res.send(respuesta);
    })
    .catch(function(error) {
      console.log(error);
      res.send(error);
    });
});

///:name/optional?
routes.get("/:name", function(req, res) {
  //Capturar params
  var name_param = req.params.name;
  //parametro de un query
  var query_param = req.query;
  //filtro
  var filtro = { nombre: name_param };
  crud
    .Mongo()
    .get("estaciones", filtro)
    .then(function(respuesta) {
      console.log(respuesta);
      res.send(respuesta);
    })
    .catch(function(error) {
      console.log(error);
      res.send(error);
    });
});

routes.post("/", function(req, res) {
  //Capturar datos a guardar
  var body = req.body;
  crud
    .Mongo()
    .insert("estaciones", body)
    .then(function(respuesta) {
      console.log("POST: ", body);
      //console.log('Respuesta cuando se agrega: ', respuesta)
      res.send(respuesta);
    })
    .catch(function(error) {
      console.log("Error al agregar: ", error);
      res.send(error);
    });
});

routes.put("/:id", function(req, res) {
  //Capturar params
  var id_param = req.params.id;
  //parametro de un query
  var query_param = req.query;
  //filtro
  var filtro = { _id: id_param };
  //Capturar datos a guardar
  var body = req.body;
  crud
    .Mongo()
    .update("estaciones", filtro, body)
    .then(function(respuesta) {
      res.send(respuesta);
      console.log("PUT: ", filtro, body);
    })
    .catch(function(error) {
      console.log("Error al agregar: ", error);
      res.send(error);
    });
});

routes.delete("/:id", function(req, res) {
  //Capturar params
  var id_param = req.params.id;
  //parametro de un query
  var query_param = req.query;
  //filtro
  var filtro = { _id: id_param };
  crud
    .Mongo()
    .delete("estaciones", filtro)
    .then(function(respuesta) {
      console.log("DELETE: ", filtro);
      //console.log(respuesta)
      res.send(respuesta);
    })
    .catch(function(error) {
      console.log(error);
      res.send(error);
    });
});

module.exports = routes;
