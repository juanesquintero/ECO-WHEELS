const mongoose = require('mongoose')
const Paquete = mongoose.model('Paquete')
const Proyecto = mongoose.model('Proyecto')
const utils = require('../handlers/utils')

exports.findAll = function(req, res) {
  Paquete.find({
    proyecto: req.params.proyectoId,
  })
    .populate('historiasDeUsuario')
    .exec(function(err, paquete) {
      utils.show(res, err, paquete)
    })
}

exports.findOne = function(req, res) {
  Paquete.findById(req.params.paqueteId).exec(function(err, paquete) {
    utils.show(res, err, paquete)
  })
}

exports.create = function(req, res) {
  const { nombre, descripcion } = req.body
  const { proyectoId } = req.params
  const proyecto = new Proyecto({ _id: proyectoId })
  const paquete = new Paquete({
    nombre,
    descripcion,
    proyecto,
  })

  paquete.save(function(err, paquete) {
    utils.show(res, err, paquete)
  })
}

exports.update = function(req, res) {
  Paquete.findByIdAndUpdate({ _id: req.params.paqueteId }, req.body, { new: true }, function(
    err,
    paquete,
  ) {
    utils.show(res, err, paquete)
  })
}
