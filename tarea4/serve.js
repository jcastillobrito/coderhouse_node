const { application } = require('express')
const express = require('express')
const { Router } = express

const LogicaImport = require('./LogicaApi.js')


const app       = express()
const router    = Router()
app.use(express.json())
app.use(express.urlencoded({extended: true}))



let logic = new  LogicaImport(); 

// todos los productos
router.get('/',(req,res)=>{
    res.send(logic.getProductos())
})

//producto en particular
router.get('/:id',(req,res)=>{
    res.send(logic.getProducto(req.params.id))
})

//crear nuevo producto
router.post('/:version',(req,res)=>{

    console.log(req.body)
    console.log(req.params)
    console.log(req.query)
    res.send(req.body)
    //res.send(logic.store(req.params))
})

app.use('/api/productos',router)




app.listen(8080)