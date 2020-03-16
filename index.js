'use strict'
const express     = require('express')
const app         = express()

const { PORT } = require('./config')
const bodyParser  = require('body-parser')

const routes      = require('./network/index')

// parse application/json
app.use(bodyParser.json())

app.use('/api-slack',routes)

app.listen(PORT,() => console.log('Service On SLACK API'))

/**
 * POST
 * {
        "channel":"UJW3LL5H8",
        "message":"Hola desde la API"
 *  }
 */