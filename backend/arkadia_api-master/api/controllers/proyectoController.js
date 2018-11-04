const mongoose = require('mongoose')
const Proyecto = mongoose.model('Proyecto')
const utils = require('../handlers/utils')

exports.findAll = function(req, res) {
  Proyecto.find({}).exec(function(err, proyectos) {
    utils.show(res, err, proyectos)
  })
}

exports.findOne = function(req, res) {
  Proyecto.findById(req.params.proyectoId).exec(function(err, proyecto) {
    utils.show(res, err, proyecto)
  })
}

exports.create = function(req, res) {
  const { nombre, descripcion } = req.body
  const proyecto = new Proyecto({ nombre, descripcion })

  proyecto.save(function(err, proyecto) {
    utils.show(res, err, proyecto)
  })
}

exports.update = function(req, res) {
  Proyecto.findByIdAndUpdate({ _id: req.params.proyectoId }, req.body, { new: true }, function(
    err,
    proyecto,
  ) {
    utils.show(res, err, proyecto)
  })
}
