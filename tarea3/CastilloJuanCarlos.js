const express = require('express');
const ContenedorImport = require('./Contenedor.js')

const app = express();

const PORT = 8080

const server = app.listen(PORT, ()=>{
    console.log('server express')
})

server.on('error',error => console.log(error))

app.get('/', (req,res)=>{
    res.send('Ruta Principal')
})


let content = new  ContenedorImport(); 

app.get('/productos',(req,res)=>{
    res.send(content.getAll())
})

app.get('/productoRandom',(req,res)=>{

    let indices = content.arrayIds()
    let max = indices.length
    let min = 0
    let aleatorio = Math.random() * (max - min) + min
    let IntAleatorio = Math.floor(aleatorio)

    res.send({'random': content.getById(indices[IntAleatorio])});


})



