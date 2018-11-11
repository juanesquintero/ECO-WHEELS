//Instanciar el express
const express = require("express");
const routes = express.Router();
const crud = require("../services/crud_mongo");

routes.get("/", function(req, res) {
  crud
    .Mongo()
    .get("reservas", {})
    .then(function(respuesta) {
      //console.log(respuesta);
      res.send(respuesta);
    })
    .catch(function(error) {
      console.log(error);
      res.send(error);
    });
});

routes.get("/estacion/:station", function(req, res) {
  //Capturar params
  var station_param = req.params.station;
  //filtro
  var filtro = { Estacion: station_param };
  crud
    .Mongo()
    .get("reservas", filtro)
    .then(function(respuesta) {
      console.log(respuesta);
      res.send(respuesta);
    })
    .catch(function(error) {
      console.log(error);
      res.send(error);
    });
});

routes.get("/id/:id", function(req, res) {
  //Capturar params
  var id_param = req.params.id;
  //filtro
  var filtro = { _id: id_param };
  crud
    .Mongo()
    .get("reservas", filtro)
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
    .insert("reservas", body)
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
    .update("reservas", filtro, body)
    .then(function(respuesta) {
      console.log("PUT: ", filtro, body);
      //console.log('Respuesta cuando se agrega: ', respuesta)
      res.send(respuesta);
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
    .delete("reservas", filtro)
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
