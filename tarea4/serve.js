const express = require('express')
const { Router } = express

const app       = express()
const router    = Router()



app.use('/api',router)
app.use('/static',express.static(__dirname + 'public'))

app.get('/',function(req,res){
    res.sendFile(__dirname + '/public/index.html')
})

app.listen(8080)