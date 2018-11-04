const mongoose = require('mongoose')
const Rol = mongoose.model('Rol')
const utils = require('../handlers/utils')

exports.findOne = function(req, res) {
  Rol.find({})
    .populate('paquetes', 'nombre')
    .exec(function(err, roles) {
      utils.show(res, err, roles)
    })
}

exports.create = function(req, res) {
  const { nombre, paquetes } = req.body
  const rol = new Rol({
    nombre,
    paquetes,
  })

  rol.save(function(err, rol) {
    utils.show(res, err, rol)
  })
}
