const express = require('express');
const app = express();
require('dotenv').config

app.listen(process.env.PORT || 3000, ()=>{
    console.log('Escuchando en el puerto '+ process.env.PORT)
})

app.get('/', (req, res)=>{
    res.send('Si está funcionando correctamente gracias a Dios.')
})