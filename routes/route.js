const express = require('express')
const bueiroController = require('../controllers/bueirocontroller')
const router = express.Router()

router.get('/insert', bueiroController.Insert)
router.get('/', bueiroController.SeachAll)

module.exports = router