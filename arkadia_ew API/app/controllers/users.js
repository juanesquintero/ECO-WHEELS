const express = require('express');
const routes = express.Router()


routes.get('/',function(req,res){
    res.send({name:'Users'})
})

routes.get('/1',function(req,res){
    res.send({name:'Usuario 1'})
})

routes.get('/1/cursos',function(req,res){
    res.send({name:'Curso Usuario 1'})
})

module.exports = routes