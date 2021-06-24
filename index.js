const express = require('express')
const dotenv = require('dotenv')
const clients = require('./routes/clients')
const admin = require('./routes/admin')
const shopkeepers = require('./routes/shopkeepers')

dotenv.config()

const app = express()
// Middleware section
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.raw())
// routes 
app.use('/api/clients', clients)
app.use('/api/admin', admin)
app.use('/api/shopkeepers', shopkeepers)



app.listen(process.env.PORT, () => {
    console.log(`The Server is Up and running ${process.env.PORT}`)
})