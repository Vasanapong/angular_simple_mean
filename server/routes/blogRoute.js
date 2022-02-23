const express = require('express')
const router = express.Router()

const { getData } = require('../controllers/blogController')

router.get('/blog',getData)

module.exports = router