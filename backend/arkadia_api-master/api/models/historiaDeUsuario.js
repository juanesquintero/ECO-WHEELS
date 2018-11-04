const mongoose = require('mongoose')
const Paquete = mongoose.model('Paquete')
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

const HistoriaDeUsuario = new Schema(
  {
    nombre: String,
    referencia: String,
    paquete: {
      type: ObjectId,
      ref: 'Paquete',
      required: true,
    },
  },
  {
    collection: 'sh_historiasDeUsuario',
    toJSON: { virtuals: true },
  },
)

module.exports = mongoose.model('HistoriaDeUsuario', HistoriaDeUsuario)
