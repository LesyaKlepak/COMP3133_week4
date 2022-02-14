const express = require('express')
var user = require('../model/user')
const router  = express()

router.post('/createuser', (req, res)=>{
    let users = {
        name: 'Lesya',
        email: 'lesyaklepak.georgebrown.ca',
        city: 'Toronto'
    }

    user.create(users).then(function(userdata){
        res.send(userdata)
    })
})
router.get('/test', (req,res)=>{
    res.send("test")
})

module.exports = router