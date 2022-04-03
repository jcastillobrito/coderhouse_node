class Contenedor {

    constructor(name_file = './productos.txt')
    {
        this.name_file = name_file
        this.productos = []

        
    }

    getDataText()
    {
        const fs = require('fs')

        if (!fs.existsSync(this.name_file))  // traigo data solo si el archivo existe, en caso contrario no leo texto
            return false

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
        this.productos.push({id:id_product,title,price,thumbnail})  // agrego un item mas en el array de productos

        this.writeFile(this.productos) // guardo en el archio el array actualizado
        return id_product
    }

    getById(id_search = 0)
    {
        this.getDataText()   
        let indice  = null

        for (let index = 0; index < this.productos.length; index++) 
        {
            if(this.productos[index].id == id_search)    
                {
                    indice = index
                    break;
                }
        }

        return this.productos[indice]
        
    }

    deleteById(id_search = 0)
    {
        this.getDataText()   
        let indice = 0
        let nodo    = this.productos.forEach((item,index,arr)=>{
                
                    if(item.id == id_search)
                       indice =index
                    else
                        return null
            })
        this.productos.splice(indice,1);
        this.writeFile(this.productos) // guardo en el archio el array actualizado

    }
    deleteAll()
    {
        this.getDataText()
        this.productos = []
        this.writeFile(this.productos)
    }

    getAll()
    {
        this.getDataText() // traigo la data almacenada en el archivo en caso de existir
        return this.productos

    }

    arrayIds()
    {

        this.getDataText()
        let array = this.productos;
        let indices = []

        this.productos.forEach((item,index,arr)=>{
            indices.push(item.id)
        })
        return indices
    }

}

module.exports = Contenedor