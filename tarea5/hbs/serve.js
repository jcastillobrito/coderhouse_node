const express = require('express')
const { Router } = express
const router    = Router()
const hbs = require('hbs')
const app = express()
app.use(express.urlencoded());
// handlerbars
app.set('view engine','hbs')
hbs.registerPartials(__dirname + '/views/partials');
app.use(express.static('public'))

const LogicaImport = require('./LogicaApi.js')

let logic = new  LogicaImport(); 


app.get('/',(req,res)=>{

    res.render("home",{
        ruta      : '/productos/',
        nm_button : 'Listado Productos',
    })
})



app.post('/',(req,res)=>{

    let productos =logic.store(req.body)
    res.render("confirm",{
    ruta                : '/productos/',
    nm_button           : 'Ver Productos'})
})

app.get('/productos',(req,res)=>{

    let productos = logic.getProductos()
    res.render("productos",{array_productos     : productos,
                            ruta                : '/',
                            nm_button           : 'Ingresar Nuevo producto',})
})


app.use('/productos',router)
app.listen(8080)