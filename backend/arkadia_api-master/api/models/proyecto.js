const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Proyecto = new Schema(
  {
    nombre: String,
    descripcion: String,
    icono: String,
  },
  {
    collection: 'sh_proyectos',
  },
)

module.exports = mongoose.model('Proyecto', Proyecto)
