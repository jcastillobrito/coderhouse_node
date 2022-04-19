const socket = io()

socket.on('mi mensaje', (data)=>{
    console.log(data)
})


    let btn = document.getElementById("btnMensaje")
    let lista =document.getElementById("parrafo") 
    let input = document.getElementById("inputMensaje")


    btn.addEventListener('click', params=>{

        let value = inputMensaje.value
        socket.emit('mensaje',value)

    })

socket.on('mi mensaje',data=>{

    var li = document.createElement("li");
    li.appendChild(document.createTextNode(data));
    parrafo.appendChild(li);
    
})
