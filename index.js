const express = require('express');

const app = express();

app.get('/', (req,res)=>{
    res.json({mesage:"Hello server"})
})

app.listen(3000,()=>{
    console.log('server created successfully...');
})