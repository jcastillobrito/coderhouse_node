class Usuario
{
    constructor(nombre,apellido,mascota,libros){

        this.nombre      = nombre;
        this.apellido    = apellido;
        this.mascota     = mascota;
        this.libros      = libros; 
    }
    
}

user = new  Usuario('Juan Carlos','Castillo Brito',{nombre :'garfield',edad: 2},{nombre: 'Sherlocks Holmes',paginas: 654});

console.log(user)