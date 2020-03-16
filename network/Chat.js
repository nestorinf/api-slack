'use strict'
const Router = require('express').Router()
const {web} = require('../slack')

Router.post('/postMessageChannel', postMessageChannel)

async function postMessageChannel (req,res) {
    web.users.identity
    const channel = req.body.channel
    const message = req.body.message
    try {
        await web.chat.postMessage({
                text:message,
                channel:channel,
        })
        res.status(200).send({error:false,ok:true})
    } catch (error) {
        console.log(error)
    }
}

module.exports =  Router

