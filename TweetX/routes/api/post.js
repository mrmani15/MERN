const express = require('express')
const router = express.Router()

// @route GET api/router

router.get('/', (req, res) => res.send('Post route'))

module.exports = router