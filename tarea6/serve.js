import express from 'express'
import pug from 'pug'

import LogicaImport from './public/js/LogicaApi.js';

import { Server as HttpServer } from 'http'
import { Server as IOServer } from 'socket.io'




const app = express()
app.set('view engine','pug')
app.use(express.static('public'))

const httpServer = new HttpServer(app)
const io = new IOServer(httpServer)

const logic = new  LogicaImport(); 

app.post('/',(req,res)=>{

    res.render("confirm",{
    ruta                : '/productos/',
    nm_button           : 'Ver Productos'})
})

app.use(express.static('./public'))

app.get('/',(req,res)=>{
    res.render('index')
})

io.on('connection',(socket)=>{
    socket.emit('mi mensaje',logic.getProductos())

    socket.on('notificacion',(nodo)=>
    {
        logic.store(nodo)
        io.sockets.emit('mi mensaje',logic.getProductos())

    })



})





httpServer.listen(3000)