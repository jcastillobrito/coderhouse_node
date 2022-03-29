class Usuario
{
    constructor(nombre,apellido,mascota,libros){

        this.nombre      = nombre;
        this.apellido    = apellido;
        this.mascota     = [mascota];
        this.libros      = [libros]; 
    }

     getFullname(){
        return `${this.nombre} ${this.apellido}`
    }
    addMascota(new_mascota)
    {
        let {nombre,edad} =new_mascota;
        this.mascota.push({nombre: nombre})
        return this.mascota
    }

    countMascota(){
        return this.mascota.length
    }

    addBook(new_book)
    {
        let {nombre,autor}  = new_book
        this.libros.push({nombre: nombre,autor:autor})
        return this.libros

    }

    getBookNames()
    {
        let autores = [];

        this.libros.forEach(element => {
            autores.push(element.autor)
        });

        return autores
    }
 
}

user = new  Usuario('Juan Carlos','Castillo Brito',{nombre :'garfield'},{nombre: 'Sherlocks Holmes',autor: 'Lovecraft'});

console.log(user.addMascota({'nombre':'firulais','edad':2}))
console.log(user.countMascota())
console.log(user.addBook({'nombre':'firulais','autor':'poe'}))
console.log(user.getBookNames())