'use strict'
const express = require('express')
const Router = express.Router()

module.exports = (web) => {
    function routes(web) {
        Router.post('/postMessageChannel', async (req,res) => {
            const channel = req.body.channel
            const message = req.body.message
            try {
                await web.chat.meMessage({
                    text:message,
                    channel:channel,
                    
                })
               res.status(200).send({error:false,ok:true,channel})
            } catch (error) {
                console.log(error)
            }
        })
    }
    return {
        routes
    }
}

