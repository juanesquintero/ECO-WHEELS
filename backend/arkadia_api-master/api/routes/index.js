const express = require('express')

const proyectoRoutes = require('./proyectoRoutes')
const paqueteRoutes = require('./paqueteRoutes')
const historiaDeUsuarioRoutes = require('./historiaDeUsuarioRoutes')
const rolRoutes = require('./rolRoutes')
const zonaParqueoRoutes = require('./zonaParqueoRoutes')

const router = express.Router()

router.use('/api', proyectoRoutes)
router.use('/api', paqueteRoutes)
router.use('/api', historiaDeUsuarioRoutes)
router.use('/api', rolRoutes)
router.use('/api', zonaParqueoRoutes)

module.exports = router
