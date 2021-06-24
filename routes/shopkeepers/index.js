const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    let { name } = req.body
    res.send(name)
})

module.exports = router