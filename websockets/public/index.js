const socket = io()

socket.on('mi mensaje', (data)=>{
    console.log(data)
})

socket.emit('notificacion','mensaje recibido gracias por saludar [CLIENTE]')