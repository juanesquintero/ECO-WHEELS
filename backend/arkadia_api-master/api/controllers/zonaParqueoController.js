const mongoose = require('mongoose')
const ZonaParqueo = mongoose.model('ZonaParqueo')
const utils = require('../handlers/utils')

exports.findAll = function(req, res) {
  ZonaParqueo.find({}).exec(function(err, zonaParqueo) {
    utils.show(res, err, zonaParqueo)
  })
}

exports.create = function(req, res) {
  const { nombre, ubicacion } = req.body
  const zonaParqueo = new ZonaParqueo({
    nombre,
    ubicacion,
  })

  zonaParqueo.save(function(err, zonaParqueo) {
    utils.show(res, err, zonaParqueo)
  })
}
