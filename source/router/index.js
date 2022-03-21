const express = require("express");
const router = express.Router();

router.get('/',(req,res)=>{
    res.send("Iniciamos Servidor");
    router.get('/index',(req,res)=>{
        res.render('index.html',{titulo:'Index'})
    });
    router.get('/menu',(req,res)=>{
        res.render('menu.html',{titulo:'Menu'})
    });
    router.get('/Contacto',(req,res)=>{
        res.render('Contacto.html',{titulo:'Acerca de'})
    });
    router.get('*',(req,res)=>{
    res.send("No existe la pagina");
})
})
module.exports=router;