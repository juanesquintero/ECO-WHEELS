//Instanciar el express
const express = require('express');
const crud =  require('../services/crud_mongo')
const routes = express.Router()


routes.get('/',function(req,res){
    crud.Mongo().get('ciclas',{}).then(function(respuesta){
        //console.log(respuesta);
        res.send(respuesta)
    }).catch(function(error){
        console.log(error)
        res.send(error)
    })
})







module.exports = routes