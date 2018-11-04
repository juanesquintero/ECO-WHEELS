const mongoose = require('mongoose')
const keys = require('../config/keys')

mongoose.Promise = global.Promise

require('../api/models/proyecto')
require('../api/models/paquete')
require('../api/models/historiaDeUsuario')
require('../api/models/rol')
require('../api/models/zonaParqueo')

const db = mongoose.connect(
  keys.mongoURI,
  {
    useNewUrlParser: true,
  },
)

module.exports = db
