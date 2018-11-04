const express = require('express')
const historiaDeUsuario = require('../controllers/historiaDeUsuarioController')

const router = express.Router()

router.get('/paquetes/:paqueteId/historiasDeUsuario', historiaDeUsuario.findAll)
router.post('/paquetes/:paqueteId/historiasDeUsuario', historiaDeUsuario.create)
router.put('/historiasDeUsuario/:historiaId', historiaDeUsuario.update)

module.exports = router
