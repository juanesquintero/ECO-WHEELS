const express = require('express');
const routes = express.Router()
routes.use(express.json())

routes.use('/usuarios',require('./app/controllers/usuarios'))
routes.use('/ciclas',require('./app/controllers/ciclas'))
routes.use('/estaciones',require('./app/controllers/estaciones'))

module.exports = routes