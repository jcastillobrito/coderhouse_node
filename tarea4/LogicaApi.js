class LogicaApi
{

        constructor()
        {
            this.productos = [{id:1,title :'nombre',price:1800,thumbnail:'https://www.google.cl'},{id:2,title :'jc',price:1210,thumbnail:'https://www.etc.cl'}]
        }

        getProductos()
        {
            return this.productos;
        }

        getProducto(id_search)
        {
            
            let nodo   =  this.productos.find( element=>{ return element.id == id_search})

            if(nodo)
                return nodo
            else 
                return {error : 'producto no encontrado'}

        }

        store(params)
        {
            console.log(params)
            return

            this.productos.push({id,title,price,thumbnail})

            return this.productos
        }
}

module.exports = LogicaApi