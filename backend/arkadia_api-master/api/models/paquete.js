const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

const Paquete = new Schema(
  {
    nombre: String,
    descripcion: String,
    icono: String,
    proyecto: {
      type: ObjectId,
      ref: 'Proyecto',
      required: true,
    },
  },
  {
    collection: 'sh_paquetes',
    toJSON: { virtuals: true },
  },
)

Paquete.virtual('historiasDeUsuario', {
  ref: 'HistoriaDeUsuario',
  localField: '_id',
  foreignField: 'paquete',
})

module.exports = mongoose.model('Paquete', Paquete)
