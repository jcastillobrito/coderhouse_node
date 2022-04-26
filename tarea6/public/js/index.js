
const socket = io()

function submitForm(event)
    {
        event.preventDefault();
        var titulo      = document.getElementById("title");
        var precio      = document.getElementById("price");
        var thumbnail   = document.getElementById("thumbnail");

        let nodo = {'title': titulo.value,'price': precio.value,'thumbnail': thumbnail.value}
        
        socket.emit('notificacion',nodo)
    }

    socket.on('mi mensaje', (data)=>{

        $('#table-body').html("");

        
        data.forEach((element,index) => 
            {
                const item= '<tr> <td>'+element.title+'</td> <td>'+element.price+'</td> <td>'+element.thumbnail+'</td> </tr>';

                if(index ==0)
                     $('#table-body').html(item);
                else
                $('#table-body tr:last').after(item);

            });
        

    })

/*
socket.on('mi mensaje', (data)=>{
    console.log(data)
})



    btn.addEventListener('click', params=>{

        let value = inputMensaje.value
        socket.emit('mensaje',value)

    })

socket.on('mi mensaje',data=>{

    var li = document.createElement("li");
    li.appendChild(document.createTextNode(data));
    parrafo.appendChild(li);
    
}) */
