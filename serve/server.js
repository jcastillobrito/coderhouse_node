const http = require('http')

const server = http.createServer((peticion,respuesta)=>{
    respuesta.end('Hola Mundo')
})

const connectedServer = server.listen(8080,()=>{
    console.log('Servidor corriendo en el puerto'+ connectedServer.address().port)
})