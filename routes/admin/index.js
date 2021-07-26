const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.send('hello')
})

router.post('/auth/login', (req, res) => {
    const { id, pass } = req.body

})

module.exports = router