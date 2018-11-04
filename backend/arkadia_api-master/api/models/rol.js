const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Rol = new Schema(
  {
    nombre: String,
    paquetes: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Paquete',
      },
    ],
  },
  { collection: 'sh_roles' },
)

module.exports = mongoose.model('Rol', Rol)
