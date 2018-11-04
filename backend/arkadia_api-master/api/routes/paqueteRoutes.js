const express = require('express')
const paquete = require('../controllers/paqueteController')

const router = express.Router()

router.get('/proyectos/:proyectoId/paquetes', paquete.findAll)
router.post('/proyectos/:proyectoId/paquetes', paquete.create)

router.get('/paquetes/:paqueteId', paquete.findOne)
router.put('/paquetes/:paqueteId', paquete.update)

module.exports = router
