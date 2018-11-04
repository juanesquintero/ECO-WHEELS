const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ZonaParqueo = new Schema(
  {
    nombre: String,
    ubicacion: String,
  },
  { collection: 'ep_zonasParqueo' },
)

module.exports = mongoose.model('ZonaParqueo', ZonaParqueo)
