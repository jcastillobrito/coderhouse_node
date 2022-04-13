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
router.post('/',(req,res)=>{

    res.send(logic.store(req.body))
    //res.send(logic.store(req.params))
})

router.put('/',(req,res)=>{

    res.send(logic.update(req.body))
})

router.delete('/:id',(req,res)=>{

    res.send(logic.deleteById(req.params.id))
})

app.use('/api/productos',router)




app.listen(8080)