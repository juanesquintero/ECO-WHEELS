const express = require('express');
const routes = express.Router()
routes.use(express.json())

routes.use('/usuarios',require('./app/controllers/usuarios'))
routes.use('/ciclas',require('./app/controllers/ciclas'))
routes.use('/estaciones',require('./app/controllers/estaciones'))
routes.use('/zonas',require('./app/controllers/zonas'))
routes.use('/reservas',require('./app/controllers/reservas'))

module.exports = routes