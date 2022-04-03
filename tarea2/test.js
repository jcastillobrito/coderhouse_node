const ContenedorImport = require('./CastilloJuanCarlos.js')



let content = new  ContenedorImport(); // creacion de objeto


content.save({title: 'PS4',price: '1000',thumbnail:'Consola'})
content.save({title: 'Monitor',price: '200',thumbnail:'Periferico PC'})
content.save({title: 'Teclado',price: '150',thumbnail:'Monitor PC'})



content.deleteById(1)
console.log(content.getById(3))
console.log(content.getAll())
content.deleteAll()