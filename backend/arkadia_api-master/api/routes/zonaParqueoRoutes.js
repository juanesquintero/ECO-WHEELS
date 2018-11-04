const express = require('express')
const rol = require('../controllers/zonaParqueoController')

const router = express.Router()

router.get('/zonaParqueo/', rol.findAll)
router.post('/zonaParqueo/', rol.create)

module.exports = router
