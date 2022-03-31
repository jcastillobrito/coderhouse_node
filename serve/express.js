const express = require('express');

const app = express();

const PORT = 8080

const server = app.listen(PORT, ()=>{
    console.log('server express')
})

server.on('error',error => console.log(error))

app.get('/', (req,res)=>{
    res.send(' primera ruta get')
})