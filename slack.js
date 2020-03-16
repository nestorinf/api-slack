'use strict'
const { SLACK_TOKEN } = require('./config')
const {WebClient} = require('@slack/web-api')
const web         = new WebClient(SLACK_TOKEN)

module.exports = {web}