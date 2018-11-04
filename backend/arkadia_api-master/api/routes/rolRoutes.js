const express = require('express')
const rol = require('../controllers/rolController')

const router = express.Router()

router.get('/roles/', rol.findOne)
router.post('/roles/', rol.create)

module.exports = router
