'use strict'
const express = require('express')
const app = express()
const {WebClient} = require('@slack/web-api')
const SLACK_TOKEN = 'xoxb-642122684338-989291581235-ivj5j7rtl0zNnuNEREGRlTZo'
const bodyParser = require('body-parser')
const web = new WebClient(SLACK_TOKEN)
const routes = require('./network/index')
const slack = routes(web)
// parse application/json
app.use(bodyParser.json())

app.use('/api-slack',slack)

app.listen(4000,() => console.log('Service On SLACK API'))