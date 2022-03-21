const http = require("http");
const express = require("express");
const app = express();
const path = require("path");
const misRutas = require('./router/index');
const puerto =3000;

//Configuraciones
    //Motor de vistas
    app.set('views engine','ejs')
    app.set('views',path.join(__dirname,'views'));
    app.engine('html',require('ejs').renderFile);

//Recurso publicos
app.use(express.static(path.join(__dirname,'public')));


//router
app.use(misRutas);


app.listen(puerto,()=>{
    console.log("Trabajando servidor");
});
