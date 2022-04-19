const express = require('express')
const {Server: HttpServer} = require('http')
const {Server: IOServer} = require('socket.io')


const app = express()
const httpServer = new HttpServer(app)
const io = new IOServer(httpServer)

app.use(express.static('./public'))

app.get('/',(req,res)=>{
    res.sendFile('index.html',{root: __dirname})
})

io.on('connection',(socket)=>{
    console.log('Usuario Conectado')
    socket.emit('mi mensaje','Hola nuevo usuario')

    socket.on('notificacion',(info)=>{
        console.log(info)
    })
})


httpServer.listen(3000)