class Contenedor {

    constructor(name_file = './productos.txt')
    {
        this.name_file = name_file
        this.productos = []
    }

    getDataText()
    {
        const fs = require('fs')
        const data = fs.readFileSync(this.name_file, 'utf8')
        
        if(data === '')
            this.productos = []
        else
            this.productos = JSON.parse(data)

    }

    writeFile(array_productos)
    {
        const fs = require('fs')
        fs.writeFileSync(this.name_file,JSON.stringify(array_productos))

    }

    getMaxId()
    {
        let indice = 0

        if(!this.productos)
            return 1

        let nodo    = this.productos.forEach((item,index,arr)=>{
                
            if(item.id > indice)
                   indice = item.id
            })

        return indice++
    }

    save(newProducto)
    {
        let {title,price,thumbnail}  = newProducto
        this.getDataText() // traigo la data almacenada en el archivo en caso de existir
        let id_product               = this.getMaxId() +1  // debe ser siempre el maximo id ( CORREGIR)
        console.log(id_product)
        this.productos.push({id:id_product,title,price,thumbnail})  // agrego un item mas en el array de productos
        this.writeFile(this.productos) // guardo en el archio el array actualizado
        return id_product
    }

    getById(id_search = 0)
    {
        let indice  = null
        let nodo    = this.productos.forEach((item,index,arr)=>{
                
                    if(item.id == id_search)
                           indice = index
                    else
                        return null
            })

        if(indice)
            return this.productos[indice];
        else 
            null
    }

    getAll()
    {
        this.getDataText() // traigo la data almacenada en el archivo en caso de existir
        return this.productos
    }

}

content = new  Contenedor();
//content.getDataText()

content.save({title: 'Sherlocks Holmes',price: 'Lovecraft',thumbnail:'thumnail JC'})
console.log(content.productos)
//console.log(content.save())
//content.getDataText()
//console.log(content.getAll())