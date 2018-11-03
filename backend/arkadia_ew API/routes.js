const express = require('express');
const routes = express.Router()
routes.use(express.json())

routes.use('/users',require('./app/controllers/users'))
routes.use('/ciclas',require('./app/controllers/ciclas'))
routes.use('/estaciones',require('./app/controllers/estaciones'))

module.exports = routes